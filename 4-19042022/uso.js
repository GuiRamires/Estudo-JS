if(pagina=="formulario.html"){
    document.body.style.backgroundColor="rgb(120,200,150)";
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");

    nome.onblur = ()=>{
        verificarVazio(nome.valeu);
    };

    email.onblur = ()=>{
        verificarVazio(email.valeu);
    };

    cpf.onblur = ()=>{
        verificarVazio(cpf.valeu);
    };

    telefone.onblur = ()=>{
        verificarVazio(telefone.valeu);
    };
}