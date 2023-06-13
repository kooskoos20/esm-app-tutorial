const { getDailySteps } = require("./stepsTracker");

const getHealthSummary = (numberOfDays) => {
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

module.exports = { getHealthSummary };
