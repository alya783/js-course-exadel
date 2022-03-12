class Zoo{
    constructor(address, area, establishedDate, ticketPrice){
        this.address = address;
        this.area = area;
        this.establishedDate = establishedDate;
        this.ticketPrice = ticketPrice;
        this.workers = [];
        this.animals = [];
    
    }

    get curAddress(){
        return this.address;
    }
   
    set curAddress(newAddress){
        this.address = newAddress;
    }

    get zooArea(){
        return this.area;
    }
    
    set zooArea(newArea){
        this.area = newArea;
    }

    get getDate(){
        return this.establishedDate;
    }

    get price(){
        return this.ticketPrice;
    }
    
    set price(newTicketPrice){
        this.ticketPrice = newTicketPrice;
    }

    addAnimal(animalObj){
        if(this.animals.find(item => item.id === animalObj.id) === undefined){
            this.animals.push(animalObj);
        } else{
            throw Error('This object is already exist');
        }
    }

    removeAnimal(animalObj){
        this.animals = this.animals.filter(item => item.id !== animalObj.id);
    }

    editAnimal(animalObj, {type: newType, color: newColor, weight: newWeight, height: newHeight, PlaceOfOrigin: newPlaceOfOrigin}){
        const editedAnimal = this.animals.find(item => item.id === animalObj.id);
        const objKeys = Object.keys({type: newType, color: newColor, weight: newWeight, height: newHeight, PlaceOfOrigin: newPlaceOfOrigin});
        const objParams = {type: newType, color: newColor, weight: newWeight, height: newHeight, PlaceOfOrigin: newPlaceOfOrigin};
        objKeys.forEach(item => {
            if(objParams[item]){
              editedAnimal[item] = objParams[item];
            }
        });
    }

    showAllAnimals(){
        return this.animals;
    }

    showAnimalById(id){
       return this.animals.find(item => item.id === id);
    }
  
    addWorker(workerObj){
        this.workers.push(workerObj); 
    }

    removeWorker(workerObj){
        this.workers = this.workers.filter(item => item.firstName !== workerObj.firstName && item.lastName !== workerObj.lastName && item.phone !== workerObj.phone);
    }

    editWorker(workerObj, {firstName: newFirstName, lastName: newLastName, phone: newPhone}){
        const editedWorker = this.workers.find(item => item.firstName === workerObj.firstName && item.lastName === workerObj.lastName && item.phone === workerObj.phone);
        const workerObjKeys = Object.keys({firstName: newFirstName, lastName: newLastName, phone: newPhone});
        const workerObjParams = {firstName: newFirstName, lastName: newLastName, phone: newPhone};

        workerObjKeys.forEach(item => {
            if(workerObjParams[item]){
                editedWorker[item] = workerObjParams[item];
            }
        });

    }

    showAllWorkers(){
        return this.workers;
    }

}

class Animal{
    constructor(type, color, weight, height, placeOfOrigin){
        this.id = Math.random().toString().slice(2);
        this.type = type;
        this.color = color;
        this.weight = weight;
        this.height = height;
        this.placeOfOrigin = placeOfOrigin;
    }

    get getInfo(){
        return `This is a ${this.type}. It has ${this.color} color. The weight is ${this.weight} and the height is ${this.height}. This animal live in ${this.placeOfOrigin}. The animal id is ${this.id}`
    }

    setWeight(newWeight){
        this.weight = newWeight;
    }

    setHeight(newHeight){
        this.height = newHeight;
    }
}

class Snakes extends Animal{
    constructor(type, color, weight, height, placeOfOrigin, isPoisonous){
        super(type, color, weight, height, placeOfOrigin)
        this.isPoisonous = isPoisonous;
    }
    
    get poisoningAbility(){
        return this.isPoisonous;
    }

    set poisoningAbility(newOption){
        this.isPoisonous = newOption;
    }
}

class CatLike extends Animal{
    constructor(type, color, weight, height, placeOfOrigin, isSafeToPet){
        super(type, color, weight, height, placeOfOrigin)
        this.isSafeToPet = isSafeToPet;
    }

    isSafe(newOption){
        this.isSafeToPet = newOption;
    }
}

class Birds extends Animal{
    constructor(type, color, weight, height, placeOfOrigin, isFlying){
        super(type, color, weight, height, placeOfOrigin)
        this.isFlying = isFlying;
    }

    flyAbility(newOption){
        this.isFlying = newOption;
    }
}
    
class Worker{
    constructor(firstName, lastName, phone){
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }

    get getInfo(){
        return `This is a ${this.firstName} ${this.lastName}. The phone number is ${this.phone}`;
    }
}

// Tests for classes

let zoo = new Zoo("Park,14", "central", "1999", "$3");

let worker1 = new Worker("Asya", "Smit", "4570658690"); 
let worker2 = new Worker("Maks", "Wulfer", "999999999"); 

console.log(worker1.getInfo); 
console.log(worker2.getInfo); 

zoo.addWorker(worker1);
zoo.addWorker(worker2);

zoo.removeWorker(worker1);

console.log(zoo.showAllWorkers());

zoo.editWorker(worker2, {firstName: null, lastName: null, phone: "000000000"});

console.log(zoo.showAllWorkers()[0]);

//console.log(zoo.price);

zoo.price = "$4";

//console.log(zoo.price);


let animal1 = new Animal('хищник', 'green', '30', '40', 'USA');

//const animal1_id = animal1.id;
//console.log(animal1_id);

let animal2 = new Animal('bird', 'blue', '3', '10', 'Canada');

//console.log(animal2.getInfo);

//animal1.setWeight('20');

zoo.addAnimal(animal1);
zoo.addAnimal(animal2);

//console.log(zoo.showAnimalById(animal1.id));
//console.log(zoo.showAnimalById(animal2.id));

//zoo.removeAnimal(animal1);
//console.log(zoo.showAllAnimals());

zoo.editAnimal(animal1, {type: 'preditor', color: null, weight: null, height: null, PlaceOfOrigin: null});

//console.log(zoo.showAllAnimals()[0]);