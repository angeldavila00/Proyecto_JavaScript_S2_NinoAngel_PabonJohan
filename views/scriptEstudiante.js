function mostrarModalPerfil() {
    const modal = document.querySelector('.modal_general');
    
    modal.innerHTML = `
        <div class="modal_perfil">
            <div class="modal_header">
                <div class="perfil2">
                    <div class="indice_header">
                        <img src="/img/signopesos.png" alt="">
                        <p>USD API</p>
                        <a href="#" class="cerrar_modal" onclick="cerrarModal()">&times;</a>
                    </div>
                    <div class="indice_content2">
                        <div class="i2">
                            <a href="#"><button class="button3">Mi Perfil</button></a>
                            <a href="/index.html"><button class="button3">Configuraciones</button></a>
                            <a href="/index.html"><button class="button3">Cerrar Sesion</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    modal.classList.add('show');
}

function cerrarModal() {
    const modal = document.querySelector('.modal_general');
    modal.classList.remove('show');
    modal.innerHTML = '';
}

//Cerrar modal al hacer clic fuera 
window.onclick = function(event) {
    const modal = document.querySelector('.modal_general');
    if (event.target === modal) {
        cerrarModal();
    }
}



//Funcion de paginas
/*
function irATablero(){
    setTimeout(() => {
        window.location.href = './inicio.html';
    }, 1000);
}

function irACursos(){
    setTimeout(() => {
        window.location.href = '/views/estudiante/cursos.html';
    }, 1000);
}

function irAActividades(){
    setTimeout(() => {
        window.location.href = '/views/estudiante/actividades.html';
    }, 1000);
}

function irAPerfil(){
    setTimeout(() => {
        window.location.href = '/views/estudiante/perfil.html';
    }, 1000);
}
}*/
function volverAtras(){
    window.history.back();
}

function verificacion(){
    alert("Veficación exitosa!");
}

function guardado(){
    alert("Guadado Con exito!");
}

//Tablero
function irATablero(pagina = 'estudiante'){
    let url;
    
    if(pagina === 'estudiante') {
        url = '/views/estudiante/inicio.html';
    } else if(pagina === 'docente') {
        url = './Dinicio.html';
    }else if(pagina == 'administrador'){
        url = '/views/administrador/Ainicio.html'
    }
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}


//CURSOS
function irACursos(pagina = 'inicio'){
    let url;
    
    if(pagina === 'estudiante') {
        url = './cursos.html';
    } else if(pagina === 'docente') {
        url = './estudiantes.html';
    } else if(pagina == 'administrador'){
        url = './cursosE.html';
    }
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}

function irAActividades(pagina = 'inicio'){
    let url;
    
    if(pagina === 'estudiante') {
        url = './actividades.html';
    } else if(pagina === 'docente') {
        url = './estudiantes.html';
    } else if(pagina == 'administrador'){
        url = './FALTA';
    }
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}
function irAPerfil(pagina = 'inicio'){
    let url;
    
    if(pagina === 'estudiante') {
        url = './perfil.html';
    } else if(pagina === 'docente') {
        url = './perfil.html';
    } else if(pagina == 'administrador'){
        url = './perfil.html';
    }
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}

//Funciones botones ver cursos

function VerCursos(pagina = 'inicio'){
    let url;
    
    if(pagina === 'desarrollo') {
        url = './videoJuegos.html';
    } else if(pagina === 'node') {
        url = './node.html';
    } else if(pagina == 'css'){
        url = './css.html';
    }
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}

//examenes 
function VerExamenes(pagina = 'inicio'){
    let url;
    
    if(pagina === 'examen') {
        url = './examenes.html';
    } 
    setTimeout(() => {
        window.location.href = url;
    }, 1000);
}
