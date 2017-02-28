import React, { Component } from 'react';

class Tapahtuma extends Component {
    render() {
        return (
            <li>
                <div className="collapsible-header flex"><span className="tapahtumaaika">{this.props.aika}</span><span className="tapahtuma">{this.props.nimi}</span></div>
                <div className="collapsible-body row">
                <span className="col s12 l6 m12">{this.props.kuvaus}</span>
                <iframe className="col s12 l6 m12" src={this.props.kartta} height="300px" frameborder="0"></iframe>
                </div>
            </li>
        );
    }
}

export default Tapahtuma;