import { useEffect, useRef } from 'react';

const SpeechComponent = ({ text }) => {
  const synthRef = useRef(window.speechSynthesis);
  const utteranceRef = useRef(null);

  useEffect(() => {
    if (text && synthRef.current) {
      utteranceRef.current = new SpeechSynthesisUtterance(text);
      synthRef.current.speak(utteranceRef.current);
    }
  }, [text]);

  return <div>{text}</div>;
};

export default SpeechComponent;
