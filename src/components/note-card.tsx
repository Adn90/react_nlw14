import * as Dialog from '@radix-ui/react-dialog';

interface NoteCardProps {
    note: {
        date: Date;
        content: string
    }
}

export function NoteCard({ note }: NoteCardProps) {
  // let btnClass = 'text-left rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-lime-400';
  let btnBlockStyle = 'text-left rounded-md bg-slate-800 p-5 flex flex-col gap-3 overflow-hidden relative  ';
  let btnHoverStyle = 'hover:ring-2 hover:ring-slate-600';
  let btnFocusStyle = 'focus:ring-2 focus:ring-lime-100';
  let btnFocusVisibleStyle = 'outline-none focus-visible:ring-2 focus-visible:ring-lime-400';
  return(
    <Dialog.Root>
      <Dialog.Trigger className={`${btnBlockStyle} ${btnHoverStyle} ${btnFocusStyle} ${btnFocusVisibleStyle}` }>
        <span className='text-sm font-medium text-slate-300'>
          { note.date.toISOString() }
        </span>
        <p className='text-sm leading-6 text-slate-400'>
          { note.content }
        </p>
        
        <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-white/0 pointer-events-none'></div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className='inset-0 fixed bg-black/50' />
        <Dialog.Content 
          className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  max-w-[640px] w-full bg-slate-700 rounded-md flex flex-col outline-none'
        >
          TESTE
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>  
  );
}