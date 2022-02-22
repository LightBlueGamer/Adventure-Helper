import { Creature } from '..';
/**
 * Creates a Animal Enemy with the given parameters or the default parameters.
 * @category Entity
 */
export class AnimalEnemy extends Creature {
  /**
   * Determines the name of the Animal Enemy.
   */
  public name: string;
  /**
   * Determines the health of the Animal Enemy.
   */
  public health: number;
  /**
   * Determines the damage of the Animal Enemy.
   */
  public damage: number;
  /**
   * Determines the defense of the Animal Enemy.
   */
  public defense: number;
  public constructor(name = 'AnimalEnemy', health = 50, damage = 10, defense = 5) {
    super(name, health);
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.defense = defense;
  }
}
