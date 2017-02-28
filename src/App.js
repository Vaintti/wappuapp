import React, { Component } from 'react';
import moment from 'moment';
import Tapahtuma from './Tapahtuma.js';
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
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Wapunaloitusbileet",
      "kuvaus": "Wappu avataan virallisesti Wapunaloitusbileillä, jossa myös suoritetaan Wappurauhanjulistus. Näistä pirskeistä alkaa se suuri ja antoisa seikkailu läpi wapputapahtumien, joille ei tunnu loppua näkyvän. Vain taistelijoista voimakkaimmat ja urheimmat selvittävät tiensä Wappuaattoon ja saavat sankaruutensa merkiksi painaa teekkarilakin päähänsä. ",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Tempositsit ja Bower Auer",
      "kuvaus": "Hieman erilaiset sitsit. Kahlataan läpi tunnetuimpien sitsilaulujen snapspaussien huutojen saattelemina ja juomaa runsaasti nauttien, jonka jälkeen suoritetaan massiivinen Power Hour -juomapeli suurella laumalla. ",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Wappulehden julkistus",
      "kuvaus": "Tuo Turun teekkareiden kaunis kätten jälki, Pilde & Napander, julkaistaan ja ilotulitukset välkkyvät ja rummut soittavat ja kuohuviini virtaa ja kaikilla on hauskaa. Silmät kirkkaina ja mieli raukeana päästään avaamaan vuoden 2017 P&N ja nauramaan aina yhtä innostavalle ja suvaitsevalle teekkarihuumorille. #vitsihuumoria",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Wappulehden ensimmäinen myyntipäivä",
      "kuvaus": "Jotta fuksit lakkinsa ansaitsevat, on heidän tänä päivänä suoritettava uroteko. Uunituoretta, mahtavaa ja kaunista Pilde & Napander -lehteä fuksien myytäköön runsain määrin ja teekkareiden ilosanomaa kaikelle kansalle levittäköön auringon paisteessa Turun kaupungin kauppojen torilla. ",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Viini & Jyystö -ilta by niceKerho",
      "kuvaus": "Teekkarit ovat hienoa ja arvokasta väkeä, ja nauttivat viinastaan myös punaisena tai valkoisena. Joskus jopa kuohuvana tai roséna. Tämän alkomaholipitoisen herkun taistelutoverina wapputaistossa  auttaa oivasti keltainen ystävänsä jyystö, jota mukavien (nice = mukava) kerholaisten johdolla pääsemme tässä koettelemuksessa maistelemaan.",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Teekkariperinnepäivä",
      "kuvaus": "Teekkarikulttuuri on perinteitä täynnä ja tällä päivämäärällä palaammekin teekkariuden syntysijoille kuvainnollisesti. Saamme kuulla uskomattomia legendoja teekkareiden supervoimista, heidän ylivoimaisesta älykkyydestä sekä kauniista ulkomuodoistaan. Sekä myös faktoja teekkarikulttuurin perinteistä.",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Digitin ja Nucleuksen yhteislähtö Hybridispeksin näytökseen",
      "kuvaus": "Speksi on interaktiivinen opiskelijateatteri, jossa yleisö saa osallistua näytökseen huutamalla ”omstart!”, jolloin näyttelijät näyttelevät edellisen kohtauksen uudestaan toisella tavalla. Digit ja Nucleus järjestävät yhteislähdön Hybridin omaan speksiin, Hybridispeksiin, jotta kulttuurillinen tarve ja halu tulevat tyydytetyiksi. ",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Kääliösitsit",
      "kuvaus": "Lyhenne sanoista KänniÄäliösitsit. Teekkari laulaa mieluummin kuin hyvin, ja näillä sitseillä käyttää myös viisasten juomaa samoin. Näiden sitsien jälkeen harvoin kuulee sanonnan ”oispa kaljaa”.",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Polkuauto Grand Prix by TIO",
      "kuvaus": "Turun Insinööriopiskelijat ry järjestää vuosittain kilpa-ajot Varvintorilla. Nämä kilpa-ajot vaativat kuskeiltaan suuria pakaroita vauhdin ylläpitämiseksi. Tapahtuma on erinomainen spektaakkeli niin kuskien suoritusten kuin sosialisoitumisen kannalta, sillä tapahtuma järjestetään Turun yliopiston ja ammattikorkeakoulun kesken. ",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Bar Wappu Line",
      "kuvaus": "Jos wapunwarastus jäi tänä vuonna ja merivesihammasta (?) kolottaa, voi risteilemään lähteä myös Yliopistonmäelle! Mäen päällä olevassa suihkulähteessä seilataan halvan viinan perässä ympäri ämpäri lahtea. ",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Sitsipäivä",
      "kuvaus": "Sitsaaminen on aina kivaa, joten miksi sitä ei tekisi koko päivää. Aamu aloitetaan perinteisesti Aamusitseillä, joista jatketaan tehokkaasti Päiväbileisiin. Päiväbileiden jälkeen on aika jälleen — yllätys yllätys — sitsata Iltasitsien merkeissä!",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Piirettymaraton",
      "kuvaus": "Maratonit ovat aina raskaita, paitsi piirrettymaraton. Kiltahuoneen uumenissa katsotaan vanhoja klassikoita (suurimman osan) jäsenistön nuoruudesta aamusta iltaan. ",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Typerien pelien ilta by TK ja Pelikerho",
      "kuvaus": "Ongelmanratkaisu ja autismointi ovat avaimet jokaisen sodan voittamiseen. Ainakin teekkareiden piireissä. TeekkariKomissio ja Pelikerho järjestävät lautapeli-illan, jotta darraiset aivonystyrät pistetään töihin ja taistelutoverista haetaan murskavoittoa ja nöyryytystä. ",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Kierrospäivä (Jallunkierros by 37)",
      "kuvaus": "Kierrospäivänä kierrostellaan ympäri yliopiston monien ainejärjestöjen toimistoja. Verkot heitetään vesille (verkostoidutaan), kun tapaamme tällä mutaisella ja kylmällä tiellä niin humanisteja, kauppiaita, juristeja kuin luonnontieteilijöitäkin.",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Typerien juomien ilta",
      "kuvaus": "Jotta ainainen bissen lipitys tai siiderin sirkutus eivät pääsisi kyllästyttämään, kokeillaan Typerien juomien illassa jotain uutta! Järjestäjätahot järjestävät järjestyspaikalle järjestyksessä erilaisia järjeltään typeriä juomia, joita sitten järjelliset jäsenistön jäsenet pääsevät maistelemaan. Tapahtuma on myös OPM, joten oman typerän juomansa voi ottaa mukaan.",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
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
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Eldprovet",
      "kuvaus": "Se tulikoe-jonka-nimeä-kukaan-ei-mainitse. Fuksien pahin painajainen, rastikierros vailla vertaa. Erotellaan akat jyvistä ja fuksit pilteistä.",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "Wappuaatto ja lakitus",
      "kuvaus": "Wappuaaton auringonnousu kruunaa koko kolmeviikkoisen juhlan. Tämä tietää rohkeille ja vahvoille fukseille ilon ja onnen päivää, kun kaiken sen darran päälle päähänsä saa painaa ikioman, vielä valkoisen teekkarilakin. Tilaisuudessa siirrytään myös taidemuseonmäelle seuraamaan vähempiarvoisten kuolevaisten, ylioppilaiden, tavallisten ylioppilaslakkien päähän laittamista. ",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    },
    {
      "aika": wappudate,
      "nimi": "TYYn vappupiknik",
      "kuvaus": "TYY järjestää perinteisen vappupiknikin Vartiovuorenmäellä, jossa on enemmän tai vähemmän tapahtumaa ja pahaa oloa. Tähän päättyy Wapun taika ja tätä seuraa vain kesä ja aurinko ja darra ja loputon rahavirta...",
      "kartta": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7871.797841846822!2d22.284369299999998!3d60.44604985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1488280295496"
    }];
    this.state = { vappuun: timetowappu, tunnit: 0, minuutit: 0, sekuntit: 0, tapahtumat: tapahtumat };
  }

  tick() {
    this.setState((prevState) => ({
      vappuun: new Date(Date.parse(prevState.vappuun) - 1),
      tunnit: Math.floor(Date.parse(this.state.vappuun) / 1000 / 60 / 60)
    }));
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

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.setState({
      tunnit: Math.floor(Date.parse(this.state.vappuun) / 1000 / 60 / 60),
      minuutit: this.state.vappuun.getMinutes(),
      sekuntit: this.state.vappuun.getSeconds()
    })
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div className="App">
        <div className="row nomargin">
          <div className="App-header card nomargin black lighten-1 white-text">
            <div className="col s1 l1 m1 logo">
              <img src={logo} alt="logo" height="50px"></img>
            </div>
            <div className="col s11 l3 m11">
              <h4>Turun Teekkariwappu</h4>
            </div>
            <div className="col s12 l4 m12">
              <h5>
                {this.state.tunnit}:{this.state.minuutit}:{this.state.sekuntit}
              </h5>
            </div>
            <div className="col s12 l4 m12">
              <a className="jarjesto" href="http://digit.fi/">Digit</a>
              <a className="jarjesto" href="http://nucleus.fi/">Nucleus</a>
              <br></br>
              Mukana menossa myös
              <a className="jarjesto" href="https://www.asteriski.fi/">Asteriski</a>
              ja
              <a className="jarjesto" href="http://www.tio.fi/">TIO</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="padding20 col s12 m12 l8">
            <div className="grey lighten-5 card flex-column">
              <div className="padding20 card black lighten-2 white-text nomargin">
                <h5>Seuraavat tapahtumat</h5>
              </div>

              <ul className="collapsible popout margin20topbottom" data-collapsible="accordion">

              {this.state.tapahtumat.map(function(tapahtuma, i) {
                return <Tapahtuma aika={moment(tapahtuma.aika).format('dddd do h:MM')} nimi={tapahtuma.nimi} kuvaus={tapahtuma.kuvaus} kartta={tapahtuma.kartta}/>
              })}

              </ul>
            </div>
          </div>

          <div className="padding20 col s12 m12 l4">
            <div className="grey lighten-5 card flex-column">
              <div className="padding20 card black lighten-2 white-text nomargin">
                <h5>Miten osallistun?</h5>
              </div>
              <div className="margin20">
                <ul className="collection nomargin">
                  <li className="collection-item">Osta ebin passi</li>
                  <li className="collection-item">Kerää passiin leimoja käymällä tapahumissa ja näyttämällä passia keltalakkisille hepuille</li>
                  <li className="collection-item">Palauta passi keltalakkisille hepuille ja vastaanota n määrä hienoja wappuputkia</li>
                  <li className="collection-item">Profit???</li>
                </ul>
              </div>
            </div>

            <div className="grey lighten-5 card flex-column">
              <div className="padding20 card black lighten-2 white-text nomargin">
                <h5>Vitsihuumoria</h5>
              </div>
              <div className="margin20">
                <ul className="collection nomargin">
                  <li className="collection-item">
                    Iron Maidenin jätkät oli kalassa Keskimaassa ja rannalle tuli pelottava tyyppi huutelemaan jotain sekavia. Bruce jo ehti hätääntyä, mutta Steve oli heti tilanteen tasalla ja sanoi: "Ei hätää, sehän on vain Gimli." Tähän Bruce helpottuneena vastasi: "Ai, ei siis Uruk-Hai."
                  </li>
                </ul>
              </div>
            </div>

            <div className="grey lighten-5 card flex-column">
              <div className="padding20 card black lighten-2 white-text nomargin">
                <h5>Oispa someintegraatiot</h5>
              </div>
              <div className="margin20">
                <ul className="collection nomargin">
                  <li className="collection-item">
                    insert instagram
                  </li>
                  <li className="collection-item">
                    insert facebook
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
