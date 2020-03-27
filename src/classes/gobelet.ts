import De from './de';
export default class Gobelet {
	private _valeur: number;
	private _des: Array<De>;

	constructor(nb_des:number) {
		this._valeur = 0;
		this._des = new Array<De>();
		for (let i:number = 0; i < nb_des; i++) {
			this._des.push(new De());
		}
	}

	get_valeur(): number {
		let value: number = 0;
		for (let de of this._des) {
			value += de.get_valeur();
		}
		return value;
    }
    
	lancer(): void {
		for (let de of this._des) {
			de.lancer();
		}
	}

	afficher_score(): number {
		return this.get_valeur();
	}
}