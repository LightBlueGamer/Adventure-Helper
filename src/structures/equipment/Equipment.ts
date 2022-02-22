import type { Boots } from './items/Boots';
import type { Bracelets } from './items/Bracelets';
import type { Chestplate } from './items/Chestplate';
import type { Gloves } from './items/Gloves';
import type { Helmet } from './items/Helmet';
import type { Item } from './items/Item';
import type { Leggings } from './items/Leggings';
import type { Necklace } from './items/Necklace';
import type { Offhand } from './items/Offhand';
import type { Shirt } from './items/Shirt';
import type { Weapon } from './items/Weapon';

/**
 * Creates equipment with the given parameters.
 * @category Equipment
 */
export class Equipment {
  /**
   * Determines the helmet of the equipment.
   * @see {@link Helmet | Helmet class} for more details.
   */
  public helmet: Helmet | null;
  /**
   * Determines the necklace of the equipment.
   * @see {@link Necklace | Necklace class} for more details.
   */
  public necklace: Necklace | null;
  /**
   * Determines the shirt of the equipment.
   * @see {@link Shirt | Shirt class} for more details.
   */
  public shirt: Shirt | null;
  /**
   * Determines the chestplate of the equipment.
   * @see {@link Chestplate | Chestplate class} for more details.
   */
  public chestplate: Chestplate | null;
  /**
   * Determines the gloves of the equipment.
   * @see {@link Gloves | Gloves class} for more details.
   */
  public gloves: Gloves | null;
  /**
   * Determines the bracelets of the equipment.
   * @see {@link Bracelets | Bracelets class} for more details.
   */
  public bracelets: Bracelets | null;
  /**
   * Determines the leggings of the equipment.
   * @see {@link Leggings | Leggings class} for more details.
   */
  public leggings: Leggings | null;
  /**
   * Determines the boots of the equipment.
   * @see {@link Boots | Boots class} for more details.
   */
  public boots: Boots | null;
  /**
   * Determines the weapon of the equipment.
   * @see {@link Weapon | Weapon class} for more details.
   */
  public weapon: Weapon | null;
  /**
   * Determines the offhand of the equipment.
   * @see {@link Offhand | Offhand class} for more details.
   */
  public offhand: Offhand | null;
  public constructor(
    helmet: Helmet | null = null,
    necklace: Necklace | null = null,
    shirt: Shirt | null = null,
    chestplate: Chestplate | null = null,
    gloves: Gloves | null = null,
    bracelets: Bracelets | null = null,
    leggings: Leggings | null = null,
    boots: Boots | null = null,
    weapon: Weapon | null = null,
    offhand: Offhand | null = null
  ) {
    this.helmet = helmet;
    this.necklace = necklace;
    this.shirt = shirt;
    this.chestplate = chestplate;
    this.gloves = gloves;
    this.bracelets = bracelets;
    this.leggings = leggings;
    this.boots = boots;
    this.weapon = weapon;
    this.offhand = offhand;
  }

  public *[Symbol.iterator]() {
    let item: Item;

    for (item of this) {
      yield item;
    }
  }
}
