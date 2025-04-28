const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');

// OpenAI setup
const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

router.post('/generate', async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant for generating creative project ideas.' },
        { role: 'user', content: prompt },
      ],
    });

    const botMessage = response.data.choices[0].message.content;
    res.json({ bot: botMessage });
  } catch (error) {
    console.error('OpenAI API error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

module.exports = router;
