import { ConnectionOptions } from "typeorm";

export default {
  type: "mysql",
  database: process.env.DB_CONFIG,
  port: process.env.SQL_PORT,// 5432
  username: process.env.SQL_USER,
  password: process.env.SQL_PASSWORD,
  synchronize: true,
  logging: true,
  entities: [__dirname +"src/models/**/*{.ts,.js}"],
  migrations: [__dirname +"src/database/migrations/**/*{.ts,.js}"],
  cli:{
      migrationsDir:__dirname +"src/database/migrations"
  }
} as ConnectionOptions;