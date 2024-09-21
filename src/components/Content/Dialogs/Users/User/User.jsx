// import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const User = (props) => {
  return (
    <>
      {
        props.users.map(user => (
          <Link key={user.id} to={`/dialogs/${user.id}`}>
            <li>{user.username}</li>
          </Link>
        ))
      }
    </>

  )
}
export default User