import Character from './Character';

export default class Swordsman extends Character {
  constructor(...args) {
    super(...args);
    this.type = 'Swordsman';
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }
}
