const myName = (name: string) =>{ 
    console.log(name) 
} 

myName('qry')



const sayName = (value: string): string => {
    if(typeof value === 'string') {
        return value ;
    } else{
        return value;
    }
}


sayName('abb');



type Centimeter = number;
type Kilogram = number;

type Student = {
    name:string;
    height: Centimeter;
    weight?: Kilogram;
}


let student: Student = {
    name:'qry' ,
    height:165,
    //weight:50
}


let str :Array<string | number> = ['qry' ,5];

console.log(typeof str)
let str2: typeof str = ['qry', 5];




let arr: Array<()=>string> = [()=>'qqq',()=>'bbb'];
console.log (arr[0]());