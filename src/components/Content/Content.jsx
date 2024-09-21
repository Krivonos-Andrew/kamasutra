import style from "./Content.module.css"
import Profile from "./Profile/Profile.jsx";
import Dialogs from "./Dialogs/Dialogs.jsx";
import {Route, Routes,} from "react-router-dom";

const Content = (props) => {
  return (
    <>
      <div className={style.wrap}>
        <Routes>
          {}
          <Route path="/profile" element={<Profile
            posts={props.state.profilePage.posts}
            newPostText={props.state.profilePage.newPostText}
            addPost={props.addPost}
            updateNewPostText={props.updateNewPostText}/>}/>
          <Route path="/dialogs" element={<Dialogs/>}/>
        </Routes>

        {/*<Profile/>*/}
        {/*<Dialogs/>*/}
      </div>
    </>
  )
}

export default Content