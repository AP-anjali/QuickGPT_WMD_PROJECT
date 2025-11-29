# QuickGPT (MERN) — Student Project (IT645)

## Project summary
QuickGPT is a MERN stack AI chatbot with credit-based access and image generation. This repo is prepared to satisfy IT645 Project Evaluation Guidelines.

## Features
- Chat with AI (text & image)
- Credit-based usage & Stripe payments
- Community published images
- JWT authentication
- Server-side rendered demo pages (EJS)
- Third-party API: Official Joke API (frontend demo)

## Setup (local)
1. Clone repo
2. Create `.env` from `.env.example` and fill values
3. Install:
   - Server: `cd server && npm install`
   - Client: `cd client && npm install`
4. Run:
   - Server dev: `cd server && npm run dev`
   - Client: `cd client && npm run dev` (vite)
5. Use Postman collection (postman_collection.json) to test endpoints.

## API (summary)
- `POST /api/users/register` — register
- `POST /api/users/login` — login
- `GET /api/users/me` — get auth user
- `GET /api/chats` — list chats
- `POST /api/chats` — create chat
- `GET /api/chats/:id` — get chat
- `PUT /api/chats/:id` — update chat name
- `DELETE /api/chats/:id` — delete
- `POST /api/messages/text` — text generation (requires 1 credit)
- `POST /api/messages/image` — image generation (requires 2 credits)
- `GET /api/credits/plans` — list plans
- `POST /api/credits/purchase` — create stripe session
- `POST /api/stripe/webhook` — stripe webhook (raw)

## Notes
- Do not commit `.env`.
- EJS pages at `/` and `/pricing`.
- Use the `fetchWrapper` from `AppContext` for client-side fetches.

