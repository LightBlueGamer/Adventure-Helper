import { Attributes, Rarity, uncommon } from '..';

/**
 * Creates gloves with the given parameters.
 * @category Equipment
 */
export class Gloves {
  /**
   * Determines the rarity of the gloves.
   */
  public rarity: Rarity;
  /**
   * Determines the name of the gloves.
   */
  public name: string;
  /**
   * Determines the description of the gloves.
   */
  public description: string;
  /**
   * Determines the attributes of the gloves.
   * @see {@link Attributes | Attributes class} for more details.
   */
  public attributes: Attributes;
  public constructor(rarity: Rarity = uncommon, name = 'Gloves', description = 'A pair of gloves', attributes: Attributes = new Attributes()) {
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
