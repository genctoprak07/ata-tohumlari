import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import seeds from '@/data/seeds';

export async function generateStaticParams() {
    return seeds.map((seed) => ({
        id: seed.id,
    }));
}

export async function generateMetadata({ params }) {
    const seed = seeds.find((s) => s.id === params.id);

    if (!seed) {
        return {
            title: 'Tohum Bulunamadı',
        };
    }

    return {
        title: `${seed.name} - Ata Tohumları`,
        description: seed.shortDescription,
    };
}

export default function SeedDetailPage({ params }) {
    const seed = seeds.find((s) => s.id === params.id);

    if (!seed) {
        notFound();
    }

    // Get other seeds for recommendations (exclude current)
    const otherSeeds = seeds.filter((s) => s.id !== seed.id).slice(0, 3);

    return (
        <main className="min-h-screen bg-gradient-organic py-12">
            <div className="container-custom">
                {/* Main Content */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Left: Image */}
                        <div className="relative h-96 lg:h-auto">
                            <Image
                                src={seed.image}
                                alt={seed.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-6 left-6 bg-nature text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                {seed.category}
                            </div>
                        </div>

                        {/* Right: Details */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <h1 className="text-4xl lg:text-5xl font-bold text-earth-700 mb-4">
                                {seed.name}
                            </h1>

                            <p className="text-xl text-gray-600 mb-6">
                                {seed.shortDescription}
                            </p>

                            <div className="prose prose-lg mb-8">
                                <p className="text-gray-700 leading-relaxed">
                                    {seed.description}
                                </p>
                            </div>

                            <div className="bg-nature-50 rounded-xl p-6">
                                <h2 className="text-2xl font-bold text-earth-700 mb-4">Özellikler</h2>
                                <ul className="space-y-3">
                                    {seed.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <CheckCircle2 className="w-6 h-6 text-nature mr-3 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Seeds Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                    <h2 className="text-3xl font-bold text-earth-700 mb-8 text-center">
                        Diğer Tohumları Keşfet
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {otherSeeds.map((otherSeed) => (
                            <Link
                                key={otherSeed.id}
                                href={`/tohumlar/${otherSeed.id}`}
                                className="group"
                            >
                                <div className="card">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={otherSeed.image}
                                            alt={otherSeed.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold text-earth-700 mb-2 group-hover:text-earth transition-colors">
                                            {otherSeed.name}
                                        </h3>
                                        <div className="flex items-center text-nature group-hover:text-nature-600 transition-colors">
                                            <span className="text-sm font-medium">Detayları Gör</span>
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
