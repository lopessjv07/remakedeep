'use client';

import Script from 'next/script';

/**
 * Utmify UTM tracking script and Pixel.
 * Captures UTM parameters from the URL and appends them to outbound links,
 * and tracks events with the Utmify Pixel.
 */
export default function UtmifyScript() {
  return (
    <>
      {/* UTM Script para repassar os parâmetros pros links */}
      <Script
        id="utmify-script"
        src="https://cdn.utmify.com.br/scripts/utms/latest.js"
        data-utmify-prevent-xcod-sck=""
        data-utmify-prevent-subids=""
        async
        defer
        strategy="lazyOnload"
      />
      
      {/* Pixel Script para enviar eventos */}
      <Script
        id="utmify-pixel"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.pixelId = "6a52a95f3e380ffa64a49d07";
            var a = document.createElement("script");
            a.setAttribute("async", "");
            a.setAttribute("defer", "");
            a.setAttribute("src", "https://cdn.utmify.com.br/scripts/pixel/pixel.js");
            document.head.appendChild(a);
          `
        }}
      />
    </>
  );
}
