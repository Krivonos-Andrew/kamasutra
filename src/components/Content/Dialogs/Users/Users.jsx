import style from "./Users.module.css"
import User from "./User/User.jsx";

const Users = (props) => {
  return (
    <>
      <div className={style.wrap}>
        <User users={props.users}/>
      </div>
    </>
  )
}

export default Users