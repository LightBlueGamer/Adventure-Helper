export class Attributes {
  public health: number;
  public stamina: number;
  public mana: number;
  public defense: number;
  public constructor(health = 0, stamina = 0, mana = 0, defense = 0) {
    this.health = health;
    this.stamina = stamina;
    this.mana = mana;
    this.defense = defense;
  }
}
