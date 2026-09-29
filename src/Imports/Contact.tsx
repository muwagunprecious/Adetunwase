"use client";

import Container from "@/components/layouts/Container";
import Badge from "@/components/ui/Badge";
import ContactInfoItem from "@/components/ui/ContactInfoItem";
import { contactInfoData } from "@/constants/contactInfo";
import { Mail, MessageSquareMore, UserRound, ArrowUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full font-jost py-20"
      style={{
        backgroundColor: "#080808",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    >
      <Container>
        <div className="border-b border-white/10 pb-5 mb-12">
          <Badge title="CONTACT" />
        </div>

        {/* Two-panel card */}
        <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden min-h-150">
          {/* LEFT — branded panel */}
          <div
            className="flex flex-col justify-between px-4 p-8 lg:p-12 lg:w-[45%] w-full"
            style={{
              background:
                "linear-gradient(160deg, #1a1200 0%, #2a1d00 40%, #1a1200 100%)",
            }}
          >
            {/* Top: logo area */}
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 flex items-center justify-center rounded-md"
                style={{
                  background: "rgba(var(--primaryGold-rgb, 180,140,60),0.15)",
                }}
              >
                <ArrowUpRight size={18} className="text-primaryGold" />
              </div>
                <span className="text-white font-semibold text-sm tracking-wide">
                  Adetunwase Adenle
              </span>
            </div>

            {/* Middle: heading + description */}
            <div className="flex flex-col gap-6 my-8">
              <h2 className="text-white text-2xl lg:text-5xl font-bold tracking-tighter uppercase leading-tighter">
                Let&apos;s build{" "}
                <span className="text-primaryGold">the future</span> together.
              </h2>
              <p className="text-white/50 text-base leading-tight max-w-sm font-light">
                Interested in supporting creative education, community art, or
                circular economy projects? Get in touch to start a conversation.
              </p>
            </div>

            {/* Bottom: contact info items */}
            <div
              className="rounded-2xl p-4 lg:p-6 flex flex-col gap-5"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {contactInfoData.map(contactInfo => (
                <ContactInfoItem
                  key={contactInfo.id}
                  id={contactInfo.id}
                  itemName={contactInfo.itemName}
                  itemValue={contactInfo.itemValue}
                  iconSrc={contactInfo.iconSrc}
                  url={contactInfo.url}
                />
              ))}
            </div>
          </div>

          {/* RIGHT — dark form panel */}
          <div
            className="flex flex-col lg:w-[55%] w-full"
            style={{ background: "#111111" }}
          >
            {/* Tab-style top bar */}
            <div className="px-10 pt-8 pb-6 border-b border-white/8">
              <div
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white/60"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                <Mail size={15} className="text-white/40" />
                Send an email
              </div>
            </div>

            {/* Form */}
            <form
              action="mailto:adetunwase@slumart.org"
              method="get"
              encType="text/plain"
              className="flex flex-col gap-6 lg:gap-10 p-10 px-6 flex-1"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="username"
                    className="text-xs font-medium text-white/30 uppercase tracking-widest"
                  >
                    Your name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Enter your full name"
                      required
                      className="w-full px-4 py-3 pr-10 text-sm text-white placeholder:text-white/20 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-primaryGold transition-colors duration-200"
                    />
                    <UserRound
                      size={15}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-white/30 uppercase tracking-widest"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@email.com"
                      required
                      className="w-full px-4 py-3 pr-10 text-sm text-white placeholder:text-white/20 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-primaryGold transition-colors duration-200"
                    />
                    <Mail
                      size={15}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/20 pointer-events-none"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5 flex-1">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-white/30 uppercase tracking-widest"
                >
                  How can I help?
                </label>
                <div className="relative flex-1">
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Tell me a little about your project..."
                    required
                    rows={7}
                    className="w-full h-full min-h-40 px-4 py-4 pr-10 text-sm text-white placeholder:text-white/20 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-primaryGold transition-colors duration-200 resize-none"
                  />
                  <MessageSquareMore
                    size={15}
                    className="absolute right-3.5 top-4 text-white/20 pointer-events-none"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-primaryGold text-white text-sm font-medium cursor-pointer transition-all duration-300 hover:opacity-90 mt-2"
              >
                <span className="uppercase">Send message</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
