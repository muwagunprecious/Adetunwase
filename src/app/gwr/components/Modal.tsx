"use client";

import { useEffect } from "react";
import { X, CheckCircle2, AlertTriangle, XCircle, Info } from "lucide-react";
import confetti from "canvas-confetti";

type ModalIcon = "success" | "error" | "warning" | "info";

interface ModalProps {
  open: boolean;
  icon: ModalIcon;
  title: string;
  text: string;
  confirmButtonText?: string;
  onConfirm: () => void;
}

const config = {
  success: {
    icon: <CheckCircle2 size={22} strokeWidth={2} />,
    color: "text-amber-400",
    ring: "ring-amber-400/20",
    bg: "bg-amber-400/8",
    border: "border-amber-400/15",
    glow: "bg-amber-400/10",
    bar: "from-amber-400 to-yellow-300",
    barText: "text-neutral-950",
  },
  error: {
    icon: <XCircle size={22} strokeWidth={2} />,
    color: "text-red-400",
    ring: "ring-red-400/20",
    bg: "bg-red-400/8",
    border: "border-red-400/15",
    glow: "bg-red-400/10",
    bar: "from-red-500 to-red-400",
    barText: "text-white",
  },
  warning: {
    icon: <AlertTriangle size={22} strokeWidth={2} />,
    color: "text-yellow-400",
    ring: "ring-yellow-400/20",
    bg: "bg-yellow-400/8",
    border: "border-yellow-400/15",
    glow: "bg-yellow-400/10",
    bar: "from-yellow-400 to-amber-300",
    barText: "text-neutral-950",
  },
  info: {
    icon: <Info size={22} strokeWidth={2} />,
    color: "text-blue-400",
    ring: "ring-blue-400/20",
    bg: "bg-blue-400/8",
    border: "border-blue-400/15",
    glow: "bg-blue-400/10",
    bar: "from-blue-500 to-blue-400",
    barText: "text-white",
  },
};

export const Modal = ({
  open,
  icon,
  title,
  text,
  confirmButtonText = "OK",
  onConfirm,
}: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (open && icon === "success") {
      const canvas = document.createElement("canvas");
      canvas.style.cssText =
        "position:fixed;inset:0;width:100%;height:100%;z-index:99999;pointer-events:none;";
      document.body.appendChild(canvas);

      const myConfetti = confetti.create(canvas, { resize: true });

      const timer = setTimeout(() => {
        void myConfetti({
          particleCount: 600,
          spread: 90,
          origin: { y: 0.6 },
          colors: ["#f5a623", "#fde68a", "#ffffff", "#000"],
        });

        // remove canvas after animation completes (~4s)
        const cleanup = setTimeout(() => canvas.remove(), 4000);
        return () => clearTimeout(cleanup);
      }, 100);

      return () => {
        clearTimeout(timer);
        canvas.remove();
      };
    }
  }, [open, icon]);

  if (!open) return null;

  const c = config[icon];

  return (
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center px-4"
      onClick={onConfirm}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

      {/* card */}
      <div
        className="relative z-10 w-full max-w-90 rounded-2xl border border-white/8 bg-[#111]/80 backdrop-blur-2xl shadow-[0_24px_60px_rgba(0,0,0,0.7)] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* top accent bar */}
        <div className={`h-0.5 w-full bg-linear-to-r ${c.bar}`} />

        {/* ambient glow behind icon */}
        <div
          className={`absolute top-0 left-1/2 -translate-x-1/2 w-40 h-24 rounded-full ${c.glow} blur-3xl pointer-events-none`}
        />

        <div className="relative p-6 flex flex-col gap-5">
          {/* close */}
          <button
            onClick={onConfirm}
            className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-lg text-neutral-600 cursor-pointer hover:text-neutral-300 hover:bg-white/5 transition-all duration-150"
          >
            <X size={14} />
          </button>

          {/* icon + content */}
          <div className="flex flex-col items-center text-center gap-3 pt-1">
            {/* icon badge */}
            <div
              className={`w-12 h-12 rounded-2xl ${c.bg} border ${c.border} ring-4 ${c.ring} flex items-center justify-center ${c.color}`}
            >
              {c.icon}
            </div>

            <div className="flex flex-col gap-1.5">
              <h3 className="text-white font-bold text-[20px] tracking-tight leading-snug">
                {title}
              </h3>
              <p className="text-neutral-500 text-[12.5px] leading-relaxed">
                {text}
              </p>
            </div>
          </div>

          {/* divider */}
          <div className="h-px bg-white/5" />

          {/* confirm button */}
          <button
            onClick={onConfirm}
            className={`w-full py-2.5 rounded-xl bg-linear-to-r ${c.bar} ${c.barText} font-bold text-[13px] tracking-wide cursor-pointer hover:opacity-90 active:scale-[0.98] transition-all duration-150`}
          >
            {confirmButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};
