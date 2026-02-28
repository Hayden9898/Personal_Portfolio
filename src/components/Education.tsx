import { education } from "@/data/portfolio";
import { SectionReveal } from "./SectionReveal";

export function Education() {
  return (
    <SectionReveal>
      <section className="px-6 md:px-12 py-12 max-w-2xl mx-auto">
        <div className="flex items-center gap-4">
          {/* Graduation cap icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-amber shrink-0"
          >
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
          </svg>
          <div>
            <p className="text-bone font-medium text-lg">
              {education.program}
            </p>
            <p className="text-ash text-sm">{education.school}</p>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
