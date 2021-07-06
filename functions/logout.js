module.exports.logout = function logout() {
    (async () => {

        chalk = require('chalk'), prompts = require('prompts'), { connection } = require('../database/db'), { menu } = require('../functions/menu'), { settings } = require('../functions/settings'), { work } = require('../functions/work')

        let sure = await prompts([{ type: 'toggle', name: 'value', message: 'Are u sure you want to log out?', initial: true, active: 'yes', inactive: 'no' }])

        if (sure.value) {

            connection.query(`SELECT username FROM Accounts WHERE active = '1'`, async (err, activeaccount) => {
                let activeaccountusername = activeaccount[0].username

                connection.query(`UPDATE Accounts SET active = '0' WHERE username = '${activeaccountusername}'`)
                console.clear()
                console.log(chalk.green('Successfully logged out!'))
                console.log('↻ | Loading…')
                setTimeout(async ()  => {
                    console.clear()
                    console.log(chalk.green('Successfully logged out!'))
                    console.log('↷ | Loading…')

                    setTimeout(async ()  => {
                        console.clear()
                        console.log(chalk.green('Successfully logged out!'))
                        console.log('↻ | Loading…')

                        setTimeout(async ()  => {
                            menu()
                        }, 500)
                    }, 500)
                }, 500)
            })

        } else {
            console.clear()
            console.log(chalk.gray('- Menu\n'))
            let choosemenu = await prompts([{ type: 'select', name: 'value', message: 'What do you want to do now?', choices: [{ title: 'Log out', value: 'logout' }, { title: 'Settings', value: 'settings' }, { title: 'Go to work', value: 'work' }], initial: 1 }]);
            console.clear()

            eval(choosemenu.value)()
        }


    })();
}