import React, { Component } from 'react';
import moment from 'moment';
import Tapahtuma from './Tapahtuma.js';
import axios from 'axios';
import logo from './digleus.png';
import wappuradio from './wappuradio.svg'
import ResponsiveEmbed from 'react-responsive-embed';
import './App.css';
import EventsData from './translations/Events';
import ParticipationInfo from './translations/Participation';
import HeaderText from './translations/Header';
import TitleTexts from './translations/Titles';
import { BrowserRouter, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    var wapunalku = new Date(2018, 3, 19, 0);
    var now = new Date();
    var timetowappu = new Date(Date.parse(wapunalku) - Date.parse(now));
    var tapahtumat = EventsData.fi;
    var participation = ParticipationInfo.fi;
    var header = HeaderText.fi;
    var titles = TitleTexts.fi;
    if (location.search.includes("lang=en")) {
      tapahtumat = EventsData.en;
      participation = ParticipationInfo.en;
      header = HeaderText.en;
      titles = TitleTexts.en;
    }
    this.state = { lang: "en", vappuun: timetowappu, päivät: 0, tunnit: 0, minuutit: 0, sekuntit: 0, tapahtumat: tapahtumat, participation: participation, titles: titles, header: header, vitsi: "", wapunalku: wapunalku };
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
      <BrowserRouter>
      <div className="App">
        <div className="row nomargin baselinealign margin20bottom">
          <div className="App-header card nomargin orange white-text">
            <div className="col s12 l1 m12 logo">
              <img src={logo} height="70px" alt="logo"></img>
            </div>
            <div id="title" className="col s12 l3 m12">
              <h4>{this.state.header.wappu}</h4>
              <h5><a className="white-text" href="https://www.instagram.com/explore/tags/turunwappu/" target="_blank">#turunwappu</a></h5>
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
              {this.state.header.with}
              <br></br>
              <a className="jarjesto pikkujarjesto" href="http://teekkarikomissio.utu.fi/fi/index.html">Teekkarikomissio</a>
              {this.state.header.and}
              <a className="jarjesto pikkujarjesto" href="https://www.asteriski.fi/">Asteriski</a>
            </div>
            <a className="white-text" href="/">fi</a>
            |
            <a className="white-text" href="/?lang=en">en</a>
          </div>
        </div>
        <div className="row">
          <div className="padding20 col s12 m12 l8">
          <ResponsiveEmbed src='https://www.youtube.com/embed/Kdf850xiZzc' allowFullScreen />
            <div className="grey lighten-5 card flex-column margintop1">
              <div className="padding20 card orange lighten-1 white-text nomargin">
                <h5>{this.state.titles.upcoming}</h5>
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
                <h5>{this.state.titles.participating}</h5>
              </div>
              <div className="margin20">
                <ul className="collection nomargin">
                  <li className="collection-item">{this.state.participation.step1}</li>
                  <li className="collection-item">{this.state.participation.step2}</li>
                  <li className="collection-item">{this.state.participation.step3}</li>
                  <li className="collection-item">???</li>
                  <li className="collection-item">Profit.</li>
                </ul>
              </div>
            </div>

            <div className="grey lighten-5 card flex-column">
              <div className="padding20 card orange lighten-1 white-text nomargin">
                <h5>{this.state.titles.humour}</h5>
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
                <h5>{this.state.titles.playlist}</h5>
              </div>
              <iframe className="playlist" src="https://embed.spotify.com/?uri=spotify%3Auser%3A1166189585%3Aplaylist%3A4N42jOH9c5ZEg17tCrtauc" height="380"></iframe>
            </div>

            <div className="grey lighten-5 card flex-column">
              <div className="padding20 card orange lighten-1 white-text nomargin">
                <a href="https://wappuradio.fi/"><img src={wappuradio} width="135" height="90"></img></a>
              </div>
              <audio controls crossOrigin className="playlist">
                <source src="//stream.wappuradio.fi/wappuradio.mp3" type="audio/mpeg"></source>
              </audio>
              <div className="margin20">
                <a href="https://wappuradio.fi/">https://wappuradio.fi/</a>
              </div>
            </div>

            <div className="grey lighten-5 card flex-column">
              <div className="padding20 card orange lighten-1 white-text nomargin">
                <h5>{this.state.titles.social}</h5>
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
      </BrowserRouter>
    );
  }
}

export default App;
