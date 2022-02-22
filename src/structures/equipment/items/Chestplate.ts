import { Attributes } from '../../attributes/Attributes';
import { uncommon } from '../../rarity/rarities';
import type { Rarity } from '../../rarity/Rarity';
import { Item } from './Item';

/**
 * Creates chestplate with the given parameters.
 * @category Equipment
 */
export class Chestplate extends Item {
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
    super(rarity, name, description, attributes);
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
