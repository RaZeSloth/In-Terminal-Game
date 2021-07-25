module.exports.login = function login() {
    (async () => {

       const chalk = require('chalk'), prompts = require('prompts'), { connection } = require('../database/db'), { logout } = require('../functions/logout'), { settings } = require('../functions/settings'), { work } = require('../functions/work'), { menu } = require('../functions/menu')

        console.log(chalk.gray('- Login\n'))
        var username = await prompts([{ type: 'text', name: 'value', message: `Username:` }]);

        connection.query(`SELECT * FROM Accounts WHERE username = '${username.value}'`, async (err, account) => {


            if (!account[0]) {

                console.clear()
                console.log(chalk.red('There is no known account with this username!\n'))
                let pressenter = await prompts([{ type: 'text', name: 'value', message: 'Press enter to go back to the menu ...'}])
                console.clear()
                menu()


            } else {


                console.clear()
                console.log(chalk.gray('- Login\n'))
                var password = await prompts([{ type: 'password', name: 'value', message: `Password:` }]);
                console.clear()

                if (account[0].pass != password.value) {

                    console.clear()
                    console.log(chalk.red('Wrong password entered!\n'))
                    let pressenter = await prompts([{ type: 'text', name: 'value', message: 'Press enter to go back to the menu ...'}])
                    console.clear()
                    menu()
    
    
                } else {
                    connection.query(`UPDATE Accounts SET active = '1' WHERE username = '${username.value}'`)

                    console.clear()
                    console.log(chalk.green('Successfully logged in!\n'))
                    let pressenter = await prompts([{ type: 'text', name: 'value', message: 'Press enter to continue ...'}])
                    console.clear()
                    let choosemenu = await prompts([{ type: 'select', name: 'value', message: 'What do you want to do now?', choices: [{ title: 'Log out', value: 'logout' }, { title: 'Settings', value: 'settings' }, { title: 'Go to work', value: 'work' }], initial: 1 }]);
                    console.clear()
        
                    eval(choosemenu.value)()
                }


            }

        })


    })();
}