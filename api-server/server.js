const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`${Date()} ... what a lovely day!`))

app.get('/bar', (req, res) => res.send(`Ooops! I'm a ninja, you shouldn't see me.`))

app.listen(port, () => console.log(`Node server listening on port ${port}`))
