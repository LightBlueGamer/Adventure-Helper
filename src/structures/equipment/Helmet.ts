import { Rarity, Attributes, uncommon } from '..';

/**
 * Creates helmet with the given parameters.
 */
export class Helmet {
  /**
   * Determines the rarity of the helmet.
   */
  public rarity: Rarity;
  /**
   * Determines the name of the helmet.
   */
  public name: string;
  /**
   * Determines the description of the helmet.
   */
  public description: string;
  /**
   * Determines the attributes of the helmet.
   * @see {@link Attributes | Attributes class} for more details.
   */
  public attributes: Attributes;
  public constructor(rarity: Rarity = uncommon, name = 'Helmet', description = 'A helmet', attributes: Attributes = new Attributes()) {
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
