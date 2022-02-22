import { Creature } from '..';
import { Equipment } from '../../..';
/**
 * Creates a Humanoid Enemy with the given parameters or the default parameters.
 * @category Entity
 */
export class HumanoidEnemy extends Creature {
  /**
   * Determines the name of the Humanoid Enemy.
   */
  public name: string;
  /**
   * Determines the health of the Humanoid Enemy.
   */
  public health: number;
  /**
   * Determines what equipment the player has.
   * @see {@link Equipment | Equipment class} for more details.
   */
  public equipment: Equipment;
  public constructor(name = 'HumanoidEnemy', health = 100, equipment = new Equipment()) {
    super(name, health);
    this.name = name;
    this.health = health;
    this.equipment = equipment;
  }
}
