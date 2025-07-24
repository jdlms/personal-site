import { useEffect, useState } from "react";
import { Container } from "./Container";

export function DeskHydrator() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
    const el = document.getElementById("desk-canvas-placeholder");
    if (el) el.remove();
  }, []);
  if (!hydrated) return null;
  return <Container />;
}
