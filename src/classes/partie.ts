import Joueur from './joueur';
import Gobelet from './gobelet';

export default class Partie {
    private _joueurs: Array<Joueur>;
    private _nb_tours: number;
    private _gobelet: Gobelet;

    constructor(nb_tours: number, nb_des: number) {
        this._joueurs = new Array<Joueur>();
        this._nb_tours = nb_tours;
        this._gobelet = new Gobelet(nb_des);
    }

    initialiser(): void {
        let nom_joueurs = ["Nicole", "Michel", "Jean", "Mireille"];
        for (let nom of nom_joueurs) {
            this._joueurs.push(new Joueur(nom));
        }
    }

    lancer(): void {
        console.log(`La partie commence ! Celle-ci comportera ${this._nb_tours} tours.\n`);
        console.log(`Les joueurs présents sont :`);
        for (let joueur of this._joueurs) {
            console.log(`${joueur.get_nom()}`);
        }
        console.log("");

        for (let i = 1; i <= this._nb_tours; i++) {
            console.log(`Tour ${i} :`);
            for (let joueur of this._joueurs) {
                joueur.jouer(this._gobelet);
            }
        }
        console.log(`Fin de la partie !`);
    }

    afficher_gagnant(): void {
        let gagnant: Joueur = this._joueurs[0];
        for (let joueur of this._joueurs) {
            if (joueur.get_score() > gagnant.get_score()) {
                gagnant = joueur;
            }
        }
        console.log(`Le gagnant est ${gagnant.get_nom()} !!!`);
    }
}