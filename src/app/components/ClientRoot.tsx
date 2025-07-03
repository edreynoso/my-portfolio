'use client';
import Spotlight from "./Spotlight";

export default function ClientRoot({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Spotlight />
      {children}
    </>
  );
}