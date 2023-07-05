import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import "../quizzes.css";
import {quizPattern} from "./json";

function getQuizById(quizzes, quizId) {
    return quizzes.find(quizData => quizData.quiz.id === quizId).quiz
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

    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
        console.log(sender.data);

        // retrieve id from questions and send it to backend
        // loop over sender.data and check answer in
    });

    const correctStr = "Correct";
    const incorrectStr = "Incorrect";

    // Builds an HTML string to display in a question title
    function getTextHtml (text, str, isCorrect) {
        if (text.indexOf(str) < 0)
            return undefined;

        return text.substring(0, text.indexOf(str)) +
            "<span class='" +  (isCorrect ? "correctAnswer" : "incorrectAnswer" ) + "'>" + str + "</span>";
    }

    // Compares the correct answer with a given answer and returns `true` if they are equal
    function isAnswerCorrect (question) {
        return question.correctAnswer === question.value;
    }

    // Adds "Correct" or "Incorrect" to a question title
    function changeTitle (question) {
        question.title =  question.title + ' ' + (isAnswerCorrect(question) ? correctStr : incorrectStr);
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
        
        <Survey model={survey} />
    );
}

export default SurveyComponent;
