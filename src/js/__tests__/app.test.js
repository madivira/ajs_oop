import Character from '../Character';
import Bowman from '../Bowman';
import Swordsman from '../Swordsman';
import Magician from '../Magician';
import Daemon from '../Daemon';
import Undead from '../Undead';
import Zombie from '../Zombie';

describe('Character', () => {
  test('Test Character', () => {
    const gamer = new Character('aca', 'Bowman', 100, 2, 15, 15);
    expect(gamer).toEqual({
      attack: 15, defence: 15, health: 100, level: 2, name: 'aca', type: 'Bowman',
    });
  });

  test('Test Character 9', () => {
    const gamer = new Character('acacascsd', 'Bowman', 100, 2, 15, 15);
    expect(gamer).toEqual({
      attack: 15, defence: 15, health: 100, level: 2, name: 'acacascsd', type: 'Bowman',
    });
  });

  test('Test Error levelUp', () => {
    expect(() => {
      const gamer = new Character('acaa', 'Bowman', -1, 1, 30, 70);
      gamer.levelUp();
    }).toThrow();
  });

  test('Test Error levelUp not toThrow', () => {
    const gamer = new Character('acaa', 'Bowman', 2, 1, 30, 70);
    gamer.levelUp();
    expect(gamer).toEqual({
      attack: 36, defence: 84, health: 100, level: 2, name: 'acaa', type: 'Bowman',
    });
  });

  test('Test Error name number', () => {
    expect(() => new Character(2, 'Bowman', 100, 2, 30, 70)).toThrow(new Error('Error name'));
  });

  test('Test Error name >10', () => {
    expect(() => new Character('ksdlfjsdalkfhasdlkjh', 'Bowman', 100, 2, 30, 70)).toThrow(new Error('Error name'));
  });

  test('Test Error name <2', () => {
    expect(() => new Character('k', 'Bowman', 100, 2, 30, 70)).toThrow(new Error('Error name'));
  });

  test('Test Error type', () => {
    expect(() => new Character('aca', 11, 50, 4, 35, 45)).toThrow();
  });

  test('Test damains', () => {
    const gamer = new Character('asasaa', 'Bowman', 1, 1, 30, 70);
    expect(gamer.damage(10)).toEqual();
  });

  test('Test damains - ', () => {
    const gamer = new Character('asasaa', 'Bowman', -1, 1, 30, 70);
    expect(gamer.damage(10)).toBeUndefined();
  });
});

describe('Others', () => {
  test('Bowman', () => {
    const bowman = new Bowman('man', 'Bowman');
    expect(bowman).toEqual({
      attack: 25, defence: 25, health: 100, level: 1, name: 'man', type: 'Bowman',
    });
  });
  test('Swordsman', () => {
    const swordsman = new Swordsman('man', 'Swordsman');
    expect(swordsman).toEqual({
      attack: 40, defence: 10, health: 100, level: 1, name: 'man', type: 'Swordsman',
    });
  });
  test('Magician', () => {
    const magician = new Magician('man', 'Magician');
    expect(magician).toEqual({
      attack: 10, defence: 40, health: 100, level: 1, name: 'man', type: 'Magician',
    });
  });
  test('Daemon', () => {
    const daemon = new Daemon('man', 'Daemon');
    expect(daemon).toEqual({
      attack: 25, defence: 25, health: 100, level: 1, name: 'man', type: 'Daemon',
    });
  });
  test('Undead', () => {
    const undead = new Undead('man', 'Undead');
    expect(undead).toEqual({
      attack: 40, defence: 10, health: 100, level: 1, name: 'man', type: 'Undead',
    });
  });
  test('Zombie', () => {
    const zombie = new Zombie('man', 'Zombie');
    expect(zombie).toEqual({
      attack: 10, defence: 40, health: 100, level: 1, name: 'man', type: 'Zombie',
    });
  });
});
