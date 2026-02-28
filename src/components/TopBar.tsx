import { SocialLinks } from "./SocialLinks";

export function TopBar() {
  return (
    <nav className="flex justify-end px-6 py-5 md:px-12">
      <SocialLinks size="sm" />
    </nav>
  );
}
