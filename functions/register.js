module.exports.register = function register() {
  (async () => {

    chalk = require('chalk'), prompts = require('prompts'), { connection } = require('../database/db')

    let username = await prompts([{ type: 'text', name: 'value', message: `Create your username:` }]);


    if (username.value.length > 20) {

      do {

        console.log(chalk.red('\nSomething is wrong with your username!\nUsername Requirements: MUST be shorter than 8 characters\n'))

        var username2 = await prompts([{ type: 'password', name: 'value', message: `Create your username:` }]);

        if (!username2.value.length > 20) {
          break;
        }
      }
      while (username2.value.length > 20);

    }

    

    let password = await prompts([{ type: 'password', name: 'value', message: `Create your password:` }]);

    if (password.value.length > 20 || password.value.length < 8) {

      do {

        console.log(chalk.red('\nSomething is wrong with your password!\nPassword Requirements: MUST be longer than 8 characters, MUST be shorter than 8 characters\n'))

        var password2 = await prompts([{ type: 'password', name: 'value', message: `Create your password:` }]);

        if (!password2.value.length > 20 && !password2.value.length < 8) {
          break;
        }
      }
      while (password2.value.length > 20 || password2.value.length < 8);

    }


    let job = await prompts([{ type: 'select', name: 'value', message: `Okay ${username.value}, what do you want to do as job?`, choices: [{ title: 'MacDonalds Manager', value: 'mcmanager' }, { title: 'Web Developer', value: 'webdev' }, { title: 'Professional Gamer', value: 'profgamer' }, { title: 'Youtuber', value: 'youtuber' }, { title: 'Designer', value: 'designer' },], initial: 1 }]);

    if (password.value.length > 20 || password.value.length < 8 && username.value.length > 20) {
      connection.query(`INSERT INTO Accounts VALUES ('${username2.value}', '${password2.value}', '${job.value}', '0')`)
    } else if (!password.value.length > 20 && !password.value.length < 8 && username.value.length > 20) {
      connection.query(`INSERT INTO Accounts VALUES ('${username2.value}', '${password.value}', '${job.value}', '0')`)
    } else if (password.value.length > 20 || password.value.length < 8 && !username.value.length > 20) {
      connection.query(`INSERT INTO Accounts VALUES ('${username.value}', '${password2.value}', '${job.value}', '0')`)
    } else {
      connection.query(`INSERT INTO Accounts VALUES ('${username.value}', '${password.value}', '${job.value}', '0')`)
    }

  })();
}