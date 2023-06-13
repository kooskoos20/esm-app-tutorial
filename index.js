import { getDailySteps } from "./stepsTracker.js";

export const getHealthSummary = (numberOfDays) => {
  const dailySteps = getDailySteps(numberOfDays);
  const totalSteps = dailySteps.reduce(
    (steps, totalSteps) => totalSteps + steps,
    0
  );
  return {
    numberOfDays,
    totalSteps,
  };
};
