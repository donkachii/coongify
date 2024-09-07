import { NextResponse } from "next/server";
import { AssemblyAI } from "assemblyai";

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

// audio_file = open("/path/to/file/audio.mp3", "rb");
// transcription = client.audio.transcriptions.create(
//   (model = "whisper-1"),
//   (file = audio_file)
// );
// print(transcription.text);

const client = new AssemblyAI({
  apiKey: "bf6a0d27f3c24d0cb6b5edbe00d1936d",
});

const audioUrl =
  "https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3";

const config = {
  audio_url: audioUrl,
};

export async function POST(req) {
  const data = await req.json();
  const transcript = await client.transcripts.transcribe(data);

  return new NextResponse(transcript.content);
}
