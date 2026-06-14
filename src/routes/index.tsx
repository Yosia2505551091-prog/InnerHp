import { createFileRoute, Link } from "@tanstack/react-router";
import logoPng from "@/assets/innerhp-logo.png";
import { Sparkles, Heart } from "lucide-react";
import { MagicParticles } from "@/components/MagicParticles";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "InnerHP — Your Mental HP companion" },
      { name: "description", content: "A cozy RPG-inspired mental health tracker. Restore your Mental HP through self-care quests." },
    ],
  }),
});

function Index() {
  
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-[440px] flex-col items-center justify-between px-6 py-10">
      <MagicParticles />
      <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <div className="relative grid place-items-center">
          <div className="absolute inset-6 -z-10 rounded-full bg-gradient-to-br from-[var(--lavender)] to-[var(--mint)] blur-3xl opacity-60" />
          <img 
  src={logoPng}
  alt="InnerHP — heart and spellbook logo"
  className="animate-float h-44 w-44 object-contain drop-shadow-2xl sm:h-56 sm:w-56"
/>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-xs font-medium text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5" /> A cozy RPG for your mind
        </div>
        <h1 className="font-display text-5xl font-bold tracking-tight">
          Inner<span className="bg-gradient-to-br from-[var(--primary)] to-[oklch(0.62_0.18_295)] bg-clip-text text-transparent">HP</span>
        </h1>
        <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
          A gentle RPG where your feelings have power. Care for yourself, complete quests, and restore your Mental HP.
        </p>
      </div>
      <div className="w-full space-y-3">
        <Link
          to="/onboarding"
          className="gradient-primary flex w-full items-center justify-center gap-2 rounded-full py-4 font-display text-base font-semibold text-foreground shadow-lg transition-transform active:scale-[0.98]"
        >
          <Heart className="h-4 w-4 fill-[var(--hp)] text-[var(--hp)]" />
          Begin your journey
        </Link>
        <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <Link to="/login" className="hover:text-foreground">Sign in</Link>
          <span className="opacity-40">·</span>
          <Link to="/home" className="hover:text-foreground">Skip intro →</Link>
        </div>
      </div>
    </div>
  );
}
