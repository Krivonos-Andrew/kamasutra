import Description from "./Description/Description.jsx";
import NewPost from "./NewPost/NewPost.jsx";
import ListPosts from "./ListPosts/ListPosts.jsx";

const Profile = (props) => {
  return (
    <>
      <div>
        <img
          src="https://avatars.mds.yandex.net/i?id=423098ad090e0ab751f1ebeef408125a473db425-9283819-images-thumbs&n=13"
          alt="fone"/>
      </div>
      <Description/>
      <NewPost
        newPostText={props.newPostText}
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}/>
      <ListPosts posts={props.posts}/>
    </>
  )
}

export default Profile