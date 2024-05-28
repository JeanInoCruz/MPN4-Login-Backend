import { db } from '../config/db.js'
import bcrypt from 'bcrypt'

const findByEmail = async (email) => {
  const [rows] = await db.execute('SELECT * FROM users WHERE email = ?', [email])
  return rows.length ? rows[0] : null
}

const where = async (columna, valor) => {
  const [usuario] = await db.execute(
    `SELECT id, name, email, password, created_at FROM users WHERE ${columna} = ?`,
    [valor]
  )
  console.log(usuario)

  return usuario?.length === 0 ? undefined : usuario[0]
}

const create = async ({ email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10)
  console.log(hashedPassword)
  const [result] = await db.execute('INSERT INTO users(email, password) VALUES(?, ?)',
    [email, hashedPassword]
  )
  if (result.affectedRows === 1) {
    const user = await where('id', result.insertId)
    return user
  }

  return undefined
}

const findById = async (userId) => {
  const [rows] = await db.execute(
    'SELECT * FROM users WHERE id = ?',
    [userId]
  )
  return rows[0]
}

export const updateUserProfile = async (id, userData) => {
  const fields = []
  const values = []

  for (const [key, value] of Object.entries(userData)) {
    if (value !== undefined) {
      fields.push(`${key} = ?`)
      values.push(value)
    }
  }

  values.push(id)

  const query = `UPDATE users SET ${fields.join(', ')} WHERE id = ?`
  await db.query(query, values)
}

export default {
  findByEmail,
  updateUserProfile,
  create,
  findById
}
