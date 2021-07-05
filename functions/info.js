module.exports.info = function info() {
    (async () => {

        chalk = require('chalk'), prompts = require('prompts'), { connection } = require('../database/db'), md = require('console-markdown'), fs = require("fs"), { menu } = require('../functions/menu')

        let str = fs.readFileSync("info.md", "utf8")

        console.log(chalk.gray('- Info\n'))

        console.md(str)

        console.log(`\n⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯`)
        console.log(chalk.white('\nThis is a game that is made with JavaScript and works completely in your own terminal! Just download the needed dependencies, open the files in a terminal and let the game begin!\n\n' + chalk.bold('Made by: ') + chalk.white('Iliannnn\n') + chalk.bold('Repo link: ') + chalk.white('https://github.com/Iliannnn/In-Terminal-Game\n')))

        let goback = await prompts([{ type: 'toggle', name: 'value', message: 'Do you want to go back to the menu?', initial: true, active: 'yes', inactive: 'no' }])

        if (goback.value) {
            menu()
        } else {
            return;
        }
    })();
}