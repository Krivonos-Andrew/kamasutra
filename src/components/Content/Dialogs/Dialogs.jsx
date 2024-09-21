import style from "./Dialogs.module.css"
import Users from "./Users/Users.jsx";
import Messages from "./Messages/Messages.jsx";

const Dialogs = (props) => {
  return (<>
      <div className={style.wrap}>
        <Users users={props.users}/>
        <Messages/>
      </div>
    </>

  )
}

export default Dialogs