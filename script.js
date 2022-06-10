//Tirando uma cópia de dois Arrays para juntar em um

//Primeiro Array

let pessoaSr = [];

//Segundo Array

let pessoasSp = [];

//Função para inserir pessoas
function inserirPessoas(nome){
    return nome;
}

//Inserindo pessoas no primeiro e segundo Array

pessoaSr.push(inserirPessoas("José"));
pessoaSr.push(inserirPessoas("Mariana"));
pessoaSr.push(inserirPessoas("Joaquin"))
pessoasSp.push(inserirPessoas("Mario"));
pessoasSp.push(inserirPessoas("Cláudio"));
pessoasSp.push(inserirPessoas("Vitela"));

//Tirando cópia dos Arrays e juntando em um só Array

let pessoasT = [...pessoaSr,...pessoasSp];

console.log(pessoaSr);
console.log(pessoasSp);

console.log(pessoasT);