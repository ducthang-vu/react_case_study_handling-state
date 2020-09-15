import React from 'react';
import Container from './main/Container'
import Header from './components/Header'
import Standard from './main/Standard'
import { MyContextProvider } from './context/MyContext'
import WithContext from './main/WithContext'
import { Provider } from 'react-redux'
import store from './store/store'
import WithRedux from './main/WithRedux'

function App() {
  const differences = [-5, -1, 1, 5]
  const style = {fontFamily: 'Roboto, sans-serif'}

  return (
    <div className="App" style={style}>
      <Header></Header>
      <main style={{display: 'flex'}}>
        <Container>
          <Standard differences={differences} initial={10}></Standard>
        </Container>

        <Container>
          <MyContextProvider differences={differences} initial={50}>
            <WithContext></WithContext>
          </MyContextProvider>
        </Container>

        <Container>
          <Provider store={store}>
            <WithRedux differences={differences}></WithRedux>
          </Provider>
        </Container>
      </main>
    </div>
  );
}

export default App;
