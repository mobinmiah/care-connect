const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
  <rect width="32" height="32" rx="6" fill="#13ecec"/>
  <path d="M16 10c-1.5 0-2.8.8-3.5 2a4 4 0 0 0-2 5.3c.8 1.4 2.2 2.2 3.7 2.2h3.6v4h2.4v-4h.8c1.5 0 2.9-.8 3.7-2.2a4 4 0 0 0-2-5.3C18.8 10.8 17.5 10 16 10z" fill="#102222"/>
  <circle cx="11" cy="14" r="2.5" fill="#102222"/>
  <circle cx="21" cy="14" r="2.5" fill="#102222"/>
</svg>`;

export function GET() {
  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
