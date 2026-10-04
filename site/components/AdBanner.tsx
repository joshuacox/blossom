'use client';

import React from 'react';

interface AdBannerProps {
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  responsive?: boolean;
  className?: string;
}

export default function AdBanner({
  slot = '1234567890',
  format = 'auto',
  responsive = true,
  className = '',
}: AdBannerProps) {
  return (
    <div
      className={`my-8 overflow-hidden rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-center ${className}`}
    >
      <div className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
        Advertisement
      </div>
      <div className="flex min-h-[90px] items-center justify-center rounded-lg border border-dashed border-slate-800 bg-slate-950/40 p-4">
        {/* Production Google AdSense Unit */}
        <ins
          className="adsbygoogle block w-full"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-8973108060277483"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
        <div className="text-xs text-slate-600">
          AdSense Ready (pub-8973108060277483)
        </div>
      </div>
    </div>
  );
}
