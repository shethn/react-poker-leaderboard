import React, {Component} from 'react';
import uuidv4 from 'uuid';
import {addPlayer} from '../../store/actions/actionCreators';
import {connect} from 'react-redux'
import {COUNTRIES} from '../../constants';
import PropTypes from 'prop-types';

class AddPlayer extends Component {
    static propTypes = {
        addPlayer: PropTypes.func.isRequired
    }

    state = {
        name: '',
        winnings: '',
        native: ''
    }

    form = React.createRef();

    validate = () => {
       return this.form.current.reportValidity();
    }

    handleChange = ( e ) =>
    {
        this.setState( {
            [e.target.id]: e.target.value
        });
    }

    resetState = () => {
        this.setState({
            name: '',
            winnings: '',
            native: ''
        })
    }

    handleSubmit = () => {
        if( this.validate() ) {
            let { name, winnings, native } = this.state
            let id = uuidv4();
            let country = native === '' ? COUNTRIES["ABW"] :
                Object.keys(COUNTRIES).filter( key =>
                    COUNTRIES[key] === native
                )[0];
            let player = {
                [id]: {
                        name,
                        winnings,
                        country,
                        avatar: `http://i.pravatar.cc/150?u=${id}`,
                        id
                }
            };   
            this.props.addPlayer(player)
            this.resetState();
        }
    }

    render() {
        let {name, winnings, native} = this.state;
        return (
            <React.Fragment>
                <header>
                    <h4>Add Player</h4>
                </header>
                <hr/>
                <form onSubmit={this.handleSubmit} ref={this.form}>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label htmlFor="name">Name</label>
                            <input type="text"
                                className="form-control"
                                id="name"
                                value={name}
                                onChange={this.handleChange}
                                required/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="winnings">Player Winnings</label>
                            <input type="number"
                                className="form-control"
                                id="winnings" value={winnings}
                                onChange={this.handleChange}
                                required/>
                        </div>
                        <div className="form-group col-md-4">
                            <label htmlFor="native">Native of</label>
                            <select id="native" className="form-control" value={native} onChange={this.handleChange}>
                                <option>Choose...</option>
                                {Object.keys(COUNTRIES).map( country =>
                                    <option key={country}>{COUNTRIES[country]}</option>
                                )}
                            </select>
                        </div>
                    </div>
                </form>
                <div>
                    <button type="button" className="btn btn-dark" onClick={this.handleSubmit}>Add</button>
                </div>
            </React.Fragment>
        )
    }

}

export default connect(null, {addPlayer})(AddPlayer);