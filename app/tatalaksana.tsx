import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Image } from "expo-image";
const PlaceHolderImage = require("@/assets/images/main/IMG_6058.jpg");

export default function Etiologi() {
  const riskFactors = [
    {
      title: "TATALAKSANA KANKER KANDUNG KEMIH NON INVASIF OTOT (KKKNIO/NMIBC)\n",
      isi: "Instilasi Kemoterapi Intravesika Walaupun TUR-BT dapat mengeradikasi tumor secara komplit, tumor ini dapat mengalami rekurensi yang tinggi dan progresi menjadi KKKIO/MIBC. Oleh karena itu, perlu untuk mempertimbangkan terapi adjuvan pada semua pasien.\n",
      isi2: "Instilasi Kemoterapi Pasca Operasi Instilasi kemoterapi langsung pasca operasi telah terbukti dapat menghancurkan sisa sel tumor setelah tindakan TUR-BT dan memiliki efek ablasi pada sisa sel tumor di lokasi reseksi dan pada tumor-tumor kecil yang tidak terlihat. Instilasi langsung kemoterapi setelah TURBT dapat mengurangi tingkat rekurensi sebesar 11,7% dibandingkan dengan TUR-BT saja.\n",
      isi3: "Instilasi langsung paling efektif pada tumor risiko rendah. Mitomicin C (MMC), epirubicin, dan doxorubicin memiliki efek yang menguntungkan, namun efektifitas ketiga obat ini belum pernah dibandingkan.\n",
      isi4: "Instilasi ulangan dapat mengurangi rekurensi yang berasal dari implantasi tumor. Pencegahan implantasi sel tumor harus dimulai dalam jam-jam awal setelah TUR BT. Dalam beberapa jam, sel-sel akan tertanam kuat dan dilindungi oleh matriks ekstraselular. studi. studi saat ini,menganjurkan pemberian instilasi langsung dalam waktu 24 jam setelah TUR-BT. Untuk memaksimalkan efektivitas instilasi langsung, sebaiknya instilasi diberikan sedini mungkin, yaitu di ruangan pemulihan atau bahkan di ruang operasi.\n",
      isi5: "Instilasi kemoterapi langsung pasca operasi tidak boleh dilakukan pada kasus dengan atau dicurigai perforasi intra atau ekstraperitoneal dan perdarahan yang membutuhkan irigasi kandung kemih.\nKemoterapi yang diberikan biasanya Mitomycin C 40 mg yang dilarutkan dalam aquades 40 ml dan dipertahankan selama 1 sampai 2 jam. Setelah itu irigasi kandung kemih bisa dilakukan kembali.\n",
      isi6: "Instilasi Kemoterapi Intravesika Lanjutan\nKebutuhan untuk instilasi kemoterapi intravesika lanjutan tergantung pada stratifikasi risiko pasien. Pada pasien berisiko rendah, instilasi langsung tunggal mengurangi risiko rekurensi dan dianggap sebagai pengobatan standar.Sebelum rekurensi berikutnya, tidak ada pengobatan yang harus diberikan.\nUntuk kanker kandung kemih risiko rendah setelah dilakukan TUR-BT dapat dilakukan instilasi langsung 1 kali, dan untuk risiko menengah sampai tinggi dapat dilberikan instilasi kemoterapi lanjutan sampai 8 kali yang diberikan setiap minggu.\n",
      isi7: "Optimalisasi Instilasi Kemoterapi\nPenyesuaian pH urin, lama waktu pemberian (maksimal 1 jam) dan penurunan ekskresi urin saat instilasi dapat mengurangi tingkat rekurensi.15,16 Terdapat beberapa cara yang direkomendasikan agar dapat meningkatkan konsentrasi pada urin sehingga lebih efektif dalam eradikasi sel tumor\n1) Meningkatkan dosis sampai dengan dosis optimal,\n2) menurunkan volume pengencer,\n3) pengosongan kandung kemih sebelum pemberian instilasi,\n4) menurunkan produksi urin sebelum dan pada saat pengobatan dengan cara membuat pasien menjadi sedikit dehidrasi,\n5) membuat pH urin sesuai dengan obat masing-masing\nImmunoterapi Intravesika Bacillus Calmette-Guérin (BCG)\n",
      isi8: "Pemberian BCG setelah TUR-BT lebih efektif jika dibandingkan dengan TUR-BT saja atau TUR-BT dan kemoterapi intravesika untuk pencegahan rekurensi tumor dan menunda progresi tumor. Terapi BCG intravesika menyebabkan efek samping lebih signifikan jika dibandingkan dengan kemoterapi intravesika. Berbeda dengan pemberian instilasi kemoterapi, pemberian BCG intravesika baru boleh diberikan 2 minggu pasca TUR-BT untuk menghindari terjadinya efek samping lokal dan sistemik.24 Di Indonesia, BCG intravesika belum tersedia.\n",
      isi9: "Aspek Spesifik dalam Penanganan CIS\nJika pada pemeriksaan ditemukan CIS dan dipikirkan adanya kaitan dengan KKKIO/MIBC, maka terapi yang diberikan sesuai dengan tumor invasif (KKKIO/MIBC). Deteksi CIS dengan tumor Ta & T1 meningkatkan risiko rekurensi dan progresi tumor TaT1 dan perawatan lebih lanjut harus dilakukan.Diagnosis histologis CIS harus diikuti dengan perawatan lebih lanjut, baik instilasi BCG intravesika atau sistektomi radikal. Pada CIS, tidak ada kesepakatan tentang terapi yang harus dilakukan apakah terapi konservatif (Instilasi BCG intravesika) atau terapi agresif (sistektomi radikal). Tingkat kelangsungan hidup setelah sistektomi radikal awal untuk CIS sangat baik.\n",
      isi10:
        "Kegagalan Kemoterapi Intavesika\nPasien dengan rekurensi KKKNIO/NMIBC dapat diberikan instilasi BCG, setelah pemberian kemoterapi intravesika. Jika tidak terdapat BCG, harus dilakukan staging ulang. Jika terbukti masih KKKNIO/NMIBC dengan kategori risiko rendah dan menengah, maka diberikan lagi instilasi kemoterapi intravesika 1 kali setiap minggu hingga 8 minggu, selanjutnya 1 kali perbulan, maksimal hingga 1 tahun.\n",
      isi11:
        "Pada kasus dengan rekurensi berulang setelah 1 tahun kemoterapi intravesika, maka sistektomi radikal merupakan pilihan utama. Jika pasien menolak atau tidak siap untuk operasi, maka bisa dianjurkan terapi radiasi atau bladder sparing yang akan dijelaskan pada bagian KKKIO/MIBC.\n",
      isi12:
        "Sistektomi Radikal untuk KKKNIO/NMIBC\nSistektomi radikal dapat diusulkan kepada pasien dengan KKKNIO/NMIBC yang berisiko tinggi mengalami progresi, seperti:\n1. Tumor multipel dan atau besar (> 3 cm) T1, derajat tinggi (G3)\n2. T1, derajat tinggi (G3), dan juga terdapat CIS di kandung kemih atau uretra prostatika\n3. T1, G3 rekuren\n4. Varian mikropapiler dari karsinoma urothelial\n",
    },
    {
      title: "TATALAKSANA KANKER KANDUNG KEMIH INVASIF OTOT (KKKIO/MIBC)\n",
      isi: "Sistektomi Radikal\nSistektomi radikal merupakan standar baku penatalaksanaan KKKIO/MIBC T2-T4a, N0-Nx, M0. Indikasi lain adalah KKKNIO/NMIBC yang berulang dengan risiko tinggi, resisten BCG, Tis, T1G3 dan penyakit papiler ekstensif yang tidak dapat dikontrol dengan TUR-BT dan terapi kemoterapi intravesika. Penundaan tindakan sistektomi radikal sejak awal diagnosis dapat mempengaruhi outcome, recurrence free survival, overall survival, maupun pemilihan tipe diversi urin. Dari beberapa penelitian, penundaan tindakan radikal sistektomi lebih dari 90 hari dapat meningkatkan risiko progresi dan mortalitas pada pasien dengan KKKIO/MIBC. Pada sistektomi radikal juga dilakukan diseksi KGB regional. Hingga saat ini luasnya diseksi KGB masih menjadi kontroversi. Seberapa luas diseksi KGB dilakukan dapat dilihat dari dua aspek, yaitu terapeutik dan atau instrumen staging. Saat ini, telah dibuat kategori luas diseksi KGB pada pasien kanker kandung kemih (standard dan extended). Diseksi KGB standard dilakukan dengan mengangkat seluruh jaringan KGB sampai / termasuk bifurkasio iliaka komunis (dengan ureter sebagai batas medial), iliaka interna, presakral dan iliaka eksterna. Diseksi KGB extended meliputi diseksi KGB standard ditambah diseksi seluruh KGB pada regio bifurkasio aorta dan iliaka komunis medial dari persilangan dengan ureter dengan batas lateral adalah saraf genitofemoral, kaudal dari vena sirkumfleksus iliaka,ligamentum lacuna dan KGB Cloquet. Di RSCM, sampai saat ini angka morbiditas dini pasca radikal sistektomi mencapai 60% sama dengan sejumlah penelitian yang serupa, sedangkan angka mortalitas dini cukup tinggi, mencapai 11%.\n",
      isi2: "Diversi Urin\nDiversi urin atau pengalihan aliran diperlukan setelah tindakan sistektomi. Dari sudut pandang anatomi, terdapat tiga alternatif organ atau sistem yang digunakan untuk pengalihan urin :1,10\n1. Abdominal diversion: ureterocutaneostomy, ileal atau colonic conduit.\n2. Urethral diversion : orthotopic urinary diversion ( neobladder, orthotopic bladder substitution).\n3. Rectosigmoid diversion : uretero (ileo-) rectostomy.\n",
      isi3: "Komorbiditas\nEvaluasi komorbiditas dapat menjadi indikator harapan hidup dan prognostik pada pasien KKKIO/MIBC. Terdapat beberapa penilaian komorbiditas, salah satunya adalah Indeks Komorbiditas Charlson yang digunakan secara luas pada pasien kanker kandung kemih invasif.\n",
      isi4: "Kemoterapi Neo Ajuvan\nKemoterapi neo ajuvan direkomendasikan pada kasus T2-T4a cN0 dan harus dalam kombinasi berbasis Cisplatin untuk karsinoma jenis urotelial. Pada pasien dengan gangguan fungsi ginjal dan kondisi yang tidak baik (PS > 2), kemoterapi neo ajuvan tidak direkomendasikan.\nPenggunaan kemoterapi neo ajuvan sebelum tindakan sistektomi radikal dapat meningkatkan angka harapan hidup 5 tahun (5-years survival rate) sekitar 5-10%. Beberapa kemoterapi yang diteliti adalah GemCis (Gembicatin,Cisplatin), MVA(E)C (Metotreksat, Vinblastin, Adriamicin (Epirubicin), dan Cisplatin) CMV (Cisplatin, Metotreksat, Vinblastin), CM (Cisplatin, Metotreksat), Cisplatin/Adriamicin, Cisplatin / 5-Fluorourasil (5-FU), dan CarboMV (Carboplatin, Metotreksat, Vinblastin). Saat ini, belum terdapat kesepakatan tentang regimen dan lama pemberian kemoterapi neo ajuvan tetapi pada beberapa penelitian menunjukkan bahwa setelah siklus pemberian kemoterapi neo ajuvan menunjukkan adanya respon melalui pemeriksaan MRI.\nPemberian kemoterapi neo ajuvan dapat mengeradikasi mikro metastasis dan menurunkan staging tumor. Over-treatment dari kemoterapi neo ajuvan pada pasien yang tidak menunjukkan respon dapat mengakibatkan penundaan operasi dan dapat mempengaruhi outcome. Oleh karena itu, apabila terjadi progresi kanker kandung kemih dalam pemberian kemoterapi neo ajuvan, maka kemoterapi harus dihentikan.\n",
      isi5: "Radioterapi Neoajuvan\nBeberapa penelitian retrospektif menunjukkan radioterapi neo ajuvan yang diberikan selama 4-6 minggu dengan dosis 45-50 Gy dapat menurunkan staging tumor saat sistektomi radikal. Akan tetapi, penelitian ini bersifat retrospektif dan terdapat bias. Pemberian radioterapi neo ajuvan tidak meningkatkan angka keselamatan pasca sistektomi radikal. Walaupun teknik radioterapi modern terus dikembangkan akan tetapi masih perlu dilakukan banyak penelitian yang berkaitan dengan peran radioterapi neo ajuvan. Oleh karena itu sampai saat ini peran radioterapi neo ajuvan belum disarankan pada kasus KKKIO/MIBC.\n",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.heroContainer}>
          <Image
            style={styles.hero}
            source={PlaceHolderImage}
            transition={1000}
          />
        </View>

        <Text style={styles.headerText}>Tatalaksana</Text>

        <Text style={styles.text}>
          Penatalaksanaan kanker kandung kemih dibagi 2, berdasarkan invasi ke
          otot kandung kemih, yakni penatalaksanaan KKKNIO/NMIBC dan KKKIO/MIBC.
          Penatalaksaan untuk KKKNIO/NMIBC dapat berupa reseksi tumor
          transuretra disertai dengan pemberian obat kemoterapi intravesika.
          Sedangkan untuk KKKIO/MIBC dapat berupa sistektomi radikal, radiasi
          eksterna dan/atau kemoterapi. Angka kekambuhan kanker kandung kemih
          ini cukup tinggi oleh karena itu perlu pemantauan secara berkala.
        </Text>

        <View style={styles.listContainer}>
          {riskFactors.map((item, index) => (
            <View key={index} style={styles.listItemContainer}>
              <View style={styles.bullet}>
                <Text style={styles.bulletText}>{index + 1}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={[styles.listItemText, {fontWeight:"bold"}]}>{item.title}</Text>
                <Text style={styles.listItemText}>{item.isi}</Text>
                <Text style={styles.listItemText}>{item.isi2}</Text>
                <Text style={styles.listItemText}>{item.isi3}</Text>
                <Text style={styles.listItemText}>{item.isi4}</Text>
                <Text style={styles.listItemText}>{item.isi5}</Text>
                <Text style={styles.listItemText}>{item.isi6}</Text>
                <Text style={styles.listItemText}>{item.isi7}</Text>
                <Text style={styles.listItemText}>{item.isi8}</Text>
                <Text style={styles.listItemText}>{item.isi9}</Text>
                <Text style={styles.listItemText}>{item.isi10}</Text>
                <Text style={styles.listItemText}>{item.isi11}</Text>
                <Text style={styles.listItemText}>{item.isi12}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "500",
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    marginTop: 8,
    textAlign: "justify",
    paddingHorizontal: 16,
  },
  listContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  listItemContainer: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "flex-start",
  },
  bullet: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    marginTop: 2,
  },
  bulletText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  listItemText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    color: "#000000",
    flexWrap: "wrap",
  },
  heroContainer: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 12,
    marginBottom: 20,
    marginTop: 60,
  },
  hero: {
    width: "100%",
    height: 240,
  },
});
