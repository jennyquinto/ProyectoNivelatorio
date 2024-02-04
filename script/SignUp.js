const url = 'https://proyecto-nivelatorio.vercel.app/users';

const formNewUser = document.getElementById('formSignUp');


formNewUser.addEventListener('submit', async (e) => {
    e.preventDefault();
    const objNewUser = {        
        "name": formNewUser.elements['nombre'].value,
        "apellidos": formNewUser.elements['apellido'].value,
        "email": formNewUser.elements['email'].value,
        "password": formNewUser.elements['password'].value,
        "typoUser": formNewUser.elements['cuenta'].value,
        "imagen": formNewUser.elements['imagen'].value,
        "Frase": formNewUser.elements['frase'].value
    };
    await fetch(url,{
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(objNewUser)
    }
    );
    // document.location.href="/index.html";
    window.location.href = "/index.html";
});
