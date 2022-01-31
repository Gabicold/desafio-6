// Crie um objeto que receba ao menos três propriedades sobre você.
let  info = [{
    nome: "gabriel",
    idade: "17",
    youtuberFav: "Maicon Küster"

}]

// Adicione uma nova propriedade sem alterar seu objeto inicial.
info[0].jogo = "Genshin Impact"
// Remova uma propriedade desse objeto.
delete info[0].youtuberFav
//Mostre no console todas as propriedades desse objeto.
console.log(info)
// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [{
    nome: "gabriel",
    idade: "17",
    telefone: "24 9845641234",
    amigos: ["nicolas", "vanessa","samira","otavio"]
},{
    nome:"José",
    idade:"20",
    telefone: "21 93665632",
    amigos:["gustavo","roberta","francisco","jorge"]
},{
    nome:"Luna",
    idade: "16",
    telefone:"24 95565525" ,
    amigos:["Alice","gusta","anne","norman"]
},{
    nome: "gabriel",
    idade: "17",
    telefone: "24 9845641234",
    amigos: ["nicolas", "vanessa","samira","otavio"]
},{
    nome:"Luna",
    idade: "16",
    telefone:"24 95565525" ,
    amigos:["Alice","gusta","anne","norman"]
}]
// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0], cadastro[1].amigos[1], cadastro[2].amigos[2], cadastro[3].amigos[3], cadastro[4].amigos[3])