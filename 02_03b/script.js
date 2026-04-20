// Vehicle class
class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  // Return a description of the vehicle
  getDescription() {
    return `${this.name} has ${this.wheels} wheels`;
  }
}

// Car class extends Vehicle
// Add number of doors
class Car extends Vehicle {
  constructor(name, doors, wheels) {
    super(name, wheels);
    this.doors = doors;
    this.wheels = wheels ?? 4;
  }

  getDescription() {
    return `${super.getDescription()} and ${this.doors} doors`;
  }
}

// Bike class extends Vehicle
class Bike extends Vehicle {
  constructor(name, type, wheels) {
    super(name, wheels);
    this.type = type;
    this.wheels = wheels ?? 2;
  }

  getDescription() {
    return `${super.getDescription()} and ${this.type} type`;
  }
}

const myCar = new Car("My Car", 4);
console.log(myCar.getDescription()); // My Car has 4 wheels

const myBike = new Bike("My Bike", "offroad");
console.log(myBike.getDescription()); // My Bike has 2 wheels
