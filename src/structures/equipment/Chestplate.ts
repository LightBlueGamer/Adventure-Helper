import { Rarity, Attributes, uncommon } from '..';

/**
 * Creates chestplate with the given parameters.
 * @category Equipment
 */
export class Chestplate {
  /**
   * Determines the rarity of the chestplate.
   */
  public rarity: Rarity;
  /**
   * Determines the name of the chestplate.
   */
  public name: string;
  /**
   * Determines the description of the chestplate.
   */
  public description: string;
  /**
   * Determines the attributes of the chestplate.
   * @see {@link Attributes | Attributes class} for more details.
   */
  public attributes: Attributes;
  public constructor(rarity: Rarity = uncommon, name = 'Chestplate', description = 'A chestplate', attributes: Attributes = new Attributes()) {
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
