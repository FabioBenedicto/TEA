import 'dotenv/config'

import express from 'express'

import { routes } from './routes'
import { errorsMiddleware } from '@middlewares/errorsMiddleware'

const app = express()

app.use(express.json())
app.use(routes)
app.use(errorsMiddleware)

app.listen(3333, '192.168.1.108', () => {
    console.log('runnign')
})
