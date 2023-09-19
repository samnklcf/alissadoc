const { Configuration, OpenAIApi } = require("openai");

export default function handler(req, res) {
  async function sam() {
    const configuration = new Configuration({
      apiKey: "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",
    });
    const openai = new OpenAIApi(configuration);
    let sam = req.body.prompt

    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: sam,
      temperature: 0.9,
      max_tokens: 2000,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.6,
      stop: [" Human:", " AI:"],
    });
    res.status(200).json(response.data.choices[0].text);

    console.log();
  }

  sam();
}
