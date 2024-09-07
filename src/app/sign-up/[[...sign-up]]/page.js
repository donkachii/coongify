import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <section
      className="flex items-center justify-center h-screen"
      style={{
        background:
          "conic-gradient(from 180deg at 50% 50%, rgba(255, 165, 0, 0.2), rgba(229, 141, 210, 0.3), rgba(187, 228, 220, 0.3), rgba(255, 165, 0, 0.2))",
      }}
    >
      <SignUp />
    </section>
  );
}
