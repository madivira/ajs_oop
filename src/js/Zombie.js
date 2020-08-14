import Character from './Character';

export default class Zombie extends Character {
  constructor(...args) {
    super(...args);
    this.type = 'Zombie';
    this.health = 100;
    this.level = 1;
    this.attack = 10;
    this.defence = 40;
  }
}
