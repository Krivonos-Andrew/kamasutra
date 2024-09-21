import {useEffect, useState} from "react";

const Users = () => {
  const [, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))

  }, []);
}
export default Users
