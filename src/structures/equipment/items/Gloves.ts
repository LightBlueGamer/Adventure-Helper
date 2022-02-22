import { Attributes } from '../../attributes/Attributes';
import { uncommon } from '../../rarity/rarities';
import type { Rarity } from '../../rarity/Rarity';
import { Item } from './Item';

/**
 * Creates gloves with the given parameters.
 * @category Equipment
 */
export class Gloves extends Item {
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
    super(rarity, name, description, attributes);
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
