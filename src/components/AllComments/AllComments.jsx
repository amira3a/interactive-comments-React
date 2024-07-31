import "./AllComments.css"
import avatar from "../../assets/images/avatars/image-juliusomo.png";
import avatar1 from "../../assets/images/avatars/image-amyrobson.png";
import avatar2 from "../../assets/images/avatars/image-maxblagun.png";
import avatar4 from "../../assets/images/avatars/image-ramsesmiron.png";
import OneComment from "../OneComment/OneComment"
import InputComment from "../InputComment/InputComment";
import { useState } from "react";
import Comments from "../Comments/Comments";


export default function AllComments() {
  const [data, setData] = useState([
    {
      id: 1,
      avatar: avatar1,
      name: "amyrobson",
      time: "1 month ago",
      text: `Impressive! Though it seems the drag feature could be improved.
              But overall it looks incredible. You've nailed the design and the
              responsiveness at various breakpoints works really well.`,
      Comments: [],
    },

    {
      id: 2,
      avatar: avatar2,
      name: "maxblagun",
      time: "2 weeks ago",
      text: `Woah, your project looks awesome! How long have you been coding
              for? I'm still new, but think I want to dive into React as well
              soon. Perhaps you can give me an insight on where I can learn
              React? Thanks!`,
      Comments: [],
    },

    {
      id: 3,
      avatar: avatar2,
      name: "maxblagun",
      time: "3 weeks ago",
      text: `I want to dive into React as well
              soon. Perhaps you can give me an insight on where I can learn
              React? Thanks!`,
      Comments: [],
    },
    {
      id: 4,
      avatar: avatar4,
      name: "ramsesmiron",
      time: "1 month ago",
      text: `You've nailed the design and the
              responsiveness at various breakpoints works really well.`,
      Comments: [],
    },

    {
      id: 5,
      avatar: avatar1,
      name: "amyrobson",
      time: "1 month ago",
      text: `Impressive! Though it seems the drag feature could be improved.
              But overall it looks incredible. You've nailed the design and the
              responsiveness at various breakpoints works really well.`,
      Comments: [],
    },
  ]);

function deletePostFromArray(DeletedPostId) {
  const ArrayAfterDelete = data.filter((post) => {
    return post.id != DeletedPostId;
  });
  setData(ArrayAfterDelete);
}


  function addPost(post) {
    const newPostObject = {
      id: data.length + 1,
      uniqueId:post.id,
      avatar: avatar,
      name: "juliusomo",
      time: "2 weeks ago",
      text: post,
      Comments: [],
      
    };
    const newArrayOfObjects = [...data, newPostObject]
    setData(newArrayOfObjects);
  }

  function addComment(postId, commentContent) {
    const newArray = data.map((post) => {
      if (post.id == postId) {
        post.Comments.push(commentContent)
      }
      return post;
    })
    setData(newArray);
  }
  
  return (
    <div id="notPage">
      {data.map((post) => {
        return (
          <>
            <OneComment
              key={post.id}
              uniqueId={post.id}
              avatar={post.avatar}
              name={post.name}
              time={post.time}
              deleteIcon={post.deleteIcon}
              delete={post.delete}
              text={post.text}
              deletePostFromArray={deletePostFromArray}
              addComment={addComment}
            ></OneComment>

            {post.Comments.length > 0 ? (
              <Comments Comments={post.Comments}></Comments>
            ) : null}
          </>
        );
      })}

      <InputComment addPost={addPost}></InputComment>
    </div>
  );
}
