import { Attributes } from '../../attributes/Attributes';
import { uncommon } from '../../rarity/rarities';
import type { Rarity } from '../../rarity/Rarity';
import { Item } from './Item';

/**
 * Creates offhand with the given parameters.
 * @category Equipment
 */
export class Offhand extends Item {
  /**
   * Determines the rarity of the offhand.
   */
  public rarity: Rarity;
  /**
   * Determines the name of the offhand.
   */
  public name: string;
  /**
   * Determines the description of the offhand.
   */
  public description: string;
  /**
   * Determines the attributes of the offhand.
   * @see {@link Attributes | Attributes class} for more details.
   */
  public attributes: Attributes;
  public constructor(rarity: Rarity = uncommon, name = 'Offhand', description = 'A offhand', attributes: Attributes = new Attributes()) {
    super(rarity, name, description, attributes);
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
