import { Attributes } from '../../attributes/Attributes';
import { uncommon } from '../../rarity/rarities';
import type { Rarity } from '../../rarity/Rarity';
import { Item } from './Item';

/**
 * Creates boots with the given parameters.
 * @category Equipment
 */
export class Boots extends Item {
  /**
   * Determines the rarity of the boots.
   */
  public rarity: Rarity;
  /**
   * Determines the name of the boots.
   */
  public name: string;
  /**
   * Determines the description of the boots.
   */
  public description: string;
  /**
   * Determines the attributes of the boots.
   * @see {@link Attributes | Attributes class} for more details.
   */
  public attributes: Attributes;
  public constructor(rarity = uncommon, name = 'Boots', description = 'A pair of boots', attributes = new Attributes()) {
    super(rarity, name, description, attributes);
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
