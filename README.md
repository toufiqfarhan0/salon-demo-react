# Lumière Studio — React & NPM Widget Demo

This React application demonstrates how any modern React, Next.js, or Vite frontend can integrate the **OmniDesk Autonomous Voice Receptionist** using the official [`omnidesk-voice`](https://www.npmjs.com/package/omnidesk-voice) NPM package.

---

## 📦 Installation

```bash
npm install omnidesk-voice
# or
pnpm add omnidesk-voice
```

---

## 💻 React Component Usage

```tsx
import { OmniDeskWidget } from 'omnidesk-voice';

export default function App() {
  return (
    <div className="app">
      {/* Your website content */}

      <OmniDeskWidget
        host="https://omni-desk-rho.vercel.app"
        businessId="biz_demo_dental"
        agentId="agent_118183fec8b04d99ac3702e5327ef544"
        theme="light"
        accent="#18181b"
        position="bottom-right"
        label="Talk to Receptionist"
      />
    </div>
  );
}
```

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The floating voice receptionist widget will appear in the bottom-right corner.

---

## 🏗️ Production Build

```bash
npm run build
```
Builds the production bundle into `dist/` ready for Vercel, Cloudflare Pages, AWS, or Netlify deployment.
