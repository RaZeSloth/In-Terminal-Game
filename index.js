(async () => {

  console.clear()

  prompts = require('prompts'), { login } = require('./functions/login'), { register } = require('./functions/register'), { settings } = require('./functions/settings'), { info } = require('./functions/info')

  const menu = await prompts([{ type: 'select', name: 'value', message: 'What do you want to do?', choices: [{ title: 'Register', value: 'register' }, { title: 'Login', value: 'login' }, { title: 'Settings', value: 'settings' }, { title: 'Info', value: 'info'}], initial: 1 }]);
  console.clear()
  
  eval(menu.value)()
})();