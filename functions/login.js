module.exports.login = function login() {
    (async () => {

        chalk = require('chalk'), prompts = require('prompts'), { connection } = require('../database/db'), { logout } = require('../functions/logout'), { settings } = require('../functions/settings'), { work } = require('../functions/work'), { menu } = require('../functions/menu')

        console.log(chalk.gray('- Login\n'))
        var username = await prompts([{ type: 'text', name: 'value', message: `Username:` }]);

        connection.query(`SELECT * FROM Accounts WHERE username = '${username.value}'`, async (err, account) => {


            if (!account[0]) {

                console.clear()
                console.log(chalk.red('\nThere is no known account with this username!\n'))
                console.log('↻ | Loading…')
                setTimeout(function () {
                    console.clear()
                    console.log(chalk.red('\nThere is no known account with this username!\n'))
                    console.log('↷ | Loading…')

                    setTimeout(function () {
                        console.clear()
                        console.log(chalk.red('\nThere is no known account with this username!\n'))
                        console.log('↻ | Loading…')

                        setTimeout(function () {
                            return menu()
                        }, 500)
                    }, 500)
                }, 500)


            } else {


                console.clear()
                console.log(chalk.gray('- Login\n'))
                var password = await prompts([{ type: 'password', name: 'value', message: `Password:` }]);
                console.clear()

                if (account[0].pass != password.value) {

                    console.clear()
                    console.log(chalk.red('\nWrong password entered!\n'))
                    console.log('↻ | Loading…')
                    setTimeout(function () {
                        console.clear()
                        console.log(chalk.red('\nWrong password entered!\n'))
                        console.log('↷ | Loading…')
    
                        setTimeout(function () {
                            console.clear()
                            console.log(chalk.red('\nWrong password entered!\n'))
                            console.log('↻ | Loading…')
    
                            setTimeout(function () {
                                return menu()
                            }, 500)
                        }, 500)
                    }, 500)
    
    
                } else {
                    connection.query(`UPDATE Accounts SET active = '1' WHERE username = '${username.value}'`)

                    console.clear()
                    console.log(chalk.green('Successfully logged in!'))
                    console.log('↻ | Loading…')
                    setTimeout(async () => {
                        console.clear()
                        console.log(chalk.green('Successfully logged in!'))
                        console.log('↷ | Loading…')
    
                        setTimeout(async () => {
                            console.clear()
                            console.log(chalk.green('Successfully logged in!'))
                            console.log('↻ | Loading…')
    
                            setTimeout(async () => {
                                console.clear()
                                let choosemenu = await prompts([{ type: 'select', name: 'value', message: 'What do you want to do now?', choices: [{ title: 'Log out', value: 'logout' }, { title: 'Settings', value: 'settings' }, { title: 'Go to work', value: 'work' }], initial: 1 }]);
                                console.clear()
                    
                                eval(choosemenu.value)()
                            }, 500)
                        }, 500)
                    }, 500)
                }


            }

        })


    })();
}