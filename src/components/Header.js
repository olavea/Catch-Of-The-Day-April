import React from "react";

class Header extends React.Component{
  render() {
      return (
        <header className="top">
          <h1>
            Fish
            <span className="ofThe">
              <span className="of">Obi</span>
              <span className="the">Wan</span>
            </span>
            nobi


          </h1>
          <h3 className="tagline">
            <span>{this.props.tagline}</span>
          </h3>
        </header>
      );
  }
}
// Sea Food
// Fish Jedi
//A Midsummer Night's Dream
export default Header;