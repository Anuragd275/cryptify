function Navbar() {
    return (
        <div className="border shadow-2xl">
            <nav className="flex justify-between px-4 items-center">
                <h1 className="text-2xl font-bold py-2 cursor-pointer">Criptfy</h1>
                <navItem className="flex gap-4 text-xs">
                        <p className="cursor-pointer hover:text-zinc-500">Top 10</p>
                        <p className="cursor-pointer hover:text-zinc-500">Trending</p>
                        <p className="cursor-pointer hover:text-zinc-500">Watch List</p>
                </navItem>
            </nav>
        </div>
    );
};


module.exports = Navbar;