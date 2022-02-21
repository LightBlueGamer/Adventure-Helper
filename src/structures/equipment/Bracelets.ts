import { Rarity, Attributes, uncommon } from '..';

/**
 * Creates bracelets with the given parameters.
 */
export class Bracelets {
  /**
   * Determines the rarity of the bracelets.
   */
  public rarity: Rarity;
  /**
   * Determines the name of the bracelets.
   */
  public name: string;
  /**
   * Determines the description of the bracelets.
   */
  public description: string;
  /**
   * Determines the attributes of the bracelets.
   * @see {@link Attributes | Attributes class} for more details.
   */
  public attributes: Attributes;
  public constructor(rarity = uncommon, name = 'Bracelets', description = 'A pair of bracelets', attributes = new Attributes()) {
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
