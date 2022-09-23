const txtEmail = document.getElementById('email');
const txtPassword = document.getElementById('password');
const btnSing = document.getElementById('sign');
const form = document.getElementById('form');

let arrayDatosUsuarios = [];

const url = 'http://localhost:3000/users';

const datosUsuario = async () => {
    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        arrayDatosUsuarios = datos;
    } catch (error) {
        console.log(error);
        return null
    }
};
datosUsuario();

const signIn = (event) => {
    event.preventDefault();
    const email = txtEmail.value;
    const password = txtPassword.value;
    if ((email === '') || (password === '')) {
        if ((email === '') && (password !== '')) {
            alert('por favor llene el email')
        }
        else if ((email !== '') && (password === '')) {
            alert('por favor llene la contraseña')

        } else {

            alert('Por favor rellene los campos');
        }
    }
    if ((email !== '') && (password !== '')) {
        const usuario = arrayDatosUsuarios.find(element => element.email === txtEmail.value);
        if (!usuario) {
            return alert('El email ingresado no existe');
        }
        if (txtPassword.value === usuario.password) {
            window.location.href = "./pages/home.html";
            alert(`¡Bienvenid@! ${(usuario.name).toUpperCase()}`);
            console.log(usuario);
            sessionStorage.setItem('usuarioId', JSON.stringify(usuario.id));
            // if (usuario.typoUser === 'admin') {
            //     cargarDinero();
            // } else {
            //     retirarDinero();
            // }
        } else {
            return alert('Por favor verifique la contraseña ingresada');

        }

    }

};

btnSing.addEventListener('click', signIn);
