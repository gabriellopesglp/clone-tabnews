test("GET to /api/v1/status should return a 200 status code", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
});
