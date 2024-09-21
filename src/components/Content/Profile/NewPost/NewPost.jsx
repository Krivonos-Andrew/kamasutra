import style from "./NewPost.module.css"
// import React from "react";

const NewPost = (props) => {


  // let newPostElement = React.createRef()

  let addPost = () => {
    props.addPost()
  }

  let onPostChange = (e) => {
    let message = e.target.value
    props.updateNewPostText(message)
    // console.log(message)

  }

  return (
    <>
      <div className={style.wrap}>
        <h2>My posts</h2>
        <textarea
          className={style.text}
          onChange={onPostChange}
          value={props.newPostText}
        />

        <div className={style.button}>
          <button onClick={addPost}
                  className={style.btn}>Send
          </button>
        </div>
      </div>
    </>
  )
}

export default NewPost