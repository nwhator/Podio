"use client";

import React, { useState } from "react";
import { Share2, Check, Copy, MessageCircle } from "lucide-react";

interface EventShareProps {
  title: string;
  headline: string;
  slug: string;
}

export function EventShare({ title, headline, slug }: EventShareProps) {
  const [copied, setCopied] = useState(false);

  const getShareUrl = () => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/events/${slug}`;
    }
    return `https://podioforkids.com/events/${slug}`;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  const shareText = encodeURIComponent(`${title} — ${headline} | Podio`);
  const shareUrl = encodeURIComponent(getShareUrl());

  const shareLinks = [
    {
      name: "WhatsApp",
      url: `https://api.whatsapp.com/send?text=${shareText}%20${shareUrl}`,
      color: "hover:bg-[#25D366] hover:text-white",
    },
    {
      name: "X",
      url: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
      color: "hover:bg-black hover:text-white",
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      color: "hover:bg-[#0077b5] hover:text-white",
    },
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      color: "hover:bg-[#1877F2] hover:text-white",
    },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-white/70">
        <Share2 className="h-3.5 w-3.5" />
        <span>Share:</span>
      </span>

      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex h-8 items-center justify-center rounded-lg border border-white/20 bg-white/10 px-2.5 text-[11px] font-bold text-white transition ${link.color}`}
        >
          {link.name}
        </a>
      ))}

      <button
        onClick={handleCopy}
        className="flex h-8 items-center gap-1 rounded-lg border border-white/20 bg-white/10 px-2.5 text-[11px] font-bold text-white transition hover:bg-white hover:text-[#07101f]"
        title="Copy event link"
      >
        {copied ? (
          <>
            <Check className="h-3 w-3 text-emerald-400" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <Copy className="h-3 w-3" />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
