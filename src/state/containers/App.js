import { mergeAll } from 'ramda';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import App from '../../components/App';
import reduxActions from '../actions';
import buildFunctions from '../../effects';

function mapStateToProps (state) {
  return state;
}

function mapDispatchToProps (dispatch, ownProps) {
  const functions = buildFunctions(ownProps.store);
  const boundActions = bindActionCreators(reduxActions, dispatch);
  const actions = mergeAll([boundActions, functions]);

  return {
    actions
  };
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
