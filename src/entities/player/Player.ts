import { Equipment } from '../../structures/equipment/Equipment';

/**
 * Creates a player with the given parameters or the default parameters.
 * @category Entity
 */

export class Player {
  /**
   * Determines the name of the player.
   */
  public name: string;
  /**
   * Determines how much health the player has.
   */
  public health: number;
  /**
   * Determines how much stamina the player has.
   */
  public stamina: number;
  /**
   * Determines how much mana the player has.
   */
  public mana: number;
  /**
   * Determines what equipment the player has.
   * @see {@link Equipment | Equipment class} for more details.
   */
  public equipment: Equipment;
  public constructor(name = 'Player', health = 100, stamina = 100, mana = 100, equipment = new Equipment()) {
    this.equipment = equipment;
    this.name = name;
    this.health = this.getHealth + health;
    this.stamina = this.getStamina + stamina;
    this.mana = this.getMana + mana;
  }

  /**
   * Get the damage that the player gets from the equipment
   */
  public get getDamage() {
    const { equipment } = this;
    let damage = 0;

    for (const item of equipment) {
      if (item?.attributes) damage += item?.attributes.damage;
    }

    return damage;
  }

  /**
   * Get the defense that the player gets from the equipment
   */
  public get getDefense() {
    const { equipment } = this;
    let defense = 0;

    for (const item of equipment) {
      if (item?.attributes) defense += item?.attributes.defense;
    }

    return defense;
  }

  /**
   * Get the health that the player gets from the equipment
   */
  public get getHealth() {
    const { equipment } = this;
    let health = 0;

    for (const item of equipment) {
      if (item?.attributes) health += item?.attributes.health;
    }

    return health;
  }

  /**
   * Get the mana that the player gets from the equipment
   */
  public get getMana() {
    const { equipment } = this;
    let mana = 0;

    for (const item of equipment) {
      if (item?.attributes) mana += item?.attributes.mana;
    }

    return mana;
  }

  /**
   * Get the stanina that the player gets from the equipment
   */
  public get getStamina() {
    const { equipment } = this;
    let stamina = 0;

    for (const item of equipment) {
      if (item?.attributes) stamina += item?.attributes.stamina;
    }

    return stamina;
  }

  /**
   * Damages the player by taking the original damage and decrease it by the defense to a minimum of 0 damage.
   * @param amount - The amount to damage the player for.
   */

  public injure(amount: number) {
    const damage = amount - this.getDefense < 0 ? 0 : amount - this.getDefense;

    this.health -= damage;

    return this;
  }
}
