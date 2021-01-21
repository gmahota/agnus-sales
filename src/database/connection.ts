import { createConnection } from 'typeorm';
import ConnectionOptions from '../ormconfig'

console.log(ConnectionOptions)
createConnection(ConnectionOptions);