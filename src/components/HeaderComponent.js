import React,{Component} from 'react';
import {Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, 
        Button, Modal, ModalHeader, ModalBody,
        Form, FormGroup, Input, Label } from 'reactstrap';
import {NavLink} from 'react-router-dom';
class Header extends Component{
    constructor(props){
        super(props);
        
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            isNavOpen: false, 
            isModalOpen: false,
        };


    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value
                + " Remember: " + this.remember.checked);
        event.preventDeault();
    }
    render(){
        return(
            <div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type='text' id='username' name='username'
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type='password' id='password' name='password'
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                <Input type='checkbox' name='remember'
                                    innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type='submit' value='submit' color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Navbar dark expand="md">
                    <div className='container'>
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className='mr-auto' href='/'/><img src='images/courses/online/o1.1.png' height='30' className='md-2' />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to='/home'> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/courses'> All Courses</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/team'>Team</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/pricing'> Pricing</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contact'> Contact</NavLink>
                            </NavItem>
                           </Nav> 
                        <Nav className='ml-auto' navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}><span className='fa fa-sign-in fa-lg'></span>Login</Button>    
                            </NavItem> 
                        </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                
            </div>
            
        );
    }
}
export default Header;