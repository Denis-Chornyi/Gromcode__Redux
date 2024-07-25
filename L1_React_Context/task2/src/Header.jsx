import React from 'react';
import UserMenu from './UserMenu';

class Header extends React.PureComponent {
  render() {
    return (
      <header className="header">
        <UserMenu />
      </header>
    );
  }
}

export default Header;
