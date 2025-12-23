<template>
  <q-page class="column items-center q-pa-md">
    <div class="page-container">

      <div class="content">
        <div class="title-container">
          <q-img class="titleImage shadow-4" :src="data.image" />
          <h1 class="h1_title">
            {{ data.title }}
          </h1>
        </div>
        <icon name="location_on" size="1rem"></icon>
        <div class="text" v-html="data.text"></div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const id = route.params.id as string;

const items = [
  // Karikaturen
  {
    id: "961d37c2-6ed5-4cac-a731-d13f08bedc77",
    title: "",
    image: "/img/karikaturen/APFIE9628.jpeg",
    text: ""
  },
  {
    id: "884b889a-53be-4f1f-8fe1-9e6bb593afb5",
    title: "",
    image: "/img/karikaturen/AWLVE7231.jpeg",
    text: ""
  },
  {
    id: "b63796b2-2878-46f8-942d-d0e4aee80822",
    title: "",
    image: "/img/karikaturen/AZJEE3637.jpeg",
    text: ""
  },
  {
    id: "9ca0f27f-ae87-4561-9554-f2492ee494f2",
    title: "",
    image: "/img/karikaturen/BCNAE8166.jpeg",
    text: ""
  },
  {
    id: "1110035e-acab-4b2f-b1a0-20afda339818",
    title: "",
    image: "/img/karikaturen/EGCYE1361.jpeg",
    text: ""
  },
  {
    id: "2b957997-bd0c-49cd-92ae-3527cb633993",
    title: "",
    image: "/img/karikaturen/GQDGE2101.jpeg",
    text: ""
  },
  {
    id: "d10ab45e-06a7-4f17-871c-24004fbfdb2c",
    title: "",
    image: "/img/karikaturen/NICHE1873.jpeg",
    text: ""
  },
  {
    id: "f7972bcd-936f-40d8-b8a3-26bc4bed77da",
    title: "",
    image: "/img/karikaturen/PIMLE9112.jpeg",
    text: ""
  },
  {
    id: "99021a00-3677-4961-bb79-397cc56ecda2",
    title: "",
    image: "/img/karikaturen/PTKAE1789.jpeg",
    text: ""
  },
  {
    id: "c111a859-8b1a-4d2d-9692-b765b215f847",
    title: "",
    image: "/img/karikaturen/SPKYE3267.jpeg",
    text: ""
  },
  {
    id: "87dd237a-685e-4bc5-a0fb-7c7a590ae2cc",
    title: "",
    image: "/img/karikaturen/WUYCE2326.jpeg",
    text: ""
  },
  // Aquarelle
  {
    id: "170274ec-2089-4a71-9200-aeb153574495",
    title: "",
    image: "/img/aquarell/BHDZE4738.jpeg",
    text: ""
  },
  {
    id: "f8d84ced-60f2-4690-b8f1-abdc17e23544",
    title: "",
    image: "/img/aquarell/COJWE2362.jpeg",
    text: ""
  },
  {
    id: "d946c1e1-4ad7-4cc3-b077-4fdee11d4c78",
    title: "",
    image: "/img/aquarell/DMLW7008.jpeg",
    text: ""
  },
  {
    id: "d9d25f5b-0325-48f0-9983-a552198ce8c5",
    title: "",
    image: "/img/aquarell/GKKKE3282.jpeg",
    text: ""
  },
  // Werbegrafiken
  {
    id: "86dd66dd-4bcd-4abc-8908-4eb9109ad9e9",
    title: "",
    image: "/img/werbegrafik/ADASE1235.jpeg",
    text: ""
  },
  {
    id: "4e7833f4-fa4d-478e-a44a-32fd189c3c2a",
    title: "",
    image: "/img/werbegrafik/ALQGE8164.jpeg",
    text: ""
  },
  {
    id: "05d2a7b8-2970-4b56-b2e3-0340d29cbd19",
    title: "",
    image: "/img/werbegrafik/BVPXE8209.jpeg",
    text: ""
  },
  {
    id: "abc76e15-8243-4213-9ece-39a1fd1a5e7e",
    title: "",
    image: "/img/werbegrafik/EGGGE8446.jpeg",
    text: ""
  },
  {
    id: "baa6db00-b91d-432f-a75a-9470ad2124c5",
    title: "",
    image: "/img/werbegrafik/EXXJE9157.jpeg",
    text: ""
  },
  {
    id: "fe09d1e9-bb3e-404c-9c18-d40ebf050f01",
    title: "",
    image: "/img/werbegrafik/EYWGE0823.jpeg",
    text: ""
  },
  {
    id: "734a51a8-fa8f-42e4-9075-e5df2bed628d",
    title: "",
    image: "/img/werbegrafik/FADZE7871.jpeg",
    text: ""
  },
  {
    id: "bee16b10-9ca5-492e-97de-dd137cb837c9",
    title: "",
    image: "/img/werbegrafik/FCFIE6297.jpeg",
    text: ""
  },
  {
    id: "e16f1954-a9fc-4aa2-9369-76d4bf81e29b",
    title: "",
    image: "/img/werbegrafik/FLFAE2027.jpeg",
    text: ""
  },
  {
    id: "2fb28786-1510-439d-affb-c064238234bf",
    title: "",
    image: "/img/werbegrafik/FVLSE8563.jpeg",
    text: ""
  },
  {
    id: "5cae8f2f-0231-4b31-b8a5-c80b2ee2f7b8",
    title: "",
    image: "/img/werbegrafik/GRRSE5908.jpeg",
    text: ""
  },
  {
    id: "deaf54ee-08e3-4eae-9a25-a19ef7a225da",
    title: "",
    image: "/img/werbegrafik/GWWZE5570.jpeg",
    text: ""
  },
  {
    id: "eeb75951-9dba-4d1d-a863-1dd06812c057",
    title: "",
    image: "/img/werbegrafik/JSCRE0079.jpeg",
    text: ""
  },
  {
    id: "5fe72522-f931-4bc9-ae53-86147c92daa4",
    title: "",
    image: "/img/werbegrafik/KDFIE4395.jpeg",
    text: ""
  },
  {
    id: "65abe6ff-e346-4aa0-a72c-c9baa76083d2",
    title: "",
    image: "/img/werbegrafik/KEFJE9549.jpeg",
    text: ""
  },
  {
    id: "17fed532-5de8-4cf3-bcb0-fcf9c135fc4b",
    title: "",
    image: "/img/werbegrafik/KETTE7454.jpeg",
    text: ""
  },
  {
    id: "efa00f2b-f337-4e6a-9a78-80c1fe9c9904",
    title: "",
    image: "/img/werbegrafik/KETTE7454.jpeg",
    text: ""
  },
  {
    id: "4d262d14-2c54-4eed-b8c3-ed0aa6e4013c",
    title: "",
    image: "/img/werbegrafik/KFAME0141.jpeg",
    text: ""
  },
  {
    id: "683e8950-cee4-49fe-a221-f52432cda6e4",
    title: "",
    image: "/img/werbegrafik/MGZME2163.jpeg",
    text: ""
  },
  {
    id: "cb9f9244-fe66-4581-8004-8cd4fc7490d8",
    title: "",
    image: "/img/werbegrafik/NHGAE1826.jpeg",
    text: ""
  },
  {
    id: "410ac453-cca8-4f7a-a615-09346488a83c",
    title: "",
    image: "/img/werbegrafik/PBJRE6996.jpeg",
    text: ""
  },
  {
    id: "3ca17a95-0063-44a7-bd52-9c610e106e66",
    title: "",
    image: "/img/werbegrafik/PDKOE2700.jpeg",
    text: ""
  },
  {
    id: "8600257c-78ab-47d6-937d-2289f199bc28",
    title: "",
    image: "/img/werbegrafik/PQCWE9371.jpeg",
    text: ""
  },
  {
    id: "9cda2959-45f9-4d84-b7b9-b893234b7152",
    title: "",
    image: "/img/werbegrafik/QJDFE9156.jpeg",
    text: ""
  },
  {
    id: "adbdadc5-659e-40b2-840c-ff077a0a8500",
    title: "",
    image: "/img/werbegrafik/RUALE9552.jpeg",
    text: ""
  },
  {
    id: "588ae68c-a6d7-43ef-bbfa-e6b2ca728576",
    title: "",
    image: "/img/werbegrafik/SRNEE1409.jpeg",
    text: ""
  },
  {
    id: "0d15c1f6-1156-4634-b3a4-9b2257594c37",
    title: "",
    image: "/img/werbegrafik/XXPDE9659.jpeg",
    text: ""
  },
  {
    id: "c4bbf4a3-3995-4505-8074-57e09f80bfb5",
    title: "",
    image: "/img/werbegrafik/XXVPE6270.jpeg",
    text: ""
  },
  // Federzeichnungen
  {
    id: "0e045088-5114-411e-a906-2e074c185864",
    title: "",
    image: "/img/federzeichnungen/KCWDE2398.jpeg",
    text: ""
  },
  {
    id: "57f0909a-4cdf-4050-a075-0401b39750aa",
    title: "",
    image: "/img/federzeichnungen/LUAWE6787.jpeg",
    text: ""
  },
  {
    id: "36f5f4bb-9da7-4438-8dd7-4db89961db97",
    title: "",
    image: "/img/federzeichnungen/PFQUE3548.jpeg",
    text: ""
  },
  // Franz Piglmayer
  {
    id: "ffc9b2a1-079f-4a47-8278-5ec915612189",
    title: "",
    image: "/img/piglmayer-person/BMQXE5052.jpeg",
    text: ""
  },
  {
    id: "1034d0c0-c64c-4935-8a43-df20ad787d1e",
    title: "",
    image: "/img/piglmayer-person/CYVGE4958.jpeg",
    text: ""
  },
  {
    id: "7330a94d-f297-4a48-bc44-c5977290359f",
    title: "",
    image: "/img/piglmayer-person/ELYWE9972.jpeg",
    text: ""
  },
  {
    id: "985266db-6521-4023-97a9-d89ac6965a11",
    title: "",
    image: "/img/piglmayer-person/GGBOE0624.jpeg",
    text: ""
  },
  {
    id: "65d1c5be-79ee-4c86-8600-9c28dfaa33a1",
    title: "",
    image: "/img/piglmayer-person/GZNAE7180.jpeg",
    text: ""
  },
  {
    id: "0072a730-0b08-46a3-a9f1-3ba717dc1a33",
    title: "",
    image: "/img/piglmayer-person/JTRBE2852.jpeg",
    text: ""
  },
  {
    id: "84923b1b-a67c-4adb-be00-614faa0cb5cd",
    title: "",
    image: "/img/piglmayer-person/LHRLE7848.jpeg",
    text: ""
  },
  {
    id: "2c87abcf-b8df-4c15-804b-f58b0880cb32",
    title: "",
    image: "/img/piglmayer-person/QFZYE5287.jpeg",
    text: ""
  },
  {
    id: "87e51252-f291-44ad-9682-62fd954bda6c",
    title: "",
    image: "/img/piglmayer-person/SZQME8748.jpeg",
    text: ""
  },
  {
    id: "4457ddd3-58c6-49ab-ac6a-ddd4ce8d8dae",
    title: "",
    image: "/img/piglmayer-person/UANSE7390.jpeg",
    text: ""
  },
  // Biographien
  {
    id: "03625e41-484b-4450-8b6d-2e40fdd7ea28",
    title: "SR Franz Piglmayer",
    image: "/img/piglmayer-person/GZNAE7180.jpeg",
    text: "<p>*17. April 1923 in St. Gotthard im Mühlviertel</p><p>†21. Juli 2002 in Senftenbach</p><p>Österreichischer Werbegrafiker, Kalligraph, Schaufenster-Dekorateur, Bühnenbildner, Berufsschullehrer, Vortragender im WIFI, Maler im Stil des Naturalismus (Aquarelle und Federzeichnungen)</p>",
  },
  {
    id: "1cb9b89c-37e2-4ea0-8042-7562aabc693f",
    title: "Leben und beruflicher Werdegang",
    image: "/img/piglmayer-person/ELYWE9972.jpeg",
    text: '<p>Nach Absolvierung der Pflichtschule in Linz-Urfahr erlernte er den Beruf eines Großhandels-Kaufmannes bei der Firma „EKO" in Linz Während seiner Militärzeit (1941 – 1945) besuchte er die Meisterschule für Grafik und Buchgewerbe, Fachabteilung Gebrauchsgrafik in Berlin.</p><p>Bis 1947 übte er in Linz den Beruf des <strong>Bühnenbildners bei der Mühlviertler Volksbühne</strong> und den Beruf des <strong>Grafikers beim Orchideen-Verlag in LINZ/Urfahr</strong> aus.</p><p>Von August 1947 bis 1955 war er als <strong>Selbstständiger Werbegrafiker und Schaufenster-Dekorateur</strong> für viele oberösterreichische Firmen tätig.</p><p>Als <strong>Vortragender im WIFI</strong> lehrte er die Kalligrafie und die Schaufensterdekoration.</p><p>1961 startete er auf Wunsch der OÖ. Handelskammer, Gremium Textilhandel, einen Schulversuch für <strong>„Schaufenstergestaltung" an der Berufsschule in Ried</strong>, der in das Regelschulsystem übernommen wurde. Bis 1983 unterrichtete er den Gegenstand „Werbetechnik" <strong>an der Berufsschule in Ried im Innkreis</strong>.</p><p>1974 übersiedelte er von Linz nach Senftenbach, Bezirk Ried. Für seine neue Heimatgemeinde profilierte er sich als <strong>ehrenamtlicher Werbegrafiker</strong> für alle Vereine von Senftenbach und für die der umliegenden Gemeinden.</p>'
  },
  {
    id: "d8e0e890-b501-4d9a-89ae-e5010144faf4",
    title: "Künstlerischer Werdegang",
    image: "/img/aquarell/BHDZE4738.jpeg",
    text: '<p>Bereits in der Volksschule in Urfahr erkannten die Lehrer sein zeichnerisches Talent und seine Werke wurden auch ausgestellt.</p><p>Während des zweiten Weltkriegs erhielt er ein Stipendium für die „Meisterschule für Grafik und Buchgewerbe" in Berlin. In dieser Zeit zeichnete er Karikaturen für die „Nordland-Zeitung".</p><p>Seine profunde Ausbildung in der Kalligraphie und Grafik bildete er stets weiter und sie fand Anerkennung in zahlreichen Arbeiten.</p><p>Seine ersten Kontakte zur bildnerischen Kunst knüpfte SR Piglmayer durch seinen erlernten Beruf eines Werbegrafikers und Dekorateurs. Er hat sich sein Können autodidaktisch angeeignet. Seit den 70er Jahren widmete er sich der <strong>Aquarellmalerei</strong> und der <strong>Federzeichnung</strong> und stellte seine Werke 1980 erstmals der Öffentlichkeit vor.</p><p>Es folgten weitere Ausstellungen, vorwiegend in seiner Wahlheimat, dem Innviertel, und 1989 erstmals auch in Linz.</p><p>Er bevorzugt Aquarell und Radierung. Aquarelle sind seine Leidenschaft. Er war verliebt in das Innviertel – in seine schönen Landschaften. Er wollte und konnte die Natur in seinen Bildern auch nur so einfangen, wie ER sie sah: lieblich, romantisch, natürlich. Seine Bilder sollen uns das Schöne und Unbeschwerte in unserem Innviertel zeigen. Als gelernter Grafiker ging er bei seinen Bildern auch sehr ins Detail.</p><p>Aus seinen Aquarellen spricht der freudige und das Leben bejahende Mensch.</p><p>Sein Lebensmotto: Das Leben positiv sehen und Liebe und Freude schenken. Jemandem mit seinen Werken Freude zu bereiten, war ihm sehr wichtig. Dabei stand das Ideelle vor dem Materiellen. Die Anerkennung sollte im Vordergrund stehen!</p>'
  },
  {
    id: "c9d30223-bd20-4a95-80b7-e2d7029df858",
    title: "Persönliches",
    image: "/img/piglmayer-person/JTRBE2852.jpeg",
    text: '<p>Franz Piglmayer wurde als Sohn des Herrn Franz Piglmayer, Friseurgeselle und seiner Frau Katharina, geborene Kocetkova in St. Gotthard, Oberstraß 28 geboren. Im Lazarett in der Nähe von Moskau lernten sich seine Eltern kennen, wo seine Mutter als Krankenschwester tätig war. Sie heirateten noch in Russland 1920 kehrten sie nach Österreich zurück.</p><p>Seine Kindheit und Jugend verbrachte er in Linz. Von 1941 bis 1945 war er Soldat der deutschen Wehrmacht. In dieser Zeit absolvierte er die Schule für Gebrauchsgrafik in Berlin.</p><p>Nach Kriegsende kehrte er nach Linz zurück. In erster Ehe war er mit Gertrude Wais verheiratet. Aus dieser Ehe stammt ein Sohn, Dipl. Ing. Dr. Klaus Piglmayer. In zweiter Ehe war er mit Irma Progli verheiratet.</p><p>Durch seinen Berufswechsel wurde das Innviertel seine zweite Heimat und 1975 zog er nach Senftenbach. Am 21. Juli 2002 verstarb er dort.</p>'
  },
  {
    id: "2407e3e4-f796-4ee0-84c0-5e6b64ef68a4",
    title: "Auszeichnungen",
    image: "/img/federzeichnungen/PFQUE3548.jpeg",
    text: '<ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>1981</b> - Schulrat</h4><div class="exhibition-details"><p class="exhibition-description">Für seine Leistungen im Schuldienst und als Wegbereiter des Gegenstandes Werbetechnik wurde ihm 1981 der Titel „Schulrat" verliehen.</p></div></li></ul><ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>1985</b> - Ehrenring der Gemeinde Senftenbach</h4><div class="exhibition-details"><p class="exhibition-description"> Im Jahr 1985 erhielt er für seine Tätigkeit als ehrenamtlicher Werbegrafiker den Ehrenring der Gemeinde Senftenbach. </p></div></li></ul>'
  },
  {
    id: "60cd2342-a822-4eef-8acf-c98b77fe2974",
    title: "Werkverzeichnis",
    image: "/img/werbegrafik/FCFIE6297.jpeg",
    text: '<p>Während seiner Ausbildung in Berlin zeichnete er bereits Karikaturen, so zum Beispiel ein Buch über die Führerscheinausbildung der deutschen Wehrmacht.</p><p>Als Grafiker beim Orchideen-Verlag illustrierte er an die 30 Sportbücher und Romane.</p><p>Während seiner Tätigkeit als selbstständiger Werbegrafiker entwarf er zahlreiche LOGOS für Firmen und war auch für die Milchwirtschaft tätig. Das Milchglas und der Schriftzug MILCH sind bis heute noch allgegenwärtig.</p><p>Die Schaufenster vieler Linzer Firmen trugen in den 50er, 60er und 70er Jahren seine Handschrift (F. Reif, Franz Friedl, Stoffhaus Filzmoser und Kern, Wolle Hamann, Pelz-Haus Kammerstätter, Fahrräder Brückl, Firma Albur und viele mehr).</p><p>Während seiner Tätigkeit als Berufsschullehrer entwarf und gestaltete er zahlreiche Unterrichtsmittel und Lehrbehelfe für den Schulunterricht.</p><p>Als ehrenamtlicher Werbegrafiker und Dekorateur seiner Heimatgemeinde gestaltete er unzählige Ausstellungen. Als Kalligraph fertigte er unzählige Einladungen für die verschiedenen Feste an.</p><p>Er entwarf das Senftenbacher <strong>Gemeindewappen</strong>, den <strong>Ortsbrunnen</strong> und die <strong>Fahne der Freiwilligen Feuerwehr</strong> Senftenbach. Weiters zeichnete er in dieser Zeit viele Karikaturen zu den verschiedensten Anlässen – zumeist ehrenamtlich.</p>'
  },
  {
    id: "36fbf42d-9e56-4e19-b7c6-b9b7ee1a9571",
    title: "Ausstellungen",
    image: "/img/piglmayer-person/BMQXE5052.jpeg",
    text: '<h2>Aquarelle und Federzeichnungen</h2><ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>September 1980: </b><i>„Verliebt ins Innviertel"</i></h4><div class="exhibition-details"><p class="exhibition-description">Erste öffentliche Ausstellung seiner Aquarelle und Federzeichnungen<br><b>Ausstellungsort: </b>Schulspatzenheim Ried</p></div></li></ul><ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>Dezember 1981: </b><i>„Von jedem Ort ein Aquarell"</i></h4><div class="exhibition-details"><p class="exhibition-description">Persönliche Ausstellung in seinem Zuhause<br><b>Ausstellungsort: </b>Privathaus Senftenbach</p></div></li></ul><ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>September 1982: </b><i>„Romantisches Innviertel"</i></h4><div class="exhibition-details"><p class="exhibition-description">Ausstellung mit Fokus auf die romantische Seite der Region<br><b>Ausstellungsort: </b>Seniorenwohnanlage Ried</p></div></li></ul><ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>April 1983: </b><i>„Aquarellausstellung"</i></h4><div class="exhibition-details"><p class="exhibition-description">Weitere private Ausstellung seiner Werke<br><b>Ausstellungsort: </b>Privathaus Senftenbach</p></div></li></ul><ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>Oktober 1983: </b><i>„Farben der Heimat"</i></h4><div class="exhibition-details"><p class="exhibition-description">Ausstellung der heimatlichen Farben und Motive<br><b>Ausstellungsort: </b>RaiKa Hofkirchen an der Trattnach</p></div></li></ul><ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>November 1983: </b><i>„Südafrika in Aquarellen"</i></h4><div class="exhibition-details"><p class="exhibition-description">Spezielle Ausstellung mit Südafrika-Motiven<br><b>Ausstellungsort: </b>Sparkasse Ried-Haag</p></div></li></ul><ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>Juli 1984: </b><i>„7 Künstler stellen aus"</i></h4><div class="exhibition-details"><p class="exhibition-description">Gruppenausstellung mit anderen Künstlern<br><b>Ausstellungsort: </b>Hauptschule St. Martin</p></div></li></ul><ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>Oktober 1985: </b><i>„Erinnerungen an Griechenland"</i></h4><div class="exhibition-details"><p class="exhibition-description">Ausstellung mit griechischen Motiven<br><b>Ausstellungsort: </b>VKB Ried</p></div></li></ul><ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>Oktober 1988: </b><i>„Die Natur als Lebensmeisterin"</i></h4><div class="exhibition-details"><p class="exhibition-description">Ausstellung über die Natur als Inspirationsquelle<br><b>Ausstellungsort: </b>Raika Aurolzmünster</p></div></li></ul><ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>November 1991: </b><i>„Sagenhaft"</i></h4><div class="exhibition-details"><p class="exhibition-description">Ausstellung in Linz mit sagenhaften Motiven<br><b>Ausstellungsort: </b>Oberbank Linz-Donaulände</p></div></li></ul>'
  },
  {
    id: "68a1bbf4-78be-4cf1-a465-8382192ffb2f",
    title: "Arbeiten für die Gemeinde Senftenbach",
    image: "/img/piglmayer-person/LHRLE7848.jpeg",
    text: '<ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>500 Jahre Kirche in Senftenbach</b></h4><div class="exhibition-details"><p class="exhibition-description">Ausstellung über das Pfarrleben, unzählige Bilder der Pfarre, die von SR Franz Piglmayer zu einer sehenswerten Ausstellung zusammengefasst wurden, ergänzt mit seinen Senftenbacher Impressionen</p></div></li></ul><ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>Ehrenbürger-Feier</b></h4><div class="exhibition-details"><p class="exhibition-description">Vorbereitung und Gestaltung der Ehrenbürger-Feier von Rosemarie Mayrleitner, Franz Piglmayer fertigte eine kleine Zeichnung an.</p></div></li></ul><ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>Gemeindewappen und Erbhoftitel</b></h4><div class="exhibition-details"><p class="exhibition-description">SR Franz Piglmayer als Schöpfer erläuterte das neue Gemeindewappen. Die Urkunde für die Verleihung des Wappens stammen ebenfalls aus einer Feder.</p></div></li></ul><ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>Flagge der Feuerwehr Senftenbach</b></h4><div class="exhibition-details"><p class="exhibition-description">Der Entwurf der Fahne stammt von SR Franz Piglmayer, der sich kostenlos in den Dienst der Sache stellte.</p></div></li></ul><ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>Urkunden</b></h4><div class="exhibition-details"><p class="exhibition-description">Ehrenbürgerurkunden, Urkunden für die Erbhofverleihung, Urkunden für Jubiläen der verschiedenen Vereine der umliegenden Gemeinden.</p></div></li></ul><ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>Einladungen</b></h4><div class="exhibition-details"><p class="exhibition-description">zu den verschiedensten Festen: Sportverein, Feuerwehr, Musikverein, Hochzeiten, Schülertreffen, Geburtstage</p></div></li></ul><ul class="timeline-item"><li class="timeline-content"><h4 class="exhibition-date"><b>Dorfbrunnen 1989</b></h4><div class="exhibition-details"><p class="exhibition-description">Gekrönt wird der von Franz Piglmayer entworfene Brunnen von einem Jagdhorn.</p></div></li></ul>'
  },
  {
    id: "aaa7448f-825e-4235-ba90-be56babdc09b",
    title: "Kritik und Beurteilung seiner künstlerischen Arbeiten",
    image: "/img/karikaturen/NICHE1873.jpeg",
    text: '<p>Die Liebe zum Detail ist typisch für den Rieder Berufsschullehrer. In seinen Bildern herrschen Natürlichkeit und Harmonie vor.</p><p>Ernst und Fröhlichkeit des Hausruckviertels wurden mit Pinsel und Farbe eingefangen. Piglmayer ist ein Heimatmaler, der das Innviertel liebt und genau betrachtet. Mit detailgetreuer Genauigkeit lässt er seine Eindrücke in seine Kunstwerke einfließen. Bald werden die Bilder auch einen kunsthistorischen Wert insofern bekommen, da die Veränderungen unserer Innviertler Gegend in höchst unromantischer Art schnell und unerbittlich voranschreiten.</p><p>Als Naturalismus in Reinkultur stufte Piglmayer seine Werke selbst richtig ein. Piglmayer taucht die Welt stets in bunte Farben. Das Aufzeigen unerfreulicher Kehrseiten widerspricht dem heiteren Naturell des Malers.</p>'
  },
]

const data = computed(() => {
  // return the item that matches the id from the route params
  return items.find(item => item.id === id) || {
    id: "",
    title: "Nicht gefunden",
    image: "/img/signature.webp",
    text: ""
  };
});


</script>

<style scoped>
.page-container {
  width: 100%;
  max-width: 1200px;
}

.content {
  width: 1000px;
  margin: 0 auto;
}

/* Desktop / default */
.title-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  text-align: left;
}

.titleImage {
  width: 700px;
  height: auto;
  margin-top: 30px;
  border-radius: 0px;
}

.h1_title {
  font-size: 2.5rem;
  font-weight: 600;
  margin: 30px 0 10px 0;
}

.h2_title-container {
  text-align: center;
  margin: 40px auto 0;
}

.h2_title {
  font-size: 2rem;
}

.text {
  font-size: 1.2rem;
  /* line-height: 1.6;
  color: #444;
  margin-top: 20px; */
}

/* Mobile: Quasar xs is < 600px */
@media (max-width: 600px) {
  .content {
    width: 100%;
    padding: 0 8px;
  }

  .title-container {
    flex-direction: column;
    text-align: center;
    gap: 4px;
    margin: 0 auto 4px;
  }

  .titleImage {
    max-width: 100%;
    margin: 16px auto 0;
  }

  .h1_title {
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 1.2;
    padding: 6px 0 6px 0;
  }

  .h2_title {
    font-size: 1.6rem;
    padding: 0 14px;
  }

  .h2_title-container {
    margin-top: 24px;
  }

  .page-container {
    padding: 0 8px;
  }

  .text {
    font-size: 1rem;
  }
}
</style>


<style lang="scss">
.exhibition-date {
  font-size: 1.4rem;
  margin-bottom: 8px;
}

h2 {
  font-size: 2rem;
}

.exhibition-description {
  font-size: 1.2rem;
  margin: 0;
}


@media (max-width: 600px) {
  .timeline-item {
    padding: 0 8px 0 15px;
  }

  .exhibition-date {
    font-size: 1.15rem;
    margin-bottom: 4px;
  }

  h2 {
    font-size: 1.4rem;
    margin-top: 0;
  }

  .exhibition-description {
    font-size: 0.95rem;
  }
}
</style>
