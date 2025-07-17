export const getAllUsers = async () => {
    let response = await fetch('https://reqres.in/api/users?page=2');
    let data = await response.json();
    console.log('Response: ', response)
    console.log('Status', response.status)
    //Aquí obtenemos un JSON
    return data.data
}