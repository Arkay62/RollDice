export default class De {
	private _valeur: number;
	constructor() {
		this._valeur = 0;
	}

	get_valeur(): number {
		return this._valeur;
	}
	lancer(): void {
		this._valeur = Math.floor(Math.random()* 6) + 1;
	}
}