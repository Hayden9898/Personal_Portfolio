import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hayden's Resume",
};

export default function ResumePage() {
  return (
    <div className="fixed inset-0">
      <iframe
        src="/resume.pdf"
        className="w-full h-full border-none"
        title="Hayden's Resume"
      />
    </div>
  );
}
