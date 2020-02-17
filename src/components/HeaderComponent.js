import React,{Component} from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, 
Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
          };
      }
      
      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
     
    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src={process.env.PUBLIC_URL + 'images/aero.png'} height="100px" width="150px" alt='AEROMEXICO REWARDS' /></NavbarBrand>
                        
                        <Collapse isOpen={this.state.isNavOpen}  navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" onClick={this.toggleNav} to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" onClick={this.toggleNav} to='/aboutus'><span className="fa fa-info fa-lg"></span> Mi Cuenta</NavLink>
                            </NavItem>
                            </Nav>
                            
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <img className="d-flex mr-3 img-thumbnail" src={process.env.PUBLIC_URL + 'images/aero.png'} alt="Aeromexico Rewards" />
                            </div>
                            <div className="col-12 col-sm-6">
                                <h1>AEROMÉXICO REWARDS</h1>
                                <p>Bienvenido al programa de recompensas de AEROMÉXICO!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}
export default Header;