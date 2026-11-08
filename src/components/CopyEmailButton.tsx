import { useEffect, useRef, useState } from "react";
import { Check, Mail } from "lucide-react";

export default function CopyEmailButton({ address }: { address: string }) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    },
    [],
  );

  async function copyEmail() {
    if (resetTimer.current) clearTimeout(resetTimer.current);
    try {
      await navigator.clipboard.writeText(address);
      setState("copied");
      resetTimer.current = setTimeout(() => setState("idle"), 2200);
    } catch {
      setState("error");
    }
  }

  return (
    <span className="copy-email" data-state={state}>
      <button
        type="button"
        className="button button-yellow"
        onClick={copyEmail}
        aria-label="Copy email address"
        title={address}
      >
        <span className="copy-email-icons" aria-hidden="true">
          <Mail className="copy-email-envelope" size={19} strokeWidth={1.8} />
          <Check className="copy-email-check" size={19} strokeWidth={2.2} />
        </span>
      </button>
      <span className="copy-email-status" role="status" aria-live="polite">
        {state === "copied"
          ? "Email copied!"
          : state === "error"
            ? `Couldn’t copy. Email: ${address}`
            : ""}
      </span>
    </span>
  );
}
