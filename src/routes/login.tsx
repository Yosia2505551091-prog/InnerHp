import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: Login,
});

function Login() {
  return (
    <div style={{ padding: 50, textAlign: "center" }}>
      <h1>Login (test)</h1>
      <Link to="/home">
        <button style={{ fontSize: 20, padding: "10px 20px" }}>
          Go to Home
        </button>
      </Link>
    </div>
  );
}
