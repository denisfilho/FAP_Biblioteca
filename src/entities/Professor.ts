import { Stundent } from "./Student";
import { User } from "./User";

export class Professor extends User{
    private students:Stundent[] = [];

    getStudents(){
        return this.students;
    }

    addStudent(new_student:Stundent){
        this.students.push(new_student);
    }
}