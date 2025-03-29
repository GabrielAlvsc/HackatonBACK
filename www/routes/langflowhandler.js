const { Op } = require("sequelize");

module.exports = (app) => {

    app.get('/xl', async (req, res) => {
        return res.status(200).json({ message: "success" });
    }
    ),
    app.get('/lang/:input', async (req, res) => {
        
        try {
            const response = await fetch(
                "http://201.48.114.84:7860/api/v1/run/498e4130-6616-4cc1-8895-ef1af63446ce?stream=false",
                {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${process.env.TOKEN}`,
                        "Content-Type": "application/json",
                        "x-api-key": process.env.API_KEY
                    },
                    body: JSON.stringify({
                        output_type: "chat",
                        input_type: "chat",
                        tweaks: {
                          "ChatInput-N0EMJ": {
                                  "background_color": "",
                                  "chat_icon": "",
                                  "files": "",
                                  "input_value": req.body.tweaks.ChatInput-N0EMJ.input_value,
                                  "sender": "User",
                                  "sender_name": "User",
                                  "session_id": "",
                                  "should_store_message": true,
                                  "text_color": ""
                          },
                          "ParseData-vR0Fh": {
                                  "sep": "\n",
                                  "template": "{text}"
                          },
                          "Prompt-gBR8e": {
                                  "context": "",
                                  "template": req.body.tweaks.Prompt-gBR8e.template,
                                  "tool_placeholder": "",
                                  "crime": ""
                          },
                          "SplitText-sBzQS": {
                                  "chunk_overlap": 200,
                                  "chunk_size": 1000,
                                  "separator": "\n",
                                  "text_key": "text"
                          },
                          "ChatOutput-V5WPY": {
                                  "background_color": "",
                                  "chat_icon": "",
                                  "clean_data": true,
                                  "data_template": "{text}",
                                  "input_value": "",
                                  "sender": "Machine",
                                  "sender_name": "AI",
                                  "session_id": "",
                                  "should_store_message": true,
                                  "text_color": ""
                          },
                          "File-TMaC6": {
                                  "concurrency_multithreading": 4,
                                  "delete_server_file_after_processing": true,
                                  "ignore_unspecified_files": false,
                                  "ignore_unsupported_extensions": true,
                                  "path": "",
                                  "silent_errors": false,
                                  "use_multithreading": false
                          },
                          "Chroma-2u5i5": {
                                  "allow_duplicates": false,
                                  "chroma_server_cors_allow_origins": "",
                                  "chroma_server_grpc_port": null,
                                  "chroma_server_host": "",
                                  "chroma_server_http_port": null,
                                  "chroma_server_ssl_enabled": false,
                                  "collection_name": "langflow",
                                  "limit": null,
                                  "number_of_results": 10,
                                  "persist_directory": "",
                                  "search_query": "",
                                  "search_type": "Similarity",
                                  "should_cache_vector_store": false
                          },
                          "Chroma-20qQS": {
                                  "allow_duplicates": false,
                                  "chroma_server_cors_allow_origins": "",
                                  "chroma_server_grpc_port": null,
                                  "chroma_server_host": "",
                                  "chroma_server_http_port": null,
                                  "chroma_server_ssl_enabled": false,
                                  "collection_name": "langflow",
                                  "limit": null,
                                  "number_of_results": 10,
                                  "persist_directory": "./data",
                                  "search_query": "",
                                  "search_type": "Similarity",
                                  "should_cache_vector_store": true
                          },
                          "CohereEmbeddings-gQnu9": {
                                  "api_key": "",
                                  "max_retries": 3,
                                  "model_name": "embed-english-v2.0",
                                  "request_timeout": null,
                                  "truncate": "",
                                  "user_agent": "langchain"
                          },
                          "CohereEmbeddings-1VYdJ": {
                                  "api_key": "eyGPPaxa796NSUN9lVB1sJsgbLm3dt9FgQPO2VQ1",
                                  "max_retries": 3,
                                  "model_name": "embed-english-v2.0",
                                  "request_timeout": null,
                                  "truncate": "",
                                  "user_agent": "langchain"
                          },
                          "GoogleGenerativeAIModel-wrwUu": {
                                  "api_key": "AIzaSyCRnd10UzOny5nmW0lQby6a3iuCUcBs1MI",
                                  "input_value": "",
                                  "max_output_tokens": null,
                                  "model_name": "learnlm-1.5-pro-experimental",
                                  "n": null,
                                  "stream": false,
                                  "system_message": "",
                                  "temperature": 0.1,
                                  "tool_model_enabled": false,
                                  "top_k": null,
                                  "top_p": null
                          }
                        }
                    })
                }
            );
            console.log(response.body);
    
            const data = await response.json();
            res.json(data);
        } catch (error) {
            console.error("Erro na requisição:", error);
            res.status(500).json({ error: "Erro interno no servidor" });
        }
    });
        
    
}