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
      return api.sendMessage(
        'Please provide a prompt to generate a text response.\nExample: Ai What is the meaning of life?',
        event.threadID,
        event.messageID
      );
    }

    // Use senderID as the uid
    const uid = senderID; // Automatically use the sender's ID
    const neko_api = `https://rest-api-french3.onrender.com/api/clarencev2?prompt=${encodeURIComponent(prompt)}&uid=${uid}`;

    // Fetch response from the API
    const response = await axios.get(neko_api);

    if (response.data && response.data.response) {
      const generatedText = response.data.response; // Updated field
      api.sendMessage({ body: generatedText, attachment: null }, event.threadID, event.messageID);
    } else {
      console.error('API response did not contain expected data:', response.data);
      api.sendMessage(
        `❌ An error occurred while generating the text response. Please try again later. Response data: ${JSON.stringify(response.data)}`,
        event.threadID,
        event.messageID
      );
    }
  } catch (error) {
    console.error('Error:', error);
    api.sendMessage(
      `❌ An error occurred while generating the text response. Please try again later. Error details: ${error.message}`,
      event.threadID,
      event.messageID
    );
  }
};