import React, { Component } from 'react';
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
    this.state = { vappuun: timetowappu, tunnit: 0, minuutit: 0, sekuntit: 0 };
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
                <li>
                  <div className="collapsible-header flex active"><span className="tapahtumaaika">Keskiviikkona 12.4. klo. 22:00</span><span className="tapahtuma">Wapunaloitusbileet</span></div>
                  <div className="collapsible-body row">
                    <span className="col s12 l6 m12">Juhlitaan wapun alkamista Night Club Vegasin tanssilattialla.</span>
                    <iframe className="col s12 l6 m12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.7490721141119!2d22.260436616410438!3d60.44935788206473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468c76feb6c9a773%3A0xa9a4e10fd4201e45!2sCasino+Night+Club+Vegas!5e0!3m2!1sfi!2sfi!4v1487333708672" height="300px" frameborder="0"></iframe>
                  </div>
                </li>

                <li>
                  <div className="collapsible-header flex"><span className="tapahtumaaika">Maanantaina 27.4.</span><span className="tapahtuma">Grilli ja kyykkä</span></div>
                  <div className="collapsible-body row">
                    <span className="col s12 l6 m12">Syödään makkaraa, juodaan olutta ja heitetään karttua.</span>

                    <iframe className="col s12 l6 m12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.2045731375958!2d22.281901316492235!3d60.45834598206804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDI3JzMwLjEiTiAyMsKwMTcnMDIuNyJF!5e0!3m2!1sfi!2sfi!4v1487177864063" height="300" frameborder="0"></iframe>
                  </div>
                </li>

                <li>
                  <div className="collapsible-header flex"><span className="tapahtumaaika">Sunnuntaina 30.4.</span><span className="tapahtuma">Lakitus</span></div>
                  <div className="collapsible-body row">
                    <span className="col s12 l6 m12">Fuksit saavat vihdoin lakit.</span>

                    <iframe className="col s12 l6 m12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.2045731375958!2d22.281901316492235!3d60.45834598206804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDI3JzMwLjEiTiAyMsKwMTcnMDIuNyJF!5e0!3m2!1sfi!2sfi!4v1487177864063" height="450" frameborder="0"></iframe>
                  </div>
                </li>
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
