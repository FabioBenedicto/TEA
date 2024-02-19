import express from 'express'
import {
  setUser,
  validateUser,
  updateNotesAndPhone,
  updateNotes,
  updatePhone
} from '@controllers/userController'

const routes = express.Router()

routes.post('/user/register', setUser)
routes.post('/user/login', validateUser)
routes.put('/user/notes-and-phone', updateNotesAndPhone)
routes.put('/user/notes', updateNotes)
routes.put('/user/phone', updatePhone)

export { routes }
