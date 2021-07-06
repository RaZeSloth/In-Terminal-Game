module.exports.register = function register() {
  (async () => {

    chalk = require('chalk'), prompts = require('prompts'), { connection } = require('../database/db'), { logout } = require('../functions/logout'), { settings } = require('../functions/settings'), { work } = require('../functions/work')

    console.log(chalk.gray('- Register\n'))
    var username = await prompts([{ type: 'text', name: 'value', message: `Create your username:` }]);
    console.clear()

    if (username.value.length > 20 || username.value.length <= 2) {

      do {
        console.log(chalk.gray('- Register\n'))
        console.log(chalk.red('\nSomething is wrong with your username!\nUsername Requirements: MUST be longer than 2 characters, MUST be shorter than 8 characters\n'))

        var username = await prompts([{ type: 'text', name: 'value', message: `Create your username:` }]);
        console.clear()

        if (!username.value.length > 20 && !username.value.length <= 2) {
          break;
        }
      }
      while (username.value.length > 20 || username.value.length <= 2);

    }


    console.log(chalk.gray('- Register\n'))
    var password = await prompts([{ type: 'password', name: 'value', message: `Create your password:` }]);
    console.clear()

    if (password.value.length > 20 || password.value.length < 8) {

      do {
        console.log(chalk.gray('- Register\n'))
        console.log(chalk.red('\nSomething is wrong with your password!\nPassword Requirements: MUST be longer than 8 characters, MUST be shorter than 8 characters\n'))

        var password = await prompts([{ type: 'password', name: 'value', message: `Create your password:` }]);
        console.clear()

        if (!password.value.length > 20 && !password.value.length < 8) {
          break;
        }
      }
      while (password.value.length > 20 || password.value.length < 8);

    }

    console.log(chalk.gray('- Register\n'))
    var confirmpassword = await prompts([{ type: 'password', name: 'value', message: `Confirm your password:` }]);
    console.clear()

    if (confirmpassword.value != password.value) {

      do {

        console.log(chalk.gray('- Register\n'))
        console.log(chalk.red('\nThe 2 passwords do not match!\n'))

        var confirmpassword = await prompts([{ type: 'password', name: 'value', message: `Confirm your password:` }]);
        console.clear()

        if (confirmpassword.value == password.value) {
          break;
        }
      }
      while (confirmpassword.value != password.value);

    }

    console.log(chalk.gray('- Register\n'))
    let job = await prompts([{ type: 'select', name: 'value', message: `Okay ${username.value}, what do you want to do as job?`, choices: [{ title: 'MacDonalds Manager', value: 'mcmanager' }, { title: 'Web Developer', value: 'webdev' }, { title: 'Professional Gamer', value: 'profgamer' }, { title: 'Youtuber', value: 'youtuber' }, { title: 'Designer', value: 'designer' },], initial: 1 }]);
    console.clear()


    if (username.value && password.value && job.value) {

      connection.query(`INSERT INTO Accounts VALUES ('${username.value}', '${password.value}', '${job.value}', '0', '1')`, async(err) => {
        if (err) {

          console.log(chalk.gray('- Register\n'))
          return console.log(chalk.red('\nSomething went wrong while processing the data to the database!\nPossible causes:\n- You have already created an account with this username.\n- You do not have a MySQL server on your PC.\n- You have not modified the data in the .env file as requested.\n'))
        } else {

          console.log(chalk.gray('- Register\n'))
          console.log(chalk.green('Your account has been successfully created!'))
          console.log('↻ | Loading…')
          setTimeout(async ()  => {
              console.clear()
              console.log(chalk.green('Your account has been successfully created!'))
              console.log('↷ | Loading…')

              setTimeout(async ()  => {
                  console.clear()
                  console.log(chalk.green('Your account has been successfully created!'))
                  console.log('↻ | Loading…')

                  setTimeout(async ()  => {
                    console.clear()
                    console.log(chalk.gray('- Menu\n'))
                    let choosemenu = await prompts([{ type: 'select', name: 'value', message: 'What do you want to do now?', choices: [{ title: 'Log out', value: 'logout' }, { title: 'Settings', value: 'settings' }, { title: 'Go to work', value: 'work' }], initial: 1 }]);
                    console.clear()
                    eval(choosemenu.value)()
                  }, 500)
              }, 500)
          }, 500)
        }
        
      })

    } else {
      console.log(chalk.gray('- Register\n'))
      return console.log(chalk.red('\nYour account could not be created because not all data has been entered.\n'))
    }





  })();
}