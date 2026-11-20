# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

## Contact form Telegram setup

The contact form sends messages through the server-side `/api/contact` endpoint. For local development, copy `.env.example` to `.env` and set `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID`. Do not add a real bot token to frontend code or commit it.

Create a Telegram bot with BotFather, send it a message (or add it to the destination group), and configure the destination chat ID. For deployment, set both values as server-side environment variables on a host that runs the project's `api/contact.js` serverless function. The Vite development server also provides this endpoint locally.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
