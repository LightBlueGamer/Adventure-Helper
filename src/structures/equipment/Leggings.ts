import { Rarity, Attributes, uncommon } from '..';

/**
 * Creates leggings with the given parameters.
 * @category Equipment
 */
export class Leggings {
  /**
   * Determines the rarity of the leggings.
   */
  public rarity: Rarity;
  /**
   * Determines the name of the leggings.
   */
  public name: string;
  /**
   * Determines the description of the leggings.
   */
  public description: string;
  /**
   * Determines the attributes of the leggings.
   * @see {@link Attributes | Attributes class} for more details.
   */
  public attributes: Attributes;
  public constructor(rarity: Rarity = uncommon, name = 'Leggings', description = 'Leggings', attributes: Attributes = new Attributes()) {
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
