import lodash from 'lodash';
import chalk from 'chalk';

const array = [1,4,7,3,3,6,7,8,8,4,3,2,5,4,47,6,6,7,8,9];

const uniqueNums = lodash.uniq(array);

console.log(uniqueNums);

console.log(chalk.red(uniqueNums));
console.log(chalk.blueBright("Hello, with chalk!"));
console.log(chalk.yellow("Hello, with chalk!"));