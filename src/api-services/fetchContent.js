// import axios from 'axios';
// import {CHAPTERS, STORAGE_KEY} from "./Api";
//
// function fetchChapterContent() {
//
//     const url = CHAPTERS + '?uuid=' + localStorage.getItem(STORAGE_KEY.UUID) + '?username=' + localStorage.getItem(STORAGE_KEY.USERNAME);
//
//     return axios
//         .get(url)
//         .then(response => {
//             const { data } = response;
//             const chapter = data[0];
//
//             return {
//                 chapter_id: chapter.id,
//                 chapter_title: chapter.title,
//                 content_title: chapter.contents[0].title,
//                 content_text: chapter.contents[0].text,
//             };
//         })
//         .catch(error => {
//             console.error(error);
//             throw new Error('Failed to fetch chapter content');
//         });
// }
//
// export default fetchChapterContent();
