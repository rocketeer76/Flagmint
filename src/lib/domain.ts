export type FlagContext = { userId?: string; organizationId?: string };
export type EvaluationInput = {
  user?: boolean;
  organization?: boolean;
  environment?: boolean;
  global?: boolean;
  defaultValue: boolean;
};
export function evaluateFlag(input: EvaluationInput) {
  return (
    input.user ??
    input.organization ??
    input.environment ??
    input.global ??
    input.defaultValue
  );
}
export function rolloutBucket(value: string) {
  let hash = 2166136261;
  for (const char of value) {
    hash ^= char.charCodeAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0) % 100;
}
