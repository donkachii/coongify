import { NextResponse } from "next/server";
import OpenAI from "openai";

// export async function POST(req) {
//   const data = await req.json();

//   const openai = new OpenAI({
//     baseURL: "https://openrouter.ai/api/v1",
//     apiKey: process.env.OPENAI_API_KEY,
//   });

//   const completion = await openai.chat.completions.create({
//     messages: [
//       { role: "system", content: systemPrompt },
//       { role: "user", content: data },
//     ],
//     model: "openai/gpt-3.5-turbo",
//     stream: true,
//   });

//   return new NextResponse(completion.data.choices[0].message.content);
// }

audio_file = open("/path/to/file/audio.mp3", "rb");
transcription = client.audio.transcriptions.create(
  (model = "whisper-1"),
  (file = audio_file)
);
print(transcription.text);
