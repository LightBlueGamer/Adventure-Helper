import type { Helmet, Necklace, Shirt, Chestplate, Gloves, Bracelets, Leggings, Boots } from '.';
/**
 * Creates equipment with the given parameters.
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
  public constructor(
    helmet: Helmet | null = null,
    necklace: Necklace | null = null,
    shirt: Shirt | null = null,
    chestplate: Chestplate | null = null,
    gloves: Gloves | null = null,
    bracelets: Bracelets | null = null,
    leggings: Leggings | null = null,
    boots: Boots | null = null
  ) {
    this.helmet = helmet;
    this.necklace = necklace;
    this.shirt = shirt;
    this.chestplate = chestplate;
    this.gloves = gloves;
    this.bracelets = bracelets;
    this.leggings = leggings;
    this.boots = boots;
  }
}
