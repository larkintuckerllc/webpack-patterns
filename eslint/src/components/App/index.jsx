import React, { Component } from 'react';
import Cat from './Cat';
import Dog from './Dog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: null,
    };
  }
  // FYI: NOT BEST PRACTICE TO DEFINE FUNCTIONS IN RENDER METHOD
  // SHOULD PULL OUT BUTTONS INTO COMPONENTS TO SOLVE
  render() {
    const { showing } = this.state;
    return (
      <div>
        <div>
          <button
            onClick={() => { this.setState({ showing: 'cat' }); }}
          >cat
          </button>
          <button
            onClick={() => { this.setState({ showing: 'dog' }); }}
          >dog
          </button>
        </div>
        { showing === 'cat' && <Cat />}
        { showing === 'dog' && <Dog />}
      </div>
    );
  }
}
export default App;
