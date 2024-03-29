import { Attributes } from '../../attributes/Attributes';
import { uncommon } from '../../rarity/rarities';
import type { Rarity } from '../../rarity/Rarity';
import { Item } from './Item';

/**
 * Creates helmet with the given parameters.
 * @category Equipment
 */
export class Helmet extends Item {
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
    super(rarity, name, description, attributes);
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
