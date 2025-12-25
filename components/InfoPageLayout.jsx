import Image from 'next/image';

export default function InfoPageLayout({ title, heroImage, children }) {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-earth to-nature overflow-hidden">
                {heroImage && (
                    <Image
                        src={heroImage}
                        alt={title}
                        fill
                        className="object-cover opacity-40"
                    />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-bold text-white text-center px-4">
                        {title}
                    </h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="container-custom py-16">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-12 -mt-20 relative z-10">
                    <div className="prose prose-lg max-w-none">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
