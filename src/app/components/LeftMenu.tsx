import { useState } from 'react';

interface LeftMenuProps {
    onChange: (data: CardData) => void;
}

interface CardData {
    name: string;
    jobTitle: string;
    address: string;
    email: string;
    phone: string;
}

const LeftMenu: React.FC<LeftMenuProps> = ({ onChange }) => {
    const [formData, setFormData] = useState<CardData>({
        name: 'John Doe',
        jobTitle: 'Graphic Designer',
        address: '1234 Main Street, Anytown, USA',
        email: 'john.doe@email.com',
        phone: '123-456-7890',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof CardData) => {
        setFormData({ ...formData, [key]: e.target.value });
        onChange({ ...formData, [key]: e.target.value }); // Notify parent component of change
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Business Card Details</h2>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange(e, 'name')}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="John Doe"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Job Title</label>
                <input
                    type="text"
                    value={formData.jobTitle}
                    onChange={(e) => handleChange(e, 'jobTitle')}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Graphic Designer"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => handleChange(e, 'address')}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="1234 Main Street, Anytown, USA"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e, 'email')}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="john.doe@email.com"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => handleChange(e, 'phone')}
                    className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="123-456-7890"
                />
            </div>
        </div>
    );
};

export default LeftMenu;
