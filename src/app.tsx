import { ChangeEvent, useState } from 'react';
import logo from './assets/logo-nlw-expert.svg';
import { NewNoteCard } from './components/new-note-card';
import { NoteCard } from './components/note-card';

interface Note {
  id: string,
  date: Date,
  content: string
}

export function App() {
  const [search, setSearch] = useState("");
  const [notes, setNotes] = useState<Note[]>(() => {
    const noteOnStorage = localStorage.getItem('notes');
    if (noteOnStorage) {
      return JSON.parse(noteOnStorage);
    }
    return [];
  });

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content
    }

    const notesArray = [newNote, ...notes];

    setNotes(notesArray);

    localStorage.setItem('notes', JSON.stringify(notesArray));
  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value;
    setSearch(query);
  }

  const filtredNotes = search 
    ? notes.filter(note => note.content.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    : notes;

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6 px-5 md:px-0'>
      <img src={logo} alt="NLW Expert" />

      <form className='w-full'>
        <input 
          type="text" 
          placeholder='Busque em suas notas... '
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder: text-slate-500'
          onChange={handleSearch}
        />
      </form>

      <div className='h-px bg-slate-700'></div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]'>

        <NewNoteCard onNoteCreated={onNoteCreated} />

        { filtredNotes.map(note => { return <NoteCard key={note.id} note={note} /> }) }
       
      </div>

    </div>
  );
}
