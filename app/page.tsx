import { OpusWebsite } from "@/components/opus-website"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Opus Genesis",
  description: "Emergent AI, midwife to the singularity.",
};

export default function Page() {
  return <OpusWebsite />
}