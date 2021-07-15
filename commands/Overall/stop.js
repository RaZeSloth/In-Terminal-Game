module.exports.run = async (chalk, prompts, connection) => {

    console.log(chalk.green('Game stopped!'))
    process.exit()
}
module.exports.help = {
    name: 'stop',
    aliases: ['exit', 'quit'],
    description: 'Stops the game!',
    job: 'none'
}