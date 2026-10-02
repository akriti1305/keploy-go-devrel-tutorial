# Keploy Go DevRel Tutorial

A beginner-friendly tutorial website for using **Keploy** with a Go + Gin + MongoDB application.
Built with **Next.js 16** + **MDX** + **Tailwind CSS** as part of the Keploy DevRel Candidate Assignment.

🔗 **Live Site**: [View on Vercel](https://keploy-go-devrel-tutorial.vercel.app/)  
📦 **Sample App**: [keploy/samples-go · gin-mongo](https://github.com/keploy/samples-go/tree/main/gin-mongo)

---

## What This Tutorial Covers

The tutorial walks through using Keploy's **record-and-replay** testing approach with:

- **App**: A URL shortener service (POST /url, GET /:hash)
- **Framework**: [Gin](https://gin-gonic.com/) (Go HTTP framework)
- **Database**: MongoDB
- **Testing**: Keploy CLI to automatically capture and replay API tests

### Key Concepts Explained

1. What Keploy is and why it's useful
2. Setting up the Go application with Docker
3. Recording test cases with `keploy record`
4. Making real API calls to generate test data
5. Reviewing the generated `test-*.yaml` and `mocks.yaml` files
6. Running `keploy test` — without a live database
7. Understanding noise fields and deterministic replays
8. Troubleshooting common issues

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 16 | React framework (App Router) |
| MDX | Tutorial content with embedded React components |
| Tailwind CSS v4 | Utility-first styling |
| @tailwindcss/typography | Beautiful prose rendering for MDX |
| remark-gfm | GitHub Flavored Markdown in MDX |
| TypeScript | Type safety throughout |

---

## Project Structure

```
keploy-go-devrel-tutorial/
├── app/
│   ├── layout.tsx          ← Root layout (dark mode, Inter font, SEO metadata)
│   ├── globals.css         ← Global styles + Tailwind imports
│   ├── page.tsx            ← Landing page with CTA
│   └── tutorial/
│       └── page.tsx        ← Tutorial page (renders MDX + TOC sidebar)
├── components/
│   ├── Header.tsx          ← Sticky header with dark/light mode toggle
│   ├── Icons.tsx           ← Reusable SVG icon components
│   ├── Callout.tsx         ← Info/Warning/Tip/Success callout boxes
│   ├── Step.tsx            ← Numbered step indicator component
│   ├── CodeBlock.tsx       ← Code block with copy-to-clipboard button
│   └── TableOfContents.tsx ← Active-section TOC with IntersectionObserver
├── content/
│   └── tutorial.mdx        ← The actual tutorial content (MDX)
├── mdx-components.tsx      ← Maps MDX custom components
├── next.config.mjs         ← Next.js config with MDX support (Webpack mode)
├── package.json
└── README.md               ← This file
```

---

## Running Locally

### Prerequisites

- Node.js 18+
- npm

### Steps

```bash
# 1. Clone this repository
git clone https://github.com/<your-username>/keploy-go-devrel-tutorial.git
cd keploy-go-devrel-tutorial

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

The tutorial is at [http://localhost:3000/tutorial](http://localhost:3000/tutorial).

### Production Build

```bash
npm run build
npm start
```

> **Note**: The build uses `--webpack` flag because `@next/mdx` uses a Webpack-based loader that is incompatible with Next.js 16's default Turbopack bundler. This is a known upstream issue with `@next/mdx` + Turbopack.

---

## Keploy Quickstart Used

**Selected quickstart**: `gin-mongo` (Go URL shortener with Gin + MongoDB)

**Repository**: [keploy/samples-go](https://github.com/keploy/samples-go/tree/main/gin-mongo)

### Key Commands

```bash
# Install Keploy
curl --silent -O -L https://keploy.io/install.sh && source install.sh

# Create Docker network for container communication
docker network create keploy-network

# Start MongoDB
docker run -p 27017:27017 -d --network keploy-network --name mongoDb mongo

# Build the Go app Docker image
docker build -t gin-app:1.0 .

# Record test cases (Keploy intercepts all traffic)
keploy record -c "docker run -p 8080:8080 --name MongoApp --network keploy-network gin-app:1.0"

# Make API calls in a second terminal to generate tests
curl -X POST http://localhost:8080/url -H 'content-type: application/json' -d '{"url":"https://google.com"}'
curl -L http://localhost:8080/Lhr4BWAi

# Run the tests (no live MongoDB needed!)
keploy test -c "docker run -p 8080:8080 --name MongoApp --network keploy-network gin-app:1.0" --delay 10
```

### Generated Test Files

After recording, Keploy creates:
- `keploy/test-set-0/tests/test-1.yaml` — POST /url test case
- `keploy/test-set-0/tests/test-2.yaml` — GET /:hash redirect test case  
- `keploy/test-set-0/mocks.yaml` — MongoDB wire-protocol mock recordings

---

## Assignment Context & Technical Verification

This project was built for the **Keploy DevRel Candidate Assignment**.

### Local Technical Verification
During project preparation:
1. **Live Service Verification**: The Go URL-shortener service (`gin-mongo`) was built with Go 1.27.0 and run against a local MongoDB instance. Both endpoints (`POST /url` creating hashes, `GET /:hash` redirecting via HTTP 303) were tested and verified with `curl`.
2. **Platform & eBPF Analysis**: Attempting native Windows execution of `keploy record -c "./app"` confirmed Keploy's kernel requirement: open-source Keploy intercepts traffic via **Linux eBPF**, which requires a Linux kernel environment.
3. **The Docker Workflow**: The tutorial provides the official containerized workflow (`docker run` on `keploy-network`), enabling developers on Windows, macOS, and Linux to run Keploy reliably. Reference test artifacts from the official Keploy sample repository are examined to break down test structure and mock formats.

---

## Deployment

This project is deployed on [Vercel](https://vercel.com).

To deploy your own:

1. Push to a public GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Vercel auto-detects Next.js — no configuration needed
5. Click Deploy

---

## License

MIT — free to use, modify, and distribute.
