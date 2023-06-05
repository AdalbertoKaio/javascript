var listaUsuarios = []

listaUsuarios = JSON.parse(localStorage.getItem('bdUsuarios'))
if (listaUsuarios == null) {
    listaUsuarios = []
}
console.log(listaUsuarios);

function botaoEntrar() {
    var login = document.getElementById("login").value
    var senha = document.getElementById("senha").value

    var usuarioEncontrado = validarUsuario(login, senha)
    if (usuarioEncontrado == true) {
        alert('Bem vindo ao sistema')
    } else {
        alert('VERIFIQUE SEU USUÁRIO E SENHA OU SE CADASTRE')
    }
}

function validarUsuario(login, senha) {
    //for (var i in listaUsuarios) {
    var encontrado = false
    listaUsuarios.forEach( item => {
        if (item.usuario == login && item.senha == senha) {
            encontrado = true
        }
    })
    return encontrado
}

function botaoCadastrar() {
    location.href = 'ex025.html'
}