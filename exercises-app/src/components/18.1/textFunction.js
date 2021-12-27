import React, { useState } from "react";

function TextFunction() {
  let maxLength = 30;
  let randomText =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum";
  
  const [clickBtn, changeBtnText] = useState({
    clicked: false,
    text: "see less",
    pText: randomText,
  });
  

  function changeBtn() {
    console.log("btn  !!! clicked");
    changeBtnText((prevclickBtn) => {
      if (prevclickBtn.clicked) {
        return {
          clicked: false,
          text: "see less",
          pText: randomText,
        };
      } else {

        
          let arr =  randomText.split("") ; 
        return {
          clicked: true,
          text: "see more",
          pText: arr.slice(0, maxLength).join(" "),
        };
      }
    });
  }

  return (
    <div>
      <p className="text"> {clickBtn.pText} </p>
      <button onClick={changeBtn}>{clickBtn.text}</button>
    </div>
  );
}

export default TextFunction;
