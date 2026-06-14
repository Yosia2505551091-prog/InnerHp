import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/innerhp-logo.png.asset.json";
import { MagicParticles } from "@/components/MagicParticles";

export const Route = createFileRoute("/login")({
  component: Login,
  head: () => ({
    meta: [
      { title: "Sign in — InnerHP" },
      { name: "description", content: "Welcome back, hero." },
    ],
  }),
});

function Login() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-[440px] flex-col px-6 py-10">
      <MagicParticles />
      
      {/* Logo & heading — same as original */}
      <div className="text-center">
        <img
          src={logoAsset.url}
          alt="InnerHP"
          className="mx-auto h-28 w-28 object-contain drop-shadow-xl"
        />
        <h1 className="mt-3 font-display text-3xl font-bold">
          Welcome back, hero
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Your adventure journal is waiting.
        </p>
      </div>

      {/* Static version of the form — all inputs shown as decorative, non‑interactive */}
      <div className="mt-8 space-y-3">
        {/* Email "field" — looks like input but is just text */}
        <div className="glass-soft flex items-center gap-3 rounded-2xl px-4 py-3">
          {/* No icon, replaced with a plain emoji/character */}
          <span className="text-muted-foreground text-sm">✉️</span>
          <span className="flex-1 text-sm text-muted-foreground">
            adventurer@innerhp.com
          </span>
        </div>

        {/* Password "field" — static dots */}
        <div className="glass-soft flex items-center gap-3 rounded-2xl px-4 py-3">
          <span className="text-muted-foreground text-sm">🔒</span>
          <span className="flex-1 text-sm text-muted-foreground">
            ••••••••
          </span>
        </div>

        {/* Remember me + forgot password row */}
        <div className="flex items-center justify-between px-1 text-xs">
          <span className="flex items-center gap-2 text-muted-foreground">
            <span className="h-3.5 w-3.5 rounded border border-muted-foreground inline-block" />
            Remember me
          </span>
          <Link
            to="/forgot"
            className="text-primary hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Main CTA */}
        <Link
          to="/home"
          className="gradient-primary mt-2 w-full rounded-full py-3.5 font-display text-base font-semibold shadow-lg active:scale-[0.98] inline-block text-center"
        >
          Enter the realm
        </Link>
      </div>

      {/* Divider */}
      <div className="my-5 flex items-center gap-3 text-[10px] uppercase tracking-widest text-muted-foreground">
        <div className="h-px flex-1 bg-border" /> or continue with{" "}
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Social buttons — still using <Link> */}
      <div className="space-y-2">
        <Link
          to="/home"
          className="glass flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold"
        >
          <span className="text-lg">🔮</span> Continue with Google
        </Link>
        <Link
          to="/home"
          className="glass flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold"
        >
          <span className="text-lg">📜</span> Continue with Facebook
        </Link>
      </div>

      {/* Register link */}
      <p className="mt-6 text-center text-xs text-muted-foreground">
        New adventurer?{" "}
        <Link
          to="/register"
          className="font-semibold text-primary hover:underline"
        >
          Create an account
        </Link>
      </p>
    </div>
  );
}
