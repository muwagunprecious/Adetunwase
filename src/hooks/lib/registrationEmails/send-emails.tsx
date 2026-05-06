/* eslint-disable @next/next/no-img-element */

import { Resend } from "resend";
import { render } from "@react-email/render";

if (!process.env.RESEND_API_KEY) {
  throw new Error("Missing RESEND_API_KEY");
}

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendRegistrationEmailProps {
  to: string;
  fullName: string;
  formType: string;
}

// Email Component
function RegistrationEmail({
  fullName,
  formType,
}: {
  fullName: string;
  formType: string;
}) {
  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f4f4f4",
        padding: "0px 0px",
      }}
    >
      <div
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        {/* Header */}
        <div
          style={{
            backgroundColor: "#050b11",
            padding: "30px 20px",
            textAlign: "center",
          }}
        >
          <img
            src="https://achieverssummit.com.ng/assets/achiever-summit-logo.svg"
            alt=""
            width="140"
            style={{ marginBottom: "10px" }}
          />
          <p
            style={{
              color: "#ffffff",
              fontSize: "11px",
              letterSpacing: "2px",
              margin: 0,
              opacity: 0.7,
              textTransform: "uppercase",
            }}
          >
            Application Received! 🎉
          </p>
          <h1
            style={{
              color: "#ffffff",
              fontSize: "22px",
              margin: "10px 0 0",
            }}
          >
            WE&apos;VE RECEIVED YOUR APPLICATION
          </h1>
        </div>

        {/* Body */}
        <div style={{ padding: "30px 20px" }}>
          <p style={{ color: "#374151", fontSize: "15px", lineHeight: "1.6" }}>
            Dear <strong>{fullName}</strong>,
          </p>

          <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>
            Thank you for submitting your <strong>{formType}</strong>{" "}
            application for Achievers Summit 2026. We have successfully received
            your details and our team will review your application shortly.
          </p>

          <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.6 }}>
            We will be in touch with you via this email address regarding the
            next steps. In the meantime, feel free to reach out to us if you
            have any questions.
          </p>

          {/* Highlight Box */}
          <div
            style={{
              margin: "25px 0",
              padding: "15px",
              backgroundColor: "#f9fafb",
              borderRadius: "8px",
              border: "1px solid #eee",
            }}
          >
            <p style={{ margin: 0, fontSize: "13px", color: "#666" }}>
              📌 <strong>What happens next?</strong>
            </p>
            <ul style={{ marginTop: "10px", paddingLeft: "18px" }}>
              <li style={{ fontSize: "13px", color: "#666" }}>
                Your application will be reviewed
              </li>
              <li style={{ fontSize: "13px", color: "#666" }}>
                You&apos;ll receive a confirmation or next step email
              </li>
              <li style={{ fontSize: "13px", color: "#666" }}>
                Selected applicants will be contacted directly
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", margin: "30px 0" }}>
            <a
              href="https://achieverssummit.com.ng"
              style={{
                backgroundColor: "#050b11",
                color: "#ffffff",
                padding: "14px 28px",
                textDecoration: "none",
                borderRadius: "30px",
                fontWeight: "bold",
                fontSize: "14px",
                display: "inline-block",
              }}
            >
              VISIT OUR WEBSITE
            </a>
          </div>

          <p style={{ fontSize: "13px", color: "#888", textAlign: "center" }}>
            If you did not submit this application, please ignore this email.
          </p>
        </div>

        {/* Footer */}
        <div
          style={{
            backgroundColor: "#050b11",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#aaa", fontSize: "12px", margin: 0 }}>
            Need help? Contact{" "}
            <a
              href={`mailto:${process.env.EMAIL_FROM_EMAIL}`}
              style={{ color: "#FF6B00" }}
            >
              {process.env.EMAIL_FROM_EMAIL}
            </a>
          </p>

          <p style={{ color: "#aaa", fontSize: "12px", marginTop: "5px" }}>
            © 2026 Achievers Summit. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

// Sender Function
export async function sendRegistrationEmail({
  to,
  fullName,
  formType,
}: SendRegistrationEmailProps) {
  try {
    const html = await render(
      <RegistrationEmail fullName={fullName} formType={formType} />,
    );

    const response = await resend.emails.send({
      from: `Achievers Summit <${process.env.EMAIL_FROM_EMAIL}>`,
      to,
      subject: `Your ${formType} Application Has Been Received – Achievers Summit 2026`,
      html,
    });

    if (response.error) {
      console.error("RESEND ERROR RESPONSE:", response.error);
      return { success: false, error: response.error };
    }

    return { success: true, data: response };
  } catch (err) {
    console.error("RESEND ERROR:", err);
    return { success: false };
  }
}
