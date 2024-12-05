const axios = require('axios');

module.exports.config = {
  name: "ai",
  credits: "clarence",
  version: "1.0.0",
  role: 0,
  aliase: [""],
  cooldown: 0,
  hasPrefix: false,
};

module.exports.run = async function ({ api, event, args }) {
  try {
    const { messageID, messageReply, senderID } = event;
    let prompt = args.join(' ');

    if (messageReply) {
      const repliedMessage = messageReply.body;
      prompt = `${repliedMessage} ${prompt}`;
    }

    if (!prompt) {
      return api.sendMessage('Please provide a prompt to generate a text response.\nExample: Ai What is the meaning of life?', event.threadID, messageID);
    }

    // Use senderID as the uid
    const uid = senderID; // This will automatically use the sender's ID
    const neko_api = `https://chat-gpt-master.onrender.com/api/hercai?question=${encodeURIComponent(prompt)}`;

    // Fetch response from the API
    const response = await axios.get(neko_api);

    if (response.data && response.data.reply) {
      const generatedText = response.data.reply;
      api.sendMessage({ body: generatedText, attachment: null }, event.threadID, messageID);
    } else {
      console.error('API response did not contain expected data:', response.data);
      api.sendMessage(`❌ An error occurred while generating the text response. Please try again later. Response data: ${JSON.stringify(response.data)}`, event.threadID, messageID);
    }
  } catch (error) {
    console.error('Error:', error);
    api.sendMessage(`❌ An error occurred while generating the text response. Please try again later. Error details: ${error.message}`, event.threadID, event.messageID);
  }
};
