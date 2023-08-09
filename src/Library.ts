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

    addLoan(new_loan:Loan){
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