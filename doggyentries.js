function poidsChienAdulte () {
    var croisssance = this.poidsChiot / this.ageSemaine;
    var poidsChienAdulte = this.croissance / 52;
        return poidsChienAdulte;
}

var nom = prompt("Comment s'appelle votre chien ?");
var poidsChiot = Number(prompt("Entrez le poids du chiot :"));
var ageSemaine = Number(prompt("Entrez son age en semaine :"));

console.log(this.nom + " pèse " + poidsChiot + " kg, et pèsera " + poidsChienAdulte + " kg, une fois adulte.");