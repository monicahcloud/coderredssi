export function getCharacterCount(value?: string | null): number {
  return value?.length ?? 0;
}

export function isAtCharacterLimit(
  value: string | undefined | null,
  max: number,
): boolean {
  return (value?.length ?? 0) >= max;
}

export function formatPhoneInput(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);

  if (digits.length <= 3) return digits;
  if (digits.length <= 6) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  }

  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export function hasAnySelectedRealIncident(selected: string[]): boolean {
  return !(
    selected.length === 0 ||
    (selected.length === 1 && selected[0] === "None of the above")
  );
}
