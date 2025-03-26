import './App.css';
import AddUser from './components/AddUser';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]); // State to store the list of users

  const handleAddUser = (userData) => {
    setUsers([...users, userData]); // Add the new user to the list
  };

  const handleDeleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index); // Remove user by index
    setUsers(updatedUsers);
  };

  return (
    <div className="App">
      <h1>Add User</h1>
      <AddUser onAddUser={handleAddUser} />
      <h2>User List</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Username:</strong> {user.username}, <strong>Email:</strong> {user.email}
            <button onClick={() => handleDeleteUser(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;