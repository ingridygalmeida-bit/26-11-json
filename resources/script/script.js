async function loadData(cep) {
    const RESPONSE = await fetch (`https://viacep.com.br/ws/${cep}/json/`)
    return await RESPONSE.json();
}
let cepDigitado = Number (prompt ("Digite seu CEP: "))
let dados = await loadData(cepDigitado);

console.log(dados)

//mostrando os dados no html
let body = document.querySelector("body");
body.innerHTML = 
`
<div class= "conteiner">
<h1> Busque por CEP </h1>
<ul>
<li>CEP: ${dados.cep}</li>
<li>Logradouro: ${dados.logradouro}</li>
<li>Complemento: ${dados.complemento}</li>
<li>Bairro: ${dados.bairro}</li>
<li>Localidade: ${dados.localidade}</li>
<li>UF: ${dados.uf}</li>
<li>Estado: ${dados.estado}</li>
<li>Região: ${dados.regiao}</li>
<li>DDD:${dados.ddd}</li>
</ul>
</div>

`