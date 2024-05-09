export default function Header() {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/"><h1 className='font-medium'>Free<span className='text-blue-400 bold'>Scribe</span></h1></a>
            <div className='gap-4 flex items-center '>
                <a href="" target='_blank' className='text-slate-600 cursor-pointer' rel="noreferrer">Donate</a>
                <button href="/" className='flex specialBtn items-center gap-2 specialBtn px-3 py-2 rounded-lg text-sm text-blue-400'>
                    <p>New</p>
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        </header>
    )
}