import { Book } from "./Book";
import { Loan } from "./Loan";
import { User } from "./User";

export class Library{

    private books: Book[] = [];
    private users: User[] = [];
    private loans: Loan[] = [];

    addBook(new_book:Book){
        this.books.push(new_book);
    }

    addUser(new_user:User){
        this.users.push(new_user);
    }

    addLoan(id_loan:number, id_book: number, id_user:number,
    loan_date:string, return_date:string){

        const books_ids = this.books.map(book=> book.getId());
        const users_ids = this.users.map(user=> user.getId());
        
        if(this.ValidateIDBook(books_ids, id_book) && this.ValidateIDUser(users_ids, id_user)){
            const book_finded = this.searchBook(books_ids, id_book);
            const user_finded = this.searchUser(users_ids, id_user);
            const new_loan = new Loan(id_loan, book_finded, user_finded, loan_date, return_date);
            this.loans.push(new_loan);
            console.log(`Empréstimo realizado com sucesso! Seu ID é ${id_loan}`);
        }
        else{
            console.log("ID do Usuário e/ou Id do Livro Inválido. Tente novamente");
        }
    }

    devolution(id_loan:number){
        const loans_ids = this.loans.map(loan=> loan.getId());

        if(this.ValidadeIDLoan(loans_ids, id_loan)){
            const position = this.searchLoan(loans_ids, id_loan);
            this.loans.splice(position,1); //removendo da lista de emprestimo
            console.log("Devolução Realizada com sucesso!");
        }
        else{
            console.log("ID do Emprestimo Inválido. Tente novamente");
        }
    }

    private searchLoan(loans_ids:number[], id_loan:number){
        const position = loans_ids.indexOf(id_loan);
        return position;
    }

    private searchBook(books_ids:number[],id_book:number){
        const position = books_ids.indexOf(id_book);
        return this.books[position];
    }

    private searchUser(users_ids:number[], id_user:number){
        const position = users_ids.indexOf(id_user);
        return this.users[position];
    }

    searchBookByTitle(title_book:string){
        const similar_books:Book[] = [];
        for(let i = 0; i<this.books.length; i++){
            if(this.books[i].getTitle().includes(title_book)){
                similar_books.push(this.books[i]);
            }
        }
        return similar_books;
    }

    GetBooksListSize(){
        return this.books.length;
    }

    GetUsersListSize(){
        return this.users.length;
    }

    GetLoansListSize(){
        return this.loans.length;
    }

    ValidateIDBook(ids_books:number[],id_book:number){
        return ids_books.includes(id_book);
    }

    ValidateIDUser(ids_users:number[],id_user:number){
        return ids_users.includes(id_user);
    }
    ValidadeIDLoan(ids_loans:number[], id_loan:number){
        return ids_loans.includes(id_loan);
    }
}