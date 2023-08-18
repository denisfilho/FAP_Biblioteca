import PromptSync from  "prompt-sync";


const prompt = PromptSync();

//31: 1, 3, 5, 7, 8, 10, 12
//30: 4, 6, 9, 11
let meses31 = [1, 3, 5, 7, 8, 10, 12];
let meses30 = [4, 6, 9, 11];

var data_emprestimo_global;
var data_retorno_global;

/*
let day_now = new Date();
console.log(day_now);
console.log(day_now.getDate());
let new_day = day_now.getDate()+5;
console.log(new_day);




let ano = day_now.getFullYear();

if(ano%4==0 && ano%100!=0){
    console.log("É bissexto");
}
else{
    if(ano%400==0){
        console.log("É bissexto");
    }
    else{
        console.log("Não é bissexto");
    }
}

let mes = day_now.getMonth() + 1;
console.log(meses31.includes(mes));
console.log(meses30.includes(mes));

let today = (day_now.getDate() + "/" + (day_now.getMonth()+1) + "/" + day_now.getFullYear());
console.log(today);
*/

function convertendoDataEmString(date:Date){
    let today = (date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear());
    return today;
}

function salvandoDataDeEmprestimo(){
    let data_emprestimo = new Date();
    return data_emprestimo;
}

function verificaBissexto(year: number){
    if(year%4==0 && year%100!=0){
        //console.log("É bissexto");
        return true;
    }
    else{
        if(year%400==0){
            //console.log("É bissexto");
            return true
        }
        else{
            console.log("Não é bissexto");
            return false;
        }
    }
}

function calculandoDataDeRetorno(date:Date){
    let next_day = date.getDate()+7;
    let month = date.getMonth()+1;
    if(month==2){
        if(verificaBissexto(date.getFullYear())){
            if(next_day>29){
                next_day-=29;
                month+=1;
            }
        }
    }
    if(meses30.includes(month)){
        if(next_day>30){
            next_day-=30;
            month+=1;    
        }
    }
    if(meses31.includes(month)){
        if(next_day>31){
            next_day-=31;
            month+=1;    
        }
    }
    let data_retorno = convertendoStringEmData(next_day, month, date.getFullYear())
    return data_retorno;
}

function salvandoDataDeRetorno(date:Date){
    let data_retorno = calculandoDataDeRetorno(date);
    //console.log(`Data de Retorno: ${data_retorno}`);
    return data_retorno;
}

function convertendoStringEmData(day:number, month:number, year:number){
    let month_mod = "0"+month;
    let day_converter = (day + "/" + month_mod + "/" + year);
    let day_Date = new Date(day_converter);
    console.log(day_converter);
    return day_Date;
}

data_emprestimo_global = salvandoDataDeEmprestimo();
console.log(data_emprestimo_global);
data_retorno_global = salvandoDataDeRetorno(data_emprestimo_global);
console.log(data_retorno_global);
