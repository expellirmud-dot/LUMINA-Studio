// Canonical owner for the public web origin and social preview image.
// Owner confirmed the existing free Vercel hostname as LUMINA's current public canonical domain (2026-10-13).
// Keep NEXT_PUBLIC_SITE_URL as an explicit override only if the Owner later approves a different primary domain.
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const publicSiteUrl = (configuredSiteUrl || "https://lumina-studio-iota-ten.vercel.app").replace(/\/+$/, "");

export const socialPreviewImage = "/images/portfolio/lumina-harvest-v1/000013_ceremony_IMG_1676.webp";
