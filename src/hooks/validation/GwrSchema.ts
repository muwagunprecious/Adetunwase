import { z } from "zod";

const req = (msg: string) => z.string().min(1, msg);

export const NIGERIAN_STATES = [
    "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue",
    "Borno", "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu",
    "FCT - Abuja", "Gombe", "Imo", "Jigawa", "Kaduna", "Kano", "Katsina",
    "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", "Niger", "Ogun", "Ondo",
    "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", "Yobe", "Zamfara",
    "Outside Nigeria",
] as const;

export const gwrBaseSchema = z.object({
    fullName: z.string().min(3, "Full name must be at least 3 characters*"),

    gender: z.enum(["Male", "Female", "Prefer not to say"] as const, {
        message: "Please select a gender*",
    }),

    dateOfBirth: z.string()
        .min(1, "Date of birth is required*")
        .refine((val) => {
            const date = new Date(val);
            if (isNaN(date.getTime())) return false;

            const today = new Date();

            let age = today.getFullYear() - date.getFullYear();
            const monthDiff = today.getMonth() - date.getMonth();

            if (
                monthDiff < 0 ||
                (monthDiff === 0 && today.getDate() < date.getDate())
            ) {
                age--;
            }

            return age >= 5 && age <= 120;
        }, "Please enter a valid date of birth*"),

    nationality: req("Nationality is required*"),

    stateOfResidence: z.enum(NIGERIAN_STATES, {
        message: "Please select a state*",
    }),

    phoneNumber: z.string().min(7, "Enter a valid phone number*"),

    whatsappNumber: z.string().optional(),

    email: z.string().superRefine((val, ctx) => {
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(val)) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Invalid email address*",
            });
        }
    }),

    willAttend: z.enum(["Yes", "No", "Not sure"] as const, {
        message: "Please select an option*",
    }),
});

export type gwrFormData = z.infer<typeof gwrBaseSchema>;
