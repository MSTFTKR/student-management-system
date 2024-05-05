const readline = require('readline')
let rl = readline.createInterface(process.stdin, process.stdout)
var ogrenci = [
    {
        ad: 'Mustafa',
        soyad: 'Eker',
        sinif: '4',
        vize: '40',
        final: '50',
        no: '10'
    },
    {
        ad: 'ALİ',
        soyad: 'tek',
        sinif: '2',
        vize: '30',
        final: '80',
        no: '11'
    },
    {
        ad: 'arda',
        soyad: 'aliker',
        sinif: '3',
        vize: '70',
        final: '60',
        no: '12'
    },
    {
        ad: 'ayşe',
        soyad: 'kek',
        sinif: '2',
        vize: '80',
        final: '20',
        no: '13'
    },
    {
        ad: 'Mustafa5',
        soyad: 'Eker5',
        sinif: '1',
        vize: '50',
        final: '50',
        no: '14'
    },
    {
        ad: 'Mustafa6',
        soyad: 'Eker6',
        sinif: '3',
        vize: '45',
        final: '65',
        no: '15'
    },
    {
        ad: 'Mustafa7',
        soyad: 'Eker7',
        sinif: '4',
        vize: '15',
        final: '60',
        no: '16'
    },
    {
        ad: 'ahmet ali',
        soyad: 'sarkar',
        sinif: '1',
        vize: '90',
        final: '85',
        no: '17'
    },
    {
        ad: 'Mustafa9',
        soyad: 'Eker9',
        sinif: '1',
        vize: '90',
        final: '85',
        no: '18'
    }
]

/*const ortalamaHesapla=(ogrenci)=>{
for(let i=0; i<ogrenci.length; i++){
    let ort=0;
    let tumort=0;
    let viz=ogrenci[i].vize*0.3;
    let fin=ogrenci[i].final*0.7;
    ort=viz+fin
    console.log(ogrenci[i].ad,ogrenci[i].soyad,'İsimli öğrencinin ortalaması:',ort)
}}*/
const ortalamaHesapla = () => {
    var tumort = 0;

    for (let i = 0; i < ogrenci.length; i++) {
        let ort = 0;
        let viz = ogrenci[i].vize * 0.3;
        let fin = ogrenci[i].final * 0.7;
        ort = viz + fin
        tumort += ort
    }
    console.log('Tüm öğrencilerin ortalaması:', tumort / ogrenci.length)
    return dongu()
}
const notAlti = () => {
    var tumort = 0;

    rl.question('Not giriniz:', (not) => {
        for (let i = 0; i < ogrenci.length; i++) {
            let ort = 0;
            let viz = ogrenci[i].vize * 0.3;
            let fin = ogrenci[i].final * 0.7;
            ort = viz + fin
            if (ort < not) {
                console.log(ogrenci[i].ad, ogrenci[i].soyad, 'İsimli öğrenci Ortalaması:', ort)
            }
        }
        return dongu()
    })

}
const notUstu = () => {
    var tumort = 0;

    rl.question('Not giriniz:', (not) => {
        for (let i = 0; i < ogrenci.length; i++) {
            let ort = 0;
            let viz = ogrenci[i].vize * 0.3;
            let fin = ogrenci[i].final * 0.7;
            ort = viz + fin
            if (ort >= not) {
                console.log(ogrenci[i].ad, ogrenci[i].soyad, 'İsimli öğrenci  Ortalaması:', ort)
            }
        }
        return dongu()
    })

}
const sinifOrtalama = () => {
    var tumort = 0;
    var sayac = 0;

    rl.question('Sınıf Giriniz:', (sinifs) => {
        for (let i = 1; i < ogrenci.length; i++) {
            if (ogrenci[i].sinif === sinifs) {
                let viz = ogrenci[i].vize * 0.3;
                let fin = ogrenci[i].final * 0.7;
                ort = viz + fin
                tumort += ort
                sayac += 1
            }
        }
        console.log(sinifs, '.Sınıfın ortalaması:', tumort / sayac)
        return dongu()
    })


}
const sinifListesi = () => {
    rl.question('Sınıf Seçiniz:', (sinifs) => {

        ogrenci.forEach((a) => {
            if (a.sinif == sinifs) {
                console.log(a)
            }
        })
        return dongu()
    })
}
const tumListe = () => {
    ogrenci.forEach((a) => {
        console.log(a)
    })
    return dongu()
    
}

const cik = () => {
    console.log('Çıkılıyor...')
    return rl.close()
    

}
const addOgr = () => {

    rl.question('Öğrenci isim, soyisim, sinif, vize, final ve no bilgilerini boşluklu olarak giriniz:', (bilgi) => {
        let al = bilgi.split(' ')
        ogrenci.push({ ad: al[0], soyad: al[1], sinif: al[2], vize: al[3], final: al[4], no: al[5] })
        console.log(ogrenci)
        return dongu()
    })
}
const delOgr = () => {
    
        rl.question('Silinecek öğrencinin nosunu yazınız:', (bilgi) => {
            let sayac=false;
            for (let i = 0; i < ogrenci.length; i++) {
            if (ogrenci[i].no == bilgi) {
                    ogrenci.splice(i, 1)
                    sayac=true;
            }
            }
            if (sayac==false){
                    console.log('Öğrenci Bulunamadı: Aşağıdan öğrenci listesini kontrol edebilirsiniz')
            }
            console.log(ogrenci)
            
            return dongu()
        })
}

const info = () => {
    console.log('Lütfen bir seçimi yap')
    console.log(`
        Öğrenci eklemek için:ekle,
        Öğrenci silmek için:sil,
        Tüm öğrenci ortalaması:ortalamaHesapla,
        Girilen notun altında kalan öğrenciler:notAlti,
        Girilen notun üstünde kalan öğrenciler:notUstu,
        Sınıf ortalamasi:sinifOrtalama,
        Seçilen Sınıf Listesi:sinifListesi,
        Tüm Öğrenciler:tumListe
        Çıkış:cik
                `)
}


const dongu = () => {
    info();
    rl.question('seç:', (bilgi) => {
        if (bilgi == 'ekle') {
            addOgr(bilgi)

        } else if (bilgi == 'sil') {
            delOgr()

        } else if (bilgi == 'ortalamaHesapla') {
            ortalamaHesapla()

        } else if (bilgi == 'notAlti') {
            notAlti()

        } else if (bilgi == 'notUstu') {
            notUstu()

        } else if (bilgi == 'sinifOrtalama') {
            sinifOrtalama()

        } else if (bilgi == 'sinifListesi') {
            sinifListesi()

        } else if (bilgi == 'tumListe') {
            tumListe()

        } else if (bilgi == 'cik') {
            cik()
            
    
        } else {
            console.log('Hatalı işlem')
            dongu()
        }
        

    })
    
}
dongu()


