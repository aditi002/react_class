import axios from "axios"
import { useEffect, useState } from "react"

const baseUrl = 'http://localhost:4000/notes'


export default function Notes() {
    // const {notes} = props //object d-structure

    const [desc, setDesc] = useState('')
    const [notes, setNotes] = useState([]) //object lai list ma send garna lai state banako

    const [isEdit, setIsEdit] = useState(false)

    // const[targetId, setTargetNote] = useState({})

    const [targetNote, setTargetNote] = useState()

    const [showAll, setShowAll] = useState(true)

    useEffect(() => {
        axios.get('http://localhost:4000/notes')
            .then(response => {
                console.log(response)
                setNotes(response.data)
            })
    }, [])



    const filteredNotes = showAll
        ? notes
        : notes.filter(n => n.important === true)


    const handleChange = (event) => {
        console.log(event.target.value)
        setDesc(event.target.value)
    }
    //handleAdd lai call gareko /// handleAdd function banako 
    const handleAdd = (event) => {
        event.preventDefault()
        const newNote = {
            id: notes.length + 1,
            desc: desc,
            important: Math.random() < 0.5
        }
        // console.log(newNote)
        axios.post(baseUrl, newNote)
            .then(response => {
                console.log(response.data)
                setNotes(notes.concat(response.data)) //this send object to list
            })
        setDesc('')
    }

    const handleDelete = (noteId) => {
        // alert(noteId)
        if (window.confirm(`Are you sure to delet note with id${noteId}`)) {
            axios.delete(`${baseUrl}/${noteId}`)
                .then(response => {
                    console.log(response)
                })
            setNotes(notes.filter(n => n.id !== noteId))
        }
    }

    const handleEdit = (noteId) => {
        alert(noteId)
        const targetNote = notes.find(n => n.id === noteId)
        // console.log(notes.find(n => n.id == noteId).desc)
        setDesc(notes.find(n => n.id === noteId).desc)

        setDesc(targetNote.desc)
        setIsEdit(true)
        setTargetNote(targetNote)
    }

    const handleSave = (event) => {
        event.preventDefault()
        axios.put(`${baseUrl}/${targetNote.id}`,
            { ...targetNote, desc: desc })
            .then(response => {
                console.log(response.data)
            })
        const updatedNotes = notes.map(n => n.id === targetNote.id ?
            { ...targetNote, desc: desc }
            : n) //
        setNotes(updatedNotes)
        setIsEdit(false)
        setDesc('')
    }

    const handleImportant = () => {
        setShowAll(!showAll)
    }

    const h2style = {
        color:"green",
        fontStyle: "italic",
        fontSize: 20
    }



    return (
        <>
            <h1>Notes App</h1>
            <h2 style={h2style}>This is cool app</h2>
            <button onClick={handleImportant}>
                show {showAll ? 'imporatnt' : 'all'}
            </button>
            <ul>
                {
                    filteredNotes.map(note =>
                        <li key={note.id}>
                            {note.desc}
                            {' '}
                            <button onClick={() => handleDelete(note.id)}>delete</button>
                            <button onClick={() => handleEdit(note.id)}>edit</button>
                        </li> ///to remove error in inspect(console) = key={note.id} //for space{''}

                    )
                }
            </ul>
            <br />


            <form>
                <input
                    type="text"
                    value={desc}
                    onChange={handleChange}
                />
                {' '}
                {
                    isEdit ?
                        <button onClick={handleSave}>Save</button>
                        : <button onClick={handleAdd}>Add</button>
                }

            </form>
        </>
    )
}