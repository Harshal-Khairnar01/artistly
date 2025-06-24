"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const ArtistsClient = dynamic(() => import("./ArtistsClient"), {
  ssr: false,
});

export default function ArtistsPageWrapper() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading artists...</div>}>
      <ArtistsClient />
    </Suspense>
  );
}
