import React, {Component} from 'react'
import MenuItem from './MenuItem'
import CloseIcon from '../../img/icons/close_icon.png'
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
    this.setState({showMenu: false});
  }

  render() {
    return (
      <div >
      {
        this.state.showMenu &&
        (
          <span className="menu-items">
            <MenuItem onClick={this.onMenuItemClick} label="me" />/
            <MenuItem onClick={this.onMenuItemClick} label="thanx" />/
            <MenuItem onClick={this.onMenuItemClick} label="intuit" />/
            <MenuItem onClick={this.onMenuItemClick} label="quantum computing" />/
            <MenuItem onClick={this.onMenuItemClick} label="ML" />/
            <MenuItem onClick={this.onMenuItemClick} label="blogging" />/
            <MenuItem onClick={this.onMenuItemClick} label="art" />/
            <MenuItem onClick={this.onMenuItemClick} label="home" />
          </span>
        )
      }<span onClick={this.updateShowMenu}><img src={CloseIcon} alt="" style={{cursor: "pointer"}} height="42" width="42"/></span>
      </div>
    )
  }
}
