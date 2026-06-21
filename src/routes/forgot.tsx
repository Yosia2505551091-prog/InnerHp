import { createFileRoute, Link } from "@tanstack/react-router";
import logoPng from "@/assets/innerhp-logo.png";
import { MagicParticles } from "@/components/MagicParticles";

export const Route = createFileRoute("/forgot")({
  component: Forgot,
  head: () => ({ meta: [{ title: "Forgot password — InnerHP" }] }),
});

function Forgot() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-[440px] flex-col px-6 py-10">
      <MagicParticles />
      
      {/* Back link */}
      <Link
        to="/login"
        className="glass-soft inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-xs"
      >
        ← Back
      </Link>

      <div className="mt-6 text-center">
        <img
          src={logoPng}
          alt="InnerHP"
          className="mx-auto h-24 w-24 object-contain"
        />
        <h1 className="mt-3 font-display text-2xl font-bold">
          Lost your password?
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          We’ll send a link to recover it.
        </p>
      </div>

      {/* Instead of a form that submits, just show the sent confirmation immediately 
          (you can also keep the form but replace inputs with static text and submit button with a Link) */}
      <div className="glass animate-magic-pop mt-8 rounded-3xl p-6 text-center">
        <span className="text-4xl">📧</span>
        <p className="mt-2 font-display text-lg font-bold">Scroll sent</p>
        <p className="mt-1 text-sm text-muted-foreground">
          Check your inbox to reset your passphrase.
        </p>
      </div>
    </div>
  );
}
