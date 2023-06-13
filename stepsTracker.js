const dataInDatabase = [
  9_000, 6_654, 6_876, 9_897, 12_549, 14_895, 5_765, 18_920, 8_714, 9_007,
];

const getDailySteps = (numberOfDays) => dataInDatabase.slice(0, numberOfDays);

module.exports = { getDailySteps };
