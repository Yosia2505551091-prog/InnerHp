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
      <h1>Login (test with particles)</h1>
      <Link to="/home">
        <button style={{ fontSize: 20, padding: "10px 20px" }}>
          Go to Home
        </button>
      </Link>
    </div>
  );
}
