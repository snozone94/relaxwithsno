# RelaxWithSno

This repository contains a minimal proof‑of‑concept for an OnlyFans‑style platform
named **RelaxWithSno**.  It uses the [Next.js](https://nextjs.org/) framework
and TypeScript to set up a simple age‑gated site with a few example pages.

> **Warning**: This code is for demonstration purposes only.  It is **not**
> production ready and omits many critical features required for a real
> subscription platform (payment processing, secure media delivery,
> database migrations, moderation, etc.).  See the attached design brief
> for guidance on building a full‑fledged solution.

## Features

* **Age gate** – visitors must confirm they are at least 18 before accessing
  any restricted pages.  The `age_gate_ok` cookie is set after a
  successful age‑verification and the middleware redirects non‑verified
  visitors back to the age gate.
* **Middleware** – the `middleware.ts` file intercepts requests to
  restricted routes (`/feed`, `/creator`) and enforces the age gate.
* **Stubbed data models** – the Prisma schema defines basic `User`,
  `CreatorProfile`, `Post`, `Purchase`, `Subscription` and `Block` models.
  These provide a starting point for implementing database logic.
* **Pages** – a landing page (`/`), an age‑verification page
  (`/age-gate`), and a simple feed page (`/feed`) with sample posts.

## Running locally

1. **Install dependencies**

   ```bash
   cd relaxwithsno
   npm install
   ```

2. **Set up the database**

   This project uses SQLite by default.  Create an `.env` file and set a
   `DATABASE_URL`.  Then run the Prisma migrations:

   ```bash
   npx prisma migrate dev --name init
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

   Visit http://localhost:3000 in your browser.  You should see the
   landing page and be able to go through the age gate to the feed.

## Extending this project

To turn this into a real platform you will need to implement at least
the following:

* **Authentication** – integrate [NextAuth.js](https://next-auth.js.org/) so
  that fans, creators and admins can log in and manage their accounts.
* **Payment processing** – use an adult‑friendly payment processor such
  as CCBill or Segpay.  Connect their APIs via serverless functions and
  webhooks to grant access after purchase.
* **Content storage** – store uploaded media on a private object
  storage service (S3, Cloudflare R2, etc.) and serve it via signed
  URLs with watermarks to deter leaks.
* **Age & KYC verification** – integrate a third‑party age/KYC service
  to verify fans and creators.  Currently the age gate is a simple
  form that trusts the user.
* **Moderation** – build admin tooling to handle reports, 2257
  compliance, takedown requests and user/IP blocking.

Refer to the design document provided by ChatGPT for a high‑level
overview of these requirements.
