//Variables
for(let x = 0; x < 10; x++){
    console.log(x);//outputs 0-9
}
console.log(x);//Uncaught RefernceError: i is not defined

//Classes
class Vehicle{
    year: number;
    make:string;
    seats:number;
    constructor(year:number,make:string,seats:number){
        this.year = year;
        this.make = make;
        this.seats = seats;
    }
}

let car = new Vehicle(2010,"Volkswagen",5);

console.log("Car is a "+ car.year+" "+car.make+"Which can carry"+car.seats+"people");

//Inheritance
class Animal{
    name:string;
    constructor(theName:string){this .name = theName;}
    move(distanceInMeters = 0){
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal{
    constructor(name:string) {super(name);}
    move(distanceInMeters = 5){
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

//Interfaces
interface Vehicle{
    year:number;
    make:string;
    seats:number;
    setInfo():void;
}

class Honda implements Vehicle{
    model: string = "test";
    year = 2101;
    make = "test";
    seats = 4;
    setInfo(){return "This is a hoodie";}
}

//enums
interface Vehicle{
    year:number;
    make:string;
    seats:number;
    doors?:Doors;
    setInfo():void;
}

enum Doors{
    three = 3,
    five = 5
}

class Toyota implements Vehicle{
    model:string = "test";
    year = 2101;
    make = "test";
    seats = 4;
    doors = Doors.five;
    setInfo(){return "This is a toyota with "+this.doors+"doors";}
}