import React from 'react';
import { themes, ThemeContext } from './themes-context';
import Header from './Header';

class App extends React.PureComponent {
  state = {
    userData: themes
  };

  render() {
    return (
      <ThemeContext.Provider value={this.state.userData}>
        <div className="page">
          <Header />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
