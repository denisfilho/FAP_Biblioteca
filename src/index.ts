import { Book } from "./Book";
import { Library } from "./Library";
import { User } from "./User";

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
                addingBook();
            break
            case 2: 
                //addingUser();
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

function addingBook(){
    const id = parseInt(prompt("Informe o ID do Livro: "));
    const title = prompt("Informe o Título do Livro: ");
    const author = prompt("Informe o Autor do Livro: ");
    const year = parseInt(prompt("Informe o Ano de Publicação do Livro: "));
    const kind = prompt("Informe o Gênero do Livro: ");
    const copies_available = parseInt(prompt("Informe a quantidade de Exemplares Disponíveis: "));

    const new_book = new Book(id, title, author, year, kind, copies_available);
    library.addBook(new_book);
    console.log("Livro adicionado com sucesso!");
    PressioneTecla();
}

function PressioneTecla(){
    const tecla = prompt("Pressione ENTER para continuar...");
    console.clear();
}

Menu();
