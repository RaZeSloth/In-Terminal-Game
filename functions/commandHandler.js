const ms = require('ms'), fs = require('fs');

module.exports.commandHandler = function commandHandler(commandsmap, aliasesmap) {

    fs.readdirSync('./commands/').forEach(dir => {

        fs.readdir(`./commands/${dir}`, (err, files) => {
            if (err) console.log(err)
            
            var jsFiles = files.filter(f => f.split(".").pop() === "js");

            jsFiles.forEach(file => {
                var fileGet = require(`../commands/${dir}/${file}`);

                commandsmap.set(fileGet.help.name, fileGet);

                fileGet.help.aliases.forEach(alias => {
                    aliasesmap.set(alias, fileGet.help.name);
                })
            });
        });
    });
}