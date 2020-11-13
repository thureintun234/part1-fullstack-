function Note({note, toggleImportant}){
	const lable = note.important
	? 'make not important' : 'make important'
	return(
		<div>
			<li className="note">
				{note.content}
				<button onClick={toggleImportant}>{lable}</button>
			</li>

		</div>
		)
}

export default Note