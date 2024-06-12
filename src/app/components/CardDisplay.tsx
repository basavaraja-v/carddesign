import React, { useState, useEffect } from 'react';
import BusinessCard from './BusinessCard';
import cardDesigns from '../data/cardDesigns.json';

interface CardDisplayProps {
    data: {
        name: string;
        jobTitle: string;
        address: string;
        email: string;
        phone: string;
        image: string;
    };
}

const CardDisplay: React.FC<CardDisplayProps> = ({ data }) => {
    const [designs, setDesigns] = useState<any[]>([]);

    useEffect(() => {
        setDesigns(cardDesigns);
    }, []);

    return (
        <div className="grid grid-cols-3 gap-2">
            {designs.map((design) => (
                <BusinessCard key={design.id} data={data} html={design.html} />
            ))}
        </div>
    );
};

export default CardDisplay;
