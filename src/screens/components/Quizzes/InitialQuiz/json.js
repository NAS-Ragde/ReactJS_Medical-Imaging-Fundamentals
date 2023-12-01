export const quizPattern = {
    "title": "",
    "showProgressBar": "bottom",
    "showTimerPanel": "top",
    "maxTimeToFinishPage": 40,
    "maxTimeToFinish": 200,
    "firstPageIsStarted": true,
    "startSurveyText": "Start Quiz",
    "pages": [],
    "completedHtml": "",
    "completedHtmlOnCondition": []
};

export const chapterStartPage = {
    "elements": [
        {
            "type": "html",
            "html": "<h4>Hi, </h4>You are about to start a short quiz to evaluate your recently gained knowledge from this chapter. <br>You  have 3 minutes and 20 seconds to end the quiz.<br>Click <b>Start Quiz</b> when you feel ready, good luck!"
        },
    ],
}

export const initialQuizStartPage = {
    "elements": [
        {
            "type": "html",
            "html": "<h4>Welcome,</h4>You are about to start a short quiz to evaluate your previous knowledge. <br>You have 3 minutes and 20 seconds to end the quiz.<br>Click <b>Start Quiz</b> when you feel ready, good luck!"
        },
    ],
}
export const onQuizCompleted = {
    "completedHtml": "<h4>Well done!, you got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>" +
        "<p>Tip: Check the content again, and do not forget to have a closer look at the images.</p> "
}
export const initialQuizCompleted = {
    "completedHtml": "<h4>Well done!, you got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>" +
        "<p>Tip: Check the following Chapter:</p> ",
}

export const initialQuizConditionsOnCompleted = {
    "completedHtmlOnCondition": [
        {
            "expression": "{correctAnswers} == 0",
            "html": "<h4>Great effort, but unfortunately none of your answers were correct.</h4> " +
                " <p>Tip: Explore the contents of Chapters 1 to 4 and expand your knowledge with the practical part from Chapter 5.</p>"
        },
        {
            "expression": "{correctAnswers} == {questionCount}",
            "html": "<h4>Congratulations! You answered all the questions correctly!</h4>"+
                "<p>Tip: Explore the application and the practical part from Chapter 5 to reinforce your understanding.</p>"
        }
    ]
}

export const conditionsOnCompleted = {
    "completedHtmlOnCondition": [
        {
            "expression": "{correctAnswers} == 0",
            "html": "<h4>Great effort, but unfortunately none of your answers were correct.</h4> " +
                " <p>Tip: Check the content and support material from this chapter and try again.</p>"
        },
        {
            "expression": "{correctAnswers} == {questionCount}",
            "html": "<h4>Congratulations! You answered all the questions correctly!</h4>"+
        "<p>Tip: I encourage you to explore new chapters and try the practical part to reinforce your knowledge!</p>"
        }
    ]
}
