import Head from 'next/head';
import Link from 'next/link';

const Hero = () => {
    return (
        <>
            <Head>
                <title>Your Business Card Design - Professional & Memorable</title>
                <meta name="description" content="Designing an effective business card involves several key elements that work together to create a professional and memorable representation of an individual or business." />
            </Head>

            <div className="flex flex-col lg:flex-row justify-between px-4 py-16 bg-gray-100 sm:px-6 lg:px-8">
                {/* Left Section */}
                <div className="flex-1 mb-8 lg:mb-0 lg:max-w-2xl">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl relative">
                        Design an Effective
                        <span className="block relative bg-gradient-to-r from-indigo-800 to-green-500 text-transparent bg-clip-text">
                            Business Card <span className="underline">faster than ever</span>
                        </span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-500">
                        Create your business card effortlessly and look professional with custom designs
                    </p>
                    <br />
                    <Link href="#playground" className="mt-8 bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Create
                    </Link>
                </div>

                {/* Right Section (Scattered Cards) */}
                <div className="relative flex-1">
                    {/* Card 1 */}
                    <div className="absolute transform rotate-12 bg-yellow-100 shadow-lg rounded-lg overflow-hidden w-72 h-40" style={{ top: '10%', left: '10%' }}>
                        <div className="px-4 py-6">
                            <h2 className="text-lg font-bold text-gray-800">John Doe</h2>
                            <p className="text-sm text-gray-600 mb-2">Graphic Designer</p>
                            <p className="text-sm text-gray-600 mb-2">1234 Main Street, Anytown, USA</p>
                            <p className="text-sm text-gray-600 mb-2">john.doe@email.com</p>
                            <p className="text-sm text-gray-600 mb-2">123-456-7890</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="absolute transform -rotate-6 bg-blue-100 shadow-lg rounded-lg overflow-hidden w-72 h-40" style={{ top: '10%', left: '50%' }}>
                        <div className="px-4 py-6">
                            <h2 className="text-lg font-bold text-gray-800">Jane Smith</h2>
                            <p className="text-sm text-gray-600 mb-2">Web Developer</p>
                            <p className="text-sm text-gray-600 mb-2">5678 Elm Street, Somewhere City, USA</p>
                            <p className="text-sm text-gray-600 mb-2">jane.smith@email.com</p>
                            <p className="text-sm text-gray-600 mb-2">987-654-3210</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="absolute transform rotate-3 bg-green-100 shadow-lg rounded-lg overflow-hidden w-72 h-40" style={{ top: '50%', left: '30%' }}>
                        <div className="px-4 py-6">
                            <h2 className="text-lg font-bold text-gray-800">Tom Johnson</h2>
                            <p className="text-sm text-gray-600 mb-2">Marketing Manager</p>
                            <p className="text-sm text-gray-600 mb-2">7890 Oak Avenue, Anywhere Town, USA</p>
                            <p className="text-sm text-gray-600 mb-2">tom.johnson@email.com</p>
                            <p className="text-sm text-gray-600 mb-2">555-123-4567</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
