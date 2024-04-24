import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">NincsÜgynök</span>
                        <img className="h-8 w-auto hover:scale-110 ease-in-out duration-75" src="/logo.png" alt="Logo"/>
                    </Link>
                    </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link to="/property-search" className="text-lg font-semibold leading-6 text-sky-500 hover:text-sky-400 ease-in-out duration-50">Ingatlankeresés</Link>
                    <Link to="/services" className="text-lg font-semibold leading-6 text-sky-500 hover:text-sky-400 ease-in-out duration-50">Szolgáltatásaink</Link>
                    <Link to="/community" className="text-lg font-semibold leading-6 text-sky-500 hover:text-sky-400 ease-in-out duration-50">Közösség</Link>
                    <Link to="/about" className="text-lg font-semibold leading-6 text-sky-500 hover:text-sky-400 ease-in-out duration-50">Rólunk</Link>
                </div>
                <div className="flex flex-1 items-center justify-end gap-x-6">
                    <Link to="/login" className="rounded-md border-2 border-sky-500 bg-white px-3 py-2 text-sm font-semibold text-sky-500 shadow-sm hover:border-sky-400 hover:text-sky-400 ease-in-out duration-50">Bejelentkezek</Link>
                    <Link to="/signup" className="rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-sky-400 ease-in-out duration-50">Regisztrálok</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;