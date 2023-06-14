import { jest } from "@jest/globals";

const mockDailySteps = [
  6_453, 6_987, 9_876, 11_897, 12_549, 14_895, 5_765, 18_920, 8_714, 9_007,
];
const mockGetDailySteps = jest.fn();

describe("Health summary", () => {
  beforeAll(() => {
    jest.unstable_mockModule("./stepsTracker", () => ({
      getDailySteps: mockGetDailySteps.mockImplementation((numberOfDays) =>
        mockDailySteps.slice(0, numberOfDays)
      ),
    }));
  });

  afterAll(jest.clearAllMocks);
  test("should return healthy summary for a single day", async () => {
    const { getHealthSummary } = await import(".");
    const result = getHealthSummary(1);
    expect(result).toMatchObject({ numberOfDays: 1, totalSteps: 6_453 });
  });
});
