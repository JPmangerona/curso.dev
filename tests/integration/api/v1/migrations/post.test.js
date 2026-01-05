test("POST to /api/v1/migrations should return 200", async () => {
  const response = await fetch("http://localhost:3004/api/v1/migrations", {
    method: "POST",
  });
  expect(response.status).toBe(200);

  const responseBody = await response.json();

  expect(Array.isArray(responseBody)).toBe(true);
});
