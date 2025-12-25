import Image from 'next/image';
import Link from 'next/link';
import { Sprout, Shield, Heart, Leaf } from 'lucide-react';
import SeedCard from '@/components/SeedCard';
import seeds from '@/data/seeds';

export default function Home() {
    // Featured seeds (first 6)
    const featuredSeeds = seeds.slice(0, 6);

    return (
        <main>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-organic">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-nature rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-earth rounded-full blur-3xl"></div>
                </div>

                <div className="container-custom relative z-10 text-center py-20">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6">
                        <span className="text-gradient">Ata Tohumları</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                        Nesiller boyu korunmuş geleneksel tohumlarımızla geleceğe yeşil bir miras bırakıyoruz
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link href="#seeds" className="btn-primary">
                            Tohumları Keşfet
                        </Link>
                        <Link href="/gida-guvenligi" className="btn-secondary">
                            Gıda Güvenliği
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-12">Neden Ata Tohumları?</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center p-6 rounded-xl hover:bg-nature-50 transition-colors">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-nature-100 rounded-full mb-4">
                                <Sprout className="w-8 h-8 text-nature" />
                            </div>
                            <h3 className="text-xl font-bold text-earth-700 mb-2">Geleneksel</h3>
                            <p className="text-gray-600">Yüzyıllardır korunmuş doğal tohum çeşitleri</p>
                        </div>

                        <div className="text-center p-6 rounded-xl hover:bg-nature-50 transition-colors">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-nature-100 rounded-full mb-4">
                                <Shield className="w-8 h-8 text-nature" />
                            </div>
                            <h3 className="text-xl font-bold text-earth-700 mb-2">Güvenli</h3>
                            <p className="text-gray-600">GMO içermeyen, sertifikalı ürünler</p>
                        </div>

                        <div className="text-center p-6 rounded-xl hover:bg-nature-50 transition-colors">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-nature-100 rounded-full mb-4">
                                <Heart className="w-8 h-8 text-nature" />
                            </div>
                            <h3 className="text-xl font-bold text-earth-700 mb-2">Organik</h3>
                            <p className="text-gray-600">Doğal tarım yöntemlerine uygun</p>
                        </div>

                        <div className="text-center p-6 rounded-xl hover:bg-nature-50 transition-colors">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-nature-100 rounded-full mb-4">
                                <Leaf className="w-8 h-8 text-nature" />
                            </div>
                            <h3 className="text-xl font-bold text-earth-700 mb-2">Sürdürülebilir</h3>
                            <p className="text-gray-600">Gelecek nesiller için tohum koruma</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Seeds Section */}
            <section id="seeds" className="py-20 bg-gradient-organic">
                <div className="container-custom">
                    <h2 className="section-title text-center mb-4">Öne Çıkan Tohumlar</h2>
                    <p className="section-subtitle text-center mb-12">
                        Anadolu&apos;nun en değerli geleneksel tohum çeşitlerini keşfedin
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {featuredSeeds.map((seed) => (
                            <SeedCard key={seed.id} seed={seed} />
                        ))}
                    </div>

                    <div className="text-center">
                        <p className="text-lg text-gray-700 mb-6">
                            Daha fazla tohum çeşidimizi görmek ister misiniz?
                        </p>
                        <Link href="/tohumlar/biber" className="btn-primary">
                            Tüm Tohumları Gör
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="section-title mb-6">Misyonumuz</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Ata Tohumları olarak, Anadolu&apos;nun zengin tarım kültürünü ve binlerce yıllık
                            tohum çeşitliliğini korumayı amaçlıyoruz. Geleneksel tohumlarımız, kimyasal
                            gübre ve ilaç kullanmadan, doğal yöntemlerle yetiştirilmeye uygundur.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Gıda egemenliği ve güvenliği için çiftçilerimizin kendi tohumlarını
                            üretebilmesi gerektiğine inanıyoruz. Bu nedenle ata tohumlarımızı
                            gelecek nesillere aktararak sürdürülebilir tarımı destekliyoruz.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
