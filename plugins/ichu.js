    /* # Exclusively Sophia
    # @lasiya99X t.me/lasiya99X
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const lol = "need some word"


    if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'alphax ?(.*)', fromMe: true,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/ttlogo?text1=${encodeURIComponent(match[1])}&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*Made by Sophia*' })

    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'alphax ?(.*)', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

        if (match[1] === '') return await message.sendMessage(lol);

        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/ttlogo?text1=${encodeURIComponent(match[1])}&text2=${encodeURIComponent(match[1])}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: '*𝕂𝔸𝕎𝔼𝔼𝕊ℍ𝔸❤️⃝➤⃟̱̱̱̱̄̄̄̄ˢᵐᵃʳᵗ ᵇᵒᵗ🔥*\nMEMBER OF *☬ᴄyʙ⃢ᴇʀ ᴀʀ⃟ᴍy␍ ʀᴇᴘᴏʀᴛᴇʀꜱ*\n\n' })

    }));

}
