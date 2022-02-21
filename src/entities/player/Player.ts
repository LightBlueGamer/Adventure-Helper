import { Equipment } from '../..';

/**
 * Creates a player with the given parameters or the default parameters.
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
    this.name = name;
    this.health = health;
    this.stamina = stamina;
    this.mana = mana;
    this.equipment = equipment;
  }
}
