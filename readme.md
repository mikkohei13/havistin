Idea:
=====
Itselleni sopiva html5-sovellus, jolla voi mahdollisimman helposti tallentaa yksittäisiä haviksia Hasekaan.
Aluksi toimimaan mockup-rajapinnan päälle, joka tallentaa datan json-tiedoistoihin.


Logiikka:
=========
- K = käyttäjä
- F = frontend
- B = backend

- K klikkaa paikannusnappia
- F päivittää paikkastatukseksi "paikantaa..."
- F käynnistää paikannusprosessin
    - täyttää päivämäärän ja kellonajan
    - hakee tarkkaa paikkaa 20 sekuntia
    - (parallel) hakee karkeaa paikkaa 20 sekuntia
    - päivittää paikkastatukseksi paikan koordinaatit tai kartan
    - käynnistää tallennusprosessin (alla)
    - hakee kunnan ja paikan karkean nimen ja päivittää ne kenttiinsä
- K (parallel) kirjaa lajinimen
- F ehdottaa pudotusvalikossa muutamaa lajinimeä
- K kirjoittaa tai valitsee lajinimen
    - F (parallel) käynnistää tallennusprosessin kirjainpainalluksesta (keydown?)
    - F päivittää tallennusstatukseksi "tallentaa..."
    - F käynnistää datanläehtysprosessin kun kentästä poistutaan tai 500 ms tauon jälkeen
    - F kokoaa datan kaikista kentistä ja ID:sta ja POST:aa sen API:lle
    - B vastaanottaa datan ja tarkistaa onko siinä ID:ta.
         - Jos ei ole, antaa ID:n ja tallentaa tiedostoon sen hashilla
         - Jos on, tallentaa tiedostoon sen hashilla
         - Tallennuksen onnistuttua palauttaa statuskoodin "ok"
    - F vastaanottaa statuskoodin, tallentaa ID:n paikalliseksi ja päivittää tallennustatukseksi "tallennettu"
- K kirjoittaa lukumäärän
- K kirjoittaa lisätiedot
- K painaa uusi havainto -linkkiä, jolloin avautuu tyhjä lomake ja prosessi alkaa alusta


TODO:
=====
- Ulkoasu
- Aika
- Paikannimet
- Haviksen poistaminen
- Kartta
- Paikannimien carryon
- Tietoturva, kun julkiseen käyttöön
- Rajoita datan lähetystä: nyt jos tabin painaa pohjaan, tekee focusout-eventin perusteella postauksia apiin useita per sekunti.


Automaattisen tallennuksen pros & cons:
=======================================
+ Yksi klikkaus vähemmän
+ Tallentuu vaikka ei muistaisi klikata tallennusnappia
+ Tulevaisuuden UX?
- Vaikeampi pitää käyttäjä ajan tasalla milloin tallennettu. Tallentaa-teksti vain vilahtaa sekunnin murto-osan.
- Ongelmatilanteisiin vastaaminen monimutkaisempaa; mitä tehdä jos tallennus ei onnistunutkaan? Näyttää tallennusnappi (ja rikkoa logiikka), vai yrittää myöhemmin uudelleen ja pyytää käyttäjää pitämään ikkuna avoinna?
- Kuorma palvelimelle, kun tallennuksia tehdään jatkuvasti. Ongelma kasvaa odottamattomissa tilanteissa (esim. hyppiminen kentästä toiseen tabi pohjassa)
- Epätavallinen UX: tallentuminen ja julkisuus läyttäjälle voi kokea yllättävänä, koska tottunut tallennukseen nappia klikkaamalla, esim. jos
     - havikset tulevat näkyville vaikka tallennus vielä kesken (ei vielä seim salattu)
     - havikset tulevat näkyville vaikka luuli jättäneensä tallennuksen tekemättä

