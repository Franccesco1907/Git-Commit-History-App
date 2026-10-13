# Git Commit History App

NestJS API and React/Vite UI for browsing and filtering one GitHub repository's commits.

1. Create `backend/.env` with `PORT=8080`, `GITHUB_API_URL=https://api.github.com`, `GITHUB_OWNER`, `GITHUB_REPO`, and `GITHUB_API_TOKEN=Bearer <token>` (repository read access).
2. Create `frontend/.env` with `VITE_BACKEND_URL=http://localhost:8080`, `VITE_GITHUB_BASE_URL=https://github.com`, `VITE_GITHUB_OWNER`, and `VITE_GITHUB_REPO`. Never expose the token in a `VITE_` variable.
3. Run `docker compose up --build`; UI: http://localhost:3000, API/Swagger: http://localhost:8080/docs. Stop with `docker compose down`.

Backend checks: `docker compose run --rm backend pnpm run test --runInBand` and `docker compose run --rm backend pnpm run build`; e2e: `pnpm run test:e2e` from `backend/` with its environment configured.
Frontend: from `frontend/`, run `npm install`, then `npm run build` or `npm run lint`. There is no frontend test script.
For local development outside Docker, install with pnpm in `backend/` and npm in `frontend/`; run `pnpm start:dev` and `npm run dev` respectively.

The backend package is UNLICENSED; Nest itself is MIT licensed.
