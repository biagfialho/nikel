const nome = "Bianca Fialho";
let nome2 = "";
let pessoa = {
    nome: "Bianca Fialho",
    idade: "38",
    profissao: "Desenvolvedora"
};

let nomes = ["Bianca Fialho", "Carlos Fialho", "Mariana Fialho"];

let pessoas = [
    {
        nome: "Carlos Fialho",
        idade: "22",
        profissao: "Médico"
    },
    {
        nome: "Mariana Fialho",
        idade: "56",  
        profissao: "Atriz"
    },
];

function alternome() {
    nome2 = "Liz Fialho"
    console.log("Valor alterado pela função:")
    console.log(nome2);
}

function recebeealteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado pela função com parâmetro:")
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log(pessoa);
    console.log("Nome:");
    console.log(pessoa.nome);

    console.log("Idade:");
    console.log(pessoa.idade);

    console.log("Profissão:");
    console.log(pessoa.profissao);
}

function adicionarPessoas(pessoa) {
    pessoas.push(pessoa);  
}

function imprimirPessoas() {
    console.log("-----------IMPRIMIR PESSOAS-----------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("Idade:");
        console.log(item.idade);

        console.log("Profissão:");
        console.log(item.profissao);
    }
);
}
imprimirPessoas();  

adicionarPessoas({
    nome: "Pedro Silva",
    idade: "29",
    profissao: "Engenheiro"
});

imprimirPessoas(); 

//console.log(pessoas);

//imprimirPessoa(pessoa);
//imprimirPessoa({ nome: "Ana Fialho", idade: 35, profissao: "Designer" });

//recebeealteraNome("Ana Fialho");
//recebeealteraNome("Carla Fialho");
//alternome();

