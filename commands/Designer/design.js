module.exports.run = async (chalk, prompts, connection) => {
    connection.query(`SELECT username FROM Accounts WHERE active = '1'`, async (err, result) => {
        let username = result[0].username

        connection.query(`SELECT job from Accounts WHERE username = '${username}'`, async (err, rawjob) => {
            let job = rawjob[0].job

            if (!job == 'designer') {

            } else {
                console.log(chalk.red('Only accessible as a Designer!'))
            }
        })
    })
}
module.exports.help = {
    name: 'design',
    aliases: [],
    description: 'Design something! (Only accessible with the job designer)',
    job: 'none'
}