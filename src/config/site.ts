// Canonical owner for the public web origin and social preview image.
// The Vercel URL is the verified current production address, NOT a confirmed custom domain.
// Set NEXT_PUBLIC_SITE_URL to the Owner-approved primary domain before any final release.
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const publicSiteUrl = (configuredSiteUrl || "https://lumina-studio-iota-ten.vercel.app").replace(/\/+$/, "");

export const socialPreviewImage = "/images/portfolio/lumina-harvest-v1/000013_ceremony_IMG_1676.webp";
