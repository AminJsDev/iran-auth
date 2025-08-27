export function isValidIranianMobile(input: string): boolean {
  const v = input.trim();
  const regex = /^(?:\+98|0098|0)9\d{9}$/;
  return regex.test(v);
}

export function normalizeIranianMobile(input: string): string {
  const s = input.trim();
  // remove spaces
  const cleaned = s.replace(/\s+/g, "");
  // digits only for checks
  const digits = cleaned.replace(/\D/g, "");
  if (/^0098/.test(digits)) {
    return "+98" + digits.slice(4);
  }
  if (/^98/.test(digits) && digits.length === 12) {
    return "+" + digits;
  }
  if (/^0/.test(digits) && digits.length === 11) {
    return "+98" + digits.slice(1);
  }
  // accepted: +989123456789
  if (/^\+98/.test(cleaned)) return cleaned;
  // fallback - return original trimmed
  return cleaned;
}
