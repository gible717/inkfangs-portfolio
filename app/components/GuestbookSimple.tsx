"use client";
import { useState } from "react";

export default function GuestbookSimple() {
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

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

  return (
    <div className="max-w-4xl mx-auto">
      <header className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-bold font-serif text-[#000000] mb-4">
          FEEDBACK
        </h1>
        <p className="text-sm text-[#666666] italic">
          Anonymous thoughts, honest reflections
        </p>
      </header>

      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-32 p-6 bg-[#FFFFFF]/80 backdrop-blur-sm border border-[#D1D1D1]/50 rounded-2xl text-[#000000] placeholder:text-[#666666] placeholder:italic focus:outline-none focus:border-[#3A4F5B] resize-none mb-4"
          placeholder="Spill your thoughts or stay silent forever..."
          maxLength={500}
          disabled={isSubmitting}
        />

        <div className="flex items-center justify-between mb-6">
          <span className="text-xs text-[#666666]">
            {message.length}/500 characters
          </span>
        </div>

        {/* Status Messages */}
        {submitStatus.type && (
          <div
            className={`mb-6 p-3 rounded-lg text-sm text-center ${
              submitStatus.type === "success"
                ? "bg-green-100 text-green-800 border border-green-200"
                : "bg-red-100 text-red-800 border border-red-200"
            }`}
          >
            {submitStatus.message}
          </div>
        )}

        <div className="mb-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#D1D1D1]/40 text-[#666666] px-8 py-3 rounded-lg hover:bg-[#3A4F5B] hover:text-white transition-all duration-300 font-medium ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Anonymously"}
          </button>
        </div>

        <p className="text-center text-sm text-[#666666]">
          This is a safe space. Your message is completely anonymous.
        </p>
      </form>

      <p className="text-center text-sm text-[#666666] mt-16 font-serif italic">
        inkfangs • 2025
      </p>
    </div>
  );
}
