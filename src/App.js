import React, { Component } from 'react';
import moment from 'moment';
import Tapahtuma from './Tapahtuma.js';
import axios from 'axios';
import logo from './larjestotlogo.png';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    var wappuyear = 2017;
    var wappumonth = 4;
    var wappuday = 1;
    var wappudate = new Date(wappuyear, wappumonth, wappuday);
    console.log(wappudate.toString());
    var timetowappu = new Date(Date.parse(wappudate) - Date.parse(Date()));
    var tapahtumat = [{
      "aika": wappudate,
      "nimi": "Wapunwarastusristeily",
      "kuvaus": "Wappuhan alkaa perinteisesti Wapunaloitusbileillä, mutta tilaisuus tekee varkaan ja wapun voikin aloittaa jo päivää aiemmin Itämeren laineilla. Mainio tilaisuus täydentää nestevarastojaan wapun seikkailuja varten!",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1968.6033946270466!2d22.21720401637564!3d60.4352538820594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c77a4dd5870ef%3A0xfca204bc362d95a1!2sTurun+Silja+Linen+terminaali!5e0!3m2!1sfi!2sfi!4v1488974673147"
    },
    {
      "aika": wappudate,
      "nimi": "Wapunaloitusbileet",
      "kuvaus": "Wappu avataan virallisesti Wapunaloitusbileillä, jossa myös suoritetaan Wappurauhanjulistus. Näistä pirskeistä alkaa se suuri ja antoisa seikkailu läpi wapputapahtumien, joille ei tunnu loppua näkyvän. Vain taistelijoista voimakkaimmat ja urheimmat selvittävät tiensä Wappuaattoon ja saavat sankaruutensa merkiksi painaa teekkarilakin päähänsä. ",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.7490721141196!2d22.260436616387807!3d60.44935788206461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76feb6c9a773%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488291207174"
    },
    {
      "aika": wappudate,
      "nimi": "Tempositsit ja Bower Auer",
      "kuvaus": "Hieman erilaiset sitsit. Kahlataan läpi tunnetuimpien sitsilaulujen snapspaussien huutojen saattelemina ja juomaa runsaasti nauttien, jonka jälkeen suoritetaan massiivinen Power Hour -juomapeli suurella laumalla. ",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.7177060870233!2d22.28632528924054!3d60.45453559619838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76ef0388294d%3A0xb9f9af4cf75f4066!2sRehtorinpellonkatu+4%2C+20500+Turku!5e0!3m2!1sfi!2sfi!4v1488291549608"
    },
    {
      "aika": wappudate,
      "nimi": "Wappulehden julkistus",
      "kuvaus": "Tuo Turun teekkareiden kaunis kätten jälki, Pilde & Napander, julkaistaan ja ilotulitukset välkkyvät ja rummut soittavat ja kuohuviini virtaa ja kaikilla on hauskaa. Silmät kirkkaina ja mieli raukeana päästään avaamaan vuoden 2017 P&N ja nauramaan aina yhtä innostavalle ja suvaitsevalle teekkarihuumorille. #vitsihuumoria",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.6888605783973!2d22.28458297517444!3d60.455487896762016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76ee494bb9cd%3A0xfe28f1a322aebdb5!2sAgora!5e0!3m2!1sfi!2sfi!4v1488291489586"
    },
    {
      "aika": wappudate,
      "nimi": "Wappulehden ensimmäinen myyntipäivä",
      "kuvaus": "Jotta fuksit lakkinsa ansaitsevat, on heidän tänä päivänä suoritettava uroteko. Uunituoretta, mahtavaa ja kaunista Pilde & Napander -lehteä fuksien myytäköön runsain määrin ja teekkareiden ilosanomaa kaikelle kansalle levittäköön auringon paisteessa Turun kaupungin kauppojen torilla. ",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.6091914889867!2d22.264755316387884!3d60.45166698206556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76fbd627499d%3A0xb27c64fc9bcea1b3!2sKauppatori%2C+20100+Turku!5e0!3m2!1sfi!2sfi!4v1488291758493"
    },
    {
      "aika": wappudate,
      "nimi": "Viini & Jyystö -ilta by niceKerho",
      "kuvaus": "Teekkarit ovat hienoa ja arvokasta väkeä, ja nauttivat viinastaan myös punaisena tai valkoisena. Joskus jopa kuohuvana tai roséna. Tämän alkomaholipitoisen herkun taistelutoverina wapputaistossa  auttaa oivasti keltainen ystävänsä jyystö, jota mukavien (nice = mukava) kerholaisten johdolla pääsemme tässä koettelemuksessa maistelemaan.",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.6888605783973!2d22.28458297517444!3d60.455487896762016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76ee494bb9cd%3A0xfe28f1a322aebdb5!2sAgora!5e0!3m2!1sfi!2sfi!4v1488291489586"
    },
    {
      "aika": wappudate,
      "nimi": "Teekkariperinnepäivä",
      "kuvaus": "Teekkarikulttuuri on perinteitä täynnä ja tällä päivämäärällä palaammekin teekkariuden syntysijoille kuvainnollisesti. Saamme kuulla uskomattomia legendoja teekkareiden supervoimista, heidän ylivoimaisesta älykkyydestä sekä kauniista ulkomuodoistaan. Sekä myös faktoja teekkarikulttuurin perinteistä.",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.6888605783973!2d22.28458297517444!3d60.455487896762016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76ee494bb9cd%3A0xfe28f1a322aebdb5!2sAgora!5e0!3m2!1sfi!2sfi!4v1488291489586"
    },
    {
      "aika": wappudate,
      "nimi": "Digitin ja Nucleuksen yhteislähtö Hybridispeksin näytökseen",
      "kuvaus": "Speksi on interaktiivinen opiskelijateatteri, jossa yleisö saa osallistua näytökseen huutamalla ”omstart!”, jolloin näyttelijät näyttelevät edellisen kohtauksen uudestaan toisella tavalla. Digit ja Nucleus järjestävät yhteislähdön Hybridin omaan speksiin, Hybridispeksiin, jotta kulttuurillinen tarve ja halu tulevat tyydytetyiksi. ",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1968.3547242130753!2d22.24463941638747!3d60.43935938206092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c7707388f52b5%3A0x2ade5300f739b54e!2sManilla!5e0!3m2!1sfi!2sfi!4v1488291740702"
    },
    {
      "aika": wappudate,
      "nimi": "Kääliösitsit",
      "kuvaus": "Lyhenne sanoista KänniÄäliösitsit. Teekkari laulaa mieluummin kuin hyvin, ja näillä sitseillä käyttää myös viisasten juomaa samoin. Näiden sitsien jälkeen harvoin kuulee sanonnan ”oispa kaljaa”.",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.7177060870233!2d22.28632528924054!3d60.45453559619838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76ef0388294d%3A0xb9f9af4cf75f4066!2sRehtorinpellonkatu+4%2C+20500+Turku!5e0!3m2!1sfi!2sfi!4v1488291549608"
    },
    {
      "aika": wappudate,
      "nimi": "Polkuauto Grand Prix by TIO",
      "kuvaus": "Turun Insinööriopiskelijat ry järjestää vuosittain kilpa-ajot Varvintorilla. Nämä kilpa-ajot vaativat kuskeiltaan suuria pakaroita vauhdin ylläpitämiseksi. Tapahtuma on erinomainen spektaakkeli niin kuskien suoritusten kuin sosialisoitumisen kannalta, sillä tapahtuma järjestetään Turun yliopiston ja ammattikorkeakoulun kesken. ",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1968.3853489851238!2d22.239352916387467!3d60.43885378206069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c77a9cede489d%3A0x2865fef9cf383488!2sVarvintori!5e0!3m2!1sfi!2sfi!4v1488291726552"
    },
    {
      "aika": wappudate,
      "nimi": "Bar Wappu Line",
      "kuvaus": "Jos wapunwarastus jäi tänä vuonna ja merivesihammasta (?) kolottaa, voi risteilemään lähteä myös Yliopistonmäelle! Mäen päällä olevassa suihkulähteessä seilataan halvan viinan perässä ympäri ämpäri lahtea. ",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.4210494013546!2d22.282391716387938!3d60.454772682066675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76efb684e421%3A0x15318014a97c71c4!2sYliopistonm%C3%A4ki%2C+20500+Turku!5e0!3m2!1sfi!2sfi!4v1488291245885"
    },
    {
      "aika": wappudate,
      "nimi": "Sitsipäivä",
      "kuvaus": "Sitsaaminen on aina kivaa, joten miksi sitä ei tekisi koko päivää. Aamu aloitetaan perinteisesti Aamusitseillä, joista jatketaan tehokkaasti Päiväbileisiin. Päiväbileiden jälkeen on aika jälleen — yllätys yllätys — sitsata Iltasitsien merkeissä!",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.7177060870233!2d22.28632528924054!3d60.45453559619838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76ef0388294d%3A0xb9f9af4cf75f4066!2sRehtorinpellonkatu+4%2C+20500+Turku!5e0!3m2!1sfi!2sfi!4v1488291549608"
    },
    {
      "aika": wappudate,
      "nimi": "Piirettymaraton",
      "kuvaus": "Maratonit ovat aina raskaita, paitsi piirrettymaraton. Kiltahuoneen uumenissa katsotaan vanhoja klassikoita (suurimman osan) jäsenistön nuoruudesta aamusta iltaan. ",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.6888605783973!2d22.28458297517444!3d60.455487896762016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76ee494bb9cd%3A0xfe28f1a322aebdb5!2sAgora!5e0!3m2!1sfi!2sfi!4v1488291489586"
    },
    {
      "aika": wappudate,
      "nimi": "Typerien pelien ilta by TK ja Pelikerho",
      "kuvaus": "Ongelmanratkaisu ja autismointi ovat avaimet jokaisen sodan voittamiseen. Ainakin teekkareiden piireissä. TeekkariKomissio ja Pelikerho järjestävät lautapeli-illan, jotta darraiset aivonystyrät pistetään töihin ja taistelutoverista haetaan murskavoittoa ja nöyryytystä. Sijaintina B",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126000.98873356925!2d22.08531956483999!3d60.43257830680526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c7584818edbbb%3A0x400b551554bc200!2sTurku!5e0!3m2!1sfi!2sfi!4v1488969451889"
    },
    {
      "aika": wappudate,
      "nimi": "Kierrospäivä (Jallunkierros by 37)",
      "kuvaus": "Kierrospäivänä kierrostellaan ympäri yliopiston monien ainejärjestöjen toimistoja. Verkot heitetään vesille (verkostoidutaan), kun tapaamme tällä mutaisella ja kylmällä tiellä niin humanisteja, kauppiaita, juristeja kuin luonnontieteilijöitäkin.",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.7190267600276!2d22.286600058425698!3d60.45449199551662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76eefd5d209d%3A0x478e4e69f0bc0c00!2sRavintola+Proffan+Kellari!5e0!3m2!1sfi!2sfi!4v1488291599633"
    },
    {
      "aika": wappudate,
      "nimi": "Typerien juomien ilta",
      "kuvaus": "Jotta ainainen bissen lipitys tai siiderin sirkutus eivät pääsisi kyllästyttämään, kokeillaan Typerien juomien illassa jotain uutta! Järjestäjätahot järjestävät järjestyspaikalle järjestyksessä erilaisia järjeltään typeriä juomia, joita sitten järjelliset jäsenistön jäsenet pääsevät maistelemaan. Tapahtuma on myös OPM, joten oman typerän juomansa voi ottaa mukaan.",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.6888605783973!2d22.28458297517444!3d60.455487896762016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76ee494bb9cd%3A0xfe28f1a322aebdb5!2sAgora!5e0!3m2!1sfi!2sfi!4v1488291489586"
    },
    {
      "aika": wappudate,
      "nimi": "Grilli & Kyykkä",
      "kuvaus": "Juominen nälättää ja urheilu janottaa ja nämähän sopivat kuin nyrkki silmään. Educariumin hiekkakentällä otetaan mittaa kartuista ja makkaroista, kun wapputaisto kulminoituu aggressiiviseen kyykkäämiseen. Tankkauspisteellä sisäänsä voi halutessaan ahtaa makkaraa ja muita grillin antimia.",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Hyvinvointipäivä",
      "kuvaus": "Hyvinvointi on tärkeää urotekojen tiimellyksessä. Hyvinvointipäivä tulee tarpeeseen, jos wappua on viettänyt yhtään asiaankuuluvalla hartaudella.",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.7177060870233!2d22.28632528924054!3d60.45453559619838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76ef0388294d%3A0xb9f9af4cf75f4066!2sRehtorinpellonkatu+4%2C+20500+Turku!5e0!3m2!1sfi!2sfi!4v1488291549608"
    },
    {
      "aika": wappudate,
      "nimi": "Eldprovet",
      "kuvaus": "Se tulikoe-jonka-nimeä-kukaan-ei-mainitse. Fuksien pahin painajainen, rastikierros vailla vertaa. Erotellaan akat jyvistä ja fuksit pilteistä.",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.6036189800728!2d22.283075658422867!3d60.458301995517004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDI3JzI5LjkiTiAyMsKwMTcnMDMuMCJF!5e0!3m2!1sfi!2sfi!4v1488969389780"
    },
    {
      "aika": wappudate,
      "nimi": "Wappuaatto ja lakitus",
      "kuvaus": "Wappuaaton auringonnousu kruunaa koko kolmeviikkoisen juhlan. Tämä tietää rohkeille ja vahvoille fukseille ilon ja onnen päivää, kun kaiken sen darran päälle päähänsä saa painaa ikioman, vielä valkoisen teekkarilakin. Tilaisuudessa siirrytään myös taidemuseonmäelle seuraamaan vähempiarvoisten kuolevaisten, ylioppilaiden, tavallisten ylioppilaslakkien päähän laittamista. ",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.4210494013546!2d22.282391716387938!3d60.454772682066675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76efb684e421%3A0x15318014a97c71c4!2sYliopistonm%C3%A4ki%2C+20500+Turku!5e0!3m2!1sfi!2sfi!4v1488291245885"
    },
    {
      "aika": wappudate,
      "nimi": "TYYn vappupiknik",
      "kuvaus": "TYY järjestää perinteisen vappupiknikin Vartiovuorenmäellä, jossa on enemmän tai vähemmän tapahtumaa ja pahaa oloa. Tähän päättyy Wapun taika ja tätä seuraa vain kesä ja aurinko ja darra ja loputon rahavirta...",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.806925231554!2d22.274800906323037!3d60.44840284777761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76e49b503197%3A0xf69309ed7fb864e4!2sTurun+Kes%C3%A4teatteri!5e0!3m2!1sfi!2sfi!4v1488291402090"
    }];
    this.state = { vappuun: timetowappu, päivät: 0, tunnit: 0, minuutit: 0, sekuntit: 0, tapahtumat: tapahtumat, vitsi: "" };
  }

  tick() {
    this.setState((prevState) => ({
      vappuun: new Date(Date.parse(prevState.vappuun) - 1),
      päivät: Math.floor(Date.parse(this.state.vappuun) / 1000 / 60 / 60 / 24)
    }));
    if (this.state.vappuun.getHours() < 10) {
      this.setState({ tunnit: 0 + '' + this.state.vappuun.getHours() })
    }
    else {
      this.setState({ tunnit: this.state.vappuun.getHours() })
    }
    if (this.state.vappuun.getMinutes() < 10) {
      this.setState({ minuutit: 0 + '' + this.state.vappuun.getMinutes() })
    }
    else {
      this.setState({ minuutit: this.state.vappuun.getMinutes() })
    }
    if (this.state.vappuun.getSeconds() < 10) {
      this.setState({ sekuntit: 0 + '' + this.state.vappuun.getSeconds() })
    }
    else {
      this.setState({ sekuntit: this.state.vappuun.getSeconds() })
    }
  }

  setVitsi(vitsi) {
    this.state.setState({ vitsi: vitsi });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.setState({
      päivät: Math.floor(Date.parse(this.state.vappuun) / 1000 / 60 / 60 / 24),
    })
    if (this.state.vappuun.getHours() < 10) {
      this.setState({ tunnit: 0 + '' + this.state.vappuun.getHours() })
    }
    else {
      this.setState({ tunnit: this.state.vappuun.getHours() })
    }
    if (this.state.vappuun.getMinutes() < 10) {
      this.setState({ minuutit: 0 + '' + this.state.vappuun.getMinutes() })
    }
    else {
      this.setState({ minuutit: this.state.vappuun.getMinutes() })
    }
    if (this.state.vappuun.getSeconds() < 10) {
      this.setState({ sekuntit: 0 + '' + this.state.vappuun.getSeconds() })
    }
    else {
      this.setState({ sekuntit: this.state.vappuun.getSeconds() })
    }
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
        <div className="row nomargin">
          <div className="App-header card nomargin orange white-text">
            <div className="col s1 l1 m1 logo">
              <img src={logo} alt="logo" height="50px"></img>
            </div>
            <div className="col s11 l3 m11">
              <h4>Turun Teekkariwappu</h4>
            </div>
            <div className="col s12 l4 m12">
              <h5>
                {this.state.päivät}:{this.state.tunnit}:{this.state.minuutit}:{this.state.sekuntit}
              </h5>
            </div>
            <div className="col s12 l4 m12">
              <a className="jarjesto" href="http://digit.fi/">Digit</a>
              <a className="jarjesto" href="http://nucleus.fi/">Nucleus</a>
              <br></br>
              Mukana menossa myös
              <a className="jarjesto pikkujarjesto" href="https://www.asteriski.fi/">Asteriski</a>
              <a className="jarjesto pikkujarjesto" href="http://teekkarikomissio.utu.fi/fi/index.html">Teekkarikomissio</a>
              ja
              <a className="jarjesto pikkujarjesto" href="http://www.tio.fi/">TIO</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="padding20 col s12 m12 l8">
            <div className="grey lighten-5 card flex-column">
              <div className="padding20 card orange lighten-1 white-text nomargin">
                <h5>Seuraavat tapahtumat</h5>
              </div>

              <ul className="collapsible popout margin20topbottom" data-collapsible="accordion">

              {this.state.tapahtumat.map(function(tapahtuma, i) {
                // moment(tapahtuma.aika).lang('fi').format('dd DD.MM')+" klo "+moment(tapahtuma.aika).format('hh:mm')
                return <Tapahtuma aika={"TBD"} nimi={tapahtuma.nimi} kuvaus={tapahtuma.kuvaus} kartta={tapahtuma.kartta}/>
              })}

              </ul>
            </div>
          </div>

          <div className="padding20 col s12 m12 l4">
            <div className="grey lighten-5 card flex-column">
              <div className="padding20 card orange lighten-1 white-text nomargin">
                <h5>Miten osallistun?</h5>
              </div>
              <div className="margin20">
                <ul className="collection nomargin">
                  <li className="collection-item">Osta ebin passi</li>
                  <li className="collection-item">Kerää passiin leimoja käymällä tapahtumissa ja näyttämällä passia keltalakkisille hepuille</li>
                  <li className="collection-item">Palauta passi keltalakkisille hepuille ja vastaanota n määrä hienoja wappuputkihaalarimerkkejä</li>
                  <li className="collection-item">Profit???</li>
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
                    <div className="fb-page" data-href="https://www.facebook.com/digitry" data-width="2000px" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/nucleusry" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/nucleusry">Nucleus ry</a></blockquote></div>
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
