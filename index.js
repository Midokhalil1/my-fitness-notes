import express from 'express';
import cors from 'cors'
import { addNewNote, getAllNotes, updateNote, getOneNote, deleteNote  } from './src/notes.js';


// create a new server
const app = express();
app.use(express.json())
app.use(cors())

app.post('/notes', addNewNote)
app.get('/notes', getAllNotes)
app.patch('/notes/:noteId', updateNote)
app.get('/notes/:noteId',getOneNote)
app.delete('/notes/:noteId', deleteNote)


// app.get('/', (req, res) => {
//     res.send('Hello')
// })
// defining the port 
const PORT = 3030;

// ---define the routes---

// listen to the server on the specified port


app.listen(PORT, () => 
    console.log(`Listing on http:localhost:${PORT}...`))
