import {CHAPTERS, STORAGE_KEY} from "./Api";
import {ApolloClient, gql, InMemoryCache, useQuery} from "@apollo/client";
import Content from "../screens/components/Content/Content";
import React from "react";
 export default async function fetchContent() {

     const CHAPTER_CONTENT_QUERY = gql`
     
     type Content {
        id: string
        title: string
        text: string
        parentContentId: string
     }
     
     type Chapter {
        id: string
        title: string
        contents: [Content!]
     }
     
     type ChapterDto {
            chapter: Chapter,
            completed: boolean,
    }

      type Query {
        chapters: [ChapterDto!]!
      }
    `;

     const client = new ApolloClient({
         link: CHAPTERS + '?uuid=' + localStorage.getItem(STORAGE_KEY.UUID) + '?username=' + localStorage.getItem(STORAGE_KEY.USERNAME),
         cache: new InMemoryCache()
     });


     const { loading, error, data } = await useQuery(CHAPTER_CONTENT_QUERY, { client });

     if (loading) {
         return <p>Loading...</p>;
     }

     if (error) {
         return <p>Error occurred.</p>;
     }

     console.log(data);

     // const { chapter, content } = data;
     //
     // const chapterContent = {
     //     chapter_id: chapter.id,
     //     chapter_title: chapter.title,
     //     content_id: content.id,
     //     content_title: content.title,
     //     content_text: content.text,
     // };
     //
     // return <Content chapterContent = {chapterContent}/>
     return [];
}

