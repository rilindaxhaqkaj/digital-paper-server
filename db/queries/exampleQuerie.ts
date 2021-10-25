import pool from '../setup.js'
import { camelCasify } from 'casify'

export async function insertExample(name: string) {
  const client = await pool.connect()
  let res = { rows: [] }
  try {
    res = await client.query({
      text: `
				INSERT INTO example (name)
				VALUES($1) RETURNING *
			  `,
      values: [name],
    })
  } finally {
    client.release()
  }
  return camelCasify(res)
}
