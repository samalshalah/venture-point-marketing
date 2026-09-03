"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const serviceOptions = [
  "Google Business Profile + NFC Card",
  "Web Design",
  "Brand Strategy",
  "Content Creation",
  "Local SEO / Advertising",
  "Other Option",
];

const recipient = "venturepointmarketing@gmail.com";

export function ServiceApplicationForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Web Design",
  ]);
  const [otherRequest, setOtherRequest] = useState("");
  const [error, setError] = useState("");

  function toggleService(service: string) {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
    setError("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const wantsOther = selectedServices.includes("Other Option");

    if (selectedServices.length === 0) {
      setError("Choose at least one service.");
      return;
    }

    if (wantsOther && otherRequest.trim().length === 0) {
      setError("Tell us what you want under Other Option.");
      return;
    }

    const lines = [
      "New Venture Point service application",
      "",
      `Name: ${form.get("name") || ""}`,
      `Business: ${form.get("business") || ""}`,
      `Email: ${form.get("email") || ""}`,
      `Phone: ${form.get("phone") || ""}`,
      "",
      "Services requested:",
      ...selectedServices.map((service) =>
        service === "Other Option"
          ? `- Other Option: ${otherRequest.trim()}`
          : `- ${service}`,
      ),
      "",
      "Project details:",
      `${form.get("details") || ""}`,
    ];

    const subject = encodeURIComponent("New service application");
    const body = encodeURIComponent(lines.join("\n"));

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="application-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          <span>Your Name</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          <span>Business Name</span>
          <input name="business" autoComplete="organization" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
      </div>

      <fieldset>
        <legend>Services Interested In</legend>
        <div className="option-grid">
          {serviceOptions.map((service) => {
            const checked = selectedServices.includes(service);
            return (
              <button
                aria-pressed={checked}
                className="service-option"
                key={service}
                onClick={() => toggleService(service)}
                type="button"
              >
                <span className="checkmark" aria-hidden="true">
                  {checked ? <Check size={14} /> : null}
                </span>
                {service}
              </button>
            );
          })}
        </div>
      </fieldset>

      {selectedServices.includes("Other Option") ? (
        <label>
          <span>Other Option</span>
          <input
            value={otherRequest}
            onChange={(event) => {
              setOtherRequest(event.target.value);
              setError("");
            }}
            placeholder="Tell us what you want"
          />
        </label>
      ) : null}

      <label>
        <span>Project Details</span>
        <textarea
          name="details"
          rows={4}
          placeholder="What are you trying to improve, launch, or promote?"
        />
      </label>

      {error ? <p className="form-error">{error}</p> : null}

      <button className="button primary submit-button" type="submit">
        Send Application
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </form>
  );
}
