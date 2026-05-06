"use server";

import { createClient } from "@supabase/supabase-js";
import { sendRegistrationEmail } from "@/hooks/lib/registrationEmails/send-emails";
import { gwrBaseSchema, gwrFormData } from "@/hooks/validation/GwrSchema";

export async function submitGwr(data: gwrFormData) {
    // Validate on the server
    const parsed = gwrBaseSchema.safeParse(data);
    if (!parsed.success) {
        return { success: false, error: parsed.error.flatten().fieldErrors };
    }

    const supabase = createClient(
        process.env.NEXT_PUBLIC_REGISTRATION_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_REGISTRATION_SUPABASE_ANON_KEY!,
    );

    try {
        const { error } = await supabase.from("gwr").insert({
            full_name: parsed.data.fullName,
            gender: parsed.data.gender,
            date_of_birth: parsed.data.dateOfBirth,
            nationality: parsed.data.nationality,
            state_of_residence: parsed.data.stateOfResidence,
            phone_number: parsed.data.phoneNumber,
            whatsapp_number: parsed.data.whatsappNumber ?? null,
            email: parsed.data.email,
            will_attend: parsed.data.willAttend,
        });

        if (error) {
            if (error.code === "23505") {
                return {
                    success: false,
                    error: { email: ["This email is already registered"] },
                };
            }
            return { success: false, error: { _form: [error.message] } };
        }

        await sendRegistrationEmail({
            to: parsed.data.email,
            fullName: parsed.data.fullName,
            formType: "GWR",
        });

        return { success: true };

    } catch (err: unknown) {
        if (
            err instanceof TypeError &&
            (err.message.includes("fetch failed") ||
                err.message.includes("Failed to fetch") ||
                err.message.includes("Load failed") ||
                err.message.includes("network"))
        ) {
            return {
                success: false,
                error: { network: ["No internet connection"] },
            };
        }

        return {
            success: false,
            error: { network: ["No internet connection"] },
        };
    }
}
