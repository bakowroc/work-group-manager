import * as mongoose from 'mongoose';
import { MongooseThenable } from 'mongoose';

import { DatabaseCredentials } from './types/database';

const DATABASE_CREDENTIALS: DatabaseCredentials = {
  dbName: 'work_group_manager',
  host: 'localhost',
  password: '',
  user: ''
};

class Database {
  private DATABASE_URI: string;

  constructor() {
    this.DATABASE_URI = `mongodb://${DATABASE_CREDENTIALS.host}/${DATABASE_CREDENTIALS.dbName}`;
  }

  public connect = (): MongooseThenable => mongoose.connect(this.DATABASE_URI);
}

export default new Database();
