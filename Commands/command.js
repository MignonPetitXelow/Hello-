const {BOT_PREFIX}  = require(process.env.PREFIX)

module.exports = (client, aliases, callback) => 
{

    if (typeof aliases === 'string')
    {
        aliases = [aliases]
    }

    client.once('message', message => 
    {
        const { content } = message;
        
        aliases.array.forEach(alias => {
            const command = `${BOT_PREFIX}${alias}`

            if(content.startWith(`${command}`) ||content === command )
            {
                callback(message)
            }
        });
    })
}