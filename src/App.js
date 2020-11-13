
import './App.css';
import Notes from './Components/Notes'
import Footer from './Footer'

 // axios.get('http://localhost:3001/notes')
 //      .then(response => {
 //        const notes = response.data
 //        console.log(notes)
 //      })


function App() {
  return (
    <div className="App">
     <Notes />
     <Footer />
    </div>
  );
}

export default App;
