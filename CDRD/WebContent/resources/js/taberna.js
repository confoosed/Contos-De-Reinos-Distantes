$(document).ready(function(){

  carregaModais();
  $("#quartoTaverneiro").css("filter","brightness(50%)");
  $("#paredeQuartoT").css("filter","brightness(50%)");
  $("#balcao").css("pointer-events","none");
});





$(document).keydown(function(event) {
  if (event.ctrlKey==true && (event.which == '61' || event.which == '107' || event.which == '173' || event.which == '109'  || event.which == '187'  || event.which == '189'  ) ) {
        event.preventDefault();
      }
});

$(window).bind('mousewheel DOMMouseScroll', function (event) {/*Desabilita o zoom*/
       if (event.ctrlKey == true) {
       event.preventDefault();
       }
});

  /* Sair */
function portaSair(){
    window.location = href="../../index.html";
}


function abrirModal(i){
    $("#taberna").css("filter","brightness(50%)");
    $("#paredeQuartos").css("filter","brightness(50%)");
    $("#taberna").css("pointer-events","none");


    if (i==1) {
      $("#containerModaisTaverneiro").show();
      $("#intTaverneiro").show();
      $("#taverneiro").show();
      $("#portaQuarto").css("pointer-events","none");
    }
    if (i==2) {
      $("#containerModaisBardo").show();
      $("#intBardo").show();
      $('#bardo').show();
      $("#portaQuarto").css("pointer-events","none");
    }
    if (i==3) {
      $("ranking").show();
      $("#portaQuarto").css("pointer-events","none");
    }
    if (i==4) {
      $("#avisos").show();
      $("#portaQuarto").css("pointer-events","none");
    }
    if (i==5) {
      $("#alterarDados").show();
      $("#portaQuarto").css("pointer-events","none");
    }
    carregaModais(i);
}

function carregaModais(i){
  $("#jogoT").hide();
  $("#projetoT").hide();
  $("#equipeT").hide();
  $("#reinosB").hide();
  $("#guerraB").hide();
  $("#criaturasB").hide();

  /*     Taverneiro      */
  if (i==1) {
    /* Sair */
    $(".sairBtn").click(function(){
      $("#intTaverneiro").hide();
      $("#taverneiro").hide();
      $("#jogoT").hide();
      $("#projetoT").hide();
      $("#equipeT").hide();
      $("#containerModaisTaverneiro").hide();
      $("#taberna").css("pointer-events", "auto");
      $("#portaQuarto").css("pointer-events", "auto");
      $("#taberna").css("filter","brightness(100%)");
    });

    /* Jogo */
    $("#jogoT").hide();
    $(".jogoTBtn").click(function(){
      $("#taverneiro").hide();
      $("#projetoT").hide();
      $("#equipeT").hide();
      $("#jogoT").show();
    });

    /* Projeto */
    $("#projetoT").hide();
    $(".projetoTBtn").click(function(){
      $("#taverneiro").hide();
      $("#jogoT").hide();
      $("#equipeT").hide();
      $("#projetoT").show();
    });

    /* Equipe */
    $("#equipeT").hide();
    $(".equipeTBtn").click(function(){
      $("#taverneiro").hide();
      $("#projetoT").hide();
      $("#jogoT").hide();
      $("#equipeT").show();
    });
  }
  /*     Bardo      */
  if (i==2) {
      /* Sair */
      $(".sairBtn").click(function(){
        $("#intBardo").hide();
        $("#bardo").hide();
        $("#reinosB").hide();
        $("#guerraB").hide();
        $("#criaturasB").hide();
        $("#containerModaisBardo").hide();
        $("#taberna").css("pointer-events", "auto");
        $("#portaQuarto").css("pointer-events", "auto");
        $("#taberna").css("filter","brightness(100%)");

      });

      /* Reinos */
      $("#reinosB").hide();
      $(".reinosBBtn").click(function(){
        $("#bardo").hide();
        $("#guerraB").hide();
        $("#criaturasB").hide();
        $("#reinosB").show();
      });

      /* Guerra */
      $("#guerraB").hide();
      $(".guerraBBtn").click(function(){
        $("#bardo").hide();
        $("#reinosB").hide();
        $("#criaturasB").hide();
        $("#guerraB").show();
      });

      /* Criaturas Sombrias */
      $("#criaturasB").hide();
      $(".criaturasBBtn").click(function(){
        $("#bardo").hide();
        $("#reinosB").hide();
        $("#guerraB").hide();
        $("#criaturasB").show();
      });
    }
    if (i==3) {
      $("#ranking").show();
    }$(".sairBtn").click(function(){
      $("#ranking").hide();
      $("#taberna").css("pointer-events", "auto");
      $("#portaQuarto").css("pointer-events", "auto");
      $("#taberna").css("filter","brightness(100%)");
  });
    if (i==4) {
      $("#avisos").show();
    }$(".sairBtn").click(function(){
      $("#avisos").hide();
      $("#taberna").css("pointer-events", "auto");
      $("#portaQuarto").css("pointer-events", "auto");
      $("#taberna").css("filter","brightness(100%)");
  });
  /*     Alterar Dados      */
}


function abrirQuartos(){
    $("#bodyTaberna").animate({bottom: "4px"});
    $("#portaQuarto").attr("onclick","fecharQuartos()");
    $("#pisoTaberna").css("filter","brightness(50%)");
    $("#pisoTaberna").css("pointer-events","none");
    $("#paredeSuperior").css("pointer-events","none");
    $("#paredeSuperior").css("filter","brightness(50%)");
    $("#divisoria").css("filter","brightness(50%)");
    $("#portaQuarto").css("filter","brightness(150%)");
    $("#portaQuarto").css("pointer-events","auto");
    $("#quarto").css("filter","brightness(100%)");
    $("#paredeQuarto").css("filter","brightness(100%)");
}
function fecharQuartos(){
  $("#bodyTaberna").animate({bottom: "378px"});
  $("#portaQuarto").attr("onclick","abrirQuartos()");
  $("#pisoTaberna").css("filter","brightness(100%)");
  $("#paredeInferior").css("filter","brightness(100%)");
  $("#pisoTaberna").css("pointer-events","auto");
  $("#paredeSuperior").css("pointer-events","auto");
  $("#paredeSuperior").css("filter","brightness(100%)");
  $("#portaQuarto").css("filter","brightness(100%)");
  $("#quarto").css("filter","brightness(50%)");
  $("#paredeQuarto").css("filter","brightness(50%)");

}

$(function(){
	$.ajax({
		type: "POST",
		url: PATH + "ValidarSessao",
		data: "p=1",
		success: function (usuario) {
			if (usuario.login!=null){
				usuarioLogado = new Object();
				usuarioLogado.id = usuario.id;
				usuarioLogado.login = usuario.login;
				usuarioLogado.email = usuario.email;
				usuarioLogado.nome = usuario.nome;
				usuarioLogado.nascimento = usuario.nascimento;
				buscaAdmParaEditar(usuarioLogado.id);
			} else {
				sair();
			}	
		},
		error: function (info) {
			sair();
		}
	});
});

buscaJgrParaEditar = function(id){
	  $.ajax({
		  type: "POST",
		  url: PATH + "BuscarUsuario",
		  data: "id="+id,
		  success: function(usuario){
			  $("#altId").val(usuario.id);
			  $("#altNome").val(usuario.nome);
			  $("#altEmail").val(usuario.email);
			  $("#altNascimento").val(usuario.nascimento);
			  $("#altLogger").val(usuario.login);
			  $("#altVelhaSenha").val("");
			  $("#altNovaSenha").val("");
			  $("#altConfSenha").val("");
		  },
			error: function(rest){
				alert("Erro ao encontrar o usuário a ser alterado.");
			}
			});
};

//deixausuario alterado
alteraUsuario = function(){
		var nome = document.frmadminedit.txtaltnome.value;
		var email = document.frmadminedit.txtaltemail.value;
		var nascimento = document.frmadminedit.dtealtnascimento.value;
		var login = document.frmadminedit.txtaltlogin.value;
		var senhaatual = document.frmadminedit.pwdaltsenhaantiga.value;
		var novasenha = document.frmadminedit.pwdaltnovasenha.value;
		var confsenha = document.frmadminedit.pwdaltconfsenha.value;
		if((senhaatual=="")||(novasenha=="")||(nome=="")||(email=="")||(nascimento=="")){
			alert("Nada vazio, bro.");
		} else if (novasenha!=confsenha){ 
			alert("Repete as senhas, bro.");
		} else {
			$.ajax({
				type: "POST",
				url: PATH + "AlterarUsuario",
				data: $("#editarConta").serialize(),
				success: function (msg) {
					alert(msg.msg);
					if(!msg.erro)
						carregaPagina();
				},
				error: function (info) {
					alert("Erro ao alterar os dados: "+ info.status + " - " + info.statusText);		   
				}
			});
		}
};
