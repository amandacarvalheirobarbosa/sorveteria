function validarForm(){
    var usr = document.getElementById("txtUsuario");
    var pwd = document.getElementById("txtSenha");

    if (usr.value == ""){
        alert('O usuário não foi informado.');
        usr.focus();
    }else{
        if (pwd.value == ""){
            alert('A senha não foi definida.');
            pwd.focus();
        }else{
            //enviar o formulário
            document.forms['login'].submit();
        }
    }
}

function limparForm(){
    document.getElementById("txtUsuario").value = "";
    document.getElementById("txtSenha").value = "";
}


function definirEstilo(elem){
    var e = document.getElementById(elem);
    e.style.background = "#87CEEB";
    e.style.color = "#FF000";
}

function removerEstilo(elem){
    var e = document.getElementById(elem);
    e.style.background = "#FFFFFF";
    e.style.color = "#000000";
}