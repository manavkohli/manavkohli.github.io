import React, {Component} from 'react'
import MenuItem from './MenuItem'
import CloseIcon from '../../img/icons/close_icon.png'
export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      rotation: 45,
    };
  }

  updateShowMenu = () => {
    this.setState({showMenu: !this.state.showMenu, rotation: this.state.rotation + 45});
  }

  onMenuItemClick = (label) => {
    this.props.onClick(label)
    this.setState({showMenu: false, rotation: 45});
  }

  render() {
    const { rotation } =  this.state;
    return (
      <div>
      {
        this.state.showMenu &&
        (
          <span className="menu-items">
            <MenuItem onClick={this.onMenuItemClick} label="home" />/
            <MenuItem onClick={this.onMenuItemClick} label="me" />/
            <MenuItem onClick={this.onMenuItemClick} label="thanx" />/
            <MenuItem onClick={this.onMenuItemClick} label="intuit" />/
            <MenuItem onClick={this.onMenuItemClick} label="projects" />/
            <MenuItem onClick={this.onMenuItemClick} label="writing" />/
            <a href="mailto:manav.s.kohli@gmail.com"> contact</a>
          </span>
        )
      }<span onClick={this.updateShowMenu}>
        <img
          className="close-icon"
          src={CloseIcon}
          alt=""
          style={{transform: `rotate(${rotation}deg)`}}

        />
      </span>
      </div>
    )
  }
}
