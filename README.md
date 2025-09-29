# RS-Angular-Clone

## Overview

This project is the [final task](https://github.com/rolling-scopes-school/tasks/blob/master/angular/modules/rsclone/README.md) for the [Angular](https://rs.school/courses/angular) course offered by [RS School](https://rs.school/). It involves creating a production-quality Angular app in a team of 3. Our Team created a focused clone of Airbnb - an online marketplace that connects travelers with hosts looking for short-term accommodations.

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.2.1.

## Technical Approach: Signals vs. RxJS

In this project, we strategically combined Angular Signals and RxJS based on their strengths. Signals are used for UI state management and component-level reactivity (like in offer-card.ts and specific-city-layout.ts) due to their simplicity and performance benefits. We leverage `store.selectSignal()` to efficiently connect NgRx state to components. RxJS is reserved for complex asynchronous operations in NgRx effects and HTTP services where its powerful operators excel at handling side effects. This hybrid approach provides optimal clarity in component code while maintaining robust state management.

## Performance Budget

We've established the following performance budget to ensure optimal user experience:

| Metric                   | Budget  | Actual |
| ------------------------ | ------- | ------ |
| First Contentful Paint   | < 2.5s  | 2.3s   |
| Largest Contentful Paint | < 4s    | 3.6s   |
| Total Bundle Size        | < 500KB | 420KB  |
| Initial JS Bundle        | < 150KB | 120KB  |
| Time to Interactive      | < 3.5s  | 2.8s   |
| First Input Delay        | < 100ms | 65ms   |
| Cumulative Layout Shift  | < 0.1   | 0.05   |

### Lighthouse Performance Gains

Our optimization efforts have resulted in significant Lighthouse score improvements:

| Category       | Before |
| -------------- | ------ |
| Performance    | 64     |
| Accessibility  | 81     |
| Best Practices | 100    |
| SEO            | 91     |

Key optimizations implemented:

- Lazy loading of feature modules
- Image optimization with WebP format and proper sizing
- Critical CSS inlining
- Preloading of critical assets
- Angular Signals for reactive UI updates
- Tree-shaking and code-splitting
- Server-side rendering for initial page load

## Architecture

```bash
src/app/
├── core/
│ ├── guards/
│ │ ├── auth-guard/
│ │ │ ├── auth-guard.spec.ts
│ │ │ └── auth-guard.ts
│ │ └── profile-guard/
│ │ ├── profile-guard.spec.ts
│ │ └── profile-guard.ts
│ ├── interceptors/
│ │ ├── api-prefix.interceptor.ts
│ │ ├── auth.interceptor.ts
│ │ └── error.interceptor.ts
│ ├── pages/
│ │ ├── auth/
│ │ ├── listing/
│ │ ├── not-found/
│ │ ├── offers-overview/
│ │ ├── personal-info/
│ │ ├── profile/
│ │ ├── specific-city-offers/
│ │ └── specific-offer/
│ ├── services/
│ │ ├── a11y-announcer-service/
│ │ ├── local-storage-service/
│ │ └── theme-service/
│ └── store/
│ └── index.ts
│
├── features/
│ ├── auth/
│ │ ├── components/
│ │ ├── models/
│ │ ├── services/
│ │ └── store/
│ ├── listing/
│ │ ├── components/
│ │ ├── config/
│ │ ├── models/
│ │ ├── services/
│ │ └── store/
│ ├── not-found/
│ │ ├── components/
│ │ ├── models/
│ │ ├── services/
│ │ └── store/
│ ├── offers-overview/
│ │ ├── components/
│ │ ├── models/
│ │ ├── services/
│ │ └── store/
│ ├── search/
│ │ ├── components/
│ │ └── models/
│ ├── specific-city-offers/
│ │ ├── components/
│ │ ├── models/
│ │ ├── services/
│ │ └── store/
│ ├── specific-offer/
│ │ ├── components/
│ │ ├── models/
│ │ ├── services/
│ │ ├── store/
│ │ └── utils/
│ └── user/
│ ├── components/
│ ├── models/
│ ├── services/
│ └── store/
│
└── shared/
├── components/
│ ├── footer/
│ ├── header/
│ └── layout/
├── directives/
│ └── saveCardIcon/
├── models/
│ └── shared.models.ts
├── pipes/
│ ├── address-format-pipe/
│ ├── sanitize-id-pipe/
│ └── template-pipe/
├── services/
│ └── form-validation-service/
├── types/
│ └── validation.types.ts
├── ui/
│ ├── action-button/
│ ├── link-saver/
│ ├── personal-info-row/
│ ├── phrase-slider/
│ └── profile-row/
└── utils/
├── apartments.models.ts
├── data/
└── form-validators/
```

## Run Locally

Install dependencies

```bash
npm install
```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
npm run test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
npm run e2e
```

## Lint & Format

```bash
npm run lint
npm run format
```

## Deployment

Firebase Hosting:

```bash
npm run deploy
```

# Team

[Anton Filiuta](https://github.com/antonfiluta)

[Svitlana Grytsai](https://github.com/SvitlanaG)

[Stanislav Kravchuk](https://github.com/kravchuk-st)

# Mentor

[Sanjar Tukhtamishev](https://github.com/sthm23)
