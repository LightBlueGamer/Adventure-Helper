import { Attributes, Rarity, uncommon } from '..';

export class Gloves {
  public rarity: Rarity;
  public name: string;
  public description: string;
  public attributes: Attributes;
  public constructor(rarity: Rarity = uncommon, name = 'Gloves', description = 'A pair of glaves', attributes: Attributes = new Attributes()) {
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
