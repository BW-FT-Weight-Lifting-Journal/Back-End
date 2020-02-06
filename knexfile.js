//                                                                          
//                                                                          
module.exports = {                                                    
//                                                                          
  development: {                                                      
    client: 'sqlite3',                                                  //  
    connection: {                                                       //  uses sqlite3 database and looks creates inside wokoutJournal.db3
      filename: './data/workoutJournal.db3'                             //  
    },                                                                  //  
    pool: {                                                             //  enforces foreign keys to be used with exactness somehow???
      afterCreate: (conn, done) => {                                    //  
        conn.run('PRAGMA foreign_keys = ON', done);                     //  
      },                                                                //  
    },                                                                  //  
    migrations: {                                                       //  creates migrations in this folder
      directory: './data/migrations',                                   //  
    },                                                                  //  
    seeds: {                                                            //  
      directory: './data/seeds',                                        
    },                                                                  //  
    useNullAsDefault: true,                                             //  
  },                                                                    //  
//                                                                          
  production: {                                                         //  PRODUCTION env config
    client: 'pg',                                                       //  
    useNullAsDefault: true,                                             //  uses the PostGres database
    connection: process.env.DATABASE_URL,                               //  
    pool: {                                                             //  connects via DATABASE_URL <will be heroku url>
      min: 2,                                                           //  
      max: 10,                                                          //  not sure what pool does???
    },                                                                  //  
    migrations: {                                                       //  
        directory: './data/migrations',                                 //  migrations same as development env config
    },                                                                  //  
    seeds: {                                                            //  
      directory: './data/seeds',                                        //  seeds same as development env config
    },                                                                  //  
  },                                                                    //  
  //                                                                        
  testing: {                                                           
    client: 'sqlite3',                                                  
    connection: {                                                      
      filename: ':memory:',                                      
    },                                                                 
    useNullAsDefault: true,                                             
    migrations: {                                                    
      directory: './data/migrations',                                  
    },                                                                  
    seeds: {                                                             
      directory: './data/seeds',                                        
    },                                                                    
  },                                                                      
};                                                                       

