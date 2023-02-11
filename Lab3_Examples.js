var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Variables
for (var x = 0; x < 10; x++) {
    console.log(x); //outputs 0-9
}
console.log(x); //Uncaught RefernceError: i is not defined
//Classes
var Vehicle = /** @class */ (function () {
    function Vehicle(year, make, seats) {
        this.year = year;
        this.make = make;
        this.seats = seats;
    }
    return Vehicle;
}());
var car = new Vehicle(2010, "Volkswagen", 5);
console.log("Car is a " + car.year + " " + car.make + "Which can carry" + car.seats + "people");
//Inheritance
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("".concat(this.name, " moved ").concat(distanceInMeters, "m."));
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Honda = /** @class */ (function () {
    function Honda() {
        this.model = "test";
        this.year = 2101;
        this.make = "test";
        this.seats = 4;
    }
    Honda.prototype.setInfo = function () { return "This is a hoodie"; };
    return Honda;
}());
var Doors;
(function (Doors) {
    Doors[Doors["three"] = 3] = "three";
    Doors[Doors["five"] = 5] = "five";
})(Doors || (Doors = {}));
var Toyota = /** @class */ (function () {
    function Toyota() {
        this.model = "test";
        this.year = 2101;
        this.make = "test";
        this.seats = 4;
        this.doors = Doors.five;
    }
    Toyota.prototype.setInfo = function () { return "This is a toyota with " + this.doors + "doors"; };
    return Toyota;
}());
