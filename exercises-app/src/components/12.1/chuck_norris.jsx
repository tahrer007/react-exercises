import React from "react";
import Catagories from "./Catagories";
import axios from "axios"

class Chuck_norris extends React.Component {
    state = {
        randomJoke :"",
    };

    getJoke = async()=>{
        const response = await axios.get('https://api.chucknorris.io/jokes/random') ;
        this.setState({
            randomJoke :response.data.value,
        })
    }


    render() {
        return (
         <div>
            
             <div className="randomJoke">
             <button onClick={this.getJoke}> get random joke 🤣🤣 </button>
                    < br/> {this.state.randomJoke}
             </div>
            <Catagories />
            
         </div>
        )
      }
    }
    export default Chuck_norris;
