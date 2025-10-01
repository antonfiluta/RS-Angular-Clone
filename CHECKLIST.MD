# Angular Project Checklist

## 1) Signals & Reactivity – 135/150 pts

### A) Baseline – 85/90 pts

- [ ] **Single source of truth with signals** for one major feature (20 pts)
- [ ] **3+ `computed` values** used in templates or logic (15 pts)
- [ ] **2+ `effect`** with clean-up triggering real side effects (15 pts)
- [ ] Bridge RxJS ↔ Signals: **3+ Observables with `toSignal`** (15 pts)
- [ ] **Signal inputs** in **3+ components** instead of `@Input()` (10 pts)
- [ ] Use **`untracked()`** or **custom equality** to avoid extra updates (10 pts)

### B) Quality & Integration – 50/60 pts

- [ ] **No reactive loops/leaks** with proper clean-up
- [ ] **Useful computed** values used in ≥2 places
- [ ] **Clear boundaries** between signals and RxJS
- [ ] **Performance awareness** with `track` or `trackBy`
- [ ] **Short rationale** in README explaining signals vs RxJS choice

## 2) Routing & Navigation – 70/110 pts

- [ ] Functional routes with lazy **`loadComponent`** (25 pts)
- [ ] **Guards/resolvers** with typed data (20 pts)
- [ ] **`withComponentInputBinding()`** for params to inputs (15 pts)
- [ ] Error route and **404 page** with safe redirects (10 pts)

## 3) TypeScript & Typing – 40/40 pts

- [ ] **`strict: true`** without ignored errors in prod code (20 pts)
- [ ] Good domain models with **generics** and **type guards** (15 pts)
- [ ] **`satisfies`** and utility types (Pick, Partial, Omit) (5 pts)

## 4) Architecture & Components – 80/90 pts

- [ ] **Feature-sliced structure** (core/shared/ui/features) (30 pts)
- [ ] **Reusable components** with clear inputs/outputs, content projection (20 pts)
- [ ] **Useful attribute or structural directives** (20 pts)
- [ ] **Well-designed pure pipes** with strong typing (10 pts)

## 5) HTTP & Data – 45/80 pts

- [ ] **Typed HttpClient layer** with **interceptors** for auth/headers (25 pts)
- [ ] **Cancel in-flight requests** on navigation, avoid races (20 pts)

## 6) Forms (Reactive Forms) – 80/80 pts

- [ ] **Complex form** with custom validators (sync + async), clear error UX (40 pts)
- [ ] **Dynamic fields** with **FormArray** (15 pts)
- [ ] **Save draft and restore** form state (15 pts)
- [ ] **Keyboard access**, labels, `aria-describedby` for errors (10 pts)

## 7) UI, Styling & Theming – 40/70 pts

- [ ] **Design tokens** with CSS custom properties, **theme switch** saved to storage (25 pts)
- [ ] **Responsive layout** (BreakpointObserver or modern CSS) (15 pts)

## 8) Performance – 40/60 pts

- [ ] **Performance budget** in README + measured Lighthouse gains (20 pts)

## 9) Backend & Data Persistence – 40/80 pts

- [ ] **Your own backend** (NestJS/Express) or **Firebase** with docs (40 pts)

## 10) Accessibility (a11y) – 40/40 pts

- [ ] **Keyboard navigation** and focus management across main screens (20 pts)
- [ ] **Proper semantics and ARIA** for forms, dialogs, menus (20 pts)

## 11) DevOps, CI & Docs – 50/60 pts

- [ ] **CI pipeline**: lint + unit tests + build + preview (20 pts)
- [ ] **Clear README** with run steps, env variables, architecture diagram (20 pts)
- [ ] **Release notes/changelog** and issue templates (10 pts)

## 12) Internationalization – 20/20 pts

- [ ] **Two languages** using Angular i18n (20 pts)


---

## 📊 Summary

| Category                      | Achieved | Maximum | Percentage |
| ----------------------------- | -------- | ------- | ---------- |
| **Signals & Reactivity**      | 135 pts  | 150 pts | 90%        |
| **Routing & Navigation**      | 70 pts   | 110 pts | 64%        |
| **TypeScript & Typing**       | 40 pts   | 40 pts  | 100%       |
| **Architecture & Components** | 80 pts   | 90 pts  | 89%        |
| **HTTP & Data**               | 45 pts   | 80 pts  | 56%        |
| **Forms**                     | 80 pts   | 80 pts  | 100%       |
| **UI & Styling**              | 40 pts   | 70 pts  | 57%        |
| **Performance**               | 40 pts   | 60 pts  | 67%        |
| **Backend & Persistence**     | 40 pts   | 80 pts  | 50%        |
| **Accessibility**             | 40 pts   | 40 pts  | 100%       |
| **DevOps & Docs**             | 50 pts   | 60 pts  | 83%        |
| **Internationalization**      | 20 pts   | 20 pts  | 100%       |

## 🎯 Total Score: **680/810 points** (85%)

---
