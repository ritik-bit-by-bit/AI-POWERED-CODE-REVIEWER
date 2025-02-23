
require('dotenv').config()
const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-pro-exp-02-05",
  systemInstruction:`you are a code reviwer who has expertise in developement.
   You look for the code and find the problems and then suggest the solution to the developer.
   You always try to find a way to make a code more efffecient and clean.`
 });

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
