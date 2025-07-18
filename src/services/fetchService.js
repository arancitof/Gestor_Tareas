export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users?page=2');
    let data = await response.json();
    console.log('Response: ', response)
    console.log('Status', response.status)
    //Aquí obtenemos un JSON
    return data.data
}


export const login = async ( email, password ) => {
    let body = {
        email: email,
        password: password
    }
    let response = await fetch('https://reqres.in/api/login', {
        method: 'POST',
        //mode: 'no-cors',
        //credentials: 'omit',
        //cache: 'no-cache',
/*   headers: {
            'Content-type': 'application/json'
        }, */
        body: JSON.stringify(body),
    });
    console.log('Response:' , response)
    console.log('Status:' , response.status)
    console.log('OK?:' , response.ok)
    return response.json

}