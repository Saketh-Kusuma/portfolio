"use client";

import React, { useState } from "react";
import { toast } from "sonner";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/kusumasaketh92@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            _captcha: "false",
          }),
        },
      );

      if (response.ok) {
        toast.success("Message sent successfully!");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      toast.error("An error occurred while sending the message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-8 max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 text-secondary dark:text-neutral-200"
      >
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-primary dark:text-neutral-200"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="px-4 py-2 bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 text-sm text-primary dark:text-neutral-200"
            placeholder="John Doe"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium text-primary dark:text-neutral-200"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="px-4 py-2 bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 text-sm text-primary dark:text-neutral-200"
            placeholder="john@example.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="subject"
            className="text-sm font-medium text-primary dark:text-neutral-200"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            className="px-4 py-2 bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 text-sm text-primary dark:text-neutral-200"
            placeholder="How can I help you?"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-primary dark:text-neutral-200"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="px-4 py-2 bg-transparent border border-neutral-300 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 text-sm resize-none text-primary"
            placeholder="Write your message here..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 px-4 py-2 bg-neutral-900 dark:bg-white text-white dark:text-black rounded-md text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed w-fit"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
