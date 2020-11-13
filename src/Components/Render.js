import {useState, useEffect} from 'react';
import Note from './Note'
import axios from 'axios'
import Notification from './Notification'
import noteService from '../services/notes'


function Render() {
	const [notes, setNotes] = useState([])
	const [newNotes,setNewNotes] = useState('')
	const [showAll, setShowAll] = useState(true)
	const [errorMessage, setErrorMessage] = useState('some error happen...')



	//making important notes toggler
	const toggleImportant = (id) => {
		const url = `http://localhost:3001/notes/${id}`
		const note = notes.find(note => note.id === id)
		const changeNote = {...note,important: !note.important}

		noteService
		.update(id,changeNote)
		.then(returnedNote => {
			setNotes(notes.map(note => note.id !== id ? note : returnedNote))
		})
		.catch(error => {
			setErrorMessage(
				`Note ${note.content} was already removed from server`
				)
			setTimeout(() => {
				setErrorMessage(null)
			},5000)

			setNotes(notes.filter(n => n.id !== id))
		})
	}


	//fectching data from local server
	useEffect(() => {
		noteService
		.getAll()
		.then(initialNotes => {
			setNotes(initialNotes)
		})
	}, [])


	//filtering display notes
	const notesToShow = showAll ? notes : notes.filter(note => note.important === true)

	//add new note
	const addNote = (event) => {
		event.preventDefault()

		const newValue = {
			content:newNotes,
			important:Math.random() < 0.5,
			id:notes.length+1
		}

		noteService
		.create(newValue)
		.then(returnedNote => {
			setNotes(notes.concat(returnedNote))
			setNewNotes('')
		})
	}


	//input handler
	const handelChange = (event) => {
		setNewNotes(event.target.value)
	}


	return(
		<div>
			<h1>Notes</h1>
			<Notification message={errorMessage} />
			<div>
				<button onClick={() => setShowAll(!showAll)}>show {showAll? 'important' : 'all'}</button>
			</div>
			<ul>
				{
					notesToShow.map(note => {
						return <Note key={note.id} 
						note={note}
						toggleImportant={() => toggleImportant(note.id)} />
					})
				}
			</ul>

			<form onSubmit={addNote}>
				<input type="text" value={newNotes} onChange={handelChange} />
				<button type="submit">Save</button>
			</form>
		</div>
		)
}

export default Render;