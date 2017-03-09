export default function (store) {
  function reduxGetState () {
    return store.getState();
  }

  function reduxDispatch ({ reduxAction }) {
    return store.dispatch(reduxAction);
  }

  return {
    reduxGetState,
    reduxDispatch
  };
}
