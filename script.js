// Crie um objeto que receba ao menos três propriedades sobre você.

let information ={
    name:"Lidiane",
    yearold:33,
    city:"Nova Iguaçu",
}
console.log(information)

// Adicione uma nova propriedade sem alterar seu objeto inicial.

information.peso =80

// Remova uma propriedade desse objeto.

delete information.name

//Mostre no console todas as propriedades desse objeto.

console.log(information)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro =[
{
    nome:"Juliana",
    idade:30,
    telefone:2199414-23777,
    amigos:["Stefanie", "Kelly", "Flavia", "Lilia", "Nete"]
},
{
    nome:"Lilia",
    idade:7,
    telefone:2191478-5236,
    amigos:["Kelly", "Flavia", "Nete", "Stefanie", "Juliana"],
},
{
    nome:"Nete",
    idade:59,
    telefone:2197618-1126,
    amigos:["Flavia", "Lilia", "Stefanie", "kelly", "Juliana"],
},
{
    nome:"Stefanie",
    idade:33,
    telefone:2199524-6965,
    amigos:["Lilia", "Nete", "Kelly", "Juliana", "Flavia"],
},
{
    nome:"Flavia",
    idade:26,
    telefone:2198524-3658,
    amigos:["Kelly", "Stefanie", "Juliana", "Lilia", "Nete"],
}
]

// Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[0])
console.log(cadastro[2].amigos[0])
console.log(cadastro[3].amigos[0])
console.log(cadastro[4].amigos[4])