(async () => {

  const { login } = require('./functions/login')
  const { register } = require('./functions/register')
  const { settings} = require('./functions/settings')

    const prompts = require('prompts')

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