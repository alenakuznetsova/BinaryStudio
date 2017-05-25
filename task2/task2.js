class Fighter{ 
  constructor(name, power=50, health=100) {
    this.name = name;
    this.power = power;
    this.health = health;
  }
  
  setDamage(damage){
    this.health = this.health - damage;
    console.log('health:' + this.health);
  } 
  
  hit(enemy, point=10) {
    enemy.setDamage(point * this.power); 
  }
  
  toString(){
    return `${this.name} [ his health: ${this.health}, his power: ${this.power} ]`;
  }
}

class ImprovedFighter extends Fighter {  
  hit(enemy,point=10) {
    super.hit(enemy, point * 2);
  }
}

let fight = (fighter1, fighter2, ...points) => {
  
  let fighters = [fighter1, fighter2];

  for(let point of points) {
       
       fighters[0].hit(fighters[1],point);
    
       if(fighters[1].health < 1) {
          return fighters[0];
       } 
        
        fighters.reverse();
  }
  
  return `not ${fighter1} or ${fighter2}`;
}

let fighter = new Fighter('Tom', 4, 75);
let improvedFighter = new ImprovedFighter('Jack', 2, 150);

let result = `Winner is ${fight(fighter, improvedFighter,...[10,20,30,40])}`;

console.log(result);