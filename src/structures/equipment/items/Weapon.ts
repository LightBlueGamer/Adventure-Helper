import { Attributes } from '../../attributes/Attributes';
import { uncommon } from '../../rarity/rarities';
import type { Rarity } from '../../rarity/Rarity';
import { Item } from './Item';

/**
 * Creates weapon with the given parameters.
 * @category Equipment
 */
export class Weapon extends Item {
  /**
   * Determines the rarity of the weapon.
   */
  public rarity: Rarity;
  /**
   * Determines the name of the weapon.
   */
  public name: string;
  /**
   * Determines the description of the weapon.
   */
  public description: string;
  /**
   * Determines the attributes of the weapon.
   * @see {@link Attributes | Attributes class} for more details.
   */
  public attributes: Attributes;
  public constructor(rarity: Rarity = uncommon, name = 'Weapon', description = 'A weapon', attributes: Attributes = new Attributes()) {
    super(rarity, name, description, attributes);
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
