import { Rarity, Attributes, uncommon } from '..';

/**
 * Creates necklace with the given parameters.
 * @category Equipment
 */
export class Necklace {
  /**
   * Determines the rarity of the necklace.
   */
  public rarity: Rarity;
  /**
   * Determines the name of the necklace.
   */
  public name: string;
  /**
   * Determines the description of the necklace.
   */
  public description: string;
  /**
   * Determines the attributes of the necklace.
   * @see {@link Attributes | Attributes class} for more details.
   */
  public attributes: Attributes;
  public constructor(rarity: Rarity = uncommon, name = 'Necklace', description = 'A necklace', attributes: Attributes = new Attributes()) {
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
