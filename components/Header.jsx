export default function Header() {
    return (
        <div className="w-full py-10 px-10 sm:px-20">
            <div className="flex">
                <a href="/" className="font-pri text-2xl" data-aos="fade-in">NEO Creative</a>
                <div className="flex grow justify-end">
                    <div className="bg-white text-black flex justify-center items-center py-1 px-5 rounded font-pri text-xs cursor-pointer hover:bg-gray-400 duration-300">Contact</div>
                </div>
            </div>
        </div>
    );
}