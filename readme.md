# Notification API Kullanımı

Bu proje, tarayıcıda **Notification API**'yi kullanarak bildirimler oluşturan basit bir web uygulamasını içerir.

## Notification API Nedir?

Notification API, web tarayıcılarında bildirimler oluşturmayı sağlayan bir JavaScript API'sidir. Bu API, kullanıcılara tarayıcı içinde etkileşimli ve bilgilendirici bildirimler gönderme imkanı sağlar.

## Notification API Kullanımı:

1. **İzin Kontrolü:**
   - `Notification.permission` özelliğini kullanarak tarayıcı bildirim izni kontrol edilir.
   - İzin alınmamışsa kullanıcıya izin isteği gönderilir.
   - İzin verildiyse `Notification.requestPermission()` fonksiyonunun then bloğu çalışır.

2. **Bildirim Oluşturma:**
   - `new Notification(title, options)` kullanılarak bildirim oluşturulur.
   - `title`: Bildirim başlığı.
   - `options`: Bildirim seçenekleri (ikon, resim, yönlendirme URL'si vb.).

3. **Bildirim Seçenekleri:**
   - Bildirim oluştururken aşağıdaki seçenekler kullanılabilir:
     - `title`: Bildirim başlığı.
     - `body`: Bildirim içeriği.
     - `icon`: Bildirim ikonu (URL veya yol).
     - `image`: Bildirimde görünecek büyük resim (URL veya yol).
     - `badge`: Bildirim ikonu üzerinde görünecek küçük bir simge (URL veya yol).
     - `data`: Bildirimle ilişkilendirilecek ek veri.
     - `requireInteraction`: Bildirim, kullanıcı tarafından kapatılana kadar açık kalır.
     - `actions`: Bildirim üzerinde görünecek etkileşimli düğmeler.

## Örnek Proje Açıklaması

Bu projede, kullanıcıdan alınan bilgilerle özelleştirilebilir bildirimler oluşturan bir form bulunmaktadır. Kullanıcı, başlık, içerik, yönlendirme URL'si ve görselleri (ikon ve resim) girerek bir bildirim oluşturabilir.
Örnek projeye, [Notification API Example](https://yeg-notification-api-js.netlify.app/) üzerinden ulaşabilirsiniz.

### Temel Fonksiyonlar

1. `getNotificationPermission`: Tarayıcı bildirim izni kontrol edilir ve izin alınmamışsa kullanıcıdan izin istenir.
2. `createNotification`: İzin alındığında, belirtilen başlık ve seçeneklerle bir bildirim oluşturulur.
3. `handleNotificationFormSubmit`: Bildirim formu gönderildiğinde çalışan fonksiyon. Kullanıcının girdiği değerlere göre bildirim oluşturulur.
4. `formatUrl`: URL'yi düzgün bir formata getiren yardımcı fonksiyon.
5. `getInputValue`: Formdaki bir giriş alanının değerini alır veya varsayılan bir değer kullanır.

### HTML Form Yapısı

- Başlık, içerik, yönlendirme URL'si, resim ve ikonun girilebileceği bir form bulunmaktadır.
- Form, varsayılan değerlerle doldurulabilir veya boş bırakılabilir.

## Kullanım

1. Proje dosyalarını bilgisayarınıza indirin.
2. İndirilen klasördeki `index.html` dosyasını bir tarayıcıda açın.
3. Formu doldurun:
   - **Başlık**: Bildirim başlığı.
   - **İçerik**: Bildirim içeriği.
   - **Yönlendirme URL'si**: Kullanıcı bildirime tıkladığında yönlendirileceği URL.
   - **Resim**: Görsel içeren bir dosya seçin.
   - **İkon**: Bildirim ikonunu içeren bir dosya seçin.
4. "Create Notification" butonuna tıklayın.
5. Tarayıcınız bildirimi göstermek için izin isterse izin verin.
6. Bildirim oluşturulacak ve belirtilen özelliklere göre görüntülenecektir.

Not: Formu boş bırakırsanız, varsayılan bildirim değerleri kullanılır.

---

Bu proje, Notification API'nin temel kullanımını göstermek için tasarlanmıştır. Daha fazla özellik eklemek veya özelleştirmek isterseniz, [Notification API Dokümantasyonu](https://developer.mozilla.org/en-US/docs/Web/API/notification)nu inceleyebilirsiniz.
