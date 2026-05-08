# WorthCast

**Stream What Matters.**

WorthCast is an open streaming platform for values-aligned creators and viewers. Built for people who believe the content you watch shapes the person you become.

-----

## What It Is

WorthCast is a video streaming platform — think YouTube meets Dailymotion, built with a values-first identity. It is open to any creator with something worth saying: faith, film, education, culture, family, wellbeing, and beyond.

It is not a Christian-only platform. It is a platform for content that builds people up rather than tearing them down — a home for creators who are tired of algorithms designed to outrage and audiences who want something better.

-----

## Revenue Model

- **Subscriptions** — viewers pay for premium content access
- **Creator monetization** — ad revenue share, tips, paid content
- **Church & ministry licensing** — group screening licences for organisations
- **Digital downloads** — permanent purchase of films and series
- **Donations** — optional supporter layer for mission-driven creators

-----

## Current State

|Item                |Status                |
|--------------------|----------------------|
|Landing page        |✅ Complete            |
|Favicon             |✅ Complete            |
|Brand identity      |✅ Defined             |
|Domain              |🔲 Pending registration|
|Next.js app         |🔲 Not started         |
|Backend / database  |🔲 Not started         |
|Video infrastructure|🔲 Not started         |
|Creator dashboard   |🔲 Not started         |
|Deployment          |🔲 Not started         |

-----

## Planned Tech Stack

|Layer                    |Technology              |
|-------------------------|------------------------|
|Frontend                 |Next.js 15 (App Router) |
|Styling                  |Tailwind CSS            |
|Database                 |Supabase (PostgreSQL)   |
|Auth                     |Supabase Auth           |
|Video hosting & streaming|Mux or Cloudflare Stream|
|File storage             |Cloudflare R2 or AWS S3 |
|Deployment               |Vercel                  |
|Payments                 |Stripe                  |

-----

## Repository Structure

```
worthcast/
├── index.html          ← Landing page (current)
├── favicon.svg         ← Brand favicon
├── README.md           ← This file
└── app/                ← Next.js app (coming)
    ├── (public)/
    │   ├── page.tsx        ← Homepage
    │   ├── browse/         ← Video browse
    │   ├── watch/[id]/     ← Video player
    │   ├── live/           ← Live streams
    │   ├── creators/       ← Creator profiles
    │   └── categories/     ← Category pages
    ├── (auth)/
    │   ├── signin/
    │   └── join/
    └── (studio)/
        ├── upload/         ← Video upload
        ├── dashboard/      ← Creator dashboard
        ├── analytics/      ← Creator analytics
        └── monetization/   ← Revenue settings
```

-----

## Brand

**Name:** WorthCast  
**Tagline:** Stream What Matters  
**Colours:** `#C9A84C` gold · `#080808` black · `#F5F2EC` warm white  
**Typography:** Bebas Neue (display) · Playfair Display (serif) · DM Sans (body)  
**Positioning:** Values-aligned · Open to creators · Creator-first revenue

-----

## Context

WorthCast is built by [uvisionsmedia](https://github.com/georgy4932) — a creative studio producing AI-assisted biblical films and sacred digital platforms. The platform is designed to serve as a revenue stream that sustains ongoing film production and ministry work, while providing a home for values-aligned creators worldwide.

The flagship film *IT IS FINISHED* — a biblical feature covering the Passion of Christ — will be among the first titles released on the platform.

-----

## Roadmap

**Phase 1 — Foundation**

- [x] Brand identity and landing page
- [ ] Register worthcast.tv domain
- [ ] Set up Next.js app with Supabase
- [ ] Basic auth (sign in / join)

**Phase 2 — Core Platform**

- [ ] Video upload and processing via Mux
- [ ] Video player page
- [ ] Browse and category pages
- [ ] Creator profiles

**Phase 3 — Monetization**

- [ ] Stripe integration
- [ ] Subscription tiers
- [ ] Creator revenue dashboard
- [ ] Tips and paid content

**Phase 4 — Growth**

- [ ] Live streaming
- [ ] Church licensing portal
- [ ] Mobile apps (iOS / Android)
- [ ] Creator analytics

-----

## Contributing

This is a private project currently in development. Collaboration enquiries welcome via [uvisionsmedia](https://github.com/georgy4932).

-----

*© 2026 WorthCast. All rights reserved.*
