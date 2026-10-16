"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  package: z.string().min(1, "Please select a package"),
  category: z.string().min(1, "Please select a category"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

const selectBase =
  "w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-base text-zinc-100 outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 transition-colors";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again or email directly.");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s make an impact {" "}
            <span className="text-gradient">together</span>
          </h2>
          <p className="text-zinc-400">
            Tell me about your brand and the package you&apos;re interested in.
            I&apos;ll get back to you within 48 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-8 rounded-2xl bg-zinc-900 border border-zinc-800"
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle2 className="w-12 h-12 text-violet-400" />
              <h3 className="text-xl font-semibold">Inquiry Sent!</h3>
              <p className="text-zinc-400">
                Thanks for reaching out. We&apos;ll respond within 48 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-zinc-300">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    {...register("name")}
                    className="bg-zinc-800 border-zinc-700 focus:border-violet-500 text-zinc-100 placeholder:text-zinc-600 h-12 text-base"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-zinc-300">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@brand.com"
                    {...register("email")}
                    className="bg-zinc-800 border-zinc-700 focus:border-violet-500 text-zinc-100 placeholder:text-zinc-600 h-12 text-base"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Company */}
              <div className="space-y-2">
                <Label htmlFor="company" className="text-zinc-300">
                  Company / Brand
                </Label>
                <Input
                  id="company"
                  placeholder="Your company (optional)"
                  {...register("company")}
                  className="bg-zinc-800 border-zinc-700 focus:border-violet-500 text-zinc-100 placeholder:text-zinc-600 h-12 text-base"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {/* Package */}
                <div className="space-y-2">
                  <Label htmlFor="package" className="text-zinc-300">
                    Package *
                  </Label>
                  <select id="package" {...register("package")} className={selectBase} defaultValue="">
                    <option value="" disabled className="bg-zinc-900">Select package</option>
                    {[
                      { value: "Starter", label: "Starter — 2 Videos · $400" },
                      { value: "Growth", label: "Growth — 3 Videos · $550" },
                      { value: "Pro", label: "Pro — 5 Videos · $850" },
                      { value: "Enterprise", label: "Enterprise — 10 Videos · $1,500" },
                      { value: "Custom", label: "Custom — Let's Talk" },
                    ].map((p) => (
                      <option key={p.value} value={p.value} className="bg-zinc-900">{p.label}</option>
                    ))}
                  </select>
                  {errors.package && (
                    <p className="text-red-400 text-xs">{errors.package.message}</p>
                  )}
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category" className="text-zinc-300">
                    Product Category *
                  </Label>
                  <select id="category" {...register("category")} className={selectBase} defaultValue="">
                    <option value="" disabled className="bg-zinc-900">Select category</option>
                    {[
                      "Gaming Peripherals (mice, keyboards, headsets)",
                      "PC Components (GPUs, CPUs, RAM, storage)",
                      "Monitors & Displays",
                      "Audio Equipment (mics, speakers, earbuds)",
                      "Streaming Gear (capture cards, lighting, webcams)",
                      "Desk & Setup (furniture, accessories, decor)",
                      "Smart Home & Tech (gadgets, hubs, automation)",
                      "Software & Apps",
                      "Digital Products (courses, templates, assets)",
                      "Other",
                    ].map((c) => (
                      <option key={c} value={c} className="bg-zinc-900">{c}</option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-400 text-xs">{errors.category.message}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-zinc-300">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your product, campaign goals, and any specific requirements..."
                  rows={8}
                  {...register("message")}
                  className="bg-zinc-800 border-zinc-700 focus:border-violet-500 text-zinc-100 placeholder:text-zinc-600 resize-none text-base min-h-48"
                />
                {errors.message && (
                  <p className="text-red-400 text-xs">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  buttonVariants(),
                  "w-full justify-center py-6 bg-violet-600 hover:bg-violet-500 text-white border-transparent glow-violet-sm disabled:opacity-60"
                )}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" /> Send Inquiry
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
