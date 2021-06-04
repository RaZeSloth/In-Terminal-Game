(async () => {

  prompts = require('prompts'), { login } = require('./functions/login'), { register } = require('./functions/register'), { settings} = require('./functions/settings')   

    const menu = await prompts([
        {
            type: 'select',
            name: 'value',
            message: 'What do you want to do?',
            choices: [
              { title: 'Register', value: 'register' },
              { title: 'Login', value: 'login'},
              { title: 'Settings', value: 'settings' }
            ],
            initial: 1
          }
    ]);
    eval(menu.value)()
  })();