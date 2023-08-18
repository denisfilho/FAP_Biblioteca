import { Book } from "./Book";
import { User } from "./User";

export class Loan{
    private id:number;
    private book: Book;
    private user: User;
    private loan_date: string; //Pesquisar como trabalhar com datas
    private return_date: string;

    constructor(id: number, book:Book, user:User, 
    loan_date:string, return_date:string) {
        this.id = id;
        this.book = book;
        this.user = user;
        this.loan_date = loan_date;
        this.return_date = return_date;
    }

    getId(){
        return this.id;
    }

    setId(id:number){
        this.id = id;
    }

    getBook(){
        return this.book;
    }

    setBook(book: Book){
        this.book = book;
    }

    getUser(){
        return this.user;
    }

    setUser(user:User){
        this.user = user;
    }

    getLoanDate(){
        return this.loan_date;
    }

    setLoanDate(loan_date:string){
        this.loan_date = loan_date
    }

    getReturnDate(){
        return this.return_date;
    }

    setReturnDate(return_date:string){
        this.return_date = return_date;
    }

    
}