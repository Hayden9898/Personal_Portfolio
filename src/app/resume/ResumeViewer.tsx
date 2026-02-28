"use client";

import { useEffect, useState } from "react";

export function ResumeViewer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (mobile) {
      window.location.href = "/resume.pdf";
    } else {
      setIsMobile(false);
    }
  }, []);

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
