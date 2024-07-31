import React, { useState } from 'react'
import avatar from "../../assets/images/avatars/image-juliusomo.png";
import "./InputComment.css"

export default function InputComment(props) {
    const [inputValue, setInputValue] = useState("");

    function handleOnClick() {
        props.addPost(inputValue);

        setInputValue("");
    }

    function handleOnChange(event) {
        setInputValue(event.target.value);
    }


  return (
    <div id="myDiv">
      <img
        id="myAvatar"
        src={avatar}
        alt="juliusomo"
      />
      <input
        value={inputValue}
        onChange={handleOnChange}
        id="textarea"
        placeholder="Add a post"
      ></input>
      <button onClick={handleOnClick} id="send">
        SEND
      </button>
    </div>
  );
}
