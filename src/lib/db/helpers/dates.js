/** Shared date / json helpers for Prisma repos */

export function toIso(value) {
  if (value == null) return value;
  if (value instanceof Date) return value.toISOString();
  return String(value);
}

export function toDate(value) {
  if (value instanceof Date) return value;
  if (typeof value === "string" && value) return new Date(value);
  return new Date();
}

export function asJson(value, fallback = null) {
  if (value == null) return fallback;
  if (typeof value === "string") {
    try {
      return JSON.parse(value);
    } catch {
      return fallback;
    }
  }
  return value;
}

export function asObject(value) {
  const parsed = asJson(value, {});
  return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : {};
}
