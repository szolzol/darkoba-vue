# Darkoba Vue

## Alkalmazás célja

DARKOBA Rejtélyes logikai társasjáték

A Darkoba egy logikai játék, ami a barkóbát vegyíti a krimik izgalmával és misztikumával.

            Válasszatok történetet a 'Fejtsük meg!' gombra kattintva! Minden
            történetnél szükségetek lesz egy játékmesterre, a feladványok
            megoldásait csak ő olvashatja el. A többiek ezután olyan
            kérdéseket tesznek fel neki, amelyekre IGEN-nel vagy NEM-mel tud
            a játékmester válaszolni. Ha eleinte a sötétben is tapogatóztok,
            jó logikával lépésről-lépésre eljuthattok a megoldásig.

            Amikor a játékmester úgy dönt, hogy valaki rájött a történet
            nyitjára, felolvassa a többieknek a megfejtést, felfedve a
            rejtély teljes megoldását. A játékmester követheti, hogy ki,
            hány kérdéssel jutott el a megoldáshoz, ezzel mérve a csapat
            teljesítményét...

A Darkoba Vue egy blog alkalmazás, amely lehetővé teszi a felhasználók számára, hogy bejegyzéseket olvassanak, hozzanak létre, szerkesszenek és címkék alapján böngésszenek. Az alkalmazás célja egy egyszerű, modern és reszponzív felület biztosítása a blogoláshoz.

## Felépítés

- **Frontend**: Vue.js (Single Page Application)
- **Routing**: Vue Router
- **Adatkezelés**: Firebase (Firestore adatbázis, Firebase Auth, Storage)
- **Stílus**: Egyedi CSS
- **Fájlstruktúra**:
  - `src/` – fő forráskód
    - `components/` – újrahasznosítható Vue komponensek (Navbar, Footer, PostList, stb.)
    - `views/` – oldalak (Home, Details, Create, Tag)
    - `composables/` – újrahasznosítható logika (getPosts, getPost)
    - `firebase/` – Firebase konfiguráció
    - `router/` – útvonalak kezelése
    - `assets/` – képek, ikonok
  - `public/` – statikus fájlok
  - `data/` – tesztadatok, dumpok

## Funkciók

- Bejegyzések listázása, részletek megtekintése
- Új bejegyzés létrehozása
- Bejegyzések szerkesztése, törlése
- Címkék szerinti szűrés
- Reszponzív dizájn
- Betöltési animáció (Spinner)

## Tech stack

- **Vue.js** – fő frontend keretrendszer
- **Vue Router** – oldalváltások
- **Firebase** – backend szolgáltatások (Firestore, Auth, Storage)
- **JavaScript** – alkalmazás logika
- **CSS** – stílusok

## Telepítés

1. **Követelmények**:
   - Node.js és npm telepítve
2. **Projekt klónozása**:
   ```sh
   git clone https://github.com/szolzol/darkoba-vue.git
   cd darkoba-vue
   ```
3. **Függőségek telepítése**:
   ```sh
   npm install
   ```
4. **Firebase konfiguráció**:
   - Másold a saját Firebase projekted adatait a `src/firebase/config.js` fájlba.
5. **Fejlesztői szerver indítása**:
   ```sh
   npm run serve
   ```
6. **Alkalmazás elérése**:
   - Nyisd meg a böngészőt a [http://localhost:8080](http://localhost:8080) címen.

## További információ

- A projekt fejlesztés alatt áll, további funkciók és hibajavítások várhatók.
- Kérdések, hibák: [GitHub Issues](https://github.com/szolzol/darkoba-vue/issues)
