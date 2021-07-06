(async () => {

  console.clear()

  chalk = require('chalk'), prompts = require('prompts'), { connection } = require('./database/db'), { login } = require('./functions/login'), { register } = require('./functions/register'), { settings } = require('./functions/settings'), { info } = require('./functions/info'), { work } = require('./functions/work'), { logout } = require('./functions/logout')


  connection.query(`SELECT * FROM Accounts WHERE active = '1'`, async (err, activeacc) => {

    if (activeacc.length != 0) {
      console.clear()
      console.log(chalk.gray('- Menu\n'))
      let choosemenu = await prompts([{ type: 'select', name: 'value', message: 'What do you want to do now?', choices: [{ title: 'Log out', value: 'logout' }, { title: 'Settings', value: 'settings' }, { title: 'Go to work', value: 'work' }], initial: 1 }]);
      console.clear()

      eval(choosemenu.value)()
    } else {
      console.log(chalk.gray('- Menu\n'))
      let menu = await prompts([{ type: 'select', name: 'value', message: 'What do you want to do?', choices: [{ title: 'Register', value: 'register' }, { title: 'Login', value: 'login' }, { title: 'Settings', value: 'settings' }, { title: 'Info', value: 'info' }], initial: 1 }]);
      console.clear()

      eval(menu.value)()
    }

  })


})();