export const quizPattern = {
    "title": "",
    "showProgressBar": "bottom",
    "showTimerPanel": "top",
    "maxTimeToFinishPage": 1500,
    "maxTimeToFinish": 15000,
    "firstPageIsStarted": true,
    "startSurveyText": "Start Quiz",
    "pages": [],
    "completedHtml": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
    "completedHtmlOnCondition": [
        {
            "expression": "{correctAnswers} == 0",
            "html": "<h4>Unfortunately, none of your answers is correct. Please try again.</h4>"
        },
        {
            "expression": "{correctAnswers} == {questionCount}",
            "html": "<h4>Congratulations! You answered all the questions correctly!</h4>"
        }
    ]
};

export const finalEvaluationStartPage = {
    "elements": [
        {
            "type": "html",
            "html": "Test. <br>You will have 15 seconds for every question and 2 minutes and 30 seconds to end the quiz.<br>Happy <b>Start Quiz</b> to begin."
        },
    ]
}

export const chapterStartPage = {
    "elements": [
        {
            "type": "html",
            "html": "You are about to start a short quiz to evaluate your knowledge about the previous content. <br>You will have 15 seconds for every question and 2 minutes and 30 seconds to end the quiz.<br>Happy <b>Start Quiz</b> to begin."
        },
    ]
}
