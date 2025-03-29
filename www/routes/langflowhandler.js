const { Op } = require("sequelize");

require('dotenv').config();
const fetch = require('node-fetch');


module.exports = (app) => {
        


    app.get('/xl', async (req, res) => {
        return res.status(200).json({ message: "success" });
    }
    ),
    app.get('/lang/:input', async (req, res) => {
        const { input } = req.params;
        console.log(input)
        try {
                const response = await fetch( "http://201.48.114.84:7860/api/v1/run/498e4130-6616-4cc1-8895-ef1af63446ce?stream=false", {
                        method: "POST",
                                headers: {
                                "Authorization": `Bearer ${process.env.TOKEN}`,
                                "Content-Type": "application/json",
                                "x-api-key": process.env.API_KEY,
                        },
                        body: JSON.stringify({
                                input_value: input,
                                output_type: "chat",
                                input_type: "chat",
                                tweaks: {
                                        "ChatInput-9CNHr": {},
                                        "Prompt-f19Pt": {},
                                        "ChatOutput-vqiqw": {},
                                        "OpenAIModel-bQ5WJ": {},
                                },
                }),
                });
                const data = await response.json();
                return res.status(200).json(data);
        } catch (error) {
                console.error("Erro na requisição:", error);
                return res.status(500).json({ error: "Erro interno no servidor" });
        }
    });
        
    
}