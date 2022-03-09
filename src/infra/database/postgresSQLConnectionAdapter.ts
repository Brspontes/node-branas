import pgPromise from 'pg-promise'
import Connection from './connection'

export default class PostgresSQLConnectionAdapter implements Connection {
  connection: any
  
  constructor () {
    this.connection = pgPromise()('postgres://postgres:postgresql@localhost:5440/postgres')
  }

  async close(): Promise<void> {
    this.connection.$pool.end()
  }
  
  async query(stmt: string, params: any): Promise<any> {
    return this.connection.query(stmt, params)
  }
}
