export default function Footer() {
    return (
        <footer className='flex items-center justify-between gap-4 p-4'>
            <div className='flex items-center gap-4'>
                <a href="https://example.com/about" className='text-gray-600 cursor-pointer'>About Us</a>
                <a href="https://example.com/contact" className='text-gray-600 cursor-pointer'>Contact</a>
            </div>
            <div className='flex items-center gap-4'>
                <a href="https://example.com/terms" className='text-gray-600 cursor-pointer'>Terms of Service</a>
                <a href="https://example.com/privacy" className='text-gray-600 cursor-pointer'>Privacy Policy</a>
            </div>
        </footer>
    )
}
