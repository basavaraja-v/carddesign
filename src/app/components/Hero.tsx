import Head from 'next/head';
import Link from 'next/link';

const cards = [
    {
        name: "John Doe",
        title: "Graphic Designer",
        address: "1234 Main Street, Anytown, USA",
        email: "john.doe@email.com",
        phone: "123-456-7890",
        style: "bg-yellow-100",
        rotation: "rotate-12",
        top: "10%",
        left: "10%"
    },
    {
        name: "Jane Smith",
        title: "Web Developer",
        address: "5678 Elm Street, Somewhere City, USA",
        email: "jane.smith@email.com",
        phone: "987-654-3210",
        style: "bg-blue-100",
        rotation: "-rotate-6",
        top: "10%",
        left: "50%"
    },
    {
        name: "Tom Johnson",
        title: "Marketing Manager",
        address: "7890 Oak Avenue, Anywhere Town, USA",
        email: "tom.johnson@email.com",
        phone: "555-123-4567",
        style: "bg-green-100",
        rotation: "rotate-3",
        top: "50%",
        left: "30%"
    }
];

const Hero = () => {
    return (
        <>
            <Head>
                <title>Your Business Card Design - Professional & Memorable</title>
                <meta name="description" content="Designing an effective business card involves several key elements that work together to create a professional and memorable representation of an individual or business." />
            </Head>

            <div className="flex flex-col sm:flex-row justify-between px-4 py-16 bg-gray-100 sm:px-6 lg:px-8">
                {/* Left Section */}
                <div className="flex-1 mb-8 sm:mb-0 sm:max-w-md lg:max-w-2xl">
                    <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl relative">
                        Design an Effective
                        <span className="block relative bg-gradient-to-r from-indigo-800 to-green-500 text-transparent bg-clip-text">
                            Business Card faster than ever
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

                {/* Right Section (Deck of Cards) */}
                <div className="relative flex-1 flex-wrap justify-center sm:justify-start hidden sm:block">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className={`absolute transform ${card.rotation} ${card.style} shadow-lg rounded-lg overflow-hidden w-full sm:w-72 h-40 md:w-64`}
                            style={{ top: card.top, left: card.left }}
                        >
                            <div className="px-4 py-6">
                                <h2 className="text-lg font-bold text-gray-800">{card.name}</h2>
                                <p className="text-sm text-gray-600 mb-2">{card.title}</p>
                                <p className="text-sm text-gray-600 mb-2">{card.address}</p>
                                <p className="text-sm text-gray-600 mb-2">{card.email}</p>
                                <p className="text-sm text-gray-600 mb-2">{card.phone}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Hero;
