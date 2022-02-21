import { Rarity, Attributes, uncommon } from '..';

export class Leggings {
  public rarity: Rarity;
  public name: string;
  public description: string;
  public attributes: Attributes;
  public constructor(rarity: Rarity = uncommon, name = 'Leggings', description = 'Leggings', attributes: Attributes = new Attributes()) {
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
