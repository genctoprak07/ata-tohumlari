import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, Sprout, ArrowRight } from 'lucide-react';
import soilTypes from '@/data/soilTypes';
import seeds from '@/data/seeds';

export async function generateStaticParams() {
    return soilTypes.map((soil) => ({
        id: soil.id,
    }));
}

export async function generateMetadata({ params }) {
    const soil = soilTypes.find((s) => s.id === params.id);

    if (!soil) {
        return {
            title: 'Toprak Türü Bulunamadı',
        };
    }

    return {
        title: `${soil.name} - Ata Tohumları`,
        description: soil.shortDescription,
    };
}

export default function SoilTypePage({ params }) {
    const soil = soilTypes.find((s) => s.id === params.id);

    if (!soil) {
        notFound();
    }

    // Get other soil types for recommendations (exclude current)
    const otherSoils = soilTypes.filter((s) => s.id !== soil.id).slice(0, 3);

    return (
        <main className="min-h-screen bg-gradient-organic py-12">
            <div className="container-custom">
                {/* Main Content */}
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                        {/* Left: Image */}
                        <div className="relative h-96 lg:h-auto">
                            <Image
                                src={soil.image}
                                alt={soil.name}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute top-6 left-6 bg-nature text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                                {soil.category}
                            </div>
                        </div>

                        {/* Right: Details */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                            <h1 className="text-4xl lg:text-5xl font-bold text-earth-700 mb-4">
                                {soil.name}
                            </h1>

                            <p className="text-xl text-gray-600 mb-6">
                                {soil.shortDescription}
                            </p>

                            <div className="prose prose-lg mb-8">
                                <p className="text-gray-700 leading-relaxed">
                                    {soil.description}
                                </p>
                            </div>

                            <div className="bg-nature-50 rounded-xl p-6">
                                <h2 className="text-2xl font-bold text-earth-700 mb-4">Özellikler</h2>
                                <ul className="space-y-3">
                                    {soil.features.map((feature, index) => (
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

                {/* Suitable Seeds Section */}
                {soil.suitableSeeds && soil.suitableSeeds.length > 0 && (
                    <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-12">
                        <h2 className="text-3xl font-bold text-earth-700 mb-6">
                            Bu Toprak Türüne Uygun Tohumlar
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {soil.suitableSeeds.map((seedName) => {
                                const seed = seeds.find((s) => s.name === seedName);
                                if (!seed) return null;
                                return (
                                    <Link
                                        key={seed.id}
                                        href={`/tohumlar/${seed.id}`}
                                        className="bg-nature-50 hover:bg-nature-100 p-4 rounded-lg transition-colors text-center group"
                                    >
                                        <Sprout className="w-8 h-8 text-nature mx-auto mb-2 group-hover:scale-110 transition-transform" />
                                        <p className="text-sm font-medium text-gray-700">{seed.name}</p>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Other Soil Types Section */}
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
                    <h2 className="text-3xl font-bold text-earth-700 mb-8 text-center">
                        Diğer Toprak Türlerini Keşfedin
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {otherSoils.map((otherSoil) => (
                            <Link
                                key={otherSoil.id}
                                href={`/toprak-turleri/${otherSoil.id}`}
                                className="group"
                            >
                                <div className="card">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={otherSoil.image}
                                            alt={otherSoil.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold text-earth-700 mb-2 group-hover:text-earth transition-colors">
                                            {otherSoil.name}
                                        </h3>
                                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                            {otherSoil.shortDescription}
                                        </p>
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
