import { GoogleGenerativeAI } from "@google/generative-ai";
// import { GEMINI_API_KEY } from "./contants";
export const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_KEY);
