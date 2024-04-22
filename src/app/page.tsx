import react from "react";
import Dashboard from "./layouts/dashboard";

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Dashboard />
    </main>
  );
}
