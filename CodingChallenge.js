class Element {
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
    calculateAge(buildYear) {
        let newDate = new Date().getFullYear();
        return newDate - buildYear;
    }
}

class Park extends Element{
    constructor(name, buildYear, treeCount, area){
        super(name, buildYear);
        this.treeCount = treeCount;
        this.area = area;
        this.treeDensity = treeCount / area;
    }
    static averageAge(...buildYears) {
        let data = {
            length:0,
            average:0
        }
        let sum = 0;
        let newDate = new Date().getFullYear();

        for(let i = 0 ; i < buildYears.length ; i++) {
            sum += newDate - buildYears[i];
        }
        data.length = buildYears.length;
        data.average = sum / buildYears.length;
        return data;
    }
    static moreThan1000Trees(...parks){
        let more1000 = [];
        for (let park of parks) {
            if(park.treeCount > 1000) {
                more1000.push(park.name);
            }
        }
        return more1000;
    }
}
let park1 = new Park('Hyde Park', 1990, 1500, 1200);
let park2 = new Park('Düden Park', 2000, 1012, 500);
let park3 = new Park('Bayındır Parkı', 2009, 250, 2000);

let numberOfParks = Park.averageAge(park1.buildYear,park2.buildYear,park3.buildYear).length;
let averageAge = Park.averageAge(park1.buildYear,park2.buildYear,park3.buildYear).average;
let more = Park.moreThan1000Trees(park1,park2,park3);

console.log(Park.averageAge(park1.buildYear,park2.buildYear,park3.buildYear));
console.log(`Our ${numberOfParks} parks have an average age of ${averageAge} years`);
console.log(`${park1.name} has a tree density of ${ park1.treeDensity}`);
console.log(`${park2.name} has a tree density of ${ park2.treeDensity}`);
console.log(`${park3.name} has a tree density of ${ park3.treeDensity}`);
console.log(`${more} has more than 1000 trees.`);