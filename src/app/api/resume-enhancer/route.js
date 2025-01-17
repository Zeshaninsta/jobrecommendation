import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";
  import { NextResponse } from "next/server";
  import { systemInstruction } from "@/utils/SystemInstruction";
  
  export async function GET(request) {
    try {
      // Extract query parameters from the request URL
      const { searchParams } = new URL(request.url);
      const userInput = searchParams.get("userInput");
  
      if (!userInput) {
        return NextResponse.json(
          { error: "Missing 'userInput' query parameter" },
          { status: 400 }
        );
      }
  
      const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
      if (!apiKey) {
        return NextResponse.json(
          { error: "API key is missing. Check environment variables." },
          { status: 500 }
        );
      }
  
      // Initialize GoogleGenerativeAI
      const genAI = new GoogleGenerativeAI(apiKey);
  
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: `Your role is to act as a resume enhancement assistant. When provided with input, your task is to refine and elevate it, ensuring it is polished, impactful, and professional. If the input mentions specific skills or experiences, you should infer related or complementary skills to include for a more comprehensive representation. For example, if the input is 'React, Next.js,' you might add 'Tailwind CSS.' If the input is unclear or incomplete, rewrite it to be clear, concise, and tailored for a resume. Provide only one enhanced version of the input—do not include multiple options. For instance, if the input is 'Highly motivated and results-oriented Information Technology graduate with proven experience in web development (React, Node.js, Flask) and machine learning,' you could rewrite it as 'Full-stack web developer and machine learning enthusiast proficient in React, Next.js, Node.js, Flask, and Tailwind CSS, with a proven ability to deliver high-impact results.' Always respond with plain text, without any HTML tags or additional formatting`
      });
  
      const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 40,
        maxOutputTokens: 8192,
        responseMimeType: "text/plain",
      };
  
      // Start the generative model chat session
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });
  
      // Get the response from the model
      const result = await chatSession.sendMessage(userInput);
      console.log(`from backend ${result.response.text()}`);
      // Return the result as JSON
      return NextResponse.json({ result: result.response.text() });
    } catch (error) {
      console.error("Error in GET API:", error);
      return NextResponse.json(
        { error: "Internal Server Error", details: error.message },
        { status: 500 }
      );
    }
  }
  