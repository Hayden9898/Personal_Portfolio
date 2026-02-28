import type { Metadata } from "next";
import { ResumeViewer } from "./ResumeViewer";

export const metadata: Metadata = {
  title: "Hayden's Resume",
};

export default function ResumePage() {
  return <ResumeViewer />;
}
