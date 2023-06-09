

function Header() {
    return (
        <div className='pt-[40px] flex justify-between '>
            <div className='text-[24px] font-bold text-[#000]'>YourChallenge</div>
            <nav>
                <ul className='flex text-[17px] font-[400] text-[#000] gap-[24px]' >
                    <li className='border-b-2 border-[#E16259] ' >Product</li>
                    <li>Download</li>
                    <li>Pricing</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
