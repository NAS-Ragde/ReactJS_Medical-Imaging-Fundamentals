import React from "react";
import {Model} from "survey-core";
import {Survey} from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "../quizzes.css";
import {quizPattern} from "./json";
import axios from "axios";
import {ANSWERS, STORAGE_KEY} from "../../../../api-services/Api";

function getQuizById(quizzes, quizId) {
    console.error('quizzes', quizzes);
    console.error('quizId', quizId);
    const quiz = quizzes.find(quizData => quizData.quiz.id === quizId);

    if (quiz) {
        return quiz.quiz;
    } else {
        return {
            title: 'test',
            questions: []
        }
    }

    // return quizzes.find(quizData => quizData.quiz.id === quizId).quiz
}

function SurveyComponent({quizzes, quizId, startPage}) {
    const quiz = getQuizById(quizzes, quizId);

    console.log(quiz);

    const json = {
        ...quizPattern,
        title: quiz.title,
        pages: [
            startPage,
            ...quiz.questions.map(question => {
                return {
                    "elements": [{
                        "type": "radiogroup",
                        "name": question.id.toString(),
                        "title": question.text,
                        "choices": question.answers?.map(answer => answer.text),
                        "correctAnswer": question.answers.find(answer => answer.id === question.correctAnswerId).text,
                        "enableIf": "{" + question.id + "} empty"
                    }]
                }
            })
        ]
    }

    const survey = new Model(json);

    async function handleStudentAnswers(quizAnswers) {
        return axios.post(ANSWERS + '?uuid=' + localStorage.getItem(STORAGE_KEY.UUID) + '&username=' + localStorage.getItem(STORAGE_KEY.USERNAME), quizAnswers);
    }

    survey.onComplete.add((sender) => {
        const quizAnswers = Object.entries(sender.data).map(([questionId, quizAnswerText]) => {
            const question = quiz.questions.find(question => question.id === Number(questionId));
            const answerId = question.answers.find(answer => answer.text === quizAnswerText).id;

            return {
                question,
                answerId
            };
        });

        handleStudentAnswers(quizAnswers).then(() => console.log('Answers submitted!'));
    });

    const correctStr = "Correct";
    const incorrectStr = "Incorrect";

    // Builds an HTML string to display in a question title
    function getTextHtml(text, str, isCorrect) {
        if (text.indexOf(str) < 0)
            return undefined;

        return text.substring(0, text.indexOf(str)) +
            "<span class='" + (isCorrect ? "correctAnswer" : "incorrectAnswer") + "'>" + str + "</span>";
    }

    // Compares the correct answer with a given answer and returns `true` if they are equal
    function isAnswerCorrect(question) {
        return question.correctAnswer === question.value;
    }

    // Adds "Correct" or "Incorrect" to a question title
    function changeTitle(question) {
        question.title = question.title + ' ' + (isAnswerCorrect(question) ? correctStr : incorrectStr);
    }

    survey.onValueChanged.add((_, options) => {
        // Change the quesion title when the question value is changed
        changeTitle(options.question);
    });

    survey.onTextMarkdown.add((_, options) => {
        const text = options.text;
        let html = getTextHtml(text, correctStr, true);
        if (!html) {
            html = getTextHtml(text, incorrectStr, false);
        }
        if (html) {
            // Set an HTML string with the "Correct" or "Incorrect" suffix for display
            options.html = html;
        }
    });
    return (

        <Survey model={survey}/>
    );
}

export default SurveyComponent;
