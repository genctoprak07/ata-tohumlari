import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Ata Tohumları - Geleneksel Tohum Platformu',
    description: 'Anadolu\'nun geleneksel tohum çeşitlerini koruyarak geleceğe taşıyoruz. Doğal, organik ve sürdürülebilir tarım için ata tohumları.',
    keywords: 'ata tohumları, geleneksel tohumlar, organik tarım, tohum koruma, sürdürülebilir tarım',
};

export default function RootLayout({ children }) {
    return (
        <html lang="tr">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
