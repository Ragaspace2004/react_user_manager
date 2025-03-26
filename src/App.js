import './App.css';
import AddUser from './components/AddUser';
import Login from './components/Login';
import { useState } from 'react';
import './static/Login.css';

// function App() {
//   const [users, setUsers] = useState([]); 

//   const handleAddUser = (userData) => {
//     setUsers([...users, userData]); 
//   };


//   const handleDeleteUser = (index) => {
//     const updatedUsers = users.filter((j, i) => i !== index); 
//     setUsers(updatedUsers);
//   };

//   return (
//     <div className="App">
//       <h1>Add User</h1>
//       <AddUser onAddUser={handleAddUser} />
//       <h2>User List</h2>
//       <ul>
//         {users.map((user, index) => (
//           <li key={index}>
//             <strong>Username:</strong> {user.username}, <strong>Email:</strong> {user.email}
//             <button onClick={() => handleDeleteUser(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

function App() {
  const handleLogin = (loginData) => {
    console.log("User logged in:", loginData);
    // Handle login logic here (e.g., API call)
  };

  return (
    <div className="App">
      <h1>Welcome to User Management</h1>
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;