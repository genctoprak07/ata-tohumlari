import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function SeedCard({ seed }) {
    return (
        <Link href={`/tohumlar/${seed.id}`} className="card group">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={seed.image}
                    alt={seed.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-nature text-white px-3 py-1 rounded-full text-sm font-medium">
                    {seed.category}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-2xl font-bold text-earth-700 mb-2 group-hover:text-earth transition-colors">
                    {seed.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                    {seed.shortDescription}
                </p>

                <div className="flex items-center text-nature font-medium group-hover:text-nature-600 transition-colors">
                    <span>Detayları Gör</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>
        </Link>
    );
}
