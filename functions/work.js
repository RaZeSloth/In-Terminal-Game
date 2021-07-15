module.exports.work = function work() {
    (async () => {

        chalk = require('chalk'), prompts = require('prompts'), { connection } = require('../database/db'), { LOCATIONS } = require('../other/joblocations'), { commandHandler } = require('./commandHandler')


        const commandsmap = new Map()
        const aliasesmap = new Map()

        commandHandler(commandsmap, aliasesmap)

        connection.query(`SELECT job FROM Accounts WHERE Active = '1'`, async (err, result) => {

            let job = result[0].job

            let jobLocationsArr = LOCATIONS[job].locations

            console.log(chalk.gray('- Work\n'))

            let jobLocation = await prompts([{ type: 'select', name: 'value', message: 'At which location do you want to work?', choices: [{ title: jobLocationsArr[0], value: jobLocationsArr[0] }, { title: jobLocationsArr[1], value: jobLocationsArr[1] }], initial: 1 }]);

            console.clear()

            if (jobLocation.value) {

                console.log(chalk.gray('- Work\n'))

                while (true) {
                    let res = await prompts([{ type: 'text', name: 'value', message: jobLocation.value }]);

                    let prefix = '/'
                    let messageArray = res.value.split(" ");
                    let command = messageArray[0].toLowerCase()
                    let args = messageArray.slice(1);
                    let commands = commandsmap.get(command.slice(prefix.length)) || commandsmap.get(aliasesmap.get(command.slice(prefix.length)));
                    
                    if (commands) commands.run(chalk, prompts, connection);
                }

            }
        })

    })();
}