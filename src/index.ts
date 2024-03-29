import { Book } from "./entities/Book";
import { Library } from "./entities/Library";
import { User } from "./entities/User";
import PromptSync from  "prompt-sync";

const prompt = PromptSync();
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
                addingUser();
            break
            case 3:
                makingLoan();
            break
            case 4:
                makingReturn();
            break
            case 5:
                searchBookByTitle();
            break
            case 6:
            break
            default:
                console.log("Opção Inválida!")
        }
    }while(option!=6)
}

function PressioneTecla(){
    const tecla = prompt("Pressione ENTER para continuar...");
    console.clear();
}

function addingBook(){
    const id = library.GetBooksListSize();
    const title = prompt("Informe o Título do Livro: ");
    const author = prompt("Informe o Autor do Livro: ");
    const year = parseInt(prompt("Informe o Ano de Publicação do Livro: "));
    const kind = prompt("Informe o Gênero do Livro: ");
    const copies_available = parseInt(prompt("Informe a quantidade de Exemplares Disponíveis: "));

    const new_book = new Book(id, title, author, year, kind, copies_available);
    library.addBook(new_book);
    console.log(`Livro adicionado com sucesso! Seu ID é ${id}`);
    PressioneTecla();
}

function addingUser(){
    const id = library.GetUsersListSize();
    const name = prompt("Informe o Nome do Usuário: ");

    const new_user = new User(id,name);
    library.addUser(new_user);
    console.log(`Usuário adicionado com sucesso! Seu ID é ${id}`);
    PressioneTecla();
}

function makingLoan(){
    const id = library.GetLoansListSize();
    const id_book = parseInt(prompt("Informe o ID do Livro: "));
    const id_user = parseInt(prompt("Informe o ID do Usuário: "));
    const loan_date = prompt("Informe a Data do Empréstimo: "); //Pesquisar como trabalhar com datas
    const return_date = prompt("Informe a Data de Devolução: ");

    library.addLoan(id, id_book, id_user, loan_date, return_date);
    PressioneTecla();
}

function makingReturn(){
    const id = parseInt(prompt("Informe o ID do Empréstimo: "));
    library.devolution(id);
    PressioneTecla();
}

function searchBookByTitle(){
    const title = prompt("Informe o Título do Livro: ");
    const books_searched = library.searchBookByTitle(title);
    console.log("Livros Encontrados: ");
    console.log(books_searched);
}
Menu();
