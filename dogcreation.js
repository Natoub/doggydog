var raceDeChien = {
    // Initialise la race du chien
    init: function (nom, race, couleur, poids, age) {
        this.nom = nom;
        this.race = race;
        this.couleur = couleur;
        this.poids = poids;
        this.age = age;
    },
    
    // Renvoi à la descrption du chien
    decrire: function () {
    var description = this.nom + " est un " + this.race + ", il est " + this.couleur + ", il pèse " + this.poids + " et a " + this.age + " ans.";
    return description;
    }
};

var chien1 = Object.create(raceDeChien);
chien1.init("Rex", "Berger Allemand", "marron et noir", 37, 2);

var chien2 = Object.create(raceDeChien);
chien2.init("Lilie", "Chihuahua", "blanc", 2.5, 3);

console.log(chien1.decrire());
console.log(chien2.decrire());

