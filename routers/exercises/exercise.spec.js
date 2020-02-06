const request = require('supertest');
const server = require('../../api/server')

const db = require('../../data/dbConfig')

beforeEach(() => {
  return db.migrate.rollback()
  .then(() => db.migrate.latest())
  .then(() => db.seed.run())
})


describe('Edits an exercise', function() {
  it('edits an exercise',  async () => {
    const post = await request(server)
      .post("/api/workouts/2/exercises")
      .send({ exerciseName: "Shoulder Press", musclesName:"Pecs, shoulders, and abs"})

      console.log(post.body)
      expect(post.status).toBe(200) ///201 breaks your code. Why?
      
      const edit = await request(server)
      .put("/api/exercises/7")
      .send({ exerciseName: 'Shoulder Press', musclesName:"Pecs, not shoulders, and abs"})

      console.log(edit.body)
      expect(edit.status).toBe(200)
      expect(edit.body).toMatchObject({message: "Updated exercise"})
  })
})


