"use client";
import { useState, useEffect } from "react";

interface GuestbookEntry {
  id: string;
  message: string;
  timestamp: string;
  approved: boolean;
}

export default function Guestbook() {
  const [message, setMessage] = useState("");
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  // Fetch guestbook entries on component mount
  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await fetch("/api/guestbook");
      const data = await response.json();

      if (data.success) {
        setEntries(data.entries);
      }
    } catch (error) {
      console.error("Failed to fetch guestbook entries:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) {
      setSubmitStatus({
        type: "error",
        message: "Please enter a message",
      });
      return;
    }

    if (message.length > 500) {
      setSubmitStatus({
        type: "error",
        message: "Message is too long (max 500 characters)",
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/guestbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been submitted.",
        });
        setMessage("");
        // Refresh entries
        fetchEntries();
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to submit message",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  return (
    <>
      {/* Guestbook Form */}
      <div className="bg-[#FFFFFF]/60 backdrop-blur-sm border border-[#D1D1D1]/30 p-8">
        <h2 className="text-2xl font-bold font-serif text-[#000000] mb-4">
          Anonymous Guestbook
        </h2>
        <p className="text-sm text-[#666666] mb-6 italic">
          Leave your thoughts, feedback, or just say hi. Completely anonymous.
        </p>

        <form onSubmit={handleSubmit} className="mb-6">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-32 p-4 bg-white border border-[#D1D1D1]/50 rounded-lg text-[#000000] placeholder:text-[#666666] placeholder:italic focus:outline-none focus:border-[#3A4F5B] resize-none mb-4"
            placeholder="Spill your thoughts or stay silent forever..."
            maxLength={500}
            disabled={isSubmitting}
          />
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs text-[#666666]">
              {message.length}/500 characters
            </span>
          </div>

          {/* Status Messages */}
          {submitStatus.type && (
            <div
              className={`mb-4 p-3 rounded-lg text-sm ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-200"
                  : "bg-red-100 text-red-800 border border-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#000000] text-white px-6 py-3 rounded-lg hover:bg-[#3A4F5B] transition-all duration-300 font-medium ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Anonymously"}
          </button>
        </form>

        <div className="border-t border-[#D1D1D1] pt-6">
          <p className="text-xs text-[#666666] text-center">
            This is a safe space. Your message is completely anonymous and will
            appear below.
          </p>
        </div>
      </div>

      {/* Guestbook Entries */}
      <div className="mt-8">
        <h3 className="text-xl font-bold font-serif text-[#000000] mb-6">
          Recent Messages ({entries.length})
        </h3>

        <div className="space-y-4">
          {entries.length === 0 ? (
            <div className="bg-[#FFFFFF]/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6">
              <p className="text-[#000000] mb-3 italic">
                "Be the first to leave a message..."
              </p>
              <p className="text-xs text-[#666666]">— Waiting for you</p>
            </div>
          ) : (
            entries.map((entry) => (
              <div
                key={entry.id}
                className="bg-[#FFFFFF]/40 backdrop-blur-sm border border-[#D1D1D1]/20 p-6 hover:bg-[#FFFFFF]/60 transition-all duration-300"
              >
                <p className="text-[#000000] mb-3 leading-relaxed">
                  "{entry.message}"
                </p>
                <p className="text-xs text-[#666666]">
                  — {formatDate(entry.timestamp)}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
