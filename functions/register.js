module.exports.register = function register() {
  (async () => {

    chalk = require('chalk'), prompts = require('prompts'), { connection } = require('../database/db')

    var username = await prompts([{ type: 'text', name: 'value', message: `Create your username:` }]);
    console.clear()
    
    if (username.value.length > 20 || username.value.length <= 2) {

        do {

          console.log(chalk.red('\nSomething is wrong with your username!\nUsername Requirements: MUST be longer than 2 characters, MUST be shorter than 8 characters\n'))

          var username = await prompts([{ type: 'text', name: 'value', message: `Create your username:` }]);
          console.clear()

          if (!username.value.length > 20 && !username.value.length <= 2) {
            break;
          }
        }
        while (username.value.length > 20 || username.value.length <= 2);

      }



      var password = await prompts([{ type: 'password', name: 'value', message: `Create your password:` }]);
      console.clear()

      if (password.value.length > 20 || password.value.length < 8) {

        do {

          console.log(chalk.red('\nSomething is wrong with your password!\nPassword Requirements: MUST be longer than 8 characters, MUST be shorter than 8 characters\n'))

          var password = await prompts([{ type: 'password', name: 'value', message: `Create your password:` }]);
          console.clear()

          if (!password.value.length > 20 && !password.value.length < 8) {
            break;
          }
        }
        while (password.value.length > 20 || password.value.length < 8);

      }

      var confirmpassword = await prompts([{ type: 'password', name: 'value', message: `Confirm your password:` }]);
      console.clear()

      if (confirmpassword.value != password.value) {

        do {

          console.log(chalk.red('\nThe 2 passwords do not match!\n'))

          var confirmpassword = await prompts([{ type: 'password', name: 'value', message: `Confirm your password:` }]);
          console.clear()

          if (confirmpassword.value == password.value) {
            break;
          }
        }
        while (confirmpassword.value != password.value);

      }


      let job = await prompts([{ type: 'select', name: 'value', message: `Okay ${username.value}, what do you want to do as job?`, choices: [{ title: 'MacDonalds Manager', value: 'mcmanager' }, { title: 'Web Developer', value: 'webdev' }, { title: 'Professional Gamer', value: 'profgamer' }, { title: 'Youtuber', value: 'youtuber' }, { title: 'Designer', value: 'designer' },], initial: 1 }]);
      console.clear()
      
      
      if (username.value && password.value && job.value) {
      
      connection.query(`INSERT INTO Accounts VALUES ('${username.value}', '${password.value}', '${job.value}', '0')`, function(err) {
        if (err) {
          return console.log(chalk.red('\nSomething went wrong while processing the data to the database!\nPossible causes:\n- You have already created an account with this username.\n- You do not have a MySQL server on your PC.\n- You have not modified the data in the .env file as requested.\n'))
        }
      })
      await console.log(chalk.green('Your account has been successfully created!'))

      } else {
        return console.log(chalk.red('\nYour account could not be created because not all data has been entered.\n'))
      }





  })();
}