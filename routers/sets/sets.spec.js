const request = require('supertest');
const server = require('../../api/server')

const db = require('../../data/dbConfig')

beforeEach(() => {
  return db.migrate.rollback()
  .then(() => db.migrate.latest())
  .then(() => db.seed.run())
})

describe('Adds a set', function() {
  it('adds a set',  async () => {
    const post = await request(server)
      .post("/api/exercises/2/sets")
      .send({ reps: 2, weight: 123, exercise_id: 3})

      console.log(post.body)

      expect(post.status).toBe(201)
  })
})

describe('Deletes a set', function() {
  it('deletes a set',  async () => {
    const post = await request(server)
      .post("/api/exercises/2/sets")
      .send({ reps: 2, weight: 123, exercise_id: 3})

      console.log(post.body)
      
      const res = await request(server)
      .delete("/api/sets/3")
      expect(res.status).toBe(200)
      expect(res.body).toMatchObject({message: "Deleted Set"})
  })
})


