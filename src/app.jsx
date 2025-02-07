import { useState } from "react";
import { useLocalStorage } from "./components/useLocalStorage";
import UserForm from "./components/UserFrom";
import UserList from "./components/userList";
import SearchBar from "./components/userSearch";

function App() {
    const [users, setUsers] = useLocalStorage("users", []);
    const [searchTerm, setSearchTerm] = useState("");
    const [userToEdit, setUserToEdit] = useState(null);

    const addUser = (user) => setUsers([...users, user]);
    const editUser = (updatedUser) => {
        setUsers(users.map(u => u.nickname === updatedUser.nickname ? updatedUser : u));
    };
    const deleteUser = (nickname) => {
        setUsers(users.filter(user => user.nickname !== nickname));
    };

    return (
        <div>
            <h1>Registro de Usuarios</h1>
            <SearchBar onSearch={setSearchTerm} />
            <UserForm addUser={addUser} editUser={editUser} userToEdit={userToEdit} setUserToEdit={setUserToEdit} />
            <UserList users={users.filter(user => user.nombres.includes(searchTerm))} deleteUser={deleteUser} setUserToEdit={setUserToEdit} />
        </div>
    );
}

export default App;
