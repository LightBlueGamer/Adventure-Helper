/**
 * Creates a Creature with the given parameters or the default parameters.
 * @category Entity
 */
export class Creature {
  /**
   * Determines the name of the creature.
   * @protected
   */
  protected name: string;
  /**
   * Determines the health of the creature.
   * @protected
   */
  protected health: number;
  protected constructor(name = 'Creature', health = 100) {
    this.name = name;
    this.health = health;
  }
}
