import {
  SiGithub,
  SiX,
} from "@icons-pack/react-simple-icons";
import { socials } from "@/data/portfolio";

const items = [
  {
    label: "GitHub",
    href: socials.github,
    icon: (s: number) => <SiGithub size={s} />,
  },
  {
    label: "LinkedIn",
    href: socials.linkedin,
    icon: (s: number) => (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: socials.x,
    icon: (s: number) => <SiX size={s} />,
  },
  {
    label: "Email",
    href: `mailto:${socials.email}`,
    icon: (s: number) => (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    external: false,
  },
  {
    label: "Resume",
    href: socials.resume,
    icon: (s: number) => (
      <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
];

export function SocialLinks() {
  return (
    <div className="flex items-center gap-6">
      {items.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-secondary transition-colors duration-300 hover:text-primary"
          aria-label={item.label}
        >
          {item.icon(15)}
          <span className="text-xs font-medium">{item.label}</span>
        </a>
      ))}
    </div>
  );
}
