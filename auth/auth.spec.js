const request = require("supertest");
const server = require("../api/server.js");

const db = require('../data/dbConfig.js');



// describe('authRouter', function() {
  
//   describe("test environment", function(){
//     it('should use the testing environment', function(){
//       expect(process.env.DB_ENV).toBe('testing')
//     })
//   })
//   describe("POST /", function() {
//     beforeEach( () => {
//       return db('users').truncate()
//     })
//     it('adds a user',  async function() {
//      await User.insert({ email: "timber@gmail.com", password: "123"})

//       const user = await db('users')

//       expect(user).toHaveLength(1)

//     })
//     it('Cant register new user', async () => {
//       await User.in
//     })
//   })
// })

describe('auth',  function() {

  beforeEach(() => {
    return db.migrate.rollback()
      .then(() => db.migrate.latest())
      .then(() => db.seed.run())
  
      
  })
  
  describe('Register User', () => {
    it('POST /api/auth/register', async () => {
      const res = await request(server)
        .post('/api/auth/register')
        .send({ email: "tabby@gmail.com", password: "123"})
        // console.log(res.body)
        expect(res.status).toBe(201)
        // expect(res.body).toHaveProperty('id')
        // expect(res.body).toHaveProperty("token")
        expect(res.type).toBe('application/json')
    })
  })
  
  describe('Login User', function() {
    it('POST /api/auth/login', async () => {
  
      const res = await request(server)
      .post('/api/auth/register')
      .send({ email: "babby@gmail.com", password: "123"})
  
      const login = await request(server)
        .post('/api/auth/login')
        .send({ email: "babby@gmail.com", password: "123"})
      // console.log(login.body)
      expect(login.status).toBe(200)
      expect(login.type).toBe('application/json')
      expect(login.body).toHaveProperty('token')
    })
      
  })
})

