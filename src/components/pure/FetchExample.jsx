import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../../services/fetchService';

const FetchExample = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        obtainUsers();
    }, []);

    useEffect(() => {
        console.table(users);
    }, [users]);


    const obtainUsers = async () => {
        try {
            const response = await getAllUsers();
            console.log('Response: ', response);
            setUsers(users);
        } catch (error) {
            alert(`Error while retreiving the users: ${error}`)
        }
    }


    return (
        <div>
            <h2>
                Users:
            </h2>
            {users.length > 0 ? (
                users.map((user) => (
                    <p key={user.id}>
                        {user.first_name}</p>
                ))
            ) : (
                <p>No hay usuarios disponibles</p>
            )}
        </div>
    );
}

export default FetchExample;
