/**
 * Creates a new rarity with the given parameters.
 */
export class Rarity {
  /**
   * Determines the name of the rarity.
   */
  public name: string;
  /**
   * Determines the color of the rarity.
   */
  public color: string;
  public constructor(name = 'Rarity', color = '#000000') {
    this.name = name;
    this.color = color;
  }
}
