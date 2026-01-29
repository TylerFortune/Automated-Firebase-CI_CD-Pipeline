// Simple sanity check to ensure the test runner operates correctly
describe('CI/CD Pipeline Sanity Check', () => {
  test('Pipeline should be able to run tests', () => {
    expect(true).toBe(true);
  });

  test('Environment variables should be handled safely', () => {
    const secret = process.env.MY_SECRET;
    // We don't check the value, just that accessing env vars doesn't crash
    expect(typeof secret === 'undefined' || typeof secret === 'string').toBe(true);
  });
});
