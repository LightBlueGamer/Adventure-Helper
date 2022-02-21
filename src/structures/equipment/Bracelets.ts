import { Rarity, Attributes, uncommon } from '..';

export class Bracelets {
  public rarity: Rarity;
  public name: string;
  public description: string;
  public attributes: Attributes;
  public constructor(rarity = uncommon, name = 'Bracelets', description = 'A pair of bracelets', attributes = new Attributes()) {
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
