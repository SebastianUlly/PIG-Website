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
    id: "bee16b10-9ca5-492e-97de-dd137cb837c9",
    title: "",
    image: "/img/werbegrafik/FCFIE6297.jpeg",
    text: ""
  },
  {
    id: "e96f5fda-6a50-481d-a37a-b1d134c2d1aa",
    title: "",
    image: "/img/werbegrafik/XXVPE6270.jpeg",
    text: ""
  },
  {
    id: "4d262d14-2c54-4eed-b8c3-ed0aa6e4013c",
    title: "",
    image: "/img/werbegrafik/KFAME0141.jpeg",
    text: ""
  },
  {
    id: "3c08d398-c640-44b8-bb3c-7f79431d98e5",
    title: "",
    image: "/img/werbegrafik/QJDFE9156.jpeg",
    text: ""
  },
  {
    id: "170274ec-2089-4a71-9200-aeb153574495",
    title: "",
    image: "/img/aquarell/BHDZE4738.jpeg",
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
  {
    id: "f8d84ced-60f2-4690-b8f1-abdc17e23544",
    title: "",
    image: "/img/aquarell/COJWE2362.jpeg",
    text: ""
  },
  {
    id: "1cb9b89c-37e2-4ea0-8042-7562aabc693f",
    title: "Leben und beruflicher Werdegang",
    image: "/img/piglmayer-person-photos/ELYWE9972.jpeg",
    text: '<p>Nach Absolvierung der Pflichtschule in Linz-Urfahr erlernte er den Beruf eines Großhandels-Kaufmannes bei der Firma „EKO" in Linz Während seiner Militärzeit (1941 – 1945) besuchte er die Meisterschule für Grafik und Buchgewerbe, Fachabteilung Gebrauchsgrafik in Berlin.</p><p>Bis 1947 übte er in Linz den Beruf des <strong>Bühnenbildners bei der Mühlviertler Volksbühne</strong> und den Beruf des <strong>Grafikers beim Orchideen-Verlag in LINZ/Urfahr</strong> aus.</p><p>Von August 1947 bis 1955 war er als <strong>Selbstständiger Werbegrafiker und Schaufenster-Dekorateur</strong> für viele oberösterreichische Firmen tätig.</p><p>Als <strong>Vortragender im WIFI</strong> lehrte er die Kalligrafie und die Schaufensterdekoration.</p><p>1961 startete er auf Wunsch der OÖ. Handelskammer, Gremium Textilhandel, einen Schulversuch für <strong>„Schaufenstergestaltung" an der Berufsschule in Ried</strong>, der in das Regelschulsystem übernommen wurde. Bis 1983 unterrichtete er den Gegenstand „Werbetechnik" <strong>an der Berufsschule in Ried im Innkreis</strong>.</p><p>1974 übersiedelte er von Linz nach Senftenbach, Bezirk Ried. Für seine neue Heimatgemeinde profilierte er sich als <strong>ehrenamtlicher Werbegrafiker</strong> für alle Vereine von Senftenbach und für die der umliegenden Gemeinden.</p>'
  },
  {
    id: "d8e0e890-b501-4d9a-89ae-e5010144faf4",
    title: "Künstlerischer Werdegang",
    image: "/img/aquarell/BHDZE4738.jpeg",
    text: '<p>Bereits in der Volksschule in Urfahr erkannten die Lehrer sein zeichnerisches Talent und seine Werke wurden auch ausgestellt.</p><p>Während des zweiten Weltkriegs erhielt er ein Stipendium für die „Meisterschule für Grafik und Buchgewerbe" in Berlin. In dieser Zeit zeichnete er Karikaturen für die „Nordland-Zeitung".</p><p>Seine profunde Ausbildung in der Kalligraphie und Grafik bildete er stets weiter und sie fand Anerkennung in zahlreichen Arbeiten.</p><p>Seine ersten Kontakte zur bildnerischen Kunst knüpfte SR Piglmayer durch seinen erlernten Beruf eines Werbegrafikers und Dekorateurs. Er hat sich sein Können autodidaktisch angeeignet. Seit den 70er Jahren widmete er sich der <strong>Aquarellmalerei</strong> und der <strong>Federzeichnung</strong> und stellte seine Werke 1980 erstmals der Öffentlichkeit vor.</p><p>Es folgten weitere Ausstellungen, vorwiegend in seiner Wahlheimat, dem Innviertel, und 1989 erstmals auch in Linz.</p>'
  },
  {
    id: "c9d30223-bd20-4a95-80b7-e2d7029df858",
    title: "Persönliches",
    image: "/img/signature.webp",
    text: '<p>Franz Piglmayer wurde als Sohn des Herrn Franz Piglmayer, Friseurgeselle und seiner Frau Katharina, geborene Kocetkova in St. Gotthard, Oberstraß 28 geboren. Im Lazarett in der Nähe von Moskau lernten sich seine Eltern kennen, wo seine Mutter als Krankenschwester tätig war. Sie heirateten noch in Russland 1920 kehrten sie nach Österreich zurück.</p><p>Seine Kindheit und Jugend verbrachte er in Linz. Von 1941 bis 1945 war er Soldat der deutschen Wehrmacht. In dieser Zeit absolvierte er die Schule für Gebrauchsgrafik in Berlin.</p><p>Nach Kriegsende kehrte er nach Linz zurück. In erster Ehe war er mit Gertrude Wais verheiratet. Aus dieser Ehe stammt ein Sohn, Dipl. Ing. Dr. Klaus Piglmayer. In zweiter Ehe war er mit Irma Progli verheiratet.</p><p>Durch seinen Berufswechsel wurde das Innviertel seine zweite Heimat und 1975 zog er nach Senftenbach. Am 21. Juli 2002 verstarb er dort.</p>'
  },
  {
    id: "03625e41-484b-4450-8b6d-2e40fdd7ea28",
    title: "SR Franz Piglmayer",
    image: "/img/piglmayer-person-photos/GZNAE7180.jpeg",
    text: "<p>*17. April 1923 in St. Gotthard im Mühlviertel</p><p>†21. Juli 2002 in Senftenbach</p><p>Österreichischer Werbegrafiker, Kalligraph, Schaufenster-Dekorateur, Bühnenbildner, Berufsschullehrer, Vortragender im WIFI, Maler im Stil des Naturalismus (Aquarelle und Federzeichnungen)</p>",
  },
  {
    id: "a166c9e3-da24-4b1d-bf61-719898e851c2",
    title: "",
    image: "/img/karikaturen/BCNAE8166.jpeg",
    text: ""
  },
  {
    id: "0191be63-364c-4677-8d72-80ff42a983e9",
    title: "",
    image: "/img/karikaturen/NICHE1873.jpeg",
    text: ""
  },
  {
    id: "42064a09-b5fe-4585-857c-9718e9016f22",
    title: "",
    image: "/img/karikaturen/SPKYE3267.jpeg",
    text: ""
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
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  margin: 30px 0 10px 0;
}

.h2_title-container {
  text-align: center;
  margin: 40px auto 0;
}

.h2_title {
  font-size: 2.5rem;
  color: #333;
}

.text {
  font-size: 1.1rem;
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
    font-size: 1.4rem;
    font-weight: 600;
    line-height: 1.2;
    padding: 0 0 6px 0;
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
