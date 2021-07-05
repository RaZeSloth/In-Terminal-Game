module.exports.menu = function menu() {
  (async () => {

    console.clear()

    chalk = require('chalk'), prompts = require('prompts'), { login } = require('../functions/login'), { register } = require('../functions/register'), { settings } = require('../functions/settings'), { info } = require('../functions/info')

    console.log(chalk.gray('- Menu\n'))
    let menu = await prompts([{ type: 'select', name: 'value', message: 'What do you want to do?', choices: [{ title: 'Register', value: 'register' }, { title: 'Login', value: 'login' }, { title: 'Settings', value: 'settings' }, { title: 'Info', value: 'info' }], initial: 1 }]);
    console.clear()

    eval(menu.value)()
  })();
}