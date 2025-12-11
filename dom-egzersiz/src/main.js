const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    'nav-item-1': 'Eğitimler',
    'nav-item-2': 'Eğitmenler',
    'nav-item-3': 'SSS',
    'nav-item-4': 'Blog',
    'nav-item-5': 'Hakkımızda',
    'nav-item-6': 'İletişim',
  },
  cta: {
    h1: 'Profesyonel Barista Eğitimi',
    button: 'Hemen Kayıt Olun',
  },
  'top-content': {
    'left-h4': 'Kabul Şartları',
    'left-content':
      'Katılımcılarımızda öncelikle kahveye karşı gerçek bir merak ve öğrenme isteği arıyoruz. Yoğun tempoda çalışmaya uygun olmak, ayakta uzun süre durabilmek ve ekip çalışmasına yatkınlık bu meslekte başarı için kritik özellikler. Daha önce kafe veya restoran deneyimi zorunlu değil; ancak misafir ağırlamayı seven, insanlarla iletişim kurmaktan keyif alan adaylara öncelik veriyoruz. Eğitim sürecinde hijyen kurallarına uyum, disiplin ve derse devamlılık da beklentilerimiz arasında yer alıyor.',
    'right-h4': 'Haftalık Program',
    'right-content':
      'Program haftada toplam 40 saatinizi talep ediyor ve hem teorik hem de yoğun pratik derslerden oluşuyor. Hafta içi akşam saatlerinde kahve teorisi, çekirdek türleri ve demleme yöntemleri işlenirken, hafta sonları espresso makinesi kullanımı, süt tekstürü ve latte art uygulamaları yapılıyor. İleri seviyede müşteri iletişimi, bar organizasyonu ve hız çalışmaları için de düzenli simülasyon oturumları planlanıyor. Böylece katılımcılar gerçek bir kafe ortamına en yakın koşullarda kendilerini geliştirebiliyor.',
  },
  'bottom-content': {
    'left-h4': '3 AYDA KAHVE PROFESYONELİ YETİŞTİRİYORUZ.',
    'left-content':
      'Barista Akademi olarak başvurular arasından kahveye en çok ilgi duyan ve mesleği gerçekten kariyer hedefi haline getiren adayları seçiyoruz. Küçük sınıflar halinde, bire bir geri bildirim alabileceğiniz bir ortamda çalışıyoruz. Üç ay süresince espresso bazlı içeceklerden filtre kahveye, soğuk demleme tekniklerinden alternatif demleme ekipmanlarına kadar geniş bir yelpazede eğitim veriyor, katılımcıları sektörün beklentilerine hazır hale getiriyoruz.',
    'middle-h4': 'SADECE TARİF DEĞİL, MESLEK ÖĞRETİYORUZ',
    'middle-content':
      'Eğitim programımız yalnızca içecek reçetelerini ezberletmekten çok daha fazlasını hedefliyor. Bar arkasındaki iş akışını planlama, yoğun saatlerde zaman yönetimi, stok ve maliyet kontrolü, müşteri şikayetlerini profesyonelce yönetme gibi konulara da detaylı şekilde yer veriyoruz. Uygulamalı derslerde her öğrencinin makine başında yeterli süre geçirerek el pratiği kazanmasına özen gösteriyoruz. Böylece mezunlarımız, ilk iş günlerinde bile özgüvenle tezgâha geçebiliyor.',
    'right-h4': 'KAFENİZE İŞE HAZIR BARİSTALAR YETİŞTİRİYORUZ',
    'right-content':
      'Kahve dükkanları ve zincir kafelerle yıl boyunca iş birliği içinde çalışıyor, işletmelerin ihtiyaç duyduğu nitelikli baristaları birlikte seçiyoruz. Programın son haftalarında, iş görüşmesi simülasyonları, deneme vardiyaları ve isteğe bağlı staj imkanları sunuyoruz. İşe alım süreçlerinizi eğitim programımıza entegre ederek yeni çalışanınızın makine kullanımına, reçetelere ve servis standartlarınıza çok daha hızlı uyum sağlamasını hedefliyoruz.',
  },
  contact: {
    'contact-h4': 'İLETİŞİM',
    address: 'Kahve Sokak No:12 Barista Plaza Beyoğlu İstanbul, Türkiye',
    phone: '+90 (212) 555-1234',
    email: 'info@baristaakademi.com',
  },
  footer: {
    copyright: 'Copyright Barista Akademi 2025',
  },
  images: {
    'logo-img': 'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Barista_%28company%29.svg/1200px-Barista_%28company%29.svg.png',
    'cta-img': 'https://cdn.pixabay.com/photo/2014/11/27/12/24/coffee-547490_1280.png',
    'accent-img': 'https://media.istockphoto.com/id/959307778/tr/foto%C4%9Fraf/bardak-kahve-ile-yatay-bir-sat%C4%B1rda-bertaraf.jpg?s=170667a&w=0&k=20&c=yfoFSXBK3eCoUjMFQr0iLBkmHF0kFCgSxjrAwIADeaU=',
  },
};




const menus=document.querySelectorAll("header nav a")
menus.forEach((menu,index)=>{
  const key = `nav-item-${index + 1}`;
  menu.textContent=siteContent.nav[key];
})

const logo=document.getElementById("logo-img");
logo.src=siteContent.images["logo-img"];

const baslik=document.querySelector(".cta-text h1")
baslik.textContent=siteContent.cta.h1;

const buton=document.querySelector(".cta-text button")
buton.textContent=siteContent.cta.button;

const imıc=document.querySelector(".cta #cta-img")
imıc.src=siteContent.images["cta-img"]


const topBlocks = document.querySelectorAll('.top-content .text-content');
const leftBlock = topBlocks[0];
const rightBlock = topBlocks[1];

leftBlock.querySelector('h4').textContent = siteContent['top-content']['left-h4'];
leftBlock.querySelector('p').textContent = siteContent['top-content']['left-content'];

rightBlock.querySelector('h4').textContent = siteContent['top-content']['right-h4'];
rightBlock.querySelector('p').textContent = siteContent['top-content']['right-content'];

const middleImage = document.getElementById("middle-img");
middleImage.src = siteContent.images["accent-img"];

const bottomBlocks = document.querySelectorAll(
  '.bottom-content .text-content'
);

bottomBlocks[0].querySelector('h4').textContent = siteContent['bottom-content']['left-h4'];
bottomBlocks[0].querySelector('p').textContent = siteContent['bottom-content']['left-content'];

bottomBlocks[1].querySelector('h4').textContent = siteContent['bottom-content']['middle-h4'];
bottomBlocks[1].querySelector('p').textContent = siteContent['bottom-content']['middle-content'];

bottomBlocks[2].querySelector('h4').textContent = siteContent['bottom-content']['right-h4'];
bottomBlocks[2].querySelector('p').textContent = siteContent['bottom-content']['right-content'];

const contactSection = document.querySelector('.contact');
const contactH4 = contactSection.querySelector('h4');
const contactPs = contactSection.querySelectorAll('p');

contactH4.textContent = siteContent.contact['contact-h4'];
contactPs[0].textContent = siteContent.contact.address;
contactPs[1].textContent = siteContent.contact.phone;
contactPs[2].textContent = siteContent.contact.email;

const footerLink = document.querySelector('footer a');
footerLink.textContent = siteContent.footer.copyright;