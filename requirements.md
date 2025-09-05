# RS Clone – Angular Final Project (Team of 3, 1 month)

##Total: 635 points

---

### A) Baseline (objective) — **70 pts**

- NgRX — **20 pts**

- **3+ `computed` values** — **15 pts**

- **2+ `effect`** with clean-up that trigger a **real side effect** (navigation, storage, analytics, DOM/API) — **15 pts**

- **Signal inputs** (`input()`) in **3+ components** — **10 pts**
  
- Use **`untracked()`** or a **custom equality** in **1+ place** — **10 pts**


### B) Quality & Integration — **50 pts** (5 × 10 pts)

- Effects don’t re-trigger themselves; clean-up is visible in code/tests.
- **Useful computed:** each computed helps (filtering, totals, flags), used in **≥2 places** or replaces heavy template logic.
- **Clear boundaries:** signals for app/component state; RxJS stays where it fits (HTTP/streams). No duplicate state (Signal + Subject) without a reason.
- **Performance awareness:** use `track` with `@for`; avoid unnecessary recomputes (note, profiler screenshot, or counter proof).
- **Short rationale:** in README (5–7 lines) explain where you chose signals vs RxJS and why (clarity, perf, simplicity).

### 2) Routing & Navigation – up to 70 pts

- Functional routes with lazy **`loadComponent`** - **25 pts**
- **Guards/resolvers** - **20 pts**
- **`withComponentInputBinding()`** - **15 pts**
- **404 page** - **10 pts**
? Deep linking: keep query params, restore scroll, good loading UX - **20 pts**

### 3) Testing – up to 70 pts

- **Unit tests** for key components/services/pipes with edge cases - **50 pts**
- Mock HTTP, test interceptors and error states - **20 pts**
? Use a component testing library/harness where it helps - **10 pts**

### 4) TypeScript & Typing – up to 40 pts

- `strict: true` - **20 pts**
- Good domain models with **generics** and **type guards** - **15 pts**
- `satisfies` and utility types (Pick, Partial, Omit) where helpful - **5 pts**

### 5) Architecture & Components – up to 80 pts

- Feature-sliced structure (core/shared/ui/features) - **30 pts**
- Reusable components with clear inputs/outputs, content projection - **20 pts**
- Useful attribute or structural directives - **20 pts**
- Well-designed pure pipes with strong typing - **10 pts**

### 6) HTTP & Data – up to 45 pts

- Typed HttpClient layer, **interceptors** for auth/headers - **25 pts**
- Consistent **error handling** with user-friendly messages and safe retry policy - **20 pts**
? **Cancel** in-flight requests on navigation, avoid races - **20 pts**

### 7) Forms (Reactive Forms) – up to 55 pts

- Complex form with custom validators (sync + async), clear error UX - **40 pts**
- Dynamic fields with **FormArray** - **15 pts**
? Save draft and **restore** form state - **15 pts**
? Keyboard access, labels, `aria-describedby` for errors - **10 pts**

### 8) UI, Styling & Theming – up to 45 pts

? Design tokens with **CSS custom properties**, **theme switch** (dark/light) saved to storage - **25 pts**
- Responsive layout (BreakpointObserver or modern CSS) - **15 pts**
- **Angular animations** that improve UX - **10 pts**
- Good empty/loading/error states, skeletons - **20 pts**

### 11) Backend & Data Persistence – up to 40 pts

- Your own backend (NestJS/Express) **or** Firebase (Firestore/Auth/Storage) with docs - **40 pts**

### 13) DevOps, CI & Docs – up to 30 pts

? CI pipeline: lint + unit tests + build + preview - **20 pts**
- Clear **README** with run steps, env variables, architecture diagram - **20 pts**
- Release notes/changelog and issue templates - **10 pts**

## Team process & jury presentation – up to 40 pts

- **Board + worklog + dailies** - keep a shared board (GitHub Projects/Trello), short daily updates, and a per-member worklog - **20 pts**
- **Code reviews** - small PRs, clear commit messages, review checklist - **10 pts**
- **Jury presentation** - up to **30 minutes** per team. Recommended split: **18 min live demo**, **7 min architecture & Angular choices**, **5 min Q\&A**. Prepare a **2–3 min backup video** - **10 pts**
