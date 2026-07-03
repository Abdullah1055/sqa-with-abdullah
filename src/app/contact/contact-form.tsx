"use client";

import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(100),

  email: z
    .string()
    .trim()
    .email("Enter a valid email")
    .max(255),

  topic: z
    .string()
    .min(1, "Choose a topic"),

  message: z
    .string()
    .trim()
    .min(10, "Please write at least 10 characters")
    .max(1000),
});

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });

  const [pending, setPending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const parsed = schema.safeParse(form);

    if (!parsed.success) {
      toast.error(
        parsed.error.issues[0]?.message ??
          "Please check the form."
      );

      return;
    }

    setPending(true);

    setTimeout(() => {
      toast.success(
        "Thanks — I'll get back to you within 1–2 working days."
      );

      setForm({
        name: "",
        email: "",
        topic: "",
        message: "",
      });

      setPending(false);
    }, 700);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-6 md:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">
            Full name
          </Label>

          <Input
            id="name"
            required
            maxLength={100}
            value={form.name}
            placeholder="Your name"
            className="h-11 rounded-xl"
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">
            Email
          </Label>

          <Input
            id="email"
            type="email"
            required
            maxLength={255}
            value={form.email}
            placeholder="you@example.com"
            className="h-11 rounded-xl"
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
        </div>
      </div>
            <div className="mt-4 space-y-1.5">
        <Label htmlFor="topic">
          What can I help with?
        </Label>

        <Select
          value={form.topic}
          onValueChange={(value) =>
            setForm((prev) => ({
              ...prev,
              topic: value,
            }))
          }
        >
          <SelectTrigger
            id="topic"
            className="h-11 rounded-xl"
          >
            <SelectValue placeholder="Select a topic" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="free-class">
              Join the free live class
            </SelectItem>

            <SelectItem value="course">
              Course enrollment question
            </SelectItem>

            <SelectItem value="corporate">
              Corporate training
            </SelectItem>

            <SelectItem value="collab">
              Collaboration or speaking
            </SelectItem>

            <SelectItem value="other">
              Something else
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 space-y-1.5">
        <Label htmlFor="message">
          Message
        </Label>

        <Textarea
          id="message"
          required
          rows={6}
          maxLength={1000}
          value={form.message}
          placeholder="Tell me a bit about your background or question…"
          className="rounded-xl"
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              message: e.target.value,
            }))
          }
        />

        <p className="text-xs text-muted-foreground">
          {form.message.length}/1000
        </p>
      </div>

      <Button
        type="submit"
        disabled={pending}
        className="mt-6 h-11 rounded-xl px-6"
      >
        <Send className="h-4 w-4" />

        {pending ? "Sending…" : "Send message"}
      </Button>
          </form>
  );
}