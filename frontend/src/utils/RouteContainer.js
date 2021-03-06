import React from 'react';
import { connect } from 'react-redux';
import RouteWrapper from '../components/RouteWrapper';
import { checkUser} from '../actions/AuthActions';

const RouteContainer = props => <RouteWrapper {...props} />;

const mapStateToProps = (state) => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  checkUser: () => dispatch(checkUser())
});

const defaultOpts = { restrict: false };

export default (Component, opts= defaultOpts) => {
  return connect(mapStateToProps, mapDispatchToProps)(
    props => <RouteContainer {...props} Component={Component} options={opts} />
  )
};