import style from "./ListPosts.module.css"
import Post from "../Post/Post.jsx";


const ListPosts = (props) => {

  return (
    <>
      <div className={style.wrap}>
        <Post posts={props.posts}/>

      </div>
    </>
  )
}

export default ListPosts