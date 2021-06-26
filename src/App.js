import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

// Components
import Coin from './components/Coin';
import AddButton from './components/AddButton';
import SubtractButton from './components/SubtractButton';
import Converter from './components/Converter';
import Credit from './components/Credit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGold: 0,
      currentSilver: 0,
      currentCopper: 0,
      currentPlatinum: 0,
      currentElectrum: 0,
      newGold: 0,
      newSilver: 0,
      newCopper: 0,
      newPlatinum: 0,
      newElectrum: 0
    };
    this.changeGold = this.changeGold.bind(this);
    this.changeSilver = this.changeSilver.bind(this);
    this.changeCopper = this.changeCopper.bind(this);
    this.changePlatinum = this.changePlatinum.bind(this);
    this.changeElectrum = this.changeElectrum.bind(this);
    this.changeNewGold = this.changeNewGold.bind(this);
    this.changeNewSilver = this.changeNewSilver.bind(this);
    this.changeNewCopper = this.changeNewCopper.bind(this);
    this.changeNewPlatinum = this.changeNewPlatinum.bind(this);
    this.changeNewElectrum = this.changeNewElectrum.bind(this);
    this.addGold = this.addGold.bind(this);
    this.addSilver = this.addSilver.bind(this);
    this.addCopper = this.addCopper.bind(this);
    this.addPlatinum = this.addPlatinum.bind(this);
    this.addElectrum = this.addElectrum.bind(this);
    this.spendGold = this.spendGold.bind(this);
    this.spendSilver = this.spendSilver.bind(this);
    this.spendCopper = this.spendCopper.bind(this);
    this.spendPlatinum = this.spendPlatinum.bind(this);
    this.spendElectrum = this.spendElectrum.bind(this);
  }

  

  changeGold(e) {
    this.setState({
      currentGold: e.target.value
    });
  }

  changeSilver(e) {
    this.setState({
      currentSilver: e.target.value
    });
  }

  changeCopper(e) {
    this.setState({
      currentCopper: e.target.value
    });
  }

  changePlatinum(e) {
    this.setState({
      currentPlatinum: e.target.value
    });
  }

  changeElectrum(e) {
    this.setState({
      currentElectrum: e.target.value
    });
  }

  changeNewGold(e) {
    this.setState({
      newGold: e.target.value
    });
  }

  changeNewSilver(e) {
    this.setState({
      newSilver: e.target.value
    });
  }

  changeNewCopper(e) {
    this.setState({
      newCopper: e.target.value
    });
  }

  changeNewPlatinum(e) {
    this.setState({
      newPlatinum: e.target.value
    });
  }

  changeNewElectrum(e) {
    this.setState({
      newElectrum: e.target.value
    });
  }

  addGold(e) {
    e.preventDefault();
    this.setState(state => ({
      currentGold: parseInt(state.currentGold) + parseInt(state.newGold)
    }));
  }

  addSilver(e) {
    e.preventDefault();
    this.setState(state => ({
      currentSilver: parseInt(state.currentSilver) + parseInt(state.newSilver)
    }));
  }

  addCopper(e) {
    e.preventDefault();
    this.setState(state => ({
      currentCopper: parseInt(state.currentCopper) + parseInt(state.newCopper)
    }));
  }

  addPlatinum(e) {
    e.preventDefault();
    this.setState(state => ({
      currentPlatinum: parseInt(state.currentPlatinum) + parseInt(state.newPlatinum)
    }));
  }

  addElectrum(e) {
    e.preventDefault();
    this.setState(state => ({
      currentElectrum: parseInt(state.currentElectrum) + parseInt(state.newElectrum)
    }));
  }

  spendGold(e) {
    e.preventDefault();
    // GUS = gold units to spend
    var GUS = parseInt(this.state.newGold) * 100;
    
    // CUP = copper units in pouch, etc.
    var CUP = parseInt(this.state.currentCopper);
    var SUP = parseInt(this.state.currentSilver) * 10;
    var EUP = parseInt(this.state.currentElectrum) * 50;
    var GUP = parseInt(this.state.currentGold) * 100;
    var PUP = parseInt(this.state.currentPlatinum) * 1000;
  
    var totalInPouch = CUP + SUP + EUP + GUP + PUP;
    
    if (GUS > totalInPouch) {
      alert('Insufficient money in pouch!');
    } else {
      if (GUS <= GUP) {
        this.setState(state => ({
          currentGold: parseInt(state.currentGold) - parseInt(state.newGold)
        }));
      } else {
        var remainder = parseInt(totalInPouch - GUS);
        CUP = SUP = EUP = GUP = PUP = 0;
        while (remainder >= 100) {
          GUP += 100;
          remainder -= 100;
        }
        while (remainder >= 10) {
          SUP += 10;
          remainder -= 10;
        }
        while (remainder > 0) {
          CUP += 1;
          remainder -= 1;
        }
        this.setState(state => ({
          currentPlatinum: parseInt(PUP/1000)
        }));
        this.setState(state => ({
          currentGold: parseInt(GUP/100)
        }));
        this.setState(state => ({
          currentElectrum: parseInt(EUP/50)
        }));
        this.setState(state => ({
          currentSilver: parseInt(SUP/10)
        }));
        this.setState(state => ({
          currentCopper: parseInt(CUP)
        }));
        }
      }      
  }

  spendSilver(e) {
    e.preventDefault();
    // SUS = silver units to spend
    var SUS = parseInt(this.state.newSilver) * 10;
    
    // CUP = copper units in pouch, etc.
    var CUP = parseInt(this.state.currentCopper);
    var SUP = parseInt(this.state.currentSilver) * 10;
    var EUP = parseInt(this.state.currentElectrum) * 50;
    var GUP = parseInt(this.state.currentGold) * 100;
    var PUP = parseInt(this.state.currentPlatinum) * 1000;
  
    var totalInPouch = CUP + SUP + EUP + GUP + PUP;
    
    if (SUS > totalInPouch) {
      alert('Insufficient money in pouch!');
    } else {
      if (SUS <= SUP) {
        this.setState(state => ({
          currentSilver: parseInt(state.currentSilver) - parseInt(state.newSilver)
        }));
      } else {
        var remainder = parseInt(totalInPouch - SUS);
        CUP = SUP = EUP = GUP = PUP = 0;
        while (remainder >= 100) {
          GUP += 100;
          remainder -= 100;
        }
        while (remainder >= 10) {
          SUP += 10;
          remainder -= 10;
        }
        while (remainder > 0) {
          CUP += 1;
          remainder -= 1;
        }
        this.setState(state => ({
          currentPlatinum: parseInt(PUP/1000)
        }));
        this.setState(state => ({
          currentGold: parseInt(GUP/100)
        }));
        this.setState(state => ({
          currentElectrum: parseInt(EUP/50)
        }));
        this.setState(state => ({
          currentSilver: parseInt(SUP/10)
        }));
        this.setState(state => ({
          currentCopper: parseInt(CUP)
        }));
        }
      }      
  }

  spendCopper(e) {
    e.preventDefault();
    // CUS = copper units to spend
    var CUS = parseInt(this.state.newCopper);
        
    // CUP = copper units in pouch, etc.
    var CUP = parseInt(this.state.currentCopper);
    var SUP = parseInt(this.state.currentSilver) * 10;
    var EUP = parseInt(this.state.currentElectrum) * 50;
    var GUP = parseInt(this.state.currentGold) * 100;
    var PUP = parseInt(this.state.currentPlatinum) * 1000;
        
    var totalInPouch = CUP + SUP + EUP + GUP + PUP;
    
    if (CUS > totalInPouch) {
      alert('Insufficient money in pouch!');
    } else {
      if (CUS <= CUP) {
        this.setState(state => ({
          currentCopper: parseInt(state.currentCopper) - parseInt(state.newCopper)
        }));
      } else {
        var remainder = parseInt(totalInPouch - CUS);
        CUP = SUP = EUP = GUP = PUP = 0;
        while (remainder >= 100) {
          GUP += 100;
          remainder -= 100;
        }
        while (remainder >= 10) {
          SUP += 10;
          remainder -= 10;
        }
        while (remainder > 0) {
          CUP += 1;
          remainder -= 1;
        }
        this.setState(state => ({
          currentPlatinum: parseInt(PUP/1000)
        }));
        this.setState(state => ({
          currentGold: parseInt(GUP/100)
        }));
        this.setState(state => ({
          currentElectrum: parseInt(EUP/50)
        }));
        this.setState(state => ({
          currentSilver: parseInt(SUP/10)
        }));
        this.setState(state => ({
          currentCopper: parseInt(CUP)
        }));
        }
      }      
  }

  spendPlatinum(e) {
    e.preventDefault();
    // PUS = platinum units to spend
    var PUS = parseInt(this.state.newPlatinum) * 1000;
    
    // CUP = copper units in pouch, etc.
    var CUP = parseInt(this.state.currentCopper);
    var SUP = parseInt(this.state.currentSilver) * 10;
    var EUP = parseInt(this.state.currentElectrum) * 50;
    var GUP = parseInt(this.state.currentGold) * 100;
    var PUP = parseInt(this.state.currentPlatinum) * 1000;
  
    var totalInPouch = CUP + SUP + EUP + GUP + PUP;
    
    if (PUS > totalInPouch) {
      alert('Insufficient money in pouch!');
    } else {
      if (PUS <= PUP) {
        this.setState(state => ({
          currentPlatinum: parseInt(state.currentPlatinum) - parseInt(state.newPlatinum)
        }));
      } else {
        var remainder = parseInt(totalInPouch - PUS);
        CUP = SUP = EUP = GUP = PUP = 0;
        while (remainder >= 100) {
          GUP += 100;
          remainder -= 100;
        }
        while (remainder >= 10) {
          SUP += 10;
          remainder -= 10;
        }
        while (remainder > 0) {
          CUP += 1;
          remainder -= 1;
        }
        this.setState(state => ({
          currentPlatinum: parseInt(PUP/1000)
        }));
        this.setState(state => ({
          currentGold: parseInt(GUP/100)
        }));
        this.setState(state => ({
          currentElectrum: parseInt(EUP/50)
        }));
        this.setState(state => ({
          currentSilver: parseInt(SUP/10)
        }));
        this.setState(state => ({
          currentCopper: parseInt(CUP)
        }));
        }
      }      
  }

  spendElectrum(e) {
    e.preventDefault();
    // EUS = electrum units to spend
    var EUS = parseInt(this.state.newElectrum) * 50;
    
    // CUP = copper units in pouch, etc.
    var CUP = parseInt(this.state.currentCopper);
    var SUP = parseInt(this.state.currentSilver) * 10;
    var EUP = parseInt(this.state.currentElectrum) * 50;
    var GUP = parseInt(this.state.currentGold) * 100;
    var PUP = parseInt(this.state.currentPlatinum) * 1000;
  
    var totalInPouch = CUP + SUP + EUP + GUP + PUP;
    
    if (EUS > totalInPouch) {
      alert('Insufficient money in pouch!');
    } else {
      if (EUS <= EUP) {
        this.setState(state => ({
          currentElectrum: parseInt(state.currentElectrum) - parseInt(state.newElectrum)
        }));
      } else {
        var remainder = parseInt(totalInPouch - EUS);
        CUP = SUP = EUP = GUP = PUP = 0;
        while (remainder >= 100) {
          GUP += 100;
          remainder -= 100;
        }
        while (remainder >= 10) {
          SUP += 10;
          remainder -= 10;
        }
        while (remainder > 0) {
          CUP += 1;
          remainder -= 1;
        }
        this.setState(state => ({
          currentPlatinum: parseInt(PUP/1000)
        }));
        this.setState(state => ({
          currentGold: parseInt(GUP/100)
        }));
        this.setState(state => ({
          currentElectrum: parseInt(EUP/50)
        }));
        this.setState(state => ({
          currentSilver: parseInt(SUP/10)
        }));
        this.setState(state => ({
          currentCopper: parseInt(CUP)
        }));
        }
      }      
  }

  render() {
  return (
    <Router>
    <div className="App">
      <div id='display'>

        <Route path='/' exact render={(props) => (
        <>
        <div className='header'>
          <p>D&D Coin Calculator</p>
        </div>
        <div id='pouch'>
          <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-6'>
              <p id='current__amount'>Coins in pouch</p>
            </div>
            <div className='col-6'>
              <p id='change__amount'>Add / subtract</p>
            </div>
          </div>
          <div className='currencies'>
            <div className='row'>
              <div className='col-4'><Coin type='Copper' color='#b87333' /></div>
              <div className='col-3'>
                <div className='amount'>
                  <input type="number" min="0" max="10000" value={this.state.currentCopper} onChange={this.changeCopper} />
                </div>
              </div>
              <div className='col-2'>
                <div className='new__amount'>
                  <input type="number" min="0" max="10000" value={this.state.newCopper} onChange={this.changeNewCopper} />
                </div>
              </div>
              <div className='col-1'>
                <form onSubmit={this.addCopper} >
                <AddButton />
                </form>
              </div>
              <div className='col-1'>
                <form onSubmit={this.spendCopper} >
                <SubtractButton />
                </form>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'><Coin type='Silver' color='silver' /></div>
              <div className='col-3'>
                <div className='amount'>
                  <input type="number" min="0" max="10000" value={this.state.currentSilver} onChange={this.changeSilver} />
                </div>
              </div>
              <div className='col-2'>
                <div className='new__amount'>
                  <input type="number" min="0" max="10000" value={this.state.newSilver} onChange={this.changeNewSilver} />
                </div>
              </div>
              <div className='col-1'>
                <form onSubmit={this.addSilver} >
                <AddButton />
                </form>
              </div>
              <div className='col-1'>
                <form onSubmit={this.spendSilver} >
                <SubtractButton />
                </form>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'><Coin type='Electrum' color='#ffffbf' /></div>
              <div className='col-3'>
                <div className='amount'>
                  <input type="number" min="0" max="10000" value={this.state.currentElectrum} onChange={this.changeElectrum} />
                </div>
              </div>
              <div className='col-2'>
                <div className='new__amount'>
                  <input type="number" min="0" max="10000" value={this.state.newElectrum} onChange={this.changeNewElectrum} />
                </div>
              </div>
              <div className='col-1'>
                <form onSubmit={this.addElectrum} >
                <AddButton />
                </form>
              </div>
              <div className='col-1'>
                <form onSubmit={this.spendElectrum} >
                <SubtractButton />
                </form>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'><Coin type='Gold' color='gold' /></div>
              <div className='col-3'>
                <div className='amount'>
                  <input type="number" min="0" max="10000" value={this.state.currentGold} onChange={this.changeGold} />
                </div>
              </div>
              <div className='col-2'>
                <div className='new__amount'>
                  <input type="number" min="0" max="10000" value={this.state.newGold} onChange={this.changeNewGold} />
                </div>
              </div>
              <div className='col-1'>
                <form onSubmit={this.addGold} >
                <AddButton />
                </form>
              </div>
              <div className='col-1'>
                <form onSubmit={this.spendGold} >
                <SubtractButton />
                </form>
              </div>
            </div>
            <div className='row'>
              <div className='col-4'><Coin type='Platinum' color='#e5e4e2'/></div>
              <div className='col-3'>
                <div className='amount'>
                  <input type="number" min="0" max="10000" value={this.state.currentPlatinum} onChange={this.changePlatinum} />
                </div>
              </div>
              <div className='col-2'>
                <div className='new__amount'>
                  <input type="number" min="0" max="10000" value={this.state.newPlatinum} onChange={this.changeNewPlatinum} />
                </div>
              </div>
              <div className='col-1'>
                <form onSubmit={this.addPlatinum} >
                <AddButton />
                </form>
              </div>
              <div className='col-1'>
                <form onSubmit={this.spendPlatinum} >
                <SubtractButton />
                </form>
              </div>
            </div>
            </div>
          </div>
        </div>
        <Link to='/converter' className='link'>D&D Coin Converter</Link>
        </>
        )} />
        <Route path='/converter' component={Converter} />
        <Credit />
      </div>
    </div>
    </Router>
  );
}
}

export default App;
