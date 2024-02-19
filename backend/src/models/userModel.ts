import { connection } from '@connections/connection'

export const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM user WHERE email = ?'
  const result = await connection.execute(query, [email])
  return result[0][0]
}

export const setUser = async (firstName, lastName, email, password) => {
  const query = 'INSERT INTO user(first_name, last_name, email, password) values (?, ?, ?, ?)'
  await connection.execute(query, [firstName, lastName, email, password])
}

export const updateNotesAndPhone = async (email, notes, phone) => {
  let query = 'UPDATE user SET notes = ?, phone = ? WHERE email = ?'
  await connection.execute(query, [notes, phone, email])
  query = 'SELECT * FROM user WHERE email = ?'
  const result = await connection.execute(query, [email])
  return result[0][0]
}

export const updateNotes = async (email, notes) => {
  let query = 'UPDATE user SET notes = ? WHERE email = ?'
  await connection.execute(query, [notes, email])
  query = 'SELECT * FROM user WHERE email = ?'
  const result = await connection.execute(query, [email])
  return result[0][0]
}

export const updatePhone = async (email, phone) => {
  let query = 'UPDATE user SET emergency_phone = ? WHERE email = ?'
  await connection.execute(query, [phone, email])
  query = 'SELECT * FROM user WHERE email = ?'
  const result = await connection.execute(query, [email])
  return result[0][0]
}
