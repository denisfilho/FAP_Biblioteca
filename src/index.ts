import { Book } from "./Book";
import { Library } from "./Library";

const prompt = require("prompt-sync")();
const library = new Library();

function Menu(){
    let option;
    do{
        console.log("1 - Adicionar Livro");
        console.log("2 - Registrar Usuário");
        console.log("3 - Realizar Empréstimo");
        console.log("4 - Realizar Devolução");
        console.log("5 - Buscar Livro por Título");
        console.log("6 - Sair")

        console.log("");
        option = parseInt(prompt("Informe uma opção: "));

        switch(option){
            case 1:
                //addingBook();
            break
            case 2: 
            break
            case 3:
            break
            case 4:
            break
            case 5:
            break
            case 6:
            break
            default:
                console.log("Opção Inválida!")
        }
    }while(option!=6)
}

Menu();
