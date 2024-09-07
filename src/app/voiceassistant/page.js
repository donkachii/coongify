"use client";

import { useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import Markdown from "react-markdown";

const VoiceAssistant = () => {
  const [isWaitingAIResponse, setIsWaitingAIResponse] = useState("");
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

  const onAudioRecordingComplete = async () => {
    setIsWaitingAIResponse(true);
    const audioFile = new File([userAudioData], "userVoiceInput", {
      type: "audio/mpeg",
    });
    const formData = new FormData();
    formData.append("file", audioFile);

    const response = await fetch("/api/upload-audio", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    const audioUrl = data.url;
    const audioBlob = await fetch(audioUrl).then((res) => res.blob());
    const audioFile2 = new File([audioBlob], "userVoiceInput", {
      type: "audio/mpeg",
    });
    const formData2 = new FormData();
    formData2.append("file", audioFile2);
    const response2 = await fetch("/api/chat", {
      method: "POST",
      body: formData2,
    });
    const data2 = await response2.json();
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: data2 },
      { role: "assistant", content: "" },
    ]);

    setIsWaitingAIResponse(false);
  };

  return (
    <div>
      <h1>Voice Assistant</h1>

      <AudioRecorder
        onRecordingComplete={onAudioRecordingComplete}
        recorderControls={recordingControl}
      />
    </div>
  );
};

export default VoiceAssistant;
