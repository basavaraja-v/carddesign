import React, { useRef } from 'react';
import html2canvas from 'html2canvas';

interface BusinessCardProps {
    data: {
        name: string;
        jobTitle: string;
        address: string;
        email: string;
        phone: string;
        image: string | ArrayBuffer | null;
    };
    html: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ data, html }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleDownload = () => {
        if (!cardRef.current) {
            return;
        }

        html2canvas(cardRef.current).then((canvas) => {
            const imgUrl = canvas.toDataURL('image/png');
            const downloadLink = document.createElement('a');
            downloadLink.href = imgUrl;
            downloadLink.download = 'business_card.png';
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    };

    const interpolate = (str: string, data: any) => {
        return str.replace(/{{(\w+)}}/g, (_, key) => data[key] || '');
    };

    const renderedHTML = interpolate(html, data);

    return (
        <div className="relative">
            <div ref={cardRef} dangerouslySetInnerHTML={{ __html: renderedHTML }} />
            <button
                className="absolute top-2 right-2 bg-transparent text-white px-2 py-1 rounded-md bg-gray-600 hover:bg-blue-600 hover:bg-opacity-20"
                onClick={handleDownload}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" fill="#ffff" />
                </svg>
            </button>

        </div>
    );
};

export default BusinessCard;
