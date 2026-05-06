"use client";

import React, { useRef, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Zap,
  Calendar,
  User,
  Phone,
  Mail,
  MapPin,
  Globe,
  ChevronDown,
  ArrowRight,
  Loader2,
  Trophy,
  Medal,
  Award,
  Crown,
  Star,
} from "lucide-react";
// import confetti from "canvas-confetti";
import {
  gwrBaseSchema,
  gwrFormData,
  NIGERIAN_STATES,
} from "@/hooks/validation/GwrSchema";
import { submitGwr } from "@/actions/gwr.action";
import { Modal } from "./components/Modal";

/* ─────────────────────────────────────────
   ATOMS
───────────────────────────────────────── */

const FieldLabel = ({
  children,
  error,
}: {
  children: React.ReactNode;
  error?: boolean;
}) => (
  <span
    className={`text-[10px] font-bold tracking-[0.16em] uppercase ${error ? "text-red-400" : "text-amber-400"}`}
  >
    {children}
  </span>
);

const FieldError = ({ msg }: { msg?: string }) =>
  msg ?
    <span className="flex items-center gap-1.5 text-[11px] text-red-400 mt-0.5">
      <span className="w-1 h-1 rounded-full bg-red-400 shrink-0" />
      {msg}
    </span>
  : null;

const Field = ({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="flex flex-col gap-1.5">
    <FieldLabel error={!!error}>{label}</FieldLabel>
    {children}
    <FieldError msg={error} />
  </div>
);

/* ─────────────────────────────────────────
   TEXT INPUT
───────────────────────────────────────── */
interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

const TextInput = ({ label, error, icon, ...p }: TextInputProps) => {
  const [focused, setFocused] = useState(false);
  return (
    <Field label={label} error={error}>
      <div className="relative">
        {icon && (
          <span
            className={`absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none flex transition-colors duration-150 ${focused ? "text-amber-400" : "text-neutral-600"}`}
          >
            {icon}
          </span>
        )}
        <input
          {...p}
          onFocus={e => {
            setFocused(true);
            p.onFocus?.(e);
          }}
          onBlur={e => {
            setFocused(false);
            p.onBlur?.(e);
          }}
          className={`w-full bg-neutral-950 rounded-lg border text-white text-[13px] placeholder:text-neutral-700 outline-none transition-all duration-150 scheme-dark
            ${icon ? "pl-10 pr-4 py-3" : "px-4 py-3"}
            ${
              error ? "border-red-400 ring-2 ring-red-400/10"
              : focused ? "border-amber-400/60 ring-2 ring-amber-400/10"
              : "border-neutral-800 hover:border-neutral-700"
            }`}
        />
      </div>
    </Field>
  );
};

/* ─────────────────────────────────────────
   SELECT
───────────────────────────────────────── */
interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  placeholder?: string;
  children: React.ReactNode;
}

const SelectField = ({
  label,
  error,
  icon,
  placeholder,
  children,
  ...p
}: SelectFieldProps) => {
  const [focused, setFocused] = useState(false);
  return (
    <Field label={label} error={error}>
      <div className="relative">
        {icon && (
          <span
            className={`absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none flex z-10 transition-colors duration-150 ${focused ? "text-amber-400" : "text-neutral-600"}`}
          >
            {icon}
          </span>
        )}
        <select
          {...p}
          onFocus={e => {
            setFocused(true);
            p.onFocus?.(e);
          }}
          onBlur={e => {
            setFocused(false);
            p.onBlur?.(e);
          }}
          className={`w-full bg-neutral-950 rounded-lg border text-white text-[13px] appearance-none outline-none cursor-pointer transition-all duration-150
            ${icon ? "pl-10 pr-9 py-3" : "px-4 pr-9 py-3"}
            ${
              error ? "border-red-400 ring-2 ring-red-400/10"
              : focused ? "border-amber-400/60 ring-2 ring-amber-400/10"
              : "border-neutral-800 hover:border-neutral-700"
            }`}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {children}
        </select>
        <ChevronDown
          size={13}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-600"
        />
      </div>
    </Field>
  );
};

/* ─────────────────────────────────────────
   PILLS
───────────────────────────────────────── */
const Pills = ({
  label,
  options,
  value,
  onChange,
  error,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  error?: string;
}) => (
  <div className="flex flex-col gap-1.5">
    <FieldLabel error={!!error}>{label}</FieldLabel>
    <div className="flex flex-wrap gap-2 mt-0.5">
      {options.map(o => {
        const active = value === o;
        return (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={`px-4 py-2 cursor-pointer rounded-lg text-[13px] font-semibold border transition-all duration-150
              ${
                active ?
                  "bg-amber-400 border-amber-400 text-neutral-950"
                : "bg-transparent border-neutral-800 text-neutral-500 hover:border-neutral-700 hover:text-neutral-300"
              }`}
          >
            {o}
          </button>
        );
      })}
    </div>
    <FieldError msg={error} />
  </div>
);

/* ─────────────────────────────────────────
   SECTION DIVIDER
───────────────────────────────────────── */
const SectionDivider = ({ n, title }: { n: string; title: string }) => (
  <div className="flex items-center gap-3">
    <span className="text-[9px] font-black tracking-widest text-amber-400 bg-amber-400/5 border border-amber-400/15 rounded px-2 py-1">
      {n}
    </span>
    <span className="text-[11px] font-bold text-white/50 tracking-[0.08em] uppercase whitespace-nowrap">
      {title}
    </span>
    <div className="flex-1 h-px bg-neutral-900" />
  </div>
);

/* ─────────────────────────────────────────
   HERO PANEL
───────────────────────────────────────── */
const AwardCard = ({
  icon,
  title,
  sub,
}: {
  icon: React.ReactNode;
  title: string;
  sub: string;
}) => (
  <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white/2 border border-neutral-900">
    <div className="mt-0.5 p-1.5 rounded-lg bg-amber-400/8 border border-amber-400/10 text-amber-400 shrink-0">
      {icon}
    </div>
    <div>
      <p className="text-[12.5px] font-semibold text-white/75 leading-snug">
        {title}
      </p>
      <p className="text-[11px] text-neutral-600 mt-0.5 leading-snug">{sub}</p>
    </div>
  </div>
);

const Hero = () => (
  <div className="relative bg-[#0d0d0d] border-r border-neutral-900 flex flex-col p-5 pt-20 lg:pt-10 lg:p-10 overflow-hidden min-h-80 lg:sticky lg:top-0 lg:h-screen">
    {/* ambient glows */}
    <div className="pointer-events-none absolute -top-32 -left-20 w-96 h-96 rounded-full bg-amber-500/[0.07] blur-3xl" />
    <div className="pointer-events-none absolute -bottom-20 -right-16 w-72 h-72 rounded-full bg-amber-500/4 blur-3xl" />

    {/* TOP — live badge */}
    <div className="relative z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/8 border border-amber-400/15 text-amber-400 text-[9px] font-black tracking-[0.18em] uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
        GWR Attempt · Lagos 2026
      </div>
    </div>

    {/* MIDDLE — trophy + headline, left-aligned */}
    <div className="relative z-10 flex flex-col items-start my-2">
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-amber-400/10 blur-2xl scale-150 pointer-events-none" />
        <div className="relative w-20 h-20 rounded-full bg-amber-400/8 border border-amber-400/15 flex items-center justify-center">
          <Trophy size={40} className="text-amber-400" strokeWidth={1.5} />
        </div>
        <Star
          size={10}
          className="absolute -top-1 -right-0.5 text-amber-400/50 fill-amber-400/30"
        />
        <Star
          size={8}
          className="absolute -bottom-1 -left-1 text-amber-400/40 fill-amber-400/20"
        />
      </div>

      <div className="mt-5 text-left">
        <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-neutral-700 mb-2">
          Guinness World Record
        </p>
        {/* <h1 className="text-5xl font-black tracking-tight text-white leading-none">
          Make
        </h1> */}
        <h1
          className="text-4xl lg:text-6xl font-black tracking-tighter leading-tight"
          style={{
            background: "linear-gradient(110deg,#f5a623 30%,#fde68a 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Make History.
        </h1>
      </div>
    </div>

    {/* BOTTOM — meta + award cards, pushed down with mt-auto + pb for breathing room */}
    <div className="relative z-10 flex flex-col gap-4 mt-auto pb-4">
      <p className="text-[12.5px] text-neutral-600 leading-relaxed">
        Be part of history. The GWR attempt is on{" "}
        <strong className="text-white/60 font-semibold">
          August 12th, Lagos
        </strong>
        . Register now to secure your place.
      </p>

      {/* stat row */}
      <div className="flex flex-wrap gap-2">
        {[
          { icon: <Calendar size={11} />, label: "Aug 12, 2026" },
          { icon: <MapPin size={11} />, label: "Lagos, NG" },
          { icon: <Trophy size={11} />, label: "GWR Record" },
        ].map(({ icon, label }) => (
          <div
            key={label}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/2 border border-neutral-900 text-[11px] text-white/40 font-medium"
          >
            <span className="text-amber-400/60">{icon}</span>
            {label}
          </div>
        ))}
      </div>

      {/* award cards */}
      <div className="flex flex-col gap-2">
        <AwardCard
          icon={<Crown size={14} />}
          title="Official GWR Certificate"
          sub="Every participant receives an official certification"
        />
        <AwardCard
          icon={<Medal size={14} />}
          title="Exclusive Participant Medal"
          sub="Commemorative medal for all registered attendees"
        />
        <AwardCard
          icon={<Award size={14} />}
          title="Limited Spots"
          sub="Secure your waitlist position before it fills"
        />
      </div>
    </div>
  </div>
);

/* ─────────────────────────────────────────
   SUBMIT BUTTON
───────────────────────────────────────── */
const SubmitButton = ({ loading }: { loading: boolean }) => (
  <button
    type="submit"
    disabled={loading}
    className={`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-[13.5px] tracking-wide transition-all duration-200
      ${
        loading ?
          "bg-neutral-900 text-neutral-600 cursor-not-allowed"
        : "bg-linear-to-r from-amber-400 to-yellow-300 text-neutral-950 hover:opacity-95 hover:shadow-[0_8px_28px_rgba(245,166,35,0.3)] active:scale-[0.99] cursor-pointer"
      }`}
  >
    {loading ?
      <>
        <Loader2 size={15} className="animate-spin" /> Submitting…
      </>
    : <>
        <Zap size={15} /> Join the Waitlist <ArrowRight size={13} />
      </>
    }
  </button>
);

const GwrForm = () => {
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState<{
    open: boolean;
    icon: "success" | "error" | "warning" | "info";
    title: string;
    text: string;
    confirmButtonText?: string;
  }>({ open: false, icon: "info", title: "", text: "" });

  const showModal = (opts: Omit<typeof modal, "open">) =>
    new Promise<void>(resolve => {
      setModal({ open: true, ...opts });
      // store resolve so confirm dismisses it
      resolveRef.current = resolve;
    });

  const resolveRef = useRef<() => void>(() => {});

  const handleConfirm = () => {
    setModal(m => ({ ...m, open: false }));
    resolveRef.current?.();
  };

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<gwrFormData>({
    resolver: zodResolver(gwrBaseSchema),
    defaultValues: {
      fullName: "",
      gender: undefined,
      dateOfBirth: "",
      nationality: "",
      stateOfResidence: undefined,
      phoneNumber: "",
      whatsappNumber: "",
      email: "",
      willAttend: undefined,
    },
  });

  const onSubmit = async (data: gwrFormData) => {
    if (!navigator.onLine) {
      await showModal({
        icon: "warning",
        title: "No Internet",
        text: "Check your connection.",
        confirmButtonText: "OK",
      });
      return;
    }
    try {
      setLoading(true);
      const r = await submitGwr(data);
      if (!r.success) {
        await showModal(
          r.error && "email" in r.error ?
            {
              icon: "error",
              title: "Already Registered",
              text: "This email is already on the waitlist.",
              confirmButtonText: "OK",
            }
          : {
              icon: "error",
              title: "Submission Failed",
              text: "Something went wrong. Please try again.",
              confirmButtonText: "OK",
            },
        );
        return;
      }
      reset();
      await showModal({
        icon: "success",
        title: "You're on the Waitlist! 🎉",
        text: "We'll keep you posted. See you August 12th in Lagos!",
        confirmButtonText: "Done",
      });
    } catch {
      await showModal({
        icon: "error",
        title: "Error",
        text: "An unexpected error occurred.",
        confirmButtonText: "OK",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[600px_1fr] min-h-screen w-full">
      {/* LEFT */}
      <Hero />

      {/* RIGHT */}
      <div className="h-screen overflow-y-auto">
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit(onSubmit)(e);
          }}
          className="max-w-145 mx-auto px-6 py-12 pb-20"
        >
          {/* heading */}
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold tracking-tight text-white">
              Tell us about yourself
            </h2>
            <p className="text-xs text-neutral-600 mt-1.5">
              All fields marked * are required.
            </p>
          </div>

          {/* 01 — Personal */}
          <div className="flex flex-col gap-5">
            <SectionDivider n="01" title="Personal Information" />

            <Controller
              name="fullName"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="Full Name*"
                  type="text"
                  placeholder="John Doe"
                  autoComplete="name"
                  icon={<User size={14} />}
                  error={errors.fullName?.message}
                  {...field}
                />
              )}
            />

            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Pills
                  label="Gender*"
                  options={["Male", "Female", "Prefer not to say"]}
                  value={field.value ?? ""}
                  onChange={field.onChange}
                  error={errors.gender?.message}
                />
              )}
            />

            <Controller
              name="dateOfBirth"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="Date of Birth*"
                  type="date"
                  autoComplete="bday"
                  icon={<Calendar size={14} />}
                  error={errors.dateOfBirth?.message}
                  {...field}
                />
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Controller
                name="nationality"
                control={control}
                render={({ field }) => (
                  <TextInput
                    label="Nationality*"
                    type="text"
                    placeholder="e.g. Nigerian"
                    icon={<Globe size={14} />}
                    error={errors.nationality?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="stateOfResidence"
                control={control}
                render={({ field }) => (
                  <SelectField
                    label="State of Residence*"
                    placeholder="Select state"
                    icon={<MapPin size={14} />}
                    error={errors.stateOfResidence?.message}
                    {...field}
                  >
                    {NIGERIAN_STATES.map(s => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </SelectField>
                )}
              />
            </div>
          </div>

          {/* 02 — Contact */}
          <div className="flex flex-col gap-5 mt-8">
            <SectionDivider n="02" title="Contact Details" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <TextInput
                    label="Phone Number*"
                    type="tel"
                    placeholder="+234 800 000 0000"
                    autoComplete="tel"
                    icon={<Phone size={14} />}
                    error={errors.phoneNumber?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="whatsappNumber"
                control={control}
                render={({ field }) => (
                  <TextInput
                    label="WhatsApp (if different)"
                    type="tel"
                    placeholder="+234 800 000 0000"
                    icon={<Phone size={14} />}
                    error={errors.whatsappNumber?.message}
                    {...field}
                  />
                )}
              />
            </div>

            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="Email Address*"
                  type="email"
                  placeholder="you@gmail.com"
                  autoComplete="email"
                  icon={<Mail size={14} />}
                  error={errors.email?.message}
                  {...field}
                />
              )}
            />
          </div>

          {/* 03 — Availability */}
          <div className="flex flex-col gap-5 mt-8">
            <SectionDivider n="03" title="Availability" />

            <Controller
              name="willAttend"
              control={control}
              render={({ field }) => (
                <Pills
                  label="The GWR Attempt holds on August 12th in Lagos. Will you be available to attend?*"
                  options={["Yes", "No", "Not sure"]}
                  value={field.value ?? ""}
                  onChange={field.onChange}
                  error={errors.willAttend?.message}
                />
              )}
            />
          </div>

          {/* CTA */}
          <div className="mt-10">
            <div className="h-px bg-linear-to-r from-transparent via-neutral-900 to-transparent mb-6" />
            <SubmitButton loading={loading} />
            <p className="text-center text-[10.5px] text-neutral-800 mt-3">
              By registering you agree to receive updates about the GWR Attempt.
            </p>
          </div>
        </form>
      </div>

      <Modal
        open={modal.open}
        icon={modal.icon}
        title={modal.title}
        text={modal.text}
        confirmButtonText={modal.confirmButtonText}
        onConfirm={handleConfirm}
      />
    </div>
  );
};

export default GwrForm;
