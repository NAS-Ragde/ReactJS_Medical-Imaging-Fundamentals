export const DICOM4CHE_ADDRESS = process.env.REACT_APP_PACS;
export const VIEWER_ADDRESS = process.env.REACT_APP_VIEWER;
export const SERVER_ADDRESS =  process.env.REACT_APP_SERVER;
export const LOGIN = SERVER_ADDRESS + '/students/login';
export const STUDENTS_REGISTRATION = SERVER_ADDRESS + '/students/register';
export const CHAPTERS = SERVER_ADDRESS + '/chapters';
export const QUIZZES = SERVER_ADDRESS + '/quizes';
export const ANSWERS = SERVER_ADDRESS + '/answers';

export const STORAGE_KEY = {
    UUID: 'uuid',
    USERNAME: 'username',
    IS_INITIAL_QUIZ_FINISHED: 'isInitialQuizFinished'
};

export const isLoggedIn = localStorage.getItem(STORAGE_KEY.UUID);