import { createFileRoute, Link } from "@tanstack/react-router";
import logoAsset from "@/assets/innerhp-logo.png.asset.json";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <div style={{ padding: 50, textAlign: "center" }}>
      <img src={logoAsset.url} alt="InnerHP" style={{ height: 100 }} />
      <h1>Login (test with logo)</h1>
      <Link to="/home">
        <button style={{ fontSize: 20, padding: "10px 20px" }}>
          Go to Home
        </button>
      </Link>
    </div>
  );
}
