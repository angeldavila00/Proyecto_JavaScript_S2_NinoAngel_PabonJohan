async function FecthDataLogin() {
    const res = await fetch('https://689b682058a27b18087b3817.mockapi.io/usuarios', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    let data = await res.json();
    return data
}

async function login() {
    event.preventDefault()
    const data = await FecthDataLogin();
    const userIn = document.getElementById('usuario').value.trim();
    const passIn = document.getElementById('contrasena').value.trim();

    let usuarioActual = null;

    data.forEach(dato => {
        if (dato.nombre == userIn && dato.contrasena == passIn) {   
            usuarioActual = dato
        }
    });

    if (usuarioActual) {
        localStorage.setItem('usuarioactual', JSON.stringify(usuarioActual));
        if (usuarioActual.tipoUsuario === 'estudiante') {
            window.location.href = './views/estudiante/inicio.html';
            alert("Bienvenido estudiante")
        } else if (usuarioActual.tipoUsuario  === 'docente') {
            window.location.href = './views/docente/Dinicio.html';
            alert("Bienvenido docente")
        } else if (usuarioActual.tipoUsuario  === 'administrador') {
            window.location.href = './views/administrador/Ainicio.html';
            alert("Bienvenido administrador")
        }
        
    } else{
        alert('Usuario o Contraseña incorrectos');
    }

    return usuarioActual;
}
