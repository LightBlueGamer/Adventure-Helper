import { Rarity, Attributes, uncommon } from '..';

export class Helmet {
  public rarity: Rarity;
  public name: string;
  public description: string;
  public attributes: Attributes;
  public constructor(rarity: Rarity = uncommon, name = 'Helmet', description = 'A helmet', attributes: Attributes = new Attributes()) {
    this.rarity = rarity;
    this.name = name;
    this.description = description;
    this.attributes = attributes;
  }
}
