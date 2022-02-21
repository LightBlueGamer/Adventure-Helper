import { Rarity, Attributes, uncommon } from '..';

export class Boots {
  public rarity: Rarity;
  public name: string;
  public description: string;
  public attributes: Attributes;
  public constructor(rarity = uncommon, name = 'Boots', description = 'A pair of boots', attributes = new Attributes()) {
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
