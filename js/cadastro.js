function verificar() {
    var nome = document.cadastro.txtNome.value
    var email = document.cadastro.txtEmail.value
    var senha = document.cadastro.txtSenha.value
    var telefone = document.cadastro.txtTelefone.value

    if (nome==null || nome=="") {
        alert("Digite um nome válido")
        return false
    } else if (email==null || email==""){
        alert("Digite um email válido")
        return false
    } else if (senha.length < 6) {
        alert("Digite uma senha com pelo menos 6 digitos")
        return false
    }else if (telefone.length < 11) {
        alert("Digite um telefone válido")
        return false
    }
}