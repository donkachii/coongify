"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineKeyboardVoice,
} from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";
import Markdown from "react-markdown";
import { AssemblyAI } from "assemblyai";

const VoiceAssistant = () => {
  const [isWaitingAIResponse, setIsWaitingAIResponse] = useState("");
  const [audioURL, setAudioURL] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const recordingControl = useAudioRecorder();

  const sendChat = async () => {
    if (!message.trim()) return;

    // Update UI with user's message
    setMessages((messages) => [
      ...messages,
      { role: "user", content: message },
      { role: "assistant", content: "" },
    ]);

    setMessage("");

    try {
      // Send message to the API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: message }],
        }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      // Parse the response as JSON
      const data = await response.json();

      // Update UI with assistant's response
      setMessages((prevMessages) => {
        const newMessages = [...prevMessages];
        newMessages[newMessages.length - 1].content = data.content;
        return newMessages;
      });
    } catch (error) {
      console.error("Error fetching chat response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { role: "assistant", content: "Sorry, something went wrong." },
      ]);
    }
  };

  const client = new AssemblyAI({
    apiKey: "bf6a0d27f3c24d0cb6b5edbe00d1936d",
  });

  const audioUrl =
    "https://storage.googleapis.com/aai-web-samples/5_common_sports_injuries.mp3";

  const config = {
    audio_url: audioUrl,
  };

  const onAudioRecordingComplete = async (blob) => {
    setIsWaitingAIResponse(true);

    const url = URL.createObjectURL(blob);
    setAudioURL(url);

    const result = await fetch("/api/voice", {
      method: "POST",
      body: JSON.stringify(config),
    });

    console.log(result);
    setMessage(result);

    setIsWaitingAIResponse(false);
  };
  console.log("🚀 ~ onAudioRecordingComplete ~ setAudioURL:", setAudioURL);

  console.log(message);

  return (
    <section
      className="h-screen px-6 py-12 text-center"
      style={{
        background:
          "conic-gradient(from 180deg at 50% 50%, rgba(255, 165, 0, 0.2), rgba(229, 141, 210, 0.3), rgba(187, 228, 220, 0.3), rgba(255, 165, 0, 0.2))",
      }}
    >
      <article className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <MdOutlineArrowBackIosNew className="text-3xl" />
          <Image
            src="/assets/images/logo.png"
            alt="Coongify Logo"
            width={72}
            height={16}
          />
        </div>
        <UserButton />
      </article>
      <article className="flex flex-col justify-between mx-24 mt-5 px-16 pt-16 pb-8 bg-[#C2C2C261] rounded-2xl min-h-[700px] overflow-y-auto overflow-hidden">
        <div>
          <h1>Voice Assistant</h1>
          {/* <Markdown>{messages[0]?.content}</Markdown> */}
        </div>
        <div className="flex items-center justify-between px-8 py-4 bg-white rounded-3xl">
          <div className="p-2 bg-secondary rounded-3xl">
            <AudioRecorder
              onRecordingComplete={onAudioRecordingComplete}
              recorderControls={recordingControl}
            />
            <MdOutlineKeyboardVoice className="text-3xl text-white" />
          </div>
          <div>
            <GiSettingsKnobs className="text-3xl text-gray-500" />
          </div>
        </div>
      </article>

      {audioURL && (
        <div>
          <h3>Recorded Audio:</h3>
          <audio src={audioURL} controls />
        </div>
      )}
    </section>
  );
};

export default VoiceAssistant;
