"use client";

import { useState, type FormEvent } from "react";
import { projectTypes, siteConfig, type ProjectType } from "@/data/site";

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = Partial<Record<string, string>>;

const initial = {
  name: "",
  company: "",
  role: "",
  phone: "",
  email: "",
  projectType: "kitchen" as ProjectType,
  message: "",
  companyWebsite: "",
};

export function ContactForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [formError, setFormError] = useState("");

  function update(field: keyof typeof initial, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    setFormError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await response.json()) as { error?: string; ok?: boolean };
      if (!response.ok || !data.ok) {
        setStatus("error");
        setFormError(data.error ?? "The form could not be checked. Call Rodney instead.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setFormError("The form could not be submitted. Call Rodney instead.");
    }
  }

  if (status === "success") {
    return (
      <div className="border border-border bg-bg-elevated px-6 py-10 md:px-10" role="status">
        <p className="text-xs uppercase tracking-[0.2em] text-accent">Noted on this page</p>
        <h2 className="mt-3 font-display text-4xl text-ink">Call Rodney to continue.</h2>
        <p className="mt-4 leading-relaxed text-ink-muted">
          Email from this form is not connected yet, so this note was not sent to
          an inbox. The sure way to reach him is by phone.
        </p>
        <a
          href={siteConfig.phoneHref}
          className="mt-6 inline-block font-display text-3xl text-ink hover:text-walnut"
        >
          {siteConfig.phone}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="relative flex flex-col gap-6">
      <div className="absolute -left-[9999px] h-0 overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={values.companyWebsite}
            onChange={(event) => update("companyWebsite", event.target.value)}
          />
        </label>
      </div>

      <Field
        id="name"
        label="Name"
        value={values.name}
        error={errors.name}
        autoComplete="name"
        onChange={(value) => update("name", value)}
      />
      <Field
        id="company"
        label="Company"
        value={values.company}
        error={errors.company}
        autoComplete="organization"
        onChange={(value) => update("company", value)}
      />
      <Field
        id="role"
        label="Role"
        optional
        value={values.role}
        error={errors.role}
        autoComplete="organization-title"
        onChange={(value) => update("role", value)}
      />
      <Field
        id="phone"
        label="Phone"
        type="tel"
        value={values.phone}
        error={errors.phone}
        autoComplete="tel"
        onChange={(value) => update("phone", value)}
      />
      <Field
        id="email"
        label="Email"
        type="email"
        value={values.email}
        error={errors.email}
        autoComplete="email"
        onChange={(value) => update("email", value)}
      />

      <div>
        <label htmlFor="projectType" className="text-xs uppercase tracking-[0.16em] text-ink-muted">
          Project type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={values.projectType}
          onChange={(event) => update("projectType", event.target.value)}
          className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none focus:border-ink"
        >
          {projectTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {errors.projectType ? (
          <p id="projectType-error" className="mt-2 text-sm text-walnut" role="alert">
            {errors.projectType}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="text-xs uppercase tracking-[0.16em] text-ink-muted">
          Project notes
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          onChange={(event) => update("message", event.target.value)}
          className="mt-2 w-full resize-y border-b border-ink/20 bg-transparent py-3 text-ink outline-none focus:border-ink"
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-walnut" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      {formError ? (
        <p className="text-sm text-walnut" role="alert">
          {formError}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 inline-flex items-center justify-center self-start bg-accent px-7 py-3.5 text-sm tracking-wide text-bg-elevated transition-colors hover:bg-accent-hover disabled:opacity-50"
      >
        {status === "submitting" ? "Checking…" : "Leave a project note"}
      </button>
      <p className="text-sm leading-relaxed text-ink-muted">
        This form checks your details and does not send email yet. For a live
        conversation, call {siteConfig.phone}.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
  optional = false,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-xs uppercase tracking-[0.16em] text-ink-muted">
        {label}
        {optional ? <span className="tracking-normal text-stone"> · optional</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        required={!optional}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-ink outline-none focus:border-ink"
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-walnut" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function validate(values: typeof initial): FieldErrors {
  const errors: FieldErrors = {};
  if (values.name.trim().length < 2) errors.name = "Enter your name.";
  if (values.company.trim().length < 2) errors.company = "Enter your company.";
  if (values.phone.trim().length < 7) errors.phone = "Enter a phone number.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!projectTypes.some((type) => type.value === values.projectType)) {
    errors.projectType = "Choose a project type.";
  }
  if (values.message.trim().length < 10) {
    errors.message = "Add a short note about the project.";
  }
  return errors;
}
