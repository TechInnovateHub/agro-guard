import { useState, useEffect } from "react";
import OpenAI from "openai";

const Chatbot = () => {
  const openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const [lastApiCallTime, setLastApiCallTime] = useState(null); // Track last call time

  // Fetch initial response on component mount (optional)
  useEffect(() => {
    const fetchInitialResponse = async () => {
      setIsLoading(true);
      try {
        const response = await openai.chat.completions.create({
          messages: [{ role: "user", content: "Say this is a test" }],
          model: "gpt-3.5-turbo",
        });
        setChatHistory([...chatHistory, response.data.choices[0]]);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchInitialResponse();
  }, []);

  const sendMessage = async () => {
    if (!inputText.trim()) return; // Handle empty input

    const now = Date.now();
    const minInterval = 1000; // Minimum time between calls (in milliseconds)

    // Check rate limit before making the API call
    if (lastApiCallTime && now - lastApiCallTime < minInterval) {
      console.warn("Rate limit reached. Please wait a moment before sending another message.");
      return; // Disable button or display a message
    }

    setIsLoading(true);
    try {
      const response = await openai.chat.completions.create({
        messages: [...chatHistory, { role: "user", content: inputText }],
        model: "gpt-3.5-turbo",
        stream: true,
      });
      setChatHistory([...chatHistory, response.data.choices[0]]);
      setLastApiCallTime(now); // Update timestamp after successful call
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
      setInputText(""); // Clear input after sending
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-history">
        {chatHistory.map((message, index) => (
          <div key={index} className={`chat-message ${message.role}`}>
            {message.content}
          </div>
        ))}
        {isLoading && <div className="chat-message chatbot">Sending...</div>}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          className="bg-sidebar-bg"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;

// ! I WILL NOT IMPLEMENT THIS COMPLETELY SINCE THIS GUYS ARE A-HOLES, AND FOR SOME REASON, I HAVE TO PAY FOR SOMETHING AS SMALL AS I'M REQUESTING.