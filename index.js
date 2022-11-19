import express from 'express';
import { addNewNotes, getAllNotes } from './src/notes.js';


// create a new server
const app = express();
app.use(express.json())

app.post('/notes', addNewNotes)
app.get('/notes', getAllNotes)

app.get('/', (req, res) => {
    res.send('Hello')
})
// defining the port 
const PORT = 3030;

// ---define the routes---

// listen to the server on the specified port


app.listen(PORT, () => 
    console.log(`Listing on http:localhost:${PORT}...`))
