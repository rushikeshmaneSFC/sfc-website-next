# SFC Website (Next.js)

Static frontend website built with Next.js.

## First-time setup

When you open this project for the first time, follow these steps to run it locally.

### 1. Install dependencies

```bash
npm install
```

Or with another package manager:

```bash
yarn install
# or
pnpm install
# or
bun install
```

### 2. Environment variables

Copy the example env file and adjust if needed:

```bash
cp .env.example .env.local
```

Edit `.env.local` and set:

- **`NEXT_PUBLIC_API_URL`** – Base URL of the backend API (e.g. `http://localhost:3000` for local development). Forms and API calls use this.

You can leave the default `http://localhost:3000` if your backend runs on that port.

### 3. Run the development server

```bash
npm run dev
```

Or:

```bash
yarn dev
# or
pnpm dev
# or
bun dev
```

The app will start on **http://localhost:4000** (port 4000 is configured in this project).

Open [http://localhost:4000](http://localhost:4000) in your browser.

### 4. Backend (optional)

Form submissions (e.g. enroll, breached) call the API at `NEXT_PUBLIC_API_URL`. Ensure the backend is running at that URL (e.g. `http://localhost:3000`) if you need those features to work.

---

## Other commands

- **Build for production:** `npm run build`
- **Start production server:** `npm run start` (runs on port 4000)
- **Lint:** `npm run lint`

---

## Learn more

- [Next.js documentation](https://nextjs.org/docs)
- [Next.js deployment](https://nextjs.org/docs/app/building-your-application/deploying)
