import InfoPageLayout from '@/components/InfoPageLayout';

export const metadata = {
    title: 'Gıda Egemenliği - Ata Tohumları',
    description: 'Gıda egemenliği ve tohum bağımsızlığının önemi',
};

export default function GidaEgemenligiPage() {
    return (
        <InfoPageLayout title="Gıda Egemenliği" heroImage="/images/hero/gida-egemenligi.jpg">
            <h2>Gıda Egemenliği Nedir?</h2>
            <p>
                Gıda egemenliği, toplulukların kendi gıdalarını üretme, dağıtma ve tüketme
                hakkıdır. Bu kavram, sadece gıda güvenliğinin ötesinde, çiftçilerin ve
                tüketicilerin gıda sistemleri üzerinde kontrol sahibi olmalarını ifade eder.
            </p>

            <h3>Tohum Egemenliği</h3>
            <p>
                Gıda egemenliğinin temelinde tohum egemenliği yatar. Çiftçilerin kendi
                tohumlarını saklaması, paylaşması ve geliştirmesi, binlerce yıldır süregelen
                bir gelenektir. Ancak modern patent sistemleri ve hibrit tohum teknolojileri,
                bu özgürlüğü tehdit etmektedir.
            </p>

            <h3>Ticari Tohum Bağımlılığı</h3>
            <p>
                Günümüzde birçok çiftçi, her sezon yeni tohum satın almak zorunda kalmaktadır.
                Bu durum, tarımsal üretimi birkaç büyük tohum şirketinin kontrolüne bırakmaktadır.
                Ata tohumları kullanarak, çiftçiler bu bağımlılıktan kurtulabilir ve kendi
                tohum stoklarını oluşturabilirler.
            </p>

            <h3>Yerel Ekonomiyi Güçlendirme</h3>
            <p>
                Ata tohumlarının kullanımı, yerel ekonomileri destekler. Çiftçiler arasında
                tohum değişimi, geleneksel bilginin paylaşımını sağlar ve topluluklar arası
                bağları güçlendirir. Ayrıca, yerel çeşitlerin korunması, bölgesel mutfak
                kültürlerinin de yaşamasını sağlar.
            </p>

            <h3>Biyolojik Çeşitliliği Koruma</h3>
            <p>
                Endüstriyel tarım, sınırlı sayıda yüksek verimli çeşide odaklanarak biyolojik
                çeşitliliği azaltmaktadır. Ata tohumları, binlerce farklı bitki çeşidini
                gelecek nesillere aktararak genetik zenginliğimizi korur.
            </p>

            <p>
                <strong>Gıda egemenliği</strong>, sadece bir hak değil, aynı zamanda
                sürdürülebilir bir gelecek için zorunluluktur. Ata tohumlarını koruyarak,
                hem kendi gıdamız üzerinde kontrol sahibi olur, hem de gelecek nesillere
                zengin bir miras bırakırız.
            </p>
        </InfoPageLayout>
    );
}
