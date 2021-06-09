const formulario = document.getElementById('formingresar');

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    let correo = formulario['correo'].value;
    let contrasena = formulario['contrasena'].value;

    auth.signInWithEmailAndPassword(correo, contrasena).then(cred => {
        console.log('Ingresó');
        formulario.reset();
        formulario.querySelector('.error').innerHTML = '';
        window.location = "inicio.html";

    }).catch(err => {
        formulario.querySelector('.error').innerHTML = mensajeError(err.code);
        console.log(err)
    });
});

function mensajeError(codigo) {
    let mensaje = '';
    switch (codigo) {
        case 'auth/wrong-password':
            mensaje = "Contraseña incorrecta";
            break;
        case 'auth/user-not-found':
            mensaje = "Usuario no encontrado";
            break;
        /* case 'auth/weak-password':
            mensaje = "Contraseña débil";
            break; */
        default:
            mensaje = "Ocurrió un error";
    }
    return mensaje;
};

/* const formregistro = document.getElementById('formregistro');

formregistro.addEventListener('submit', (e) => {
    e.preventDefault();

    const correo = formregistro['rcorreo'].value;
    const contrasena = formregistro['rcontrasena'].value;

    auth.createUserWithEmailAndPassword(correo, contrasena).then(cred => {
        return db.collection('usuarios').doc(cred.user.uid).set({
            nombre: formregistro['rnombre'].value,
            pais: formregistro['rpais'].value
        }),
        window.location="inicio.html";
    }).then(() => {
        formregistro.reset();
        formregistro.querySelector('.error').innerHTML = '';
    }).catch(err => {
        console.log(err); 
        formregistro.querySelector('.error').innerHTML = mensajeError(err.code);
    });
});  */

const formregistro = document.getElementById('formregistro');

formregistro.addEventListener('submit', (e) => {
    e.preventDefault();

    const correo = formregistro['rcorreo'].value;
    const contrasena = formregistro['rcontrasena'].value;

    auth.createUserWithEmailAndPassword(correo, contrasena).then(cred => {

        return db.collection('usuarios').doc(cred.user.uid).set({
            nombre: formregistro['rnombre'].value,
            pais: formregistro['rpais'].value
        });

    }).then(() => {
        $('#ModalRegistrarse').modal('hide');
        formregistro.reset();
        formregistro.querySelector('.error').innerHTML = '';
    }).catch(err => {
        formregistro.querySelector('.error').innerHTML = mensajeError(err.code);
    });
});

entrarGoogle = () => {

    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function (result) {

        var token = result.credential.accessToken;
        console.log(token);

        var user = result.user;

        $('#ModalRegistrarse').modal('hide');
        formregistro.reset();
        formregistro.querySelector('.error').innerHTML = '';
        window.location="inicio.html";

    }).catch(function (error) {
        console.log(error);
    });

}

