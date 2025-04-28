const { Configuration, OpenAIApi } = require('openai');

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
);

const generateIdea = async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant for generating project ideas.' },
        { role: 'user', content: prompt },
      ],
    });

    const botReply = response.data.choices[0].message.content;
    res.json({ bot: botReply });
  } catch (error) {
    console.error('OpenAI error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to generate response' });
  }
};

module.exports = { generateIdea };
