import Gobelet from './gobelet';
export default class Joueur {
	private _nom: string;
	private _score: number;

	constructor(nom: string) {
        this._nom = nom;
        this._score = 0;
	}

	get_nom(): string {
		return this._nom;
	}

	get_score(): number {
		return this._score;
	}

	jouer(gobelet: Gobelet) {
        console.log(`${this.get_nom()} lance le gobelet !`);
        gobelet.lancer();
        console.log(`${this.get_nom()} fait ${gobelet.afficher_score()} !`);
        this._score += gobelet.afficher_score();
        this.afficher_score();
    }

    afficher_score(): void {
        console.log(`${this.get_nom()} a un total de ${this.get_score()} !\n`);
    }
    
}