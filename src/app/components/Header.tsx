import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold">
                <Link href="/">Business Card Design</Link>
            </div>
        </header>
    );
};

export default Header;
