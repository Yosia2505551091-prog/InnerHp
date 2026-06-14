import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/innerhp-logo.png.asset.json";

export const Route = createFileRoute("/login")({
  component: Login,
  head: () => ({ meta: [{ title: "Sign in — InnerHP" }] }),
});

function Login() {
  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-[440px] flex-col px-6 py-10">
      <div className="text-center">
        <img src={logoAsset.url} alt="InnerHP" className="mx-auto h-28 w-28 object-contain drop-shadow-xl" />
        <h1 className="mt-3 font-display text-3xl font-bold">Welcome back, hero</h1>
      </div>
      <Link to="/home" className="gradient-primary mt-8 w-full rounded-full py-3.5 font-display text-base font-semibold text-center">
        Enter the realm
      </Link>
    </div>
  );
}
