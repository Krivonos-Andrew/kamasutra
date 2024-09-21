import style from "./Post.module.css"

const Post = (props) => {

  return (
    <>
      <div className={style.container}>
        {
          props.posts.map(post => (
            <li className={style.wrap} key={post.id}>
              <img src={post.img} alt=""/>
              <p>{post.message}</p>
              <span>Like: {post.likesCount}</span>
            </li>
          ))
        }
      </div>
    </>
  )
}
export default Post
