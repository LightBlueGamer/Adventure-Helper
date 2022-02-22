import { Attributes } from '../../attributes/Attributes';
import { uncommon } from '../../rarity/rarities';
import type { Rarity } from '../../rarity/Rarity';
import { Item } from './Item';

/**
 * Creates necklace with the given parameters.
 * @category Equipment
 */
export class Necklace extends Item {
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
    super(rarity, name, description, attributes);
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
