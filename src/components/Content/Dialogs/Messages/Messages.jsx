import style from "./Messages.module.css"
import Message from "./Message/Message.jsx";

const Messages = () => {
  return (
    <>
      <div className={style.wrap}>
        <Message/>
      </div>
    </>
  )
}

export default Messages