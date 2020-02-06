const request = require("supertest");
const server = require("../../api/server.js");

const db = require('../../data/dbConfig.js');

beforeEach(() => {
  return db.migrate.rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run())
})



describe('Get Workout Id', () => {
  it('GET workout id', async () => {
    const get = await request(server).get('/api/workouts/1')
    console.log(get.body)
    expect(get.status).toBe(200)
    expect(get.type).toBe('application/json')
    expect(get.body).toHaveProperty(["id"])
  })
})


describe('Adds workout', function() {
  it('adds workout', async () => {

    const res = await request(server)
    .post('/api/users/3/workouts')
    .send({ workoutName: "Upper Body"})

    console.log(res.body)
    expect(res.status).toBe(200)
    expect(res.type).toBe('application/json')
    // expect(res.body).toHaveProperty('token')
  })
    
})

describe('Get exercises', function() {
  it('get exercises', async () => {
    const get = await request(server)
      .get('/api/workouts/1/exercises')
    console.log(get.body)
    expect(get.status).toBe(200)
  })
})

