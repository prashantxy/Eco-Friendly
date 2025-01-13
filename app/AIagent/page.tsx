'use client';

import React from 'react';
import { Send, Bot, User } from 'lucide-react';

interface MessageType {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
}

interface EcoAIAgentProps {
  initialMessage ?: string;
  className? : string;
}

const EcoAIAgent: React.FC<EcoAIAgentProps> = ({
  initialMessage = "Hello! I'm your EcoVerse guide. Ask me anything about environmental topics, sustainability, or how you can help protect our planet!",
  className = '',
}) => {
  const [messages, setMessages] = React.useState<MessageType[]>([
    {
      id: crypto.randomUUID(),
      type: 'bot',
      content: initialMessage,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const formatTimestamp = (date: Date): string => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    }).format(date);
  };

  const fetchBotResponse = async (userInput: string): Promise<string> => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(`You asked: "${userInput}". Here's some useful information on sustainability!`);
      }, 1000)
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: MessageType = {
      id: crypto.randomUUID(),
      type: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const botResponse = await fetchBotResponse(input.trim());
      const botMessage: MessageType = {
        id: crypto.randomUUID(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      const errorMessage: MessageType = {
        id: crypto.randomUUID(),
        type: 'bot',
        content: 'Sorry, something went wrong. Please try again later.',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden ${className}`}>
      <div className="bg-green-600 p-4">
        <h2 className="text-white text-xl font-semibold flex items-center gap-2">
          <Bot className="w-6 h-6" />
          EcoVerse Assistant
        </h2>
      </div>

      <div className="h-96 overflow-y-auto p-4 bg-gray-50" role="log" aria-live="polite">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-2 mb-4 ${
              message.type === 'user' ? 'flex-row-reverse' : ''
            }`}
          >
            {message.type === 'bot' ? (
              <Bot className="w-6 h-6 text-green-600 mt-1" aria-hidden="true" />
            ) : (
              <User className="w-6 h-6 text-blue-600 mt-1" aria-hidden="true" />
            )}
            <div
              className={`p-3 rounded-lg ${
                message.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white shadow-sm'
              }`}
            >
              <p>{message.content}</p>
              <span className="text-xs opacity-70 mt-1 block">
                {formatTimestamp(message.timestamp)}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-green-600" aria-hidden="true" />
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p>Thinking...</p>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about environmental topics..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
            aria-label="Message input"
          />
          <button
            type="submit"
            className="bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default EcoAIAgent;