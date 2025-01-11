import lodash from 'lodash';
import chalk from 'chalk';
import { faker } from '@faker-js/faker';
import validator from "validator";
import colors from "colors";


// lodash
const array = [1,4,7,3,3,6,7,8,8,4,3,2,5,4,47,6,6,7,8,9];
const uniqueNums = lodash.uniq(array);
console.log(chalk.gray(array));
console.log(chalk.green(uniqueNums));

// chalk
console.log(chalk.red(uniqueNums));
console.log(chalk.blueBright("Hello, with chalk!"));
console.log(chalk.yellow("Hello, with chalk!"));


// faker
let fakeAccount = {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    registeredAt: faker.date.past()
};

console.log(fakeAccount.userId);
console.log(fakeAccount.username);
console.log(fakeAccount.email);
console.log(fakeAccount.registeredAt);


// validator
const validEmail = "bob@gmail.com";
const invalidEmail = "john@yahoo";
console.log(validEmail, validator.isEmail(validEmail));
console.log(invalidEmail, validator.isEmail(invalidEmail));

// colors
console.log("Hello, everyone!" .blue);
console.log("Error!!" .red);
console.log("Warning!" .yellow);
console.log("Rainbow!" .rainbow);


