const URL = "http://localhost:3000/users";

const getData = async (url) => {
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        return data;

    } catch (error) {
        console.log(error);
        return null
    }
}

const printUsers = (array, contenedor) => {
    contenedor.innerHTML = '';
    array.forEach(element => {
        const { id, name, apellidos, email, password, typoUser, imagen, Frase } = element;
        contenedor.innerHTML += `
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${apellidos}</td>
            <td>${email}</td>
            <td>${password}</td>
            <td>${typoUser}</td>
            <td><img src="${imagen}" class="imgUsuario"></td>
            <td><span>"${Frase}"</span></td>
            <td>
                <div class="div__table_action">
                    <button id="btnEditUser" class="btnEditarUser" name=${id}>Editar</button>
                    <button id="btnDeletUser" class="btnEliminarUser" name=${id}>Eliminar</button>
                </div>
            </td>
        </tr>
        `
    });
}


document.addEventListener('DOMContentLoaded', async () => {
    const containerUserInf = document.getElementById('tbody__table__container')
    const users = await getData(URL);
    printUsers(users, containerUserInf);
});


const spanForm = document.getElementById('nombreUser');
const formEditUserInf = document.getElementById('form__main');
const btnEditar = document.getElementById('editar');
const txtNombre = document.getElementById('name');
const txtApellido = document.getElementById('apellidos');
const txtEmail = document.getElementById('email');
const txtContraseña = document.getElementById('password');
const txtUsuario = document.getElementById('typoUser');
const txtImagen = document.getElementById('imagen');
const txtFrase = document.getElementById('Frase');

document.addEventListener('click', async ({ target }) => {
    const users = await getData(URL);
    const user = users.find(element => element.id === parseInt(target.name));
    if (target.classList.contains('btnEditarUser')) {
        formEditUserInf.classList.remove('ocultar')
        spanForm.innerHTML = `Editar información de ${user.name}:`
        txtNombre.value = user.name;
        txtApellido.value = user.apellidos;
        txtEmail.value = user.email;
        txtContraseña.value = user.password;
        txtUsuario.value = user.typoUser;
        txtImagen.value = user.imagen;
        txtFrase.value = user.Frase;
        formEditUserInf.addEventListener('submit', async (e) => {
            e.preventDefault()
            const objUser = {
                ...user,
                name: txtNombre.value,
                apellidos: txtApellido.value,
                email: txtEmail.value,
                password: txtContraseña.value,
                typoUser: txtUsuario.value,
                imagen: txtImagen.value,
                Frase: txtFrase.value
            };
            const URL_USER = `${URL}/${objUser.id}`
            await fetch(URL_USER, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(objUser)
            }
            )
        })
    };
    if (target.classList.contains('btnEliminarUser')) {        
        console.log(target.name);
        let userDeleted = confirm('¿Desea eliminar el usuario');
        if(userDeleted){
            const URL_USER = `${URL}/${parseInt(target.name)}`;
            await fetch(URL_USER,{
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json",
                }
            });
        alert('Usuario eliminado');    
        };
    };
});

