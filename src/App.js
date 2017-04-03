import React, { Component } from 'react';
import moment from 'moment';
import Tapahtuma from './Tapahtuma.js';
import axios from 'axios';
import logo from './digleus.png';
import ResponsiveEmbed from 'react-responsive-embed';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    var wapunalku = new Date(2017, 3, 13);
    var now = new Date();
    var timetowappu = new Date(Date.parse(wapunalku) - Date.parse(now));
    var tapahtumat = [
    {
      "aika": new Date(2017, 3, 11, 18),
      "nimi": "Ninnin sikarikerho - SDP:n kerhotalo",
      "kuvaus": "Jo klassikoksi muodostunut Ninnin sikarikerho tulee taas! Tänäkin vuonna on tarjolla jotain vanhaa ja uutta: kuumia koiria, olutbingoa, Nucleuksen Panokerhon simaa ja totta kai sikareita! Grilli on kuumana koko illan, joten omiakin grillattavia voi tuoda mukanaa. Nappaa siis mukaan omavalintaiset juomasi (voidaksesi osallistua olutbingoon tulee sinulla olla yksi (1) juoma laitettavaksi palkintopottiin) ja ruokasi ja tule viettämään rento ilta SDP:n kerhotalolla (Hämeentie 25). Omat pihapelit ovat myös tervetulleita!",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.455785,+22.300003&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.455785,+22.300003"
    },
    {
      "aika": new Date(2017, 3, 12, 22),
      "nimi": "Wapunaloitusbileet - Vegas",
      "kuvaus": "Wappu avataan virallisesti Wapunaloitusbileillä, jossa myös suoritetaan Wappurauhanjulistus. Näistä pirskeistä alkaa se suuri ja antoisa seikkailu läpi wapputapahtumien, joille ei tunnu loppua näkyvän. Vain taistelijoista voimakkaimmat ja urheimmat selvittävät tiensä Wappuaattoon ja saavat sankaruutensa merkiksi painaa teekkarilakkinsa päähänsä. Wapunaloitusbileistä on mahdollista ostaa Wappupasseja, mikäli et ole vielä omaasi ehtinyt lunastaa.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=vegas+turku&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7Cvegas+turku"
    },
    {
      "aika": new Date(2017, 3, 13, 18),
      "nimi": "Tempositsit ja Bower Auer - Osakuntasali",
      "kuvaus": "Hieman erilaiset sitsit. Kahlataan läpi tunnetuimpien sitsilaulujen snapspaussien huutojen saattelemina ja juomaa runsaasti nauttien. Ruokaa ei ole tarjolla, eikä sitä ehtisikään syömään.  Sitsien jälkeen suoritetaan massiivinen <a href='https://en.wikipedia.org/wiki/Power_hour'>Power Hour</a> -juomapeli suurella laumalla. HUOM! Varaathan omat juomat mukaan molempiin tapahtumiin!",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.454787,+22.287281&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.454787,+22.287281"
    },
    {
      "aika": new Date(2017, 3, 14, 16),
      "nimi": "Wappulehden julkistus - Agora aula",
      "kuvaus": "Tuo Turun teekkareiden kaunis kätten jälki, Pilde & Napander, julkaistaan ja ilotulitukset välkkyvät ja rummut soittavat ja kuohuviini virtaa ja kaikilla on hauskaa. Silmät kirkkaina ja mieli raukeana päästään avaamaan vuoden 2017 P&N ja nauramaan aina yhtä innostavalle ja suvaitsevalle teekkarihuumorille. #vitsihuumoria Krebailujatkot saunan merkeissä TYY:n saunalla.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.455659,+22.285654&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.455659,+22.285654"
    },
    {
      "aika": new Date(2017, 3, 15, 18),
      "nimi": "Wappulehden ensimmäinen myyntipäivä ja MS-DOS - Digitin kiltahuone",
      "kuvaus": "Jotta fuksit lakkinsa ansaitsevat, on heidän tänä päivänä suoritettava uroteko. Uunituoretta, mahtavaa ja kaunista Pilde & Napander -lehteä fuksien myytäköön runsain määrin ja teekkareiden ilosanomaa kaikelle kansalle levittäköön auringon paisteessa Turun kaupungin kauppojen torilla. Launkalauantain kunniaksi haalarimerkkien ompelua kiltiksellä MS-DOSin johdolla.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.455659,+22.285654&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.455659,+22.285654"
    },
    {
      "aika": new Date(2017, 3, 16, 18),
      "nimi": "Viini & Jyystö -ilta by niceKerho - Digitin kiltahuone",
      "kuvaus": "Teekkarit ovat hienoa ja arvokasta väkeä, ja nauttivat viinastaan myös punaisena tai valkoisena. Joskus jopa kuohuvana tai roséna. Tämän alkomaholipitoisen herkun taistelutoverina wapputaistossa  auttaa oivasti keltainen ystävänsä jyystö, jota mukavien (nice = mukava) kerholaisten johdolla pääsemme tässä koettelemuksessa maistelemaan. Osallistuminen kustantaa kepoiset kaksi (2) euron (€) kolikkea.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.455659,+22.285654&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.455659,+22.285654"
    },
    {
      "aika": new Date(2017, 3, 17, 18),
      "nimi": "Sitsilauluworkshop - Osakuntasali",
      "kuvaus": "Teekkariperinteisiin kuuluu tiiviisti sitsilaulut ja koska turkulaisia sitsilauluja ei ole koskaan liikaa, pääsemme kilpailemaan sitsilaulujen työstämisestä!",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.454787,+22.287281&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.454787,+22.287281"
    },
    {
      "aika": new Date(2017, 3, 18, 18),
      "nimi": "Digitin ja Nucleuksen yhteislähtö Hybridispeksin näytökseen - Kiltahuone",
      "kuvaus": "Speksi on interaktiivinen opiskelijateatteri, jossa yleisö saa osallistua näytökseen huutamalla ”omstart!”, jolloin näyttelijät näyttelevät edellisen kohtauksen uudestaan toisella tavalla. Digit ja Nucleus järjestävät yhteislähdön Hybridin omaan speksiin, Hybridispeksiin, jotta kulttuurillinen tarve ja halu tulevat tyydytetyiksi. Vain ennakkoon ilmoittautuneille!",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.455659,+22.285654&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.455659,+22.285654"
    },
    {
      "aika": new Date(2017, 3, 19, 18),
      "nimi": "Kääliösitsit - Osakuntasali",
      "kuvaus": "Lyhenne sanoista KänniÄäliösitsit. Teekkari laulaa mieluummin kuin hyvin, ja näillä sitseillä käyttää myös viisasten juomaa samoin. Näiden sitsien jälkeen harvoin kuulee sanonnan ”oispa kaljaa”. Digitin ja Nucleuksen lisäksi mukana kääliöilee myös Asteriski!",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.454787,+22.287281&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.454787,+22.287281"
    },
    {
      "aika": new Date(2017, 3, 20, 17),
      "nimi": "Polkuauto Grand Prix by TIO - Varvintori",
      "kuvaus": "Turun Insinööriopiskelijat ry järjestää vuosittain kilpa-ajot Varvintorilla. Nämä kilpa-ajot vaativat kuskeiltaan suuria pakaroita vauhdin ylläpitämiseksi. Tapahtuma on erinomainen spektaakkeli niin kuskien suoritusten kuin sosialisoitumisen kannalta, sillä tapahtuma järjestetään Turun yliopiston ja ammattikorkeakoulun kesken.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=varvintori&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7Cvarvintori"
    },
    {
      "aika": new Date(2017, 3, 21, 12),
      "nimi": "Bar Wappu Line - Yliopistonmäki ja Teekkarin neliottelu (by TK) - Kemian kukkulat",
      "kuvaus": "Jos wapunwarastus jäi tänä vuonna ja merivesihammasta (?) kolottaa, voi risteilemään lähteä myös Yliopistonmäelle! Mäen päällä olevassa suihkulähteessä seilataan halvan viinan perässä ympäri ämpäri lahtea. ",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.454672,+22.284435&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.454672,+22.284435"
    },
    {
      "aika": new Date(2017, 3, 22, 9),
      "nimi": "Sitsipäivä - Osakuntasali",
      "kuvaus": "Sitsaaminen on aina kivaa, joten miksi sitä ei tekisi koko päivää. Aamu aloitetaan perinteisesti Aamusitseillä, joista jatketaan tehokkaasti Päiväbileisiin. Päiväbileiden jälkeen on aika jälleen — yllätys yllätys — sitsata Iltasitsien merkeissä!",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.454787,+22.287281&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.454787,+22.287281"
    },
    {
      "aika": new Date(2017, 3, 23, 14),
      "nimi": "Piirettymaraton - Digitin kiltahuone",
      "kuvaus": "Maratonit ovat aina raskaita, paitsi piirrettymaraton. Kiltahuoneen uumenissa katsotaan vanhoja klassikoita (suurimman osan) jäsenistön nuoruudesta aamusta iltaan.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.455659,+22.285654&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.455659,+22.285654"
    },
    {
      "aika": new Date(2017, 3, 24, 18),
      "nimi": "Typerien pelien ilta (by TK ja Pelikerho) ja Jäynägaala (by TK) - B",
      "kuvaus": "Ongelmanratkaisu ja autismointi ovat avaimet jokaisen sodan voittamiseen. Ainakin teekkareiden piireissä. TeekkariKomissio ja Pelikerho järjestävät lautapeli-illan, jotta darraiset aivonystyrät pistetään töihin ja taistelutoverista haetaan murskavoittoa ja nöyryytystä. Samaan aikaan, samassa paikassa järjestettävässä jäynägaalassa palkitaan alueellisten kisojen voittajat! Sijaintina B",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=turku&zoom=11&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true"
    },
    {
      "aika": new Date(2017, 3, 25, 12),
      "nimi": "Kierrospäivä (Jallunkierros by 37) - Digitin kiltahuone",
      "kuvaus": "Kierrospäivänä kierrostellaan ympäri yliopiston monien ainejärjestöjen toimistoja. Verkot heitetään vesille (verkostoidutaan), kun tapaamme tällä mutaisella ja kylmällä tiellä niin humanisteja, kauppiaita, juristeja kuin luonnontieteilijöitäkin. Kierrospäivä jatkuu perinneseuran perinteisellä Jallunkierroksella!",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.455659,+22.285654&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.455659,+22.285654"
    },
    {
      "aika": new Date(2017, 3, 26, 18),
      "nimi": "Typerien juomien ilta (by Panokerho) - Digitin kiltahuone ja Insinööribileet - Vegas",
      "kuvaus": "Jotta ainainen bissen lipitys tai siiderin sirkutus eivät pääsisi kyllästyttämään, kokeillaan Typerien juomien illassa jotain uutta! Järjestäjätahot järjestävät järjestyspaikalle järjestyksessä erilaisia järjeltään typeriä juomia, joita sitten järjelliset jäsenistön jäsenet pääsevät maistelemaan. Tapahtuma on myös OPM, joten oman typerän juomansa voi ottaa mukaan. Illan jatkot tarjoavat Digit, Nucleus, Elba ja TIO Insinööribileiden merkeissä!",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.455659,+22.285654&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.455659,+22.285654"
    },
    {
      "aika": new Date(2017, 3, 27, 16),
      "nimi": "Grilli & Kyykkä - Edun kenttä",
      "kuvaus": "Juominen nälättää ja urheilu janottaa ja nämähän sopivat kuin nyrkki silmään. Educariumin hiekkakentällä otetaan mittaa kartuista ja makkaroista, kun wapputaisto kulminoituu aggressiiviseen kyykkäämiseen. Tankkauspisteellä sisäänsä voi halutessaan ahtaa muutaman kolikon korvausta vastaan makkaraa ja muita grillin antimia. Omat grillattavat ovat myös suositeltavia.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.458263,+22.284175&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.458263,+22.284175"
    },
    {
      "aika": new Date(2017, 3, 28, 17),
      "nimi": "Hyvinvointipäivä - TYYn sauna",
      "kuvaus": "Hyvinvointi on tärkeää urotekojen tiimellyksessä. Hyvinvointipäivä tulee tarpeeseen, jos wappua on viettänyt yhtään asiaankuuluvalla hartaudella leffan, saunan ja rennon hengailun merkeissä.  Viimeinen hetki keräillä voimia teekkariwapun kovimpiin koitoksiin!",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.454567,+22.287194&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.454567,+22.287194"
    },
    {
      "aika": new Date(2017, 3, 30, 14),
      "nimi": "Wappuaatto ja lakitus - Yliopistonmäki",
      "kuvaus": "Wappuaaton auringonnousu kruunaa koko kolmeviikkoisen juhlan. Tämä tietää rohkeille ja vahvoille fukseille ilon ja onnen päivää, kun kaiken sen darran päälle päähänsä saa painaa ikioman, vielä valkoisen teekkarilakin. Tilaisuudessa siirrytään myös taidemuseonmäelle seuraamaan vähempiarvoisten kuolevaisten, ylioppilaiden, tavallisten ylioppilaslakkien päähän laittamista.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.454672,+22.284435&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.454672,+22.284435"
    },
    {
      "aika": new Date(2017, 4, 1, 12),
      "nimi": "TYYn vappupiknik - Vartiovuorenmäki",
      "kuvaus": "TYY järjestää perinteisen vappupiknikin Vartiovuorenmäellä, jossa on enemmän tai vähemmän tapahtumaa ja pahaa oloa. Tähän päättyy Wapun taika ja tätä seuraa vain kesä ja aurinko ja darra ja loputon rahavirta...",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.448326,+22.276958&zoom=16&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.448326,+22.276958"
    },
    {
      "aika": new Date(2017, 4, 2, 14),
      "nimi": "Hyi wittu -päivä - TYYn sauna",
      "kuvaus": "Nimensä veroinen, uskomattoman miellyttävä olotila. Wapun jälkimaininkeja pääsee parantelemaan saunan ja naposteltavan merkeissä. Jaettu paha olo on pienempi paha olo.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.454567,+22.287194&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.454567,+22.287194"
    }];
    this.state = { vappuun: timetowappu, päivät: 0, tunnit: 0, minuutit: 0, sekuntit: 0, tapahtumat: tapahtumat, vitsi: "", wapunalku: wapunalku };
  }

  tick() {
    var now = new Date();
    var days = Math.floor(Date.parse(this.state.vappuun) / (1000 * 60 * 60 * 24))+'';
    if(days.length<2){days = 0+days}
    var hours = Math.floor((Date.parse(this.state.vappuun) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))+'';
    if(hours.length<2){hours = 0+hours}
    var minutes = Math.floor((Date.parse(this.state.vappuun) % (1000 * 60 * 60)) / (1000 * 60))+'';
    if(minutes.length<2){minutes = 0+minutes}
    var seconds = Math.floor((Date.parse(this.state.vappuun) % (1000 * 60)) / 1000)+'';
    if(seconds.length<2){seconds = 0+seconds}

    if(Date.parse(this.state.wapunalku) >= Date.parse(new Date())) {
      this.setState({
        vappuun: new Date(Date.parse(this.state.wapunalku) - Date.parse(now)),
        vappustring: days+':'+hours+':'+minutes+':'+seconds
        
      })
    }
    else{
      this.setState({
        vappustring: 'Wabu ei lobu!!!'
      })
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    
    this.setState({
      vappustring: "Wabu???"
    })

    axios.get('/vitsit/getVitsi')
    .then(function(result) {
      console.log(result);
      this.setState({ vitsi: result.data});
    }.bind(this))
    .catch(function(error){
      console.log(error);
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="App">
        <div className="row nomargin baselinealign margin20bottom">
          <div className="App-header card nomargin orange white-text">
            <div className="col s12 l1 m12 logo">
              <img src={logo} height="70px" alt="logo"></img>
            </div>
            <div className="col s12 l3 m12">
              <h4>Turun Teekkariwappu</h4>
            </div>
            <div className="col s12 l4 m12">
              <h5>
                {this.state.vappustring}
                
              </h5>
            </div>
            <div className="col s12 l4 m12">
              <a className="jarjesto" href="http://digit.fi/">Digit</a>
              &
              <a className="jarjesto" href="http://nucleus.fi/">Nucleus</a>
              <br></br>
              Mukana menossa myös
              <br></br>
              <a className="jarjesto pikkujarjesto" href="http://teekkarikomissio.utu.fi/fi/index.html">Teekkarikomissio</a>
              ja
              <a className="jarjesto pikkujarjesto" href="https://www.asteriski.fi/">Asteriski</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="padding20 col s12 m12 l8">
            <ResponsiveEmbed src='https://www.youtube.com/embed/qt9vJZXvjVw' allowFullScreen />

            <div className="grey lighten-5 card flex-column margintop1">
              <div className="padding20 card orange lighten-1 white-text nomargin">
                <h5>Seuraavat tapahtumat</h5>
              </div>

              <ul className="collapsible popout margin20topbottom" data-collapsible="accordion">

              {this.state.tapahtumat.map(function(tapahtuma, i) {
                // moment(tapahtuma.aika).lang('fi').format('dd DD.MM')+" klo "+moment(tapahtuma.aika).format('hh:mm')
                return <Tapahtuma aika={moment(tapahtuma.aika).lang('fi').format('dd DD.MM')+" klo "+moment(tapahtuma.aika).format('HH:mm')} nimi={tapahtuma.nimi} kuvaus={tapahtuma.kuvaus} kartta={tapahtuma.kartta}/>
              })}

              </ul>
            </div>
          </div>

          <div className="padding20 col s12 m12 l4">
            <div className="grey lighten-5 card flex-column nomargintop">
              <div className="padding20 card orange lighten-1 white-text nomargin">
                <h5>Miten osallistun?</h5>
              </div>
              <div className="margin20">
                <ul className="collection nomargin">
                  <li className="collection-item">Osta wappupassi wappukomissaarilta (ne on niitä silinteripäisiä tyyppejä) wapputapahtumista tai Digitin/Nucleuksen kiltahuoneelta.</li>
                  <li className="collection-item">Käy wapputapahtumissa ja pyydä passiisi leimoja wappukomissaareilta. </li>
                  <li className="collection-item">Palauta passi wappukomissaarille wappupiknikillä, haista vittu -päivänä tai niiden jälkeen Digitin tai Nucleuksen hallituslaisille kiltahuoneella.</li>
                  <li className="collection-item">???</li>
                  <li className="collection-item">Profit.</li>
                </ul>
              </div>
            </div>

            <div className="grey lighten-5 card flex-column">
              <div className="padding20 card orange lighten-1 white-text nomargin">
                <h5>Vitsihuumoria</h5>
              </div>
              <div className="margin20">
                <ul className="collection nomargin">
                  <li className="collection-item">
                    {this.state.vitsi}
                  </li>
                </ul>
              </div>
            </div>

            <div className="grey lighten-5 card flex-column">
              <div className="padding20 card orange lighten-1 white-text nomargin">
                <h5>Some</h5>
              </div>
              <div className="margin20">
                <ul className="collection">
                  <li className="collection-item">
                    <div className="fb-page" data-href="https://www.facebook.com/digitry" data-width="2000px" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/nucleusry" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/nucleusry">Digit ry</a></blockquote></div>
                  </li>
                </ul>
                <ul className="collection">
                  <li className="collection-item">
                    <div className="fb-page" data-href="https://www.facebook.com/nucleusry" data-width="2000px" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/nucleusry" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/nucleusry">Nucleus ry</a></blockquote></div>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
