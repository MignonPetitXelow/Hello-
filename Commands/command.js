const {BOT_PREFIX}  = "!"

module.exports = (client, aliases, callback) => 
{

    if (typeof aliases === 'string')
    {
        aliases = [aliases]
    }

    client.once('message', message => 
    {
        const { content } = message;
        
        aliases.forEach(alias => {
            const command = `${BOT_PREFIX}${alias}`

            if(content.startsWith(`${command} `) ||content === command )
            {
                callback(message)
            }
        });
    })
}