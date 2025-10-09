import React, { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, HelpCircle } from "lucide-react";

/**
 * ChatbotHelp - floating chatbot/help widget
 * - Bottom-left floating button
 * - Click opens a small chat panel
 * - Simple canned responses (simulate bot). Replace simulateBotReply with real API easily.
 * - Persists chat history to localStorage (key: "chatbot_help_history")
 */

const CHAT_STORAGE_KEY = "chatbot_help_history";

const ChatbotHelp = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const raw = localStorage.getItem(CHAT_STORAGE_KEY);
      return raw ? JSON.parse(raw) : [{ from: "bot", text: "Hi 👋 I can help with exam & registration queries. Ask me anything!" }];
    } catch {
      return [{ from: "bot", text: "Hi 👋 I can help with exam & registration queries. Ask me anything!" }];
    }
  });
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  // Keep scroll at bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    try { localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages)); } catch {}
  }, [messages]);

  // Focus input when opening
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => inputRef.current?.focus(), 150);
      return () => clearTimeout(t);
    }
  }, [open]);

  const sendMessage = (text) => {
    if (!text?.trim()) return;
    const userMsg = { from: "user", text: text.trim(), time: Date.now() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    // simulate bot reply (replace with real API call)
    simulateBotReply(text.trim());
  };

  const simulateBotReply = (userText) => {
    // Very small "intelligent" canned replies to feel helpful.
    const lower = userText.toLowerCase();
    let reply = "Sorry, I didn't understand that. Try: registration, syllabus, dates, fees, or contact.";

    if (/(register|registration|signup|sign up)/.test(lower)) {
      reply = "Registration: Click 'Student Registration' or 'School Registration' on homepage. Need step-by-step help?";
    } else if (/(date|when|schedule|exam date)/.test(lower)) {
      reply = "Exam dates are announced on the homepage. For exact dates, check the 'ITOChampions' or 'AwardFunction' sections or contact us.";
    } else if (/(syllabus|topics|syllabi)/.test(lower)) {
      reply = "Syllabus: Each subject's syllabus is listed under the Olympiad Info section. Want a downloadable PDF link?";
    } else if (/(fees|fee|price)/.test(lower)) {
      reply = "Fees: Fee details are on the registration page. If you want, I can guide you to the exact form fields.";
    } else if (/(contact|help|support)/.test(lower)) {
      reply = "You can contact us via the Contact/Branch Offices section or email support@example.com (replace with actual).";
    } else if (/(hello|hi|hey)/.test(lower)) {
      reply = "Hello! How can I assist you with the Olympiad today?";
    }

    // Simulate typing delay
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: reply, time: Date.now() }]);
    }, 700 + Math.min(1200, lower.length * 20));
  };

  const clearChat = () => {
    setMessages([{ from: "bot", text: "Chat cleared. Ask me anything about the Olympiad!" }]);
    try { localStorage.removeItem(CHAT_STORAGE_KEY); } catch {}
  };

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Chat with support"
          style={{
            position: "fixed",
            bottom: 90,
            left: 20,
            width: 320,
            maxWidth: "calc(100% - 48px)",
            height: 420,
            maxHeight: "70vh",
            background: "white",
            borderRadius: 12,
            boxShadow: "0 12px 40px rgba(2,6,23,0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1100,
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 12px", borderBottom: "1px solid #eee", background: "#f7fafc" }}>
            <HelpCircle size={18} />
            <div style={{ fontWeight: 600 }}>Olympiad Help</div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
              <button
                onClick={clearChat}
                title="Clear chat"
                style={{
                  border: 0,
                  background: "transparent",
                  cursor: "pointer",
                  padding: 6,
                }}
                aria-label="Clear chat"
              >
                Clear
              </button>
              <button
                onClick={() => setOpen(false)}
                title="Close"
                style={{
                  border: 0,
                  background: "transparent",
                  cursor: "pointer",
                  padding: 6,
                }}
                aria-label="Close chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div style={{ padding: 12, flex: 1, overflowY: "auto", display: "flex", flexDirection: "column", gap: 8 }}>
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.from === "user" ? "flex-end" : "flex-start",
                  background: m.from === "user" ? "#4a5568" : "#edf2f7",
                  color: m.from === "user" ? "white" : "#111827",
                  padding: "8px 12px",
                  borderRadius: 12,
                  maxWidth: "80%",
                  fontSize: 14,
                  lineHeight: 1.3,
                  boxShadow: m.from === "user" ? "0 6px 18px rgba(74,85,104,0.12)" : "none",
                }}
              >
                {m.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            style={{ display: "flex", gap: 8, padding: 10, borderTop: "1px solid #eee", background: "#fff" }}
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a question (e.g., exam dates)"
              aria-label="Type a question"
              style={{
                flex: 1,
                padding: "10px 12px",
                borderRadius: 8,
                border: "1px solid #e6e6e6",
                outline: "none",
                fontSize: 14,
              }}
            />
            <button
              type="submit"
              aria-label="Send message"
              style={{
                width: 44,
                height: 44,
                borderRadius: 8,
                border: "none",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
                background: "#2563eb",
                color: "white",
              }}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* Floating button */}
      <div
        role="button"
        aria-label={open ? "Close help" : "Open help"}
        onClick={() => setOpen((s) => !s)}
        style={{
          position: "fixed",
          bottom: 30,
          left: 20,
          width: 56,
          height: 56,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: open ? "#ef4444" : "#059669",
          color: "white",
          boxShadow: "0 10px 30px rgba(2,6,23,0.2)",
          cursor: "pointer",
          zIndex: 1200,
          transition: "transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        {open ? <X size={22} /> : <MessageSquare size={22} />}
      </div>
    </>
  );
};

export default ChatbotHelp;
