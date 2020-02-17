import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Home from './HomeComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

import {    fetchAccount, fetchRewards } from '../redux/ActionCreators';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
    return {
        rewards: state.rewards,
        account: state.account
    }
}

const mapDispatchToProps = dispatch => ({
    
    fetchRewards: () => { dispatch(fetchRewards()) },
    fetchAccount: () => dispatch(fetchAccount())
});

class Main extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchRewards();
        this.props.fetchAccount();
    }

    render() {

        
        const HomePage = () => {
            return (
                <Home
                  
                    rewards ={this.props.rewards.rewards}
                />
            );
        }

        

        return (
            <div>
                <Header />
                <div>
                    <TransitionGroup>
                        <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                            <Switch location={this.props.location}>
                                <Route path='/home' component={HomePage} />
                                <Route exact path='/aboutus' component={() => <About awards={this.props.account.account.awards} account={this.props.account.account} />} />} />
                                <Redirect to="/home" />
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                </div>
                <Footer />
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));