import {getConnectionManager, ConnectionManager,createConnection } from 'typeorm';
import ConnectionOptions from '../ormconfig'

createConnection(ConnectionOptions);

const connectionManager = getConnectionManager();
const connection = connectionManager.create(ConnectionOptions);

connection.connect(); // performs connection