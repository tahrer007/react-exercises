import React from 'react'
import { useState ,useEffect } from 'react'
import axios from 'axios'

export default function SimpleFetch() {

    const [movieData,setMovieData]=useState({
        title : "",
        director:""
    })

   useEffect (() => {
        
         axios.get("https://swapi.dev/api/films/1/")
         .then((response)=>{
            
            setMovieData({
                title : response.data.title,
                director:response.data.director
            });

             console.log(response.data)
         })
        
    }, [])


    return (
        <div>
            <ul>
                <li> movie Title is : {movieData.title}</li>
                <li> movie director is : {movieData.director}</li>
            </ul>
        
        </div>
    )
}
