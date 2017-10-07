import * as mongoose from 'mongoose';
import { MongooseThenable } from 'mongoose';

import { DatabaseCredentials } from './types/database';

const DB_CREDENTIALS: DatabaseCredentials = {
  dbName: 'work-group-manager',
  host: '@ds151544.mlab.com:51544',
  password: 'pass',
  user: 'root'
};

class Database {
  private DB_URI: string;

  constructor() {
    this.DB_URI = `mongodb://${DB_CREDENTIALS.user}:${DB_CREDENTIALS.password}${DB_CREDENTIALS.host}/${DB_CREDENTIALS.dbName}`;
  }

  public connect = (): MongooseThenable => mongoose.connect(this.DB_URI, {useMongoClient: true});
}

export default new Database();
