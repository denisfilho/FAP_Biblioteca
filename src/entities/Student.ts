import { User } from "./User";

export class Stundent extends User{
    private class_name:string;
    private registration_number:string;

    constructor(id:number, name:string, class_name:string, registration_number:string){
        super(id, name);          
        this.class_name = class_name;
        this.registration_number = registration_number;
        
    }

    getClassName(){
        return this.class_name;
    }

    setClassName(class_name:string){
        this.class_name = class_name;
    }

    getRegistratioNunmber(){
        return this.registration_number;
    }

    setRegistratioNunmber(registration_number:string){
        this.registration_number = registration_number;
    }
}