export const AIRS_CODER_DOCUMENTATION = `# AIRS Coder - Kullanım Kılavuzu

**AIRS Coder**, Roketsan Yapay Zeka Teknolojileri Birimi tarafından geliştirilmiş, yapay zeka destekli gelişmiş bir kodlama asistanıdır. AIRS Coder, güçlü dil modellerini kullanarak kod yazma, düzenleme ve analiz süreçlerinizi hızlandırır.

---

## 📚 İçindekiler

1. [Temel Özellikler](#temel-özellikler)
2. [Detaylı Kullanım Kılavuzu](#detaylı-kullanım-kılavuzu)
3. [Context Providers (Bağlam Sağlayıcılar)](#context-providers)
4. [Slash Komutları](#slash-komutları)
5. [Kısayol Tuşları](#kısayol-tuşları)
6. [İleri Düzey Özellikler](#ileri-düzey-özellikler)

---


## ✨ Temel Özellikler

### 1️⃣ **Chat (Sohbet) Modu**

AI ile sohbet ederek kod sorularınıza cevap alın, açıklama isteyin veya yeni fikirler üretin.

**Nasıl Kullanılır:**
- \`Ctrl+L\` (Mac: \`Cmd+L\`) ile chat'i açın
- Sorunuzu yazın ve Enter'a basın
- AI size codebase'inizin bağlamında yanıt verir

**Örnek Kullanımlar:**
- "Bu authentication sistemi nasıl çalışıyor?"
- "Bu fonksiyonda bir bug var mı?"
- "Yeni bir kullanıcı kaydı API'si nasıl yazarım?"

### 2️⃣ **Edit (Düzenleme) Modu**

Mevcut kodunuzu doğal dil komutlarıyla düzenleyin.

**Nasıl Kullanılır:**
1. Düzenlemek istediğiniz kodu seçin
2. \`Ctrl+I\` (Mac: \`Cmd+I\`) tuşuna basın
3. Ne yapmak istediğinizi yazın (örn: "Add error handling")
4. AI'ın önerdiği değişiklikleri inceleyin
5. \`Shift+Ctrl+Enter\` ile kabul edin veya \`Shift+Ctrl+Backspace\` ile reddedin

**Örnek Komutlar:**
- "Add error handling to this function"
- "Convert this to async/await"
- "Add JSDoc comments"
- "Refactor this using modern JavaScript"

### 3️⃣ **Autocomplete (Otomatik Tamamlama)**

Kod yazarken AI tabanlı satır ve blok önerileri alın.

**Nasıl Kullanılır:**
- Kod yazmaya başlayın
- AI otomatik olarak öneride bulunur (gri renkte görünür)
- \`Tab\` tuşuna basarak öneriyi kabul edin
- \`Esc\` ile reddedin

**Özellikler:**
- Tek satır tamamlama
- Çok satırlı kod blokları
- Coding pattern tanıma
- Düşük gecikme süresi

### 4️⃣ **Agent (Otonom Görev Modu)**

Karmaşık görevleri AI'ın otonom olarak planlaması ve yürütmesi.

**Nasıl Kullanılır:**
1. Chat'te görevinizi tanımlayın: "Create a REST API for user management"
2. AI görevi adımlara böler
3. Her adımı otomatik olarak gerçekleştirir
4. İlerlemesini takip edebilirsiniz
5. Hatalarla karşılaşırsa otomatik düzeltme yapar

---

## 📖 Detaylı Kullanım Kılavuzu

### Chat ile Kod Analizi

**Scenario:** Karmaşık bir kod bloğunu anlamak istiyorsunuz

\`\`\`
1. Kodu seçin
2. Ctrl+L ile chat'i açın
3. Şunu yazın: "Explain this code in detail"
4. AI size adım adım açıklama yapar
\`\`\`

### Kod Refactoring

**Scenario:** Eski kod modern standartlara uyarlanacak

\`\`\`
1. Refactor edilecek kodu seçin
2. Ctrl+I ile edit modunu açın
3. "Refactor this using modern ES6+ syntax"
4. Diff'i inceleyin ve kabul edin
\`\`\`

### Bug Düzeltme

**Scenario:** Kodunuzda bir hata var

\`\`\`
1. Hatalı kodu seçin
2. Ctrl+I tuşuna basın
3. "Fix this bug" yazın
4. AI hatayı tespit edip düzeltme önerir
\`\`\`

### Test Yazımı

**Scenario:** Bir fonksiyon için unit test gerekiyor

\`\`\`
1. Fonksiyonu seçin
2. Chat'te: "/test" yazın
3. AI ilgili test case'lerini oluşturur
4. Test dosyanıza kopyalayın
\`\`\`

### Dokümantasyon Oluşturma

**Scenario:** Kodunuza dokümantasyon eklenmeli

\`\`\`
1. Fonksiyon/class'ı seçin
2. Slash komutu: "/comment"
3. AI JSDoc veya Python docstring üretir
\`\`\`

---


## 🔍 Context Providers

Context provider'lar, AI'a ek bilgi sağlamanıza olanak tanır.

### @Files - Dosya Referansı

Belirli dosyaları bağlama ekleyin.

\`\`\`
@Files src/auth/login.ts how does login work?
\`\`\`

### @Code - Kod Sembolü Referansı

Fonksiyon, class veya değişken referansı.

\`\`\`
@Code handleUserLogin explain this function
\`\`\`

### @Docs - Framework Dokümantasyonu

Popüler framework'lerin dokümantasyonunu dahil edin.

\`\`\`
@Docs react how to use useEffect?
\`\`\`

### @Terminal - Terminal Çıktısı

Terminal çıktısını hata analizi için kullanın.

\`\`\`
@Terminal fix this error
\`\`\`

### @Git - Git Bilgisi

Git diff veya commit history'yi bağlama ekleyin.

\`\`\`
@Git summarize recent changes
\`\`\`

### @Folder - Klasör İçeriği

Bir klasörün tüm içeriğini bağlama dahil edin.

\`\`\`
@Folder src/components/ review all components
\`\`\`

---

## ⌨️ Slash Komutları

Slash komutları, hızlı işlemler için kısayollardır.

| Komut | Açıklama | Kullanım |
|-------|----------|----------|
| \`/edit\` | Kod düzenleme | \`/edit add error handling\` |
| \`/comment\` | Yorum/dokümantasyon ekle | \`/comment\` (kod seçili olmalı) |
| \`/fix\` | Bug düzeltme | \`/fix\` |
| \`/test\` | Unit test oluştur | \`/test\` |
| \`/optimize\` | Performans iyileştirme | \`/optimize this query\` |

---

## ⚡ Kısayol Tuşları

| İşlem | Windows/Linux | Mac |
|-------|---------------|-----|
| Chat'i aç | \`Ctrl+L\` | \`Cmd+L\` |
| Edit modu | \`Ctrl+I\` | \`Cmd+I\` |
| Diff'i kabul et | \`Shift+Ctrl+Enter\` | \`Shift+Cmd+Enter\` |
| Diff'i reddet | \`Shift+Ctrl+Backspace\` | \`Shift+Cmd+Backspace\` |
| Autocomplete kabul | \`Tab\` | \`Tab\` |
| Autocomplete reddet | \`Esc\` | \`Esc\` |
| Yeni session | Panel'de \`+\` ikonu | Panel'de \`+\` ikonu |
| Settings aç | Panel'de \`⚙️\` ikonu | Panel'de \`⚙️\` ikonu |

---

## 🛠️ İleri Düzey Özellikler

### Codebase İndeksleme

AIRS Coder, projenizin tamamını indeksleyerek daha akıllı öneriler sunabilir.

**Etkinleştirme:**
1. Settings > Codebase Index
2. "Enable Codebase Index" aktif edin
3. İndeksleme otomatik başlar

**Kullanım:**
- Chat'te \`@Codebase\` kullanarak tüm projeyi sorgulayın
- "Where is the authentication logic?" gibi genel sorular sorun

### Session Yönetimi

Her chat oturumu otomatik olarak kaydedilir.

**Session İşlemleri:**
- **Yeni Session**: \`+\` ikonuna tıklayın
- **Geçmiş**: Saat ikonu ile eski session'lara erişin
- **Session Başlığı**: AI otomatik başlık oluşturur

### Custom Slash Komutları

Kendi komutlarınızı tanımlayabilirsiniz.

\`\`\`json
{
  "slashCommands": [
    {
      "name": "review",
      "description": "Kod review yap",
      "prompt": "Bu kodu incele ve iyileştirme önerileri sun"
    }
  ]
}
\`\`\`


---


## 💡 En İyi Uygulamalar

### 1. Spesifik Olun

❌ Kötü: "Fix this"
✅ İyi: "Add null check and error handling to this function"

### 2. Context Provider Kullanın

❌ Kötü: "How does login work?"
✅ İyi: "@Files src/auth/login.ts how does login work?"

### 3. Küçük, İteratif Değişiklikler

❌ Kötü: "Rewrite the entire application"
✅ İyi: "Refactor this single function to use async/await"

### 4. Diff'leri Dikkatle İnceleyin

Her zaman AI'ın önerdiği değişiklikleri kabul etmeden önce inceleyin.

### 5. Session'ları Organize Edin

Her farklı görev için yeni session açın, böylece geçmişiniz düzenli kalır.

---

## 📞 Destek ve Geri Bildirim

- **GitHub**: [omerilbilgi/continue](https://github.com/omerilbilgi/continue)
- **Issues**: Bug raporu ve özellik istekleri için GitHub Issues kullanın
- **Email**: omer.ilbilgi@hotmail.com

---

## 📝 Sürüm Notları

### v1.0.59 (Güncel)

- ✨ Session title otomatik oluşturma
- 🎨 UI iyileştirmeleri
- 🐛 Qwen model desteği geliştirildi
- 🔒 Gelişmiş gizlilik seçenekleri

---

**AIRS Coder ile mutlu kodlamalar!** 🚀
`;
