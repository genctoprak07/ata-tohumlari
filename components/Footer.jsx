import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-earth-800 text-white mt-20">
            <div className="container-custom py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-gradient-light">Ata Tohumları</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Geleneksel tohumlarımızı koruyarak geleceğe taşıyoruz.
                            Doğal, sağlıklı ve sürdürülebilir tarım için buradayız.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Hızlı Linkler</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-nature-300 transition-colors">
                                    Ana Sayfa
                                </Link>
                            </li>
                            <li>
                                <Link href="/gida-guvenligi" className="text-gray-300 hover:text-nature-300 transition-colors">
                                    Gıda Güvenliği
                                </Link>
                            </li>
                            <li>
                                <Link href="/gida-egemenligi" className="text-gray-300 hover:text-nature-300 transition-colors">
                                    Gıda Egemenliği
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-xl font-semibold mb-4">Bizi Takip Edin</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-nature-500 transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-nature-500 transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-nature-500 transition-colors">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-nature-500 transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Ata Tohumları. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}
