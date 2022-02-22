import { Creature } from '../Creature';
import { Equipment } from '../../../structures/equipment/Equipment';
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
   * Determines what equipment the enemy has.
   * @see {@link Equipment | Equipment class} for more details.
   */
  public equipment: Equipment;
  public constructor(name = 'HumanoidEnemy', health = 100, equipment = new Equipment()) {
    super(name, health);
    this.name = name;
    this.equipment = equipment;
    this.health = this.getHealth + health;
  }

  /**
   * Get the damage that the enemy gets from the equipment
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
   * Get the defense that the enemy gets from the equipment
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
   * Get the health that the enemy gets from the equipment
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
   * Damages the enemy by taking the original damage and decrease it by the defense to a minimum of 0 damage.
   * @param amount - The amount to damage the enemy for.
   */

  public injure(amount: number) {
    const damage = amount - this.getDefense < 0 ? 0 : amount - this.getDefense;

    this.health -= damage;

    return this;
  }
}
