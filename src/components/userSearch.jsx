import React, { useState } from "react";

function UserSearch({ users, onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    return (
        <div className="user-search">
            <input
                type="text"
                placeholder="Buscar por nombre o nickname"
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
}

export default UserSearch;