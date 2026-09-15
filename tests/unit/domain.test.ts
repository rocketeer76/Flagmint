import { describe, expect, it } from "vitest";
import { evaluateFlag, rolloutBucket } from "../../src/lib/domain";
describe("flag evaluation", () => {
  it("honors precedence", () =>
    expect(
      evaluateFlag({
        user: false,
        organization: true,
        environment: true,
        global: true,
        defaultValue: true,
      }),
    ).toBe(false));
  it("is deterministic", () =>
    expect(rolloutBucket("flag:user")).toBe(rolloutBucket("flag:user")));
});
