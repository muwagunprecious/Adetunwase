"use client";

import Container from "@/components/layouts/Container";
import Badge from "@/components/ui/Badge";
import Heading from "@/components/ui/Heading";
import ContactInfoItem from "@/components/ui/ContactInfoItem";
import { contactInfoData } from "@/constants/contactInfo";
import { Mail, MessageSquareMore, UserRound } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-primaryBlack font-jost pt-5">
      <Container>
        <div className="mt-10 mb-20">
          <div className="border-b border-white/10 pb-5">
            <Badge title="CONTACT" />
          </div>

          <div className="flex flex-col lg:flex-row justify-between my-6 gap-4">
            <Heading
              as="h3"
              className="lg:text-4xl font-bold text-white tracking-tighter w-full lg:w-1/3"
            >
              Let&apos;s build
              <span className="text-primaryGold"> The future together.</span>
            </Heading>
            <div className="w-full lg:w-2/5 text-white/50 text-lg">
              Partner, collaborate, or engage to drive meaningful impact and
              create lasting value across sectors and communities.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 items-stretch">
            <div className="flex-1 flex flex-col items-start justify-center p-6 gap-6 bg-white/5 border-l-4 border-primaryGold">
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

            <form className="w-full sm:w-2/5 flex flex-col gap-4 text-md sm:text-lg">
              <div className="relative w-full">
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="@logicalsam"
                  className="w-full px-4 py-3 pr-12 border-2 border-white/10 outline-none focus:ring-2 focus:ring-primaryGold"
                />
                <UserRound className="absolute text-white/20  right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>

              <div className="relative w-full">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 pr-12 border-2 border-white/10 outline-none focus:ring-2 focus:ring-primaryGold"
                />
                <Mail
                  size={20}
                  className="absolute text-white/20 right-4 top-1/2 -translate-y-1/2 pointer-events-none"
                />
              </div>

              <div className="relative w-full">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your message*"
                  rows={6}
                  className="w-full px-4 py-6 pr-12 border-2 border-white/10 outline-none focus:ring-2 focus:ring-primaryGold"
                />
                <MessageSquareMore className="absolute text-white/20 right-4 top-6 pointer-events-none" />
              </div>

              <button
                type="submit"
                className="w-full flex flex-row items-center justify-center gap-2 py-4 mt-2 bg-primaryGold cursor-pointer hover:opacity-70"
              >
                Send me a Message
                <svg viewBox="0 0 100 100" className="w-6 h-6">
                  <path
                    d="M20 80 L80 20 L45 20 M80 20 L80 55"
                    fill="none"
                    className="stroke-white"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
