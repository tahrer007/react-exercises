import axios from 'axios'
import React from 'react'
import { useEffect,useState } from 'react'
import "./style.css"


export default function AddComponent() {
    const [data , setData] = useState(["loading"])
    let source = axios.CancelToken.source();
    let config = { cancelToken: source.token}

    useEffect(() => {
        axios.get("https://api.chucknorris.io/jokes/random",config).then((response) => {
            console.log(response.data)
            setData(response.data.value);
        });
      }, []);
    return (
        <div>
            {data}
        </div>
    )
}
