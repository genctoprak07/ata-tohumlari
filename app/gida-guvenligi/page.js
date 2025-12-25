import InfoPageLayout from '@/components/InfoPageLayout';

export const metadata = {
    title: 'Gıda Güvenliği - Ata Tohumları',
    description: 'Gıda güvenliği ve sağlıklı beslenme için ata tohumlarının önemi',
};

export default function GidaGuvenligiPage() {
    return (
        <InfoPageLayout title="Gıda Güvenliği" heroImage="/images/hero/gida-guvenligi.jpg">
            <h2>Gıda Güvenliğinde Ata Tohumlarının Rolü</h2>
            <p>
                Gıda güvenliği, toplumların en temel ihtiyaçlarından biridir. Modern tarım
                uygulamaları ve endüstriyel tohum kullanımı, kısa vadede verim artışı sağlarken,
                uzun vadede gıda güvenliğimizi tehdit etmektedir. Ata tohumları, bu noktada
                kritik bir öneme sahiptir.
            </p>

            <h3>Ata Tohumlarının Avantajları</h3>
            <p>
                Geleneksel ata tohumları, yüzyıllar boyunca doğal seleksiyon ve yerel iklim
                koşullarına adaptasyon süreçlerinden geçmiştir. Bu tohumlar, kimyasal gübre
                ve ilaç kullanımı olmadan organik tarıma elverişlidir. GMO (genetiği değiştirilmiş
                organizma) içermezler ve biyolojik çeşitliliği korurlar.
            </p>

            <h3>Sürdürülebilir Tarım ve Tohum Koruma</h3>
            <p>
                Çiftçilerin kendi tohumlarını üretebilmesi, gıda güvenliğinin temelidir.
                Ticari tohumların her yıl yeniden satın alınması zorunluluğu, çiftçileri
                ekonomik olarak bağımlı hale getirir. Ata tohumları ise açık tozlaşma
                yöntemiyle çoğalabilir ve her yıl yeniden ekilebilir.
            </p>

            <h3>Sağlıklı Beslenme</h3>
            <p>
                Ata tohumlarından elde edilen ürünler, besin değeri ve lezzet açısından
                daha üstündür. Modern hibrit tohumlar verim odaklı geliştirilirken,
                geleneksel tohumlar vitamin, mineral ve fito-besinler açısından daha zengindir.
            </p>

            <p>
                <strong>Sonuç olarak</strong>, ata tohumlarını korumak ve yaygınlaştırmak,
                gıda güvenliğimizi garanti altına almanın en etkili yollarından biridir.
            </p>
        </InfoPageLayout>
    );
}
