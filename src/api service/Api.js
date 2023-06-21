import React, {useEffect, useState} from "react";
import axios from "axios";

const baseUrl = 'http://localhost:3000/';

export default function Api() {

    useEffect(() => {
            axios
                .get(baseUrl)
                .then( (response) => {
                    console.log(response.data);
                })
                .catch((error) =>{
                    console.log(error);
                })
    }, []);
}


/*
    const [post, setPost] = useState();
    const [get, setGet] = useState();
    const [remove, setRemove] = useState();
    const [put, setPut] = useState();
 */
