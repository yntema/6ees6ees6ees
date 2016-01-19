import ForagerBee from './ForagerBee';

class RetiredForagerBee extends ForagerBee {
  constructor () {
    super();
    this.age = 40;
    this.job = 'gamble';
    this.canFly = false;
    this.color = 'grey';
  }
  forage () {
    return 'I am too old, let me play cards instead';
  }
  gamble () {
    super.forage('bout tree fiddy');
  }
};

export default RetiredForagerBee;