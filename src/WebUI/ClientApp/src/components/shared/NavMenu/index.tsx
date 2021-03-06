import React, { Component } from 'react'
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'
import { Link } from 'react-router-dom'
import { LoginMenu } from '../../api-authorization/LoginMenu'

interface INavMenuState {
    collapsed: boolean
}

export class NavMenu extends Component<{}, INavMenuState> {
    static displayName = NavMenu.name

    constructor(props) {
        super(props)

        this.toggleNavbar = this.toggleNavbar.bind(this)
        this.state = {
            collapsed: true,
        }
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    render() {
        return (
            <header className="header">
                <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/">
                            Shared Photo Album
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse
                            className="d-sm-inline-flex flex-sm-row-reverse"
                            isOpen={!this.state.collapsed}
                            navbar
                        >
                            <ul className="navbar-nav flex-grow">
                                <LoginMenu></LoginMenu>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        )
    }
}
