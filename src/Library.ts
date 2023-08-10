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
        const book_finded = this.searchBook(id_book);
        const user_finded = this.searchUser(id_user);
        const new_loan = new Loan(id_loan, book_finded, user_finded, loan_date, return_date);
        this.loans.push(new_loan);
    }

    devolution(loan:Loan){
        const position = this.searchLoan(loan);
        this.loans.splice(position,1); //removendo da lista de emprestimo
    }

    private searchLoan(current_loan:Loan){
        const ids = this.loans.map(loan=> loan.getId());
        const position = ids.indexOf(current_loan.getId());
        return position;
    }

    private searchBook(id_book:number){
        const ids = this.books.map(loan=> loan.getId());
        const position = ids.indexOf(id_book);
        return this.books[position];
    }

    private searchUser(id_user:number){
        const ids = this.users.map(loan=> loan.getId());
        const position = ids.indexOf(id_user);
        return this.users[position];
    }

    searchBookByTitle(searched_book:Book){
        const similar_books:Book[] = [];
        for(let i = 0; i<this.books.length; i++){
            if(this.books[i].getTitle().includes(searched_book.getTitle())){
                similar_books.push(this.books[i]);
            }
        }
        return similar_books;
    }
}