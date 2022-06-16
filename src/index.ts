import * as childProcess from 'child_process'
import express from 'express'
import * as fs from 'fs'

const app = express()

app.get('/camera', (_, res) => {
  // raspistillコマンドで撮影
  childProcess.execSync('raspistill -o public/out.jpg -t 10')

  const file = fs.readFileSync('public/out.jpg', { encoding: 'base64' })
  res.send(file)
})

app.listen(3000, () => console.log('listening on port 3000'))
