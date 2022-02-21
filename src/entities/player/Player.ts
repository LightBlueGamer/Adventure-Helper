import { Equipment } from '../..';

export class Player {
  public name: string;
  public health: number;
  public stamina: number;
  public mana: number;
  public equipment: Equipment;
  public constructor(name = 'Player', health = 100, stamina = 100, mana = 100, equipment = new Equipment()) {
    this.name = name;
    this.health = health;
    this.stamina = stamina;
    this.mana = mana;
    this.equipment = equipment;
  }
}
