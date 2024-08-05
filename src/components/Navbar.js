import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="border shadow-2xl">
            <nav className="flex justify-between px-4 items-center">
                <Link to={"/"}>
                    <div className="flex">
                        <h1 className="text-2xl font-bold cursor-pointer">Cripti</h1>
                        <h1 className="tetx-2xl font-bold text-blue-500">fy</h1>
                    </div>
                </Link>
                <navItem className="flex gap-4 text-xs">
                    <Link to={"/top10"}>
                        <p className="cursor-pointer hover:text-zinc-500">Top 10</p>
                    </Link>
                    <Link to={"/trending"}>
                        <p className="cursor-pointer hover:text-zinc-500">Trending</p>
                    </Link>
                    <Link to={"/watchlist"}>
                        <p className="cursor-pointer hover:text-zinc-500">Watch List</p>
                    </Link>
                </navItem>
            </nav>
        </div>
    );
};


export default Navbar;