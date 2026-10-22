# Al Kahfi School Website

Public website and admin CMS for **Yayasan Islam Al Kahfi Batam**, a school foundation in Batam, Indonesia. Visitors browse school information, news, gallery, FAQ and admission steps; staff manage that content from a protected admin area.

Built and maintained by Fahmi Dzulqarnain (2023–2024).

## Tech stack

- **Angular 17** (upgraded from 16), TypeScript 5.4, RxJS
- **PrimeNG 17** components, SCSS
- **Quill** rich-text editor for news articles
- Font Awesome icons
- Karma + Jasmine for unit tests

## Features

**Public site**
- Landing page with school overview, about section, admission steps and FAQ
- News list and news detail pages
- Photo gallery

**Admin CMS** (`/admin`, behind login)
- Overview dashboard
- News management with a rich-text editor
- Gallery management
- School information, accreditation and facilities management

**Architecture**
- Feature-based folders: `page-default/` (public), `admin/` (CMS), `api/` (HTTP layer), `services/`, `utilities/`
- Token-based authentication: `AuthService`, an `HttpInterceptor` that attaches the token, and an `authGuard` (`canActivateChild`) protecting every admin route
- Central `ApiService` with the backend base URL in `src/app/api/config/constant.ts`

## Getting started

```bash
npm install
npm start          # ng serve on http://localhost:4200
npm run build      # production build to dist/
npm test           # unit tests (Karma)
```

The app talks to a separate REST backend. Point the base URL in `src/app/api/config/constant.ts` at your own instance before running.

## Credits

Client: Yayasan Islam Al Kahfi Batam. School names and branding belong to the foundation.
