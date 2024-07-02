import React from 'react';
import { ThemeContext } from './themes-context';

class ThemedButton extends React.PureComponent {

  render() {
    this.context;
    return (
      <button
        {...this.props}
        style={{
          backgroundColor: this.context.background,
          color: this.context.fontColor
        }}
        className="btn"
      ></button>
    );
  }
}
ThemedButton.contextType = ThemeContext;
export default ThemedButton;
