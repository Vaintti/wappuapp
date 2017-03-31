import React, { Component } from 'react';

class Tapahtuma extends Component {
    render() {
        return (
            <li>
                <div className="collapsible-header flex"><span className="tapahtumaaika">{this.props.aika}</span><span className="tapahtuma">{this.props.nimi}</span></div>
                <div className="collapsible-body row">
                <span className="col s12 l6 m12 kuvaus" dangerouslySetInnerHTML={{__html: this.props.kuvaus}}></span>
                <img className="col s12 l6 m12 kartta" src={this.props.kartta}></img>
                </div>
            </li>
        );
    }
}

export default Tapahtuma;