const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirmation = document.getElementById("password-confirmation")


form.addEventListener("submit", (event) =>{
    event.preventDefault();

    
})

function checkInputUsername(){

}
function atualizarCidades() {
    var estado = document.getElementById("estado").value;
    var cidadeSelect = document.getElementById("cidade");

    // Limpa as opções de cidades
    cidadeSelect.innerHTML = "<option value=''>Selecione uma cidade</option>";

    // Define as cidades com base no estado selecionado
    var cidades = [];

    if (estado === "SP") {
      cidades = ["São Paulo", "Campinas", "Santos", "Ribeirão Preto"];
    } else if (estado === "RJ") {
      cidades = ["Rio de Janeiro", "Niterói", "Cabo Frio", "Campos dos Goytacazes"];
    } else if (estado === "MG") {
      cidades = ["Belo Horizonte", "Uberlândia", "Juiz de Fora", "Ouro Preto"];
    } else if (estado === "ES") {
      cidades = ["Vitória", "Vila Velha", "Cariacica", "Serra"];
    }

    // Adiciona as cidades ao select
    cidades.forEach(function(cidade) {
      var option = document.createElement("option");
      option.value = cidade;
      option.textContent = cidade;
      cidadeSelect.appendChild(option);
    });
  }