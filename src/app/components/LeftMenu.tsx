import React, { useState } from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

interface LeftMenuProps {
    onChange: (data: CardData) => void;
}

interface CardData {
    name: string;
    jobTitle: string;
    address: string;
    email: string;
    phone: string;
    image: string | ArrayBuffer | null;
}

const LeftMenu: React.FC<LeftMenuProps> = ({ onChange }) => {
    const [formData, setFormData] = useState<CardData>({
        name: 'John Doe',
        jobTitle: 'Graphic Designer',
        address: '1234 Main Street, Anytown, USA',
        email: 'john.doe@email.com',
        phone: '123-456-7890',
        image: 'profile.png',
    });
    const [cropData, setCropData] = useState('');
    const [cropper, setCropper] = useState<any>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof CardData) => {
        setFormData({ ...formData, [key]: e.target.value });
        onChange({ ...formData, [key]: e.target.value });
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFormData({ ...formData, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const getCropData = () => {
        if (typeof cropper !== 'undefined') {
            setCropData(cropper.getCroppedCanvas().toDataURL());
            setFormData({ ...formData, image: cropper.getCroppedCanvas().toDataURL() });
            onChange({ ...formData, image: cropper.getCroppedCanvas().toDataURL() });
        }
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
            {/* <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Profile Picture</label>
                <input
                    type="file"
                    onChange={handleImageUpload}
                    className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                />
            </div>
            {formData.image && (
                <div className="mb-4">
                    <Cropper
                        src={formData.image as string}
                        style={{ height: 200, width: '100%' }}
                        initialAspectRatio={1}
                        aspectRatio={1}
                        guides={false}
                        cropBoxResizable={false}
                        cropBoxMovable={false}
                        dragMode="move"
                        crop={getCropData}
                        onInitialized={(instance: any) => setCropper(instance)}
                    />
                    <button
                        type="button"
                        onClick={getCropData}
                        className="mt-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Crop Image
                    </button>
                </div>
            )} */}
        </div>
    );
};

export default LeftMenu;
