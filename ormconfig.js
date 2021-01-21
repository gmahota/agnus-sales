module.exports =  {
  type: 'mysql',
  host: process.env.TYPEORM_HOST,
  port: process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  entities: [process.env.TYPEORM_ENTITIES],
  migrations: [process.env.TYPEORM_MIGRATIONS],
  cli: {
    migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
  },
}

// database: process.env.DB_CONFIG,
//   port: process.env.SQL_PORT,// 5432
//   username: process.env.SQL_USER,
//   password: process.env.SQL_PASSWORD,
//   synchronize: true,
//   logging: true,
//   entities: [__dirname +"/src/models/**/*{.ts,.js}"],
//   migrations: [__dirname +"/src/database/migrations/**/*{.ts,.js}"],
//   cli:{
//       migrationsDir:__dirname +"/src/database/migrations"
//   }