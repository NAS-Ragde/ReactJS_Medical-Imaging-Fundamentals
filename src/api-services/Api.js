import React from "react";
export const LOGIN = 'http://localhost:8080/students/login';
export const STUDENTS_REGISTRATION = 'http://localhost:8080/students/register';
export const CHAPTERS = 'http://localhost:8080/chapters';
export const QUIZZES = 'http://localhost:8080/quizes';
export const QUIZ = 'http://localhost:8080/quizes';

export const STORAGE_KEY = {
    UUID: 'uuid',
    USERNAME: 'username'
};

export const isLoggedIn = localStorage.getItem(STORAGE_KEY.UUID);
