import Render from './Render'

function Notes() {
	const notes = [
		{
			id:1,
			content:'HTML is easy to learn',
			important:true,
		},
		{
			id:2,
			content:'Browser can exacute only javascript',
			important:true,
		},
		{
			id:3,
			content:'GET and POST are the important methods of HTTP',
			important:false,
		}
	]
	return(
			<Render notes={notes} />
		)
}

export default Notes