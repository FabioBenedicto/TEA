import * as userModel from '@models/userModel'

export const validateUser = async (req, res, next) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      throw new Error('Faltam informações')
    }
    const user = await userModel.getUserByEmail(email)
    if (!user) {
      throw new Error('Nenhum usuário com esse E-mail encontrado')
    }
    const passwordMatch = password === user.password
    if (!passwordMatch) {
      throw new Error('Email ou Senha Incorretos')
    }
    return res.status(200).json(user)
  } catch (error) {
    return next(error)
  }
}

export const setUser = async (req, res, next) => {
  try {
    const { firstName, lastName, email, password } = req.body
    if (!firstName || !lastName || !email || !password) {
      throw new Error('Faltam informações')
    }
    const user = await userModel.getUserByEmail(email)
    if (user) {
      throw new Error('Usuário já registrado')
    }
    await userModel.setUser(firstName, lastName, email, password)
    return res.status(201).json()
  } catch (error) {
    return next(error)
  }
}

export const updateNotesAndPhone = async (req, res, next) => {
  try {
    const { email, notes, phone } = req.body
    const user = await userModel.updateNotesAndPhone(email, notes, phone)
    return res.status(201).json(user)
  } catch (error) {
    return next(error)
  }
}

export const updatePhone = async (req, res, next) => {
  try {
    const { email, phone } = req.body
    const user = await userModel.updatePhone(email, phone)
    return res.status(201).json(user)
  } catch (error) {
    return next(error)
  }
}

export const updateNotes = async (req, res, next) => {
  try {
    const { email, notes } = req.body
    const user = await userModel.updateNotes(email, notes)
    return res.status(201).json(user)
  } catch (error) {
    return next(error)
  }
}
