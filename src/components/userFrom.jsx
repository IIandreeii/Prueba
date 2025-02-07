import { useState } from "react";
import PokemonSelect from "./pokemonSelect";

function UserForm({ addUser, editUser, userToEdit, setUserToEdit }) {
    const [user, setUser] = useState(userToEdit || {
        nombres: "", apellidos: "", nickname: "", correo: "", contraseña: "",
        fechaNacimiento: "", telefono: "", pokemon: ""
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        userToEdit ? editUser(user) : addUser(user);
        setUserToEdit(null);
        setUser({ nombres: "", apellidos: "", nickname: "", correo: "", contraseña: "", fechaNacimiento: "", telefono: "", pokemon: "" });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="nombres" value={user.nombres} onChange={handleChange} placeholder="Nombres" required />
            <input name="apellidos" value={user.apellidos} onChange={handleChange} placeholder="Apellidos" required />
            <input name="nickname" value={user.nickname} onChange={handleChange} placeholder="Nickname" required />
            <input name="correo" type="email" value={user.correo} onChange={handleChange} placeholder="Correo" required />
            <input name="contraseña" type="password" value={user.contraseña} onChange={handleChange} placeholder="Contraseña" required />
            <input name="fechaNacimiento" type="date" value={user.fechaNacimiento} onChange={handleChange} required />
            <input name="telefono" type="tel" value={user.telefono} onChange={handleChange} placeholder="Teléfono" required />
            <PokemonSelect onSelect={(value) => setUser({ ...user, pokemon: value })} />
            <button type="submit">{userToEdit ? "Actualizar" : "Registrar"}</button>
        </form>
    );
}

export default UserForm;
