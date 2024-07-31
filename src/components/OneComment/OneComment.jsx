import "./OneComment.css"
import { useState } from "react";
import plusbtn from "../../assets/images/icon-plus.svg";
import minusbtn from "../../assets/images/icon-minus.svg";
import replay from "../../assets/images/icon-reply.svg";
import deleteIcon from "../../assets/images/icon-delete.svg";
import avatar from "../../assets/images/avatars/image-juliusomo.png";



export default function OneComment(props) {
  const [counter, setCounter] = useState(0);
  const [replayClicked, setReplayClicked] = useState(false);
  const [commentContent, setCommentContent] = useState("");

  function Increment() {
    setCounter(counter + 1);
  }

  function Decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function deletePost(event) {
    props.deletePostFromArray(event.target.id);
    console.log(event.target.id);
  }

  function userName() {
    return "juliusomo"
  }

  function handleReplay() {
    setReplayClicked(true)
  }

  function sendComment(event) {
    //console.log(event.target.getAttribute("myId"));
    const postId = event.target.getAttribute("myid")
    const sentCommentContent = commentContent
    props.addComment(postId, sentCommentContent)
    setCommentContent("")
    setReplayClicked(false)
  }

  function handleOnChange(event) {
    setCommentContent(event.target.value)
  }

  return (
    <>
      <div className="notDiv">
        <div className="leftDiv">
          <img onClick={Increment} className="plusBtn" src={plusbtn} alt="" />
          <p className="number">{counter}</p>
          <img onClick={Decrement} className="minusBtn" src={minusbtn} alt="" />
        </div>
        <div className="rightDiv">
          <div className="topDiv">
            <div className="idDiv">
              <img className="avatar" src={props.avatar} alt="" />
              <h5>{props.name}</h5>
              <label>{props.time}</label>
            </div>
            <div className="iconsDiv">
              {props.name == userName() ? (
                <button
                  id={props.uniqueId}
                  onClick={deletePost}
                  className="deleteDiv"
                >
                  <img src={deleteIcon} alt="" />
                  Delete
                </button>
              ) : null}

              <button
                disabled={replayClicked}
                className="reply"
                onClick={handleReplay}
              >
                <img src={replay} alt="" />
                Replay
              </button>
            </div>
          </div>
          <div className="textDiv">
            <p>{props.text}</p>
          </div>
        </div>
      </div>

      {replayClicked == true ? (
        <div id="myComment">
          <img id="myAvatar" src={avatar} alt="juliusomo" />
          <input
            value={commentContent}
            onChange={handleOnChange}
            type="text"
            id="textarea"
            placeholder="Add a comment"
          />
          <button myid={props.uniqueId} onClick={sendComment} id="send">
            Send
          </button>
        </div>
      ) : null}
    </>
  );
}
