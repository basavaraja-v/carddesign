import React, { useState, useEffect } from 'react';
import { Masonry } from 'react-plock';
import BusinessCard from './BusinessCard';
import cardDesigns from '../data/cardDesigns.json';

interface CardDisplayProps {
    data: {
        name: string;
        jobTitle: string;
        address: string;
        email: string;
        phone: string;
        image: string | ArrayBuffer | null;
    };
}

const CardDisplay: React.FC<CardDisplayProps> = ({ data }) => {
    const [designs, setDesigns] = useState<any[]>([]);

    useEffect(() => {
        setDesigns(cardDesigns);
    }, []);

    const renderCard = (design: any, idx: number) => {
        return (
            <BusinessCard key={design.id} data={data} html={design.html} />
        );
    };

    return (
        <Masonry
            items={designs}
            render={(design, idx) => renderCard(design, idx)}
            config={{
                columns: [1, 2, 2],
                gap: [6, 6, 6],
                media: [640, 768, 1024],
            }}
        />
    );
};

export default CardDisplay;
