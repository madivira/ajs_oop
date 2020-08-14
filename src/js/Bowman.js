import Character from './Character';

export default class Bowman extends Character {
  constructor(...args) {
    super(...args);
    this.type = 'Bowman';
    this.health = 100;
    this.level = 1;
    this.attack = 25;
    this.defence = 25;
  }
}
