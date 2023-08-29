import React from "react";
export const DICOM4CHE_ADDRESS = 'http://localhost:8080';
export const VIEWER_ADDRESS = 'http://localhost:8081';
export const SERVER_ADDRESS = 'http://localhost:8088';
export const LOGIN = SERVER_ADDRESS + '/students/login';
export const STUDENTS_REGISTRATION = SERVER_ADDRESS + '/students/register';
export const CHAPTERS = SERVER_ADDRESS + '/chapters';
export const QUIZZES = SERVER_ADDRESS + '/quizes';
export const QUIZ = SERVER_ADDRESS + '/quizes';

export const STORAGE_KEY = {
    UUID: 'uuid',
    USERNAME: 'username'
};

export const isLoggedIn = localStorage.getItem(STORAGE_KEY.UUID);
