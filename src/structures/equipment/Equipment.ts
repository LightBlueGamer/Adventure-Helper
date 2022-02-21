import type { Helmet, Necklace, Shirt, Chestplate, Gloves, Bracelets, Leggings, Boots } from '.';

export class Equipment {
  public helmet: Helmet | null;
  public necklace: Necklace | null;
  public shirt: Shirt | null;
  public chestplate: Chestplate | null;
  public gloves: Gloves | null;
  public bracelets: Bracelets | null;
  public leggings: Leggings | null;
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
