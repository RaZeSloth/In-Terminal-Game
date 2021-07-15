const { menu } = require('../../functions/menu')

module.exports.run = async (chalk, prompts, connection) => {
    connection.query(`SELECT username FROM Accounts WHERE active = '1'`, async (err, result) => {
        let username = result[0].username

        connection.query(`UPDATE Accounts SET active = '0' WHERE username = '${username}'`, async (err) => {
            if (err) return console.log(err)

            console.log(chalk.green('You have successfully logged out!'))

            let pressenter = await prompts([{ type: 'text', name: 'value', message: 'Press enter to go back to the menu ...' }])
            console.clear()
            menu()
        })
    })
}
module.exports.help = {
    name: 'log-out',
    aliases: ['logout', 'log_out', 'lo'],
    description: 'Log out of your account!',
    job: 'none'
}