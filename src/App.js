import React, { Component } from 'react';
import moment from 'moment';
import Tapahtuma from './Tapahtuma.js';
import axios from 'axios';
import logo from './digleus.png';
import wappuradio from './wappuradio.svg'
import ResponsiveEmbed from 'react-responsive-embed';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    var wapunalku = new Date(2018, 3, 19, 0);
    var now = new Date();
    var timetowappu = new Date(Date.parse(wapunalku) - Date.parse(now));
    var tapahtumat = [
    {
      "aika": new Date(2018, 3, 18, 20),
      "nimi": "Wappulehden julkkari ja Wapunaloitusbileet - Vegas",
      "kuvaus": "Kevään varmin merkki, Wappulehti Pilde&Napander, on taas täällä viihdyttämässä kansaa! Tuo Turun teekkareiden kaunis kätten jälki, Pilde & Napander, julkaistaan ja ilotulitukset välkkyvät ja rummut soittavat ja kuohuviini virtaa ja kaikilla on hauskaa. Silmät kirkkaina ja mieli raukeana päästään avaamaan vuoden 2017 P&N ja nauramaan aina yhtä innostavalle ja suvaitsevalle teekkarihuumorille. #vitsihuumoria Virallisesti Wapun starttaa Wapunaloitusbileet ja Wappurauhan julistus.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=vegas+turku&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7Cvegas+turku"
    },
    {
      "aika": new Date(2018, 3, 19, 12),
      "nimi": "Wappulehden wirallinen myyntipäiwä - Digitin kiltahuone",
      "kuvaus": "Teekkarihuumori on tekniikan opiskelijoiden lahja Suomen kansalle. Tänään tätä lahjaa jaellaan avokätisesti käteistä vastaan Turun toreilla. Torilla tavataan! Huom! Jotta fuksit lakkinsa ansaitsevat, on heidän tänä päivänä suoritettava uroteko. Uunituoretta, mahtavaa ja kaunista Pilde & Napander -lehteä fuksien myytäköön runsain määrin ja teekkareiden ilosanomaa kaikelle kansalle levittäköön auringon paisteessa. Yhteislähtö Turun toreille Digitin kiltahuoneelta.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.455659,+22.285654&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.455659,+22.285654"
    },
    {
      "aika": new Date(2018, 3, 19, 17),
      "nimi": "Polkuauto Grand Prix by TIO - Varvintori",
      "kuvaus": "Turun Insinööriopiskelijat ry järjestää vuosittain kilpa-ajot Varvintorilla. Nämä kilpa-ajot vaativat kuskeiltaan suuria pakaroita vauhdin ylläpitämiseksi. Tapahtuma on erinomainen spektaakkeli niin kuskien suoritusten kuin sosialisoitumisen kannalta, sillä tapahtuma järjestetään Turun yliopiston ja ammattikorkeakoulun kesken.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=varvintori&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7Cvarvintori"
    },
    {
      "aika": new Date(2018, 3, 20, 17),
      "nimi": "Sitsilauluworkshop ja Sima-pong - Q-talo",
      "kuvaus": "Teekkariperinteisiin kuuluu tiiviisti sitsilaulut ja koska turkulaisia sitsilauluja ei ole koskaan liikaa, pääsemme kilpailemaan sitsilaulujen työstämisestä!",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=Q-talo&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CQ-talo"
    },
    {
      "aika": new Date(2018, 3, 21, 9),
      "nimi": "Aamusitsit ja Bahamabileet - Q-talo",
      "kuvaus": "Tule sellaisena kuin heräät! Aamu alkaa akateemisella pöytäjuhlalla, joka on nostattava Wappumielen uudelleen jo aamuwarhain. Juhlamieli säilykööt läpi päivän, sillä noin klo 16, heti sitsien päätyttyä, päästään suoraan jatkamaan Bahamabileisiin samoissa tiloissa. Huikeeta!",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=Q-talo&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CQ-talo"
    },
    {
      "aika": new Date(2018, 3, 22, 14),
      "nimi": "Piirettymaraton - K124B",
      "kuvaus": "Maratonit ovat aina raskaita, paitsi piirrettymaraton. Agoran uumenissa katsotaan vanhoja klassikoita (suurimman osan) jäsenistön nuoruudesta aamusta iltaan.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.455659,+22.285654&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.455659,+22.285654"
    },
    {
      "aika": new Date(2018, 3, 23, 19),
      "nimi": "Kerhopäivä: Viini ja jyystö, Typerien juomien kerho ja Typerien pelien ilta - Q-talo",
      "kuvaus": "<p>Viini- ja jyystöilta: Teekkarit ovat hienoa ja arvokasta väkeä, ja nauttivat viinastaan myös punaisena tai valkoisena. Joskus jopa kuohuvana tai roséna. Tämän alkomaholipitoisen herkun taistelutoverina wapputaistossa  auttaa oivasti keltainen ystävänsä jyystö, jota mukavien (nice = mukava) kerholaisten johdolla pääsemme tässä koettelemuksessa maistelemaan.</p> <p>Typerien juomien kerho: Jos viini ei maistu, ja jottei ainainen bissen lipitys tai siiderin sirkutus pääsisi kyllästyttämään, kokeillaan Typerien juomien illassa jotain uutta! Järjestäjätahot järjestävät järjestyspaikalle järjestyksessä erilaisia järjeltään typeriä juomia, joita sitten järjelliset jäsenistön jäsenet pääsevät maistelemaan. Tapahtuma on myös OPM, joten oma typerä juoma kannattaa ottaa mukaan.</p> <p>Typerien pelien ilta: Typerät tyypit tyyppaavat typeriä pelejä tyypillisen tyrmäävään tahtiin.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=Q-talo&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CQ-talo"
    },
    {
      "aika": new Date(2018, 3, 24, 12),
      "nimi": "Kierrospäivä - Digitin kiltahuone",
      "kuvaus": "Kierrospäivänä kierrostellaan ympäri yliopiston monien ainejärjestöjen toimistoja. Verkot heitetään vesille (verkostoidutaan), kun tapaamme tällä mutaisella ja kylmällä tiellä niin humanisteja, kauppiaita, juristeja kuin luonnontieteilijöitäkin. Kierrospäivä jatkuu perinneseuran perinteisellä Jallunkierroksella!",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.455659,+22.285654&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.455659,+22.285654"
    },
    {
      "aika": new Date(2018, 3, 24, 16),
      "nimi": "Jallunkierros by 37 - Proffan kellari",
      "kuvaus": "Kevät, Wappu ja Jallunkierros! On jälleen aika kiertää paikallisia baareja Jallun, tuon juomakunnan jalon peuran, kunniaksi! Jallunkierros 2018 on Kolmeseiska ry:n järjestämä, jo perinnebakkanaalien ovea kolkutteleva, baarikierros.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=Proffan+Kellari&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CProffan+Kellari"
    },
    {
      "aika": new Date(2018, 3, 25, 18),
      "nimi": "Kääliösitsit - Osakuntasali",
      "kuvaus": "Lyhenne sanoista KänniÄäliösitsit. Teekkari laulaa mieluummin kuin hyvin, ja näillä sitseillä käyttää myös viisasten juomaa samoin. Näiden sitsien jälkeen harvoin kuulee sanonnan ”oispa kaljaa”. Digitin ja Nucleuksen lisäksi mukana kääliöilee myös Asteriski!",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.454787,+22.287281&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.454787,+22.287281"
    },
    {
      "aika": new Date(2018, 3, 26, 16),
      "nimi": "Grilli & Kyykkä - Edun kenttä",
      "kuvaus": "Juominen nälättää ja urheilu janottaa ja nämähän sopivat kuin nyrkki silmään. Educariumin hiekkakentällä otetaan mittaa kartuista ja makkaroista, kun wapputaisto kulminoituu aggressiiviseen kyykkäämiseen. Tankkauspisteellä sisäänsä voi halutessaan ahtaa TEK-makkaraa ja muita grillin antimia. Omat grillattavat voi myös tuoda mukaan. Samaan aikaan kentällä Beer Pong Turku järjestää Mega Pong -tapahtuman.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.458263,+22.284175&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.458263,+22.284175"
    },
    {
      "aika": new Date(2017, 3, 27, 16, 30),
      "nimi": "Tempositsit ja Teekkarikomission tapahtuma - Q-talo",
      "kuvaus": "Hieman erilaiset sitsit. Kahlataan läpi tunnetuimpien sitsilaulujen snapspaussien huutojen saattelemina ja juomaa runsaasti nauttien. Ruokaa ei ole tarjolla, eikä sitä ehtisikään syömään. Tempositsien jälkeen pääsee halutessaan tempomaan lisää juotavaa, kun Teekkarikomissio esittelee Turun teekkaripelit Kadonneen tutkinnon metsästyksen (KTM) ja Fia-cupin. Tule ainakin kannustamaan oma suosikkisi voittoon!",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=Q-talo&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7CQ-talo"
    },
    {
      "aika": new Date(2017, 3, 28, 16),
      "nimi": "Hyvinvointipäivä - TYYn sauna",
      "kuvaus": "Hyvinvointi on tärkeää urotekojen tiimellyksessä. Hyvinvointipäivä tulee tarpeeseen, jos wappua on viettänyt yhtään asiaankuuluvalla hartaudella leffan, saunan ja rennon hengailun merkeissä.  Viimeinen hetki keräillä voimia teekkariwapun kovimpiin koitoksiin!",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.454567,+22.287194&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.454567,+22.287194"
    },
    {
      "aika": new Date(2017, 3, 29, 12),
      "nimi": "Eldprowet - Axelia",
      "kuvaus": "Huom! Tapahtuma on vain teekkarifukseille. Tulikoe on suoritettava jokaisen fuksin, joka teekkarilakin halajaa päähän Wapppuna painaa. Perinteisesti Eldprowetissa ********** **********ssa kun joukkueet ********** ja ********** kunnes ********** rankasti. Kilpailun jokaista teekkarikokelasta ********** ********** ainakin kolmesti ja ********** ********** märkää. ********** ********** ********** räntäsade. ********** ********** kilpailun voittajalle **********, muille **********. Luvassa ehdottomasti fuksivuoden muistiinpainumattomin päivä, jonka päätteeksi ********** ********** **********.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.455108,+22.281236&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.455108,+22.281236"
    },
    {
      "aika": new Date(2017, 3, 30, 14),
      "nimi": "Wappuaatto ja lakitus - Yliopistonmäki",
      "kuvaus": "Wappuaaton auringonnousu kruunaa koko kolmeviikkoisen juhlan. Tämä tietää rohkeille ja vahvoille fukseille ilon ja onnen päivää, kun kaiken sen darran päälle päähänsä saa painaa ikioman, vielä valkoisen teekkarilakin. Tilaisuudessa siirrytään myös taidemuseonmäelle seuraamaan vähempiarvoisten kuolevaisten, ylioppilaiden, tavallisten ylioppilaslakkien päähän laittamista.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.454672,+22.284435&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.454672,+22.284435"
    },
    {
      "aika": new Date(2017, 4, 1, 0),
      "nimi": "Ikuisen teekkarin hauta - Yliopistonmäki",
      "kuvaus": "Wappuyönä kokoonnumme muistelemaan ikuista teekkaria ja nostamme oluttynnörin hänen haudalleen.",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.456071,+22.285517&zoom=17&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.456071,+22.285517"
    },
    {
      "aika": new Date(2017, 4, 1, 12),
      "nimi": "TYYn vappupiknik - Vartiovuorenmäki",
      "kuvaus": "TYY järjestää perinteisen vappupiknikin Vartiovuorenmäellä, jossa on enemmän tai vähemmän tapahtumaa ja pahaa oloa. Tähän päättyy Wapun taika ja tätä seuraa vain kesä ja aurinko ja darra ja loputon rahavirta...",
      "kartta": "https://maps.googleapis.com/maps/api/staticmap?center=60.448326,+22.276958&zoom=16&scale=false&size=600x600&maptype=roadmap&key=AIzaSyCWrM7xzlmZHgQro8cGpxJp-VM__2oNpME&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C60.448326,+22.276958"
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
            <div className="grey lighten-5 card flex-column nomargintop">
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
            <ResponsiveEmbed src='https://www.youtube.com/embed/Ix-Chmm3HGE' allowFullScreen />
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
                <h5>Wapun virallinen soittolista</h5>
              </div>
              <iframe className="playlist" src="https://embed.spotify.com/?uri=spotify%3Auser%3Adalimited%3Aplaylist%3A2WB71URH6WuV4q2Zad60TU" height="380"></iframe>
            </div>

            <div className="grey lighten-5 card flex-column">
              <div className="padding20 card orange lighten-1 white-text nomargin">
                <a href="https://wappuradio.fi/"><img src={wappuradio} width="135" height="90"></img></a>
              </div>
              <audio controls crossOrigin className="playlist">
                <source src="//mordor.wappuradio.fi/wappuradio.mp3" type="audio/mpeg"></source>
              </audio>
              <div className="margin20">
                <a href="https://wappuradio.fi/">https://wappuradio.fi/</a>
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
