"use client";

import { useState } from "react";
import { AudioRecorder, useAudioRecorder } from "react-audio-voice-recorder";
import Markdown from "react-markdown";

const VoiceAssistant = () => {
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

  const onAudioRecordingComplete = () => {};

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
