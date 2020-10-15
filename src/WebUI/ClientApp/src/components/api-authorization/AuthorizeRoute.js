import React from 'react'
import { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import authService from './AuthorizeService'
import Layout from '../shared/Layout'
import { PropTypes } from 'mobx-react'

export default class AuthorizeRoute extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ready: false,
            authenticated: false,
        }
    }

    componentDidMount() {
        this._subscription = authService.subscribe(() => this.authenticationChanged())
        this.populateAuthenticationState()
    }

    componentWillUnmount() {
        authService.unsubscribe(this._subscription)
    }

    render() {
        const { ready, authenticated } = this.state
        const link = document.createElement('a')
        link.href = this.props.path
        if (ready && !authenticated) {
            window.location.href = '/Identity/Account/Login'
        }

        if (!ready) {
            return <div></div>
        } else {
            const { component: Component, ...rest } = this.props
            return (
                <Route
                    {...rest}
                    render={(props) => {
                        if (authenticated) {
                            return (
                                <Layout>
                                    <Component {...props} />
                                </Layout>
                            )
                        } else {
                            return <Redirect to={redirectUrl} />
                        }
                    }}
                />
            )
        }
    }

    async populateAuthenticationState() {
        const authenticated = await authService.isAuthenticated()
        this.setState({ ready: true, authenticated })
    }

    async authenticationChanged() {
        this.setState({ ready: false, authenticated: false })
        await this.populateAuthenticationState()
    }
}

AuthorizeRoute.propTypes = {
    component: PropTypes.element,
    path: PropTypes.string,
}
