import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/innerhp-logo.png.asset.json";
import { MagicParticles } from "@/components/MagicParticles";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <div style={{ padding: 50, textAlign: "center" }}>
      <MagicParticles />
      <img src={logoAsset.url} alt="InnerHP" style={{ height: 100 }} />
      <h1>Welcome back, hero</h1>
      <Link to="/home">
        <button style={{ fontSize: 20, padding: "10px 20px" }}>
          Enter the realm
        </button>
      </Link>
      <div>
        <Link to="/forgot">Forgot password?</Link>
      </div>
      <div>
        <Link to="/register">Create an account</Link>
      </div>
    </div>
  );
}
