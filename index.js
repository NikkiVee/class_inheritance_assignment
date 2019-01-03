class Universe {
  constructor(name, size) {
    this.universeName = name;
    this.universeSize = size;
  }
}

class Galaxy extends Universe {
  constructor(name, type, universe) {
    super(universe.universeName, universe.universeSize);
    this.galaxyName = name;
    this.galaxyType = type;
  }
}

class Star extends Galaxy {
  constructor(name, location, galaxy, universe) {
    super(galaxy.galaxyName, galaxy.galaxyType, universe);
    this.starName = name;
    this.starLocation = location;
  }
}

class Planet extends Star {
  constructor(name, size, star, galaxy, universe) {
    super(star.starName, star.starLocation, galaxy, universe);
    this.planetName = name;
    this.planetSize = size;
  }
}

class Continent extends Planet {
  constructor(name, size, planet, star, galaxy, universe) {
    super(planet.planetName, planet.planetSize, star, galaxy, universe);
    this.continentName = name;
    this.continentSize = size;
  }
}

class Land extends Continent {
  constructor(name, climate, continent, planet, star, galaxy, universe) {
    super(continent.continentName, continent.continentSize, planet, star, galaxy, universe);
    this.landName = name;
    this.landClimate = climate;
  }
}

class Village extends Land {
  constructor(name, population, land, continent, planet, star, galaxy, universe) {
    super(land.landName, land.landClimate, continent, planet, star, galaxy, universe);
    this.villageName = name;
    this.villagePopulation = population;
  }
}

class Family extends Village {
  constructor(name, memberTotal, village, land, continent, planet, star, galaxy, universe) {
    super(village.villageName, village.villagePopulation, land, continent, planet, star, galaxy, universe);
    this.familyName = name;
    this.familyMemberTotal = memberTotal;
  }
}

class Person extends Family {
  constructor(name, age, family, village, land, continent, planet, star, galaxy, universe) {
    super(family.familyName, family.familyMemberTotal, village, land, continent, planet, star, galaxy, universe);
    this.personName = name;
    this.personAge = age;
  }
}

class Organ extends Person {
  constructor(name, location, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(person.personName, person.personAge, family, village, land, continent, planet, star, galaxy, universe);
    this.organName = name;
    this.organLocation = location;
  }
}

class Cell extends Organ {
  constructor (fatCells, muscleCells, organ, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(organ.organName, organ.organLocation, person, family, village, land, continent, planet, star, galaxy, universe);
    this.fatCells = fatCells;
    this.muscleCells = muscleCells;
  }
}

class Molecule extends Cell {
  constructor(shape, size, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(cell.fatCells, cell.muscleCells, organ, person, family, village, land, continent, planet, star, galaxy, universe);
    this.moleculeShape = shape;
    this.moleculeSize = size;
  }
}

class Atom extends Molecule {
  constructor(electricCharge, diameter, molecule, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe) {
    super(molecule.moleculeShape, molecule.moleculeSize, cell, organ, person, family, village, land, continent, planet, star, galaxy, universe);
    this.electricCharge = electricCharge;
    this.diameter = diameter;
  }

  tellStory() {
    return `This is a story of a ${this.electricCharge} atom. It lives in heart made up of ${this.fatCells} cells inside of ${this.personName}. ${this.personName} belongs to the ${this.familyName} family in the village of ${this.villageName}. The village of ${this.villageName} is in the ${this.landClimate} on the continent of ${this.continentName}. The continent of ${this.continentName} is on a ${this.galaxyType} planet orbiting a star called ${this.starName} that's 3 billion years old. The ${this.starName} star is part of the ${this.galaxyName} in ${this.universeName} Universe.`;
  }
}

let myUniverse = new Universe('Nova', 'extremely big');

let myGalaxy = new Galaxy('Sombrero Galaxy', 'sexy', myUniverse);

let myStar = new Star('Scorpius', '9,000 light-years from Earth', myGalaxy, myUniverse);

let myPlanet = new Planet('Fredicito', '51,118 km', myStar, myGalaxy, myUniverse);

let myContinent = new Continent('South Basemento', '6.888 million mi²', myPlanet, myStar, myGalaxy, myUniverse);

let myLand = new Land('Dead Ponies', 'Dry Grasslands', myContinent, myPlanet, myStar, myGalaxy, myUniverse);

let myVillage = new Village('Sagsay', 500, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

let myFamily = new Family('Trillian', 5, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

let myPerson = new Person('Nicholi', 34, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

let myOrgan = new Organ('heart', 'chest', myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

let myCell = new Cell('50 billion', '2 billion', myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

let myMolecule = new Molecule('macaroni', 'walnut', myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

let myAtom = new Atom('negative', '62 pm', myMolecule, myCell, myOrgan, myPerson, myFamily, myVillage, myLand, myContinent, myPlanet, myStar, myGalaxy, myUniverse);

console.log(myAtom.tellStory());
