"use client"

import Head from 'next/head';
import Hero from './components/Hero';
import LeftMenu from './components/LeftMenu';
import CardDisplay from './components/CardDisplay';
import { SetStateAction, useState } from 'react';

interface CardData {
    name: string;
    jobTitle: string;
    address: string;
    email: string;
    phone: string;
    image: string | ArrayBuffer | null;
}

const Page = () => {
    const [cardData, setCardData] = useState<CardData>({
        name: 'John Doe',
        jobTitle: 'Graphic Designer',
        address: '1234 Main Street, Anytown, USA',
        email: 'john.doe@email.com',
        phone: '123-456-7890',
        image: 'profile.png',
    });

    const handleDataChange = (newData: SetStateAction<{ name: string; jobTitle: string; address: string; email: string; phone: string; image: string | ArrayBuffer | null; }>) => {
        setCardData(newData);
    };

    return (
        <>
            <Head>
                <title>Your Business Card Design - Professional & Memorable</title>
                <meta
                    name="description"
                    content="Designing an effective business card involves several key elements that work together to create a professional and memorable representation of an individual or business."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div>
                <Hero />
            </div>
            <div id="playground" className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 lg:w-1/4 p-4">
                    <LeftMenu onChange={handleDataChange} />
                </div>
                <div className="flex-grow sm:flex-1 p-4">
                    <CardDisplay data={cardData} />
                </div>
            </div>

        </>
    );
};

export default Page;
