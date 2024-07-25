import React from 'react';
import { ThemeContext } from './themes-context';

class UserMenu extends React.PureComponent {
  render() {
    const { name, avatar_url } = this.context;
    return (
      <div className="menu">
        <span className="menu__greeting">Hello, {name}</span>
        <img alt="User Avatar" src={avatar_url} className="menu__avatar" />
      </div>
    );
  }
}
UserMenu.contextType = ThemeContext;
export default UserMenu;
