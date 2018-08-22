/**
 * função que checa o navegador sendo usado, adptando
 * a renderização da imagem conforme navegador
*/
$(document).ready(function(){

    //carregamento das janelas modais
    $("#containerModaisIndex").hide();
    
    var ua = detect.parse(navigator.userAgent);

    if(ua.browser.family == "Chrome"){
        $("html").css("image-rendering","pixelated");
    }else if(ua.browser.family == "Firefox"){
        $("html").css("image-rendering","-moz-crisp-edges");
    }else{
        alert("Infelizmente o navegador " + ua.browser.family + " não é suportado por nossa aplicação. Lamentamos o inconveninete ( ; _ ; ). Atualmente, somente o Chrome e Firefox são suportados.");
    }
    
});

/**
 * função que provê um display às janelas modais, abrindo-o ou 
 * fechando-o
 */

function abrirModal(){
    $("#containerModaisIndex").show();
    carregaModais();
    $("#intPerso").show();
    $("#guard_1").show();  
}

function login(){
	var login = document.frmlogin.txtlogin.value;
	var senha = document.frmlogin.pwdsenha.value;
	if((login=="")||(senha=="")){
		alert("Preencha tudo aí, meu!");
	} else {
		$.ajax({
			type: "POST",
			url: "Login",
			data: "login="+login+"&senha="+senha,
			success: function (msg) {
				if (msg.msg!=null)
					alert(msg.msg);
				else
					window.location.href = msg.url;
			},
			error: function (info) {
				alert("Erro ao tentar login: "+ info.status + " - " + info.statusText);		   
			}
		});
	}
}

function cadastraJgr(){
	if (validaCadastroJgr()){
		$.ajax({
			type: "POST",
			url: "InserirUsuario",
			data: $("#cadastrarJogador").serialize()+"&p=1",
			success: function (msg) {
				alert(msg.msg);
			},
			error: function (info) {
				alert("Erro ao cadastrar um novo jogador: "+ info.status + " - " + info.statusText);		   
			}
		});
	}
}  
//checa se ta tudo certo no cadastro
function validaCadastroJgr(){
    var conf = false;
    console.log($("input[name=pwdsenha]").val());
    if($("input[name=txtnome]").val()!=""){
        if($("input[name=txtemail]").val()!=""){
            if($("input[name=dtenascimento]").val()!=""){
                if($("input[name=txtapelido]").val()!=""){
                    if($("input[name=pwdsenhacad]").val()!=""){
                        if($("input[name=pwdconfsenha]").val()!=""){
                            if($("input[name=pwdsenhacad]").val()==$("input[name=pwdconfsenha]").val()){
                                conf = confirm("Tem certeza que deseja cadastrar um novo jogadorr?");
                            }else{
                                alert("As senhas não coincidem.");
                            }
                        }else{
                            alert("Preencha a validação de senha.");
                            $("input[name=pwdconfsenha]").focus();
                        }
                    }else{
                        alert("Preencha a senha.");
                        $("input[name=pwdsenhacad]").focus();
                    }
                }else{
                    alert("Preencha o nome de usuário do administrador.");
                    $("input[name=txtapelido]").focus();
                }
            }else{
                alert("Preencha a data de nascimento.");
                $("input[name=dtenascimento]").focus();
            }
        }else{
            alert("Preencha o e-mail.");
            $("input[name=txtemail]").focus();
        }
    }else{
        alert("Preencha o nome.");
        $("input[name=txtnome]").focus();
    }
    return conf;
}  

