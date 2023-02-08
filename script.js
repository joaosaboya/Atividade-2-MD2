function novaFuncao(){
    console.log("Olá")
}
novaFuncao()

function dizerNome(nome){
    console.log("Meu nome é " + nome)
}

dizerNome("João Saboya")

function sobreMim(nome, idade, estiloMusical){
    console.log("Meu nome é " + nome + "minha idade é " + idade + " e eu gosto de ouvir " + estiloMusical + " .")
}
sobreMim("João", "22" , "Rock")


function euGosto(filme, musica){
    console.log("Meu filme favorito é " + filme + ", e minha musica é " + musica + " .")
}
euGosto("Aranhaversu", "Hurt")

function multiplica(a, b){
    return a * b;
}
console.log(multiplica(3, 3))

let pig = false;

function verificarVerdade(){
    if(pig == true){
        return console.log("é verdadeira");
        }else{
            return console.log("é falsa")
        }
    }
verificarVerdade()