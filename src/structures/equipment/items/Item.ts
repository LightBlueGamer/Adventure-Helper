import { Attributes } from '../../attributes/Attributes';
import { uncommon } from '../../rarity/rarities';
import type { Rarity } from '../../rarity/Rarity';

/**
 * Creates item with the given parameters.
 * @category Equipment
 */
export class Item {
  /**
   * Determines the rarity of the item.
   */
  public rarity: Rarity;
  /**
   * Determines the name of the item.
   */
  public name: string;
  /**
   * Determines the description of the item.
   */
  public description: string;
  /**
   * Determines the attributes of the item.
   * @see {@link Attributes | Attributes class} for more details.
   */
  public attributes: Attributes;
  public constructor(rarity = uncommon, name = 'Item', description = 'A item', attributes = new Attributes()) {
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
