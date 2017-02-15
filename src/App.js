import React, { Component } from 'react';
import logo from './larjestotlogo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="row nomargin">
          <div className="App-header card nomargin black lighten-1 white-text">
            <div className="col l1 m1 logo">
              <img src={logo} alt="logo" height="50px"></img>
            </div>
            <div className="col l3 m11">
              <h4>Turun Teekkariwappu</h4>
            </div>
            <div className="col l4 m12">
              <h5>14:12:25</h5>
            </div>
            <div className="col l4 m12">
              <a className="digit" href="http://digit.fi/">Digit</a> <a className="nucleus" href="http://nucleus.fi/">Nucleus</a> <a className="asteriski" href="https://www.asteriski.fi/">Asteriski</a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="padding20 col m12 l8">
            <div className="grey lighten-5 card">
              <div className="padding20 card black lighten-2 white-text">
                <h5>Viikon tapahtumat</h5>
              </div>

              <ul className="collapsible popout paddingbottom20" data-collapsible="accordion">
                <li>
                  <div className="collapsible-header flex"><span className="tapahtumaaika">Maanantaina klo. 15:00</span><span className="tapahtuma">Grilli ja kyykkä</span></div>
                  <div className="collapsible-body row">
                    <span className="col l6 m12">Syödään makkaraa, juodaan olutta ja heitetään karttua.</span>

                    <iframe className="col l6 m12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1967.2045731375958!2d22.281901316492235!3d60.45834598206804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDI3JzMwLjEiTiAyMsKwMTcnMDIuNyJF!5e0!3m2!1sfi!2sfi!4v1487177864063" height="450" frameborder="0"></iframe>
                  </div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                  <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
                <li>
                  <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                  <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                </li>
              </ul>

            </div>
          </div>
          <div className="padding20 col m12 l4">
            <div className="grey lighten-5 card">
              <div className="padding20 card black lighten-2 white-text">
                <h5>Info</h5>
              </div>
              <div className="margin20">


                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce accumsan pellentesque mauris et feugiat. Ut sodales, ipsum ut pulvinar consequat, nunc ante bibendum purus, ac molestie enim risus sed lorem. Praesent vulputate ligula nec ipsum lobortis, eget molestie nisi tristique. In nec ornare justo, quis dictum turpis. Fusce non magna felis. Suspendisse potenti. Phasellus tincidunt ipsum eleifend tortor iaculis, vitae aliquet dolor tristique. Etiam sed erat accumsan sem finibus efficitur. Ut posuere at lectus eget condimentum. Fusce nunc lacus, mattis et dolor vel, rutrum cursus nibh. Aliquam erat volutpat. Sed eget leo dolor. Donec tincidunt eget ipsum ut tincidunt. Nam ac orci ante.
  </p>
                <p>
                  Suspendisse sed lectus turpis. Mauris tristique id elit vel volutpat. Aliquam sem elit, varius vitae velit et, ornare viverra lorem. Morbi vulputate tincidunt lectus a hendrerit. Proin vulputate turpis eu metus fringilla ullamcorper. Duis sed leo volutpat, sodales augue eu, accumsan est. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam neque risus, tristique ac augue quis, auctor volutpat lorem.
</p>
                <p>
                  Aenean sagittis erat nec varius sollicitudin. Maecenas quam ex, tempus a feugiat at, rutrum non urna. Integer quis suscipit erat. Maecenas non ipsum vitae ligula egestas efficitur ut sit amet dolor. Aenean mollis, tellus vel molestie tempor, augue lorem aliquet leo, vitae molestie urna lorem eu ligula. Vestibulum dapibus pretium nunc, tempor varius risus tempus quis. Phasellus vel tincidunt tortor, in blandit nibh. Sed vitae diam interdum dolor convallis laoreet efficitur sit amet neque. Maecenas feugiat felis lobortis, finibus lacus rutrum, aliquet est. Nam et pretium leo. Proin mollis sit amet est vitae euismod. Aliquam non sollicitudin arcu. Suspendisse potenti.
</p>
                <p>
                  Proin lacus nulla, rhoncus mollis mattis ac, ullamcorper sit amet enim. Donec nec ornare lorem, eu laoreet est. Etiam tincidunt justo et neque posuere finibus nec sed sapien. Mauris ultricies mauris sapien, eu egestas purus scelerisque ut. Nunc ultrices dapibus libero, et venenatis augue malesuada quis. Maecenas accumsan, lacus posuere varius dapibus, mauris ex congue justo, sit amet cursus nisi felis at lorem. Proin convallis, orci in dictum eleifend, metus ante dapibus metus, nec mattis erat dolor id odio. Nunc mattis interdum tempus. Cras ut velit ligula. Pellentesque nec eleifend neque. Donec ac nunc ac ex bibendum ultrices a vel purus. Vivamus pharetra volutpat metus ut laoreet.
</p>
                <p>
                  Duis quis sapien ultricies, viverra enim in, gravida nisl. Donec turpis tortor, bibendum vestibulum gravida ac, egestas a quam. Suspendisse enim nisl, accumsan vitae fringilla in, ornare nec arcu. Duis semper ac odio ut aliquet. Mauris vehicula lacus nec odio ultrices consequat. Vestibulum tortor nulla, luctus vehicula auctor eu, vestibulum interdum metus. Fusce id turpis ut ligula ultricies bibendum. Vivamus sollicitudin, lorem sed consequat porta, felis quam dictum dolor, non iaculis lectus mauris eu leo. Etiam et mauris massa. Integer vulputate nulla a nulla scelerisque, ac convallis enim tempor. Donec luctus orci vel enim accumsan, in pharetra leo ullamcorper. Maecenas non purus eget velit scelerisque rutrum ac vel ante.
</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
