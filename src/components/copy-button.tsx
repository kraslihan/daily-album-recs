"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

import { Button } from "@/components/ui/button";

type Props = {
  text: string;
  label?: string;
};

export function CopyButton({ text, label = "Kopyala" }: Props) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(id);
  }, [copied]);

  return (
    <Button
      variant="ghost"
      size="xs"
      className="text-muted-foreground"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
        } catch {
          setCopied(false);
        }
      }}
      aria-live="polite"
    >
      {copied ? <Check className="size-3 text-spotify" /> : <Copy className="size-3" />}
      {copied ? "Kopyalandı" : label}
    </Button>
  );
}
