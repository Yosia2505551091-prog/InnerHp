import { createFileRoute, Link } from "@tanstack/react-router";
import logoPng from "@/assets/innerhp-logo.png";
import { MagicParticles } from "@/components/MagicParticles";

export const Route = createFileRoute("/register")({
  component: Register,
  head: () => ({ meta: [{ title: "Create account — InnerHP" }] }),
});

function Register() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-[440px] flex-col px-6 py-10">
      <MagicParticles />
      <div className="text-center">
        <img
          src={logoPng}
          alt="InnerHP"
          className="mx-auto h-24 w-24 object-contain drop-shadow-xl"
        />
        <h1 className="mt-3 font-display text-3xl font-bold">
          Begin a new tale
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Forge your hero — your story starts here.
        </p>
      </div>

      {/* Static fields — no interaction, just visual copy of the original */}
      <div className="mt-8 space-y-3">
        <div className="glass-soft flex items-center gap-3 rounded-2xl px-4 py-3">
          <span className="text-sm text-muted-foreground">🧑</span>
          <span className="flex-1 text-sm text-muted-foreground">Aelwyn</span>
        </div>

        <div className="glass-soft flex items-center gap-3 rounded-2xl px-4 py-3">
          <span className="text-sm text-muted-foreground">✉️</span>
          <span className="flex-1 text-sm text-muted-foreground">
            aelwyn@innerhp.com
          </span>
        </div>

        <div className="glass-soft flex items-center gap-3 rounded-2xl px-4 py-3">
          <span className="text-sm text-muted-foreground">🔒</span>
          <span className="flex-1 text-sm text-muted-foreground">
            ••••••••••
          </span>
        </div>

        <div className="glass-soft flex items-center gap-3 rounded-2xl px-4 py-3">
          <span className="text-sm text-muted-foreground">🔒</span>
          <span className="flex-1 text-sm text-muted-foreground">
            ••••••••••
          </span>
        </div>

        <Link
          to="/onboarding"
          className="gradient-primary mt-2 w-full rounded-full py-3.5 font-display text-base font-semibold shadow-lg active:scale-[0.98] inline-block text-center"
        >
          Forge my hero
        </Link>
      </div>

      <p className="mt-6 text-center text-xs text-muted-foreground">
        Already on the path?{" "}
        <Link to="/login" className="font-semibold text-primary hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}
