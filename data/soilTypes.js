export const soilTypes = [
    {
        id: "kumlu-toprak",
        name: "Kumlu Toprak",
        category: "Toprak Türü",
        shortDescription: "Geçirgenliği yüksek, hafif yapılı toprak türü",
        description: "Kumlu topraklar, büyük kum taneciklerinden oluşan, havalanması ve su geçirgenliği yüksek topraklardır. %85'ten fazla kum içerir ve fiziksel yapısı gevşektir. Su tutma kapasitesi düşük olduğu için kuraklığa karşı hassastır, ancak iyi drene olur ve köklerin gelişimi için uygundur.",
        features: [
            "Yüksek havalanma kapasitesi",
            "Hızlı su geçirgenliği",
            "Düşük su tutma kapasitesi",
            "Kolay işlenir",
            "Kök gelişimi için uygun",
            "Besin tutma kapasitesi düşük"
        ],
        suitableSeeds: ["Karpuz", "Kavun", "Ay Çiçeği", "Fasulye"],
        image: "/images/soil/kumlu-toprak.jpg"
    },
    {
        id: "killi-toprak",
        name: "Killi Toprak",
        category: "Toprak Türü",
        shortDescription: "Su tutma kapasitesi yüksek, ağır yapılı toprak",
        description: "Killi topraklar, %40'tan fazla kil içeren, ağır ve yoğun yapılı topraklardır. Su tutma kapasitesi çok yüksektir ancak drenaj zayıftır. Kuru hava şartlarında sertleşir ve çatlar, ıslak olduğunda ise yapışkan bir hal alır. Besin tutma kapasitesi yüksektir.",
        features: [
            "Yüksek su tutma kapasitesi",
            "Zayıf drenaj",
            "Yüksek besin tutma kapasitesi",
            "Ağır ve yoğun yapı",
            "Islak halde yapışkan",
            "İşlenmesi zor"
        ],
        suitableSeeds: ["Domates", "Patlıcan", "Karalahana", "Bamya"],
        image: "/images/soil/killi-toprak.jpg"
    },
    {
        id: "aluvyonlu-toprak",
        name: "Alüvyonlu Toprak",
        category: "Toprak Türü",
        shortDescription: "Akarsuların taşıdığı tortullardan oluşmuş verimli toprak",
        description: "Alüvyon topraklar, nehir ve derelerin taşıdığı organik ve mineral maddelerin çökelten oluşturduğu topraklardır. Genellikle nehir vadilerinde ve taşkın ovalarında bulunur. Mineral bakımından zengin, organik madde içeriği yüksek ve çok verimli topraklardır.",
        features: [
            "Yüksek verimlilik",
            "Zengin organik madde",
            "İyi drenaj",
            "Mineral bakımından zengin",
            "Kolay işlenebilir",
            "Tarımsal üretim için ideal"
        ],
        suitableSeeds: ["Mısır", "Börülce", "Salatalık", "Kabak"],
        image: "/images/soil/aluvyonlu-toprak.jpg"
    },
    {
        id: "tinli-toprak",
        name: "Tınlı Toprak",
        category: "Toprak Türü",
        shortDescription: "Kum, kil ve silt dengesinde ideal tarım toprağı",
        description: "Tınlı topraklar, kum, kil ve silt oranlarının dengeli karışımından oluşan ideal tarım topraklarıdır. Su tutma, havalanma ve besin tutma kapasiteleri dengelidir. İşlenmesi kolay, yapısı stabil ve çoğu bitki için en uygun toprak türüdür.",
        features: [
            "Dengeli yapı (kum-kil-silt)",
            "İdeal su tutma kapasitesi",
            "Mükemmel havalanma",
            "Kolay işlenir",
            "Yüksek verimlilik",
            "Çoğu bitki için ideal"
        ],
        suitableSeeds: ["Biber", "Domates", "Patlıcan", "Fasulye", "Reyhan"],
        image: "/images/soil/tinli-toprak.jpg"
    },
    {
        id: "kirecli-toprak",
        name: "Kireçli Toprak",
        category: "Toprak Türü",
        shortDescription: "Yüksek kalsiyum karbonat içeren alkalin toprak",
        description: "Kireçli topraklar, yüksek oranda kalsiyum karbonat (CaCO₃) içeren, genellikle alkalin karakterli topraklardır. pH değeri 7'nin üzerindedir. Kireç, toprağın fiziksel yapısını iyileştirir ancak aşırı kireç bazı besin elementlerinin alımını engelleyebilir.",
        features: [
            "Yüksek pH (alkalin)",
            "Kalsiyum ve magnezyum zengin",
            "İyi havalanma",
            "Orta su tutma kapasitesi",
            "Demir yetersizliğine yatkın",
            "Kuraklığa dayanıklı bitkiler için uygun"
        ],
        suitableSeeds: ["Kavun", "Karpuz", "Semizotu", "Şeker Kamışı"],
        image: "/images/soil/kirecli-toprak.jpg"
    },
    {
        id: "torf-tipi-toprak",
        name: "Torf Tipi Toprak",
        category: "Toprak Türü",
        shortDescription: "Yüksek organik madde içeren bataklık toprağı",
        description: "Torf topraklar, bitki kalıntılarının yavaş ayrışması sonucu oluşan, çok yüksek organik madde içerikli (%20'den fazla) topraklardır. Genellikle bataklık ve sulak alanlarda bulunur. Asidik karakterli, koyu renkli ve su tutma kapasitesi çok yüksektir.",
        features: [
            "Çok yüksek organik madde",
            "Asidik pH (düşük)",
            "Yüksek su tutma kapasitesi",
            "Koyu renk",
            "Havalanma problemi olabilir",
            "Özel bitkiler için uygundur"
        ],
        suitableSeeds: ["Kuzukulağı", "Börülce", "Semizotu"],
        image: "/images/soil/torf-toprak.jpg"
    },
    {
        id: "siltli-toprak",
        name: "Siltli Toprak",
        category: "Toprak Türü",
        shortDescription: "İnce taneli, verimli ve kaygan yapıda toprak",
        description: "Siltli topraklar, kum ve kilden daha ince taneciklerden oluşur. Kumdan ağır, kilden hafiftir. Dokunulduğunda kaygan ve yumuşak hissedilir. Su tutma kapasitesi orta-yüksek düzeydedir. Mineral ve besin içeriği genellikle zengindir.",
        features: [
            "İnce taneli yapı",
            "Kaygan doku",
            "İyi su tutma kapasitesi",
            "Orta drenaj",
            "Besin tutma kapasitesi yüksek",
            "Erozyon riski"
        ],
        suitableSeeds: ["Acur", "Salatalık", "Kabak", "Mısır"],
        image: "/images/soil/siltli-toprak.jpg"
    },
    {
        id: "humuslu-toprak",
        name: "Humuslu Toprak",
        category: "Toprak Türü",
        shortDescription: "Ayrışmış organik madde açısından zengin toprak",
        description: "Humuslu topraklar, tam olarak ayrışmış organik madde (humus) bakımından çok zengin topraklardır. Koyu kahverengi veya siyah renktedir. Mikrobiyal aktivite yüksek, besin tutma ve salma kapasitesi mükemmeldir. Tarımsal üretim için ideal toprak özelliklerine sahiptir.",
        features: [
            "Yüksek humus içeriği",
            "Koyu renk (siyah-kahverengi)",
            "Mükemmel besin tutma",
            "Yüksek mikrobiyal aktivite",
            "İyi su tutma ve drenaj dengesi",
            "Tüm bitkiler için ideal"
        ],
        suitableSeeds: ["Biber", "Domates", "Patlıcan", "Fasulye", "Reyhan", "Karalahana"],
        image: "/images/soil/humuslu-toprak.jpg"
    },
    {
        id: "zonal-toprak",
        name: "Zonal Toprak",
        category: "Toprak Türü",
        shortDescription: "İklim ve bitki örtüsüne bağlı olarak gelişmiş toprak",
        description: "Zonal topraklar, uzun süre içinde iklim ve doğal bitki örtüsünün etkisiyle gelişmiş, olgun topraklardır. Belirli bir iklim kuşağının karakteristik özelliklerini taşır. İyi gelişmiş horizonlara sahiptir. Örneğin: Çernozyom (kara toprak), Kestane rengi topraklar.",
        features: [
            "İklime bağlı gelişim",
            "Olgun toprak profili",
            "Belirgin horizonlar",
            "Bölgesel karakteristik",
            "Uzun oluşum süreci",
            "Stabil yapı"
        ],
        suitableSeeds: ["Mısır", "Ay Çiçeği", "Fasulye", "Börülce"],
        image: "/images/soil/zonal-toprak.jpg"
    },
    {
        id: "azonal-toprak",
        name: "Azonal Toprak",
        category: "Toprak Türü",
        shortDescription: "Genç, gelişmemiş toprak türü",
        description: "Azonal topraklar, henüz tam gelişmemiş, genç topraklardır. İklim ve bitki örtüsünden çok, ana materyal ve topoğrafyanın etkisi altındadır. Horizonları tam gelişmemiştir. Litosol (taşlı toprak), Alüvyal topraklar ve Regosol bu gruba girer.",
        features: [
            "Genç toprak",
            "Gelişmemiş horizonlar",
            "Ana materyal etkisi baskın",
            "Değişken yapı",
            "Hızlı değişime açık",
            "Özel yönetim gerektirir"
        ],
        suitableSeeds: ["Kuzukulağı", "Semizotu", "Reyhan"],
        image: "/images/soil/azonal-toprak.jpg"
    },
    {
        id: "introzonal-toprak",
        name: "İntrozonal Toprak",
        category: "Toprak Türü",
        shortDescription: "Yerel faktörlerin etkisiyle oluşmuş toprak",
        description: "İntrozonal topraklar, yerel faktörlerin (tuzluluk, su birikintisi, ana materyal) etkisiyle oluşmuş, iklim ve bitki örtüsünden bağımsız gelişen topraklardır. Tuzlu topraklar, hidromorfik topraklar ve kalkerli topraklar bu gruba girer. Özel karakteristik özelliklere sahiptir.",
        features: [
            "Yerel faktör etkisi",
            "Özel karakteristik",
            "İklimden bağımsız",
            "Belirgin kimyasal özellik",
            "Sınırlı kullanım alanı",
            "Özel adaptasyon gerektirir"
        ],
        suitableSeeds: ["Semizotu", "Şeker Kamışı", "Kavun"],
        image: "/images/soil/introzonal-toprak.jpg"
    }
];

export default soilTypes;
