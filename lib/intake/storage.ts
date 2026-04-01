import type { SchoolSafetyIntakeValues } from "./schemas";

const STORAGE_KEY = "code-red-school-safety-intake";

export function saveIntakeDraft(values: SchoolSafetyIntakeValues) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
}

export function loadIntakeDraft(): SchoolSafetyIntakeValues | null {
  if (typeof window === "undefined") return null;

  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  try {
    return JSON.parse(raw) as SchoolSafetyIntakeValues;
  } catch {
    return null;
  }
}

export function clearIntakeDraft() {
  if (typeof window === "undefined") return;
  localStorage.removeItem(STORAGE_KEY);
}
