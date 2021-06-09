const salir = document.getElementById('salir');

salir.addEventListener('click', (e) => {
    e.preventDefault();

    auth.signOut().then(() => {
        alert('El usuario ha salido');
        window.location = "index.html";
    });
});