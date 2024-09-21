import style from "./Sidebar.module.css"
import {NavLink} from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className={style.wrap}>
        <nav>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/dialogs">Messages</NavLink>
          <NavLink to="/news">News</NavLink>
          <NavLink to="/music">Music</NavLink>
          <NavLink to="/settings">Settings</NavLink>
        </nav>
      </div>

    </>)
}

export default Sidebar