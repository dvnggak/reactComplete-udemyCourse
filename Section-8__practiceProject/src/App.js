import React, { useState } from 'react';
import AddUser from './Components/User/AddUser';
import UsersList from './Components/User/UsersList';


function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        {
          id: Math.random().toString(), 
          name: userName,
          age: userAge
        }
      ];
    })
  }

  return (
    <div>
      <AddUser onAddUsers={addUserHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
