const $botaoConcluir = document.querySelector('#concluir-btn')

//input
const $nomeinput = document.querySelector('#firstname')
const $tamanhopizza = document.querySelector('#tamanhopizza')
const $saborpizza = document.querySelector('#saborpizza')
const $adicionais = document.querySelector('#adicionais')

//evento botao
$botaoConcluir.addEventListener('click', (e)=>{
e.preventDefault()

  const dados ={
    nome: $nomeinput.value,
    tamanhopizza: $tamanhopizza.value,
    saborpizza: $saborpizza.value,
    adicionais: $adicionais.value

  }
    axios.post("http://localhost:3000/create", {
           nome: dados.nome,
           tamanhopizza: dados.tamanhopizza,
           saborpizza: dados.saborpizza,
           adicionais: dados.adicionais

    }).then((pizzas)=>{
        console.log(pizzas.status)
    })

})


