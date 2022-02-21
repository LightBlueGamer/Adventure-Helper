/**
 * Creates attributes with the given parameters.
 */
export class Attributes {
  /**
   * Determines the extra health of the attributes.
   */
  public health: number;
  /**
   * Determines the extra stamina of the attributes.
   */
  public stamina: number;
  /**
   * Determines the extra mana of the attributes.
   */
  public mana: number;
  /**
   * Determines the extra defense of the attributes.
   */
  public defense: number;
  public constructor(health = 0, stamina = 0, mana = 0, defense = 0) {
    this.health = health;
    this.stamina = stamina;
    this.mana = mana;
    this.defense = defense;
  }
}
