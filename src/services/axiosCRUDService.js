import axios from "axios";

/**
 * Método de Login
 * @param { string } email 
 * @param { string } password 
 */
export const login = (email, password) => {
    let body = {
        email: email,
        password: password
    }

    return axios.post('https://reqres.in/api/login', body, {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });
}

// Obtain all users 
export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users', {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });
}

// Obtain all paged users 
export const getAllPagedUsers = (page) => {
    return axios.get(`https://reqres.in/api/users?page=${page}`, {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });
}


// Obtain User by id
export const getUserByID = (id) => {
    return axios.get(`https://reqres.in/api/user/${id}`, {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });
}

//Create User
export const createUser = (name, job) => {
    let body = {
        name: name,
        job: job
    }

    return axios.post('https://reqres.in/api/users', body, {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });
}

//Update User
export const updateUserByID = (id, name, job) => {
    let body = {
        name: name,
        job: job
    }

    return axios.put(`https://reqres.in/api/users/${id}`, body, {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });
}

//Delete User
export const deleteUserByID = (id) => {
    return axios.delete(`https://reqres.in/api/user/${id}`, {
        headers: {
            'x-api-key': 'reqres-free-v1'
        }
    });
}
