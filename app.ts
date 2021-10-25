import express from 'express'
import dotenv from 'dotenv'
import router from './routes/exampleRoute.js'

dotenv.config()

const app = express()

app.use('/', router)

app.listen(process.env.PORT, () => {
	console.log(`Server is running in port  ${process.env.PORT}`)
})

export default app
