'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import seeds from '@/data/seeds';
import soilTypes from '@/data/soilTypes';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSeedsOpen, setIsSeedsOpen] = useState(false);
    const [isSoilOpen, setIsSoilOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="text-2xl md:text-3xl font-bold text-gradient">
                            Ata Tohumları
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-gray-700 hover:text-earth transition-colors font-medium"
                        >
                            Ana Sayfa
                        </Link>

                        {/* Toprak Türleri Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsSoilOpen(true)}
                            onMouseLeave={() => setIsSoilOpen(false)}
                        >
                            <button className="flex items-center space-x-1 text-gray-700 hover:text-earth transition-colors font-medium py-2">
                                <span>Toprak Türleri</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {isSoilOpen && (
                                <div className="absolute top-full left-0 pt-2">
                                    <div className="w-64 bg-white shadow-2xl rounded-lg py-2 grid grid-cols-1 max-h-96 overflow-y-auto border border-gray-100">
                                        {soilTypes.map((soil) => (
                                            <Link
                                                key={soil.id}
                                                href={`/toprak-turleri/${soil.id}`}
                                                className="px-4 py-2 hover:bg-nature-50 text-gray-700 hover:text-earth transition-colors block"
                                            >
                                                {soil.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Tohumlar Dropdown */}
                        <div
                            className="relative group"
                            onMouseEnter={() => setIsSeedsOpen(true)}
                            onMouseLeave={() => setIsSeedsOpen(false)}
                        >
                            <button className="flex items-center space-x-1 text-gray-700 hover:text-earth transition-colors font-medium py-2">
                                <span>Tohumlar</span>
                                <ChevronDown className="w-4 h-4" />
                            </button>

                            {isSeedsOpen && (
                                <div className="absolute top-full left-0 pt-2">
                                    <div className="w-64 bg-white shadow-2xl rounded-lg py-2 grid grid-cols-1 max-h-96 overflow-y-auto border border-gray-100">
                                        {seeds.map((seed) => (
                                            <Link
                                                key={seed.id}
                                                href={`/tohumlar/${seed.id}`}
                                                className="px-4 py-2 hover:bg-nature-50 text-gray-700 hover:text-earth transition-colors block"
                                            >
                                                {seed.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link
                            href="/gida-guvenligi"
                            className="text-gray-700 hover:text-earth transition-colors font-medium"
                        >
                            Gıda Güvenliği
                        </Link>
                        <Link
                            href="/gida-egemenligi"
                            className="text-gray-700 hover:text-earth transition-colors font-medium"
                        >
                            Gıda Egemenliği
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="lg:hidden pb-4 space-y-2">
                        <Link
                            href="/"
                            className="block py-2 text-gray-700 hover:text-earth transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Ana Sayfa
                        </Link>

                        {/* Mobile Soil Types Submenu */}
                        <div>
                            <button
                                onClick={() => setIsSoilOpen(!isSoilOpen)}
                                className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-earth transition-colors"
                            >
                                <span>Toprak Türleri</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${isSoilOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isSoilOpen && (
                                <div className="pl-4 space-y-1 mt-1">
                                    {soilTypes.map((soil) => (
                                        <Link
                                            key={soil.id}
                                            href={`/toprak-turleri/${soil.id}`}
                                            className="block py-1 text-sm text-gray-600 hover:text-earth transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {soil.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Mobile Seeds Submenu */}
                        <div>
                            <button
                                onClick={() => setIsSeedsOpen(!isSeedsOpen)}
                                className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-earth transition-colors"
                            >
                                <span>Tohumlar</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${isSeedsOpen ? 'rotate-180' : ''}`} />
                            </button>
                            {isSeedsOpen && (
                                <div className="pl-4 space-y-1 mt-1">
                                    {seeds.map((seed) => (
                                        <Link
                                            key={seed.id}
                                            href={`/tohumlar/${seed.id}`}
                                            className="block py-1 text-sm text-gray-600 hover:text-earth transition-colors"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {seed.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link
                            href="/gida-guvenligi"
                            className="block py-2 text-gray-700 hover:text-earth transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Gıda Güvenliği
                        </Link>
                        <Link
                            href="/gida-egemenligi"
                            className="block py-2 text-gray-700 hover:text-earth transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Gıda Egemenliği
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
