export class Book{
    private id:number;
    private title: string;
    private author:string;
    private year:number;
    private kind: string;
    private copies_available: number;

    constructor(id:number, title: string, 
        author:string, year:number, 
        kind: string, copies_available: number){
            this.id = id;
            this.title = title;
            this.author = author;
            this.year = year;
            this.kind = kind;
            this.copies_available = copies_available;
        
    }

    getId(){
        return this.id;
    }

    setId(id:number){
        this.id = id;
    }

    getTitle(){
        return this.title;
    }

    setTitle(title:string){
        this.title = title;
    }

    getAuthor(){
        return this.author;
    }

    setAuthor(author:string){
        this.author = author;
    }

    getYear(){
        return this.year;
    }

    setYear(year:number){
        this.year = year;
    }

    getKind(){
        return this.kind;
    }

    setKind(kind:string){
        this.kind = kind;
    }

    getCopiesAvailable(){
        return this.copies_available;
    }

    setCopiesAvailable(copies_available){
        this.copies_available = copies_available;
    }

}