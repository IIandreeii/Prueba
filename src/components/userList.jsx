function UserList({ users, deleteUser, setUserToEdit }) {
    return (
        <ul>
            {users.map((user, index) => (
                <li key={index}>
                    {user.nombres} {user.apellidos} - {user.pokemon}
                    <button onClick={() => setUserToEdit(user)}>Editar</button>
                    <button onClick={() => deleteUser(user.nickname)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
}

export default UserList;
