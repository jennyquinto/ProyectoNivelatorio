
const btnEditar = document.getElementById('editar');
const editarForm = document.getElementById('formularioUsuario');
const txtNombre = document.getElementById('name');
const txtApellido = document.getElementById('apellidos');
const txtEmail = document.getElementById('email');
const txtContraseña = document.getElementById('password');
const txtUsuario = document.getElementById('typoUser');
const txtImagen = document.getElementById('imagen');
const txtFrase = document.getElementById('Frase');
const btnGuardar = document.getElementById('btnGuardar');
const pageAdmin = document.getElementById('pageAdmin');

const url = 'https://proyecto-nivelatorio.vercel.app/users';

const datosUsuario = async (url) => {
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos;

    } catch (error) {
        console.log(error);
        return null
    }
};

const editarInfo = (arrayDatosUsuarios) => {
    formularioUsuario.classList.remove("ocultar");
    const idUser = JSON.parse(sessionStorage.getItem('usuarioId'));
    const user = arrayDatosUsuarios.find(element => element.id === idUser);
    txtNombre.value = user.name;
    txtApellido.value = user.apellidos;
    txtEmail.value = user.email;
    txtContraseña.value = user.password;
    txtUsuario.value = user.typoUser;
    txtImagen.value = user.imagen;
    txtFrase.value = user.Frase;
    console.log(user);
    renderCards(user);
}
btnEditar.addEventListener('click', async () => {
    const dataUsuario = await datosUsuario(url);
    editarInfo(dataUsuario);
});


btnGuardar.addEventListener('click', async (e) => {
    e.preventDefault();
    const users = await datosUsuario(url);
    const idUser = JSON.parse(sessionStorage.getItem('usuarioId'));
    const user = users.find(item => item.id === idUser);
    console.log(user);
    id = user.id;
    console.log(id);
    try {
        const objeto = {
            ...user,
            name: txtNombre.value,
            apellidos: txtApellido.value,
            email: txtEmail.value,
            password: txtContraseña.value,
            typoUser: txtUsuario.value,
            imagen: txtImagen.value,
            Frase: txtFrase.value
        }
        const URL_USER = `${url}/${objeto.id}`
        console.log(URL_USER);
        await fetch(URL_USER, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objeto)
        }
        )
    } catch (error) {
        console.log(error);
    }
});


//card
const renderCards = (user) => {
    const contenedorInfoUser = document.getElementById('infoUsuario');
    const contenedorAvatar = document.getElementById('avatarUsuario');
    const contenedorImagenDerecha = document.getElementById('imagenDerecha');
    const contenedorFrase = document.querySelector('.fraseSign');
    contenedorImagenDerecha.src = user.imagen;
    contenedorAvatar.src = user.imagen;
    contenedorFrase.innerHTML = '';
    contenedorInfoUser.innerHTML = '';
    contenedorInfoUser.innerHTML = `
    <h3 class="nombreUsuario">${user.name}</h3>
    <h3 class="nombreUsuario">${user.apellidos}</h3>
    <h3 class="nombreUsuario">${user.email}</h3>
    <h3 class="nombreUsuario">${user.typoUser}</h3>
    <p class="frase">${user.Frase}</p>    
    `
    contenedorFrase.innerHTML = `
    <h2>"${user.Frase}"</h2>
                        <div class="fraseSignBtn">
                            <div>
                                <h3>${user.name} ${user.apellidos}</h3>
                                <p>Founder,Catalog</p>
                                <p>Web Design Agency</p>
                            </div>
                            <div class="action">
                                <figure class="estrella"> <img src="../imagen/star.png" alt="star" class="star">
                                </figure>

                                <div class="btnFecha">

                                    <button class="FlechaBtn1"><img src="../imagen/flechaizq.png" class="flecha"
                                            alt=""></button>
                                    <button class="FlechaBtn2"><img src="../imagen/flechaderecha.png" class="flecha"
                                            alt=""></button>
                                </div>
                            </div>
                        </div>
    `
};

document.addEventListener('DOMContentLoaded', async () => {
    const users = await datosUsuario(url);
    const idUser = JSON.parse(sessionStorage.getItem('usuarioId'));
    const usuario = users.find(element => element.id === idUser);
    if(usuario.typoUser==="cliente"){
        btnEditar.classList.remove('ocultar');
        pageAdmin.classList.add('ocultar')
    }
    renderCards(usuario);
})

