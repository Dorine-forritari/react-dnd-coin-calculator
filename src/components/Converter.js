import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Coin from './Coin';

class Converter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        gold: 0,
        silver: 0,
        copper: 0,
        platinum: 0,
        electrum: 0,
      };
      this.changeGold = this.changeGold.bind(this);
      this.changeSilver = this.changeSilver.bind(this);
      this.changeCopper = this.changeCopper.bind(this);
      this.changePlatinum = this.changePlatinum.bind(this);
      this.changeElectrum = this.changeElectrum.bind(this);
    }

    changeGold(e) {
        this.setState({
            gold: e.target.value
        });
        this.setState(state => ({
            silver: (state.gold * 10)
        }));
        this.setState(state => ({
            copper: (state.gold * 100)
        }));
        this.setState(state => ({
            platinum: (state.gold / 10)
        }));
        this.setState(state => ({
            electrum: (state.gold * 2)
        }));
    }
    
      changeSilver(e) {
        this.setState({
            silver: e.target.value
        });
        this.setState(state => ({
            gold: (state.silver / 10)
        }));
        this.setState(state => ({
            copper: (state.silver * 10)
        }));
        this.setState(state => ({
            platinum: (state.silver / 100)
        }));
        this.setState(state => ({
            electrum: (state.silver / 5)
        }));
      }
    
      changeCopper(e) {
        this.setState({
            copper: e.target.value
        });
        this.setState(state => ({
            gold: (state.copper / 100)
        }));
        this.setState(state => ({
            silver: (state.copper / 10)
        }));
        this.setState(state => ({
            platinum: (state.copper / 1000)
        }));
        this.setState(state => ({
            electrum: (state.copper / 50)
        }));
      }
    
      changePlatinum(e) {
        this.setState({
            platinum: e.target.value
        });
        this.setState(state => ({
            gold: (state.platinum * 10)
        }));
        this.setState(state => ({
            silver: (state.platinum * 100)
        }));
        this.setState(state => ({
            copper: (state.platinum * 1000)
        }));
        this.setState(state => ({
            electrum: (state.platinum * 20)
        }));
      }
    
      changeElectrum(e) {
        this.setState({
            electrum: e.target.value
        });
        this.setState(state => ({
            gold: (state.electrum / 2)
        }));
        this.setState(state => ({
            silver: (state.electrum * 5)
        }));
        this.setState(state => ({
            copper: (state.electrum * 50)
        }));
        this.setState(state => ({
            platinum: (state.electrum / 20)
        }));
      }
    
    render() {
    return(
        <div>
        <div className='header'>
          <p>D&D Coin Converter</p>
        </div>
        <div className='container'>
          <div className='currencies'>
          <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'><Coin type='Copper' color='#b87333' /></div>
              <div className='col-4'>
                <div className='amount'>
                  <input type="number" min="0" max="10000" value={this.state.copper} onChange={this.changeCopper} />
                </div>
              </div>
              <div className='col-1'></div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'><Coin type='Silver' color='silver' /></div>
              <div className='col-4'>
                <div className='amount'>
                  <input type="number" min="0" max="10000" value={this.state.silver} onChange={this.changeSilver} />
                </div>
              </div>
              <div className='col-1'></div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'><Coin type='Electrum' color='#ffffbf' /></div>
              <div className='col-4'>
                <div className='amount'>
                  <input type="number" min="0" max="10000" value={this.state.electrum} onChange={this.changeElectrum} />
                </div>
              </div>
              <div className='col-1'></div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'><Coin type='Gold' color='gold' /></div>
              <div className='col-4'>
                <div className='amount'>
                  <input type="number" min="0" max="10000" value={this.state.gold} onChange={this.changeGold} />
                </div>
              </div>
              <div className='col-1'></div>
            </div>
            <div className='row'>
              <div className='col-3'></div>
              <div className='col-4'><Coin type='Platinum' color='#e5e4e2'/></div>
              <div className='col-4'>
                <div className='amount'>
                  <input type="number" min="0" max="10000" value={this.state.platinum} onChange={this.changePlatinum} />
                </div>
              </div>
              <div className='col-1'></div>
            </div>
            </div>
        </div>
        <Link to='/' className='link'>D&D Coin Calculator</Link>
        </div>
    );
    }
}

export default Converter;