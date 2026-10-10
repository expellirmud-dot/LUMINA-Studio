# LUMINA Studio

Premium photography landing page project.

## Vision

LUMINA Studio is a premium photography and creative portfolio project.

The project starts as a deploy-test landing page and may evolve into:

- Photography portfolio
- Graphic design portfolio
- Creative studio website
- Personal brand platform

## Current Goal

- Single-page landing page
- Deploy test
- Future foundation for photography / graphic design business website

## Current Phase

Phase 1 — Landing Page only


## OpenAI Ads conversion tracking

The site includes the ChatGPT Ads Measurement Pixel when `NEXT_PUBLIC_OPENAI_ADS_PIXEL_ID` is set.

Environment variables:

- `NEXT_PUBLIC_OPENAI_ADS_PIXEL_ID` — Pixel ID from Ads Manager → Conversions.
- `NEXT_PUBLIC_OPENAI_ADS_DEBUG=true` — optional browser-console diagnostics while validating the integration.

Tracked standard events:

- `page_viewed` when the landing page initializes.
- `lead_created` when a visitor starts contact through the Phone or LINE links.

The integration does not manually send customer identifiers. Before production use, make sure your consent flow and privacy disclosure meet the requirements that apply to your visitors.
