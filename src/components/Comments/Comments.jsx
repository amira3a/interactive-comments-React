import "./Comments.css";
import { useState } from "react";
import plusbtn from "../../assets/images/icon-plus.svg";
import minusbtn from "../../assets/images/icon-minus.svg";
import avatar from "../../assets/images/avatars/image-juliusomo.png";

export default function Comments(props) {
  const [counter, setCounter] = useState(0);
  const [commentContent, setCommentContent] = useState("");

  function Increment() {
    setCounter(counter + 1);
  }

  function Decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }


  return (
    <>
      {props.Comments.map((comment) => {
        return (
          <div>
            <div className="comDiv">
              <div className="comleftDiv">
                <img
                  onClick={Increment}
                  className="plusBtn"
                  src={plusbtn}
                  alt=""
                />
                <p className="number">{counter}</p>
                <img
                  onClick={Decrement}
                  className="minusBtn"
                  src={minusbtn}
                  alt=""
                />
              </div>
              <div className="comrightDiv">
                <div className="comtopDiv">
                  <div className="comidDiv">
                    <img className="avatar" src={avatar} alt="" />
                    <h5>juliusomo</h5>
                    <label className="you">you</label>
                  </div>
                </div>
                <div className="textDiv">
                  <p>{comment}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
