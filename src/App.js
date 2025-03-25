import './App.css';
// import NavBar from './components/NavBar';
 import AddUser from './components/AddUser';

function App() {
   const handleAddUser = (userData) => {
  console.log("User added:", userData);
 };
  return (
    <div className="App">
    <h1>Add User</h1>
    <AddUser onAddUser={handleAddUser} />
    </div>
  );
}

export default App;
