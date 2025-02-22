// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

// async function generateContent(prompt) {
//     const result=await model.generateContent(prompt);
//     return result.response.text();
// }
// module.exports=generateContent
require('dotenv').config()
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-pro-exp-02-05" });

async function generateContent(prompt) {
  try {
    const result = await model.generateContent(prompt);
    if (result && result.response) {
      return { response: result.response.text() }; // Return an object for better structure
    } else {
      console.error("No response received from Gemini API.");
      return { error: "No response from the AI model.", statusCode: 500 }; // Indicate an error
    }
  } catch (error) {
    console.error("Error generating content:", error);
    return { error: "Error generating content. Please try again later.", statusCode: 500 };
  }
}

module.exports = generateContent;
