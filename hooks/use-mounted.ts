"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/**
 * SSR-safe mounted flag: `false` on the server and through hydration, `true`
 * after. Use it to gate anything that reads client-only state (`resolvedTheme`,
 * `localStorage`, `window`) so the server and first client render still agree.
 *
 * `useSyncExternalStore` rather than `useState` + `useEffect` because the
 * react-hooks lint rule rejects setting state synchronously in an effect.
 */
export const useMounted = () =>
  useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
