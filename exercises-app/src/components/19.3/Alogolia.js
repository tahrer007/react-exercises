import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'

export default function Alogolia() {

    const [movieData,setMovieData]=useState({
        title : "",
        director:""
    })

   useEffect (() => {
        
         axios.get("https://hn.algolia.com/api/v1/search?query={YOUR QUERY}")
         .then((response)=>{
            
            setMovieData({
                title : response.data.title,
                director:response.data.director
            });

             console.log(response.data)
         })
        
    }, [])
    search=()=>{

    }

    return (
        <div>
            <label>
    search:
    <input type="text" name="search" placeholder='sreach....' />
  </label>
  <input type="submit" value="click" onClick={search} />
        </div>
    )
}
