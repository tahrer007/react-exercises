import React from "react";

class Copy extends React.Component {

    btnRef= React.createRef();
    txtRef= React.createRef();


    componentDidMount(){
        this.btnRef.current.addEventListener("click",this.copyTxt) ; 
    }
    copyTxt=()=>{ 
        this.txtRef.current.select();
        document.execCommand('copy',false)
   
  

    }
    render(){

        return (
               
            <div>
                <textarea ref={this.txtRef} rows={10}></textarea><br />
                <button ref={this.btnRef}>copy</button>
            </div>


        );
    }


} 

export default Copy ; 