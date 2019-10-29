import React, {Component} from 'react'
import Emoji from '../Emoji/Emoji'
import MenuItem from './MenuItem'
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }

  updateShowMenu = () => {
    this.setState({showMenu: !this.state.showMenu});
  }

  onMenuItemClick = (label) => {
    this.props.onClick(label)
  }

  render() {
    return (
      <div >
      {
        this.state.showMenu &&
        (
          <span className="menu-items">
            <MenuItem onClick={this.onMenuItemClick} label="thanx" />/
            <MenuItem onClick={this.onMenuItemClick} label="intuit" />/
            <MenuItem onClick={this.onMenuItemClick} label="quantum computing" />/
            <MenuItem onClick={this.onMenuItemClick} label="ML" />/
            <MenuItem onClick={this.onMenuItemClick} label="blogging" />/
            <MenuItem onClick={this.onMenuItemClick} label="art" />
          </span>
        )
      }<span onClick={this.updateShowMenu}><Emoji symbol="🍔" label="hamburger" /></span>
      </div>
    )
  }
}
