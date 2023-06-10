

function Header() {
    return (
        <div className=' px-[20px] md:px-0 pt-[40px] flex justify-between items-center  '>
            <div className=' text-[18px] md:text-[24px] font-bold text-[#000]'>MyChallenge</div>
            <nav className=" ">
                <ul className='flex text-[12px] md:text-[17px] font-[400] text-[#000] gap-[10px] md:gap-[24px] cursor-pointer ' >
                    <li className='border-b-2 border-[#E16259]  ' >Product</li>
                    <li className=" hover:border-b-2 border-[#E16259] transition-all duration-75 ">Download</li >
                    <li className=" hover:border-b-2 border-[#E16259] transition-all duration-75 ">Pricing</li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
