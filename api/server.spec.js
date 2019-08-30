const request = require("supertest");

const server = require("./server");

describe("users database", () => {
  it('tests if DB_ENV is "testing"', () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  describe("Get /", () => {
    it("returns 200 OK", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("JSON CHECK", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });
    it( 'Should return { message: "Sup ✌🏼 -Server" }' , async () => {

        const res = await request( server ).get( '/' );
        expect( res.body ).toEqual({ message: 'Sup ✌🏼 -Server' });

    });
  });
});
