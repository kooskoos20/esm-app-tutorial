import { getHealthSummary } from "./index.js";

describe("Health summary", () => {
  test("should return healthy summary for a single day", async () => {
    const result = getHealthSummary(1);
    expect(result).toMatchObject({ numberOfDays: 1, totalSteps: 9_000 });
  });
});
