// import './App.css';
import './sass/style.scss'
import Footer from './components/Footer';
import Header from './components/Header';
import buttonicon from '../src/img/button.svg';
import loadingicon from '../src/img/loading.svg';
import { useRef, useState } from 'react';
import { FetchAPI } from './utils/FetchAPI';
import MessageList from './components/MessageList';

function App() {
  // const inputRef = useRef(null)
  const [question, setQuestion] = useState('');
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const onChangeHandler = (e) => {
    e.preventDefault();
    setQuestion(e.target.value);
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    if (question === '') return null;
    setLoading(true)
    setHistory((prevstate) => {
      return [...prevstate, question];
    });
    const AImessage = await FetchAPI(question);
    setHistory((prevstate) => {
      return [...prevstate, AImessage];
    });
    setLoading(false)
    e.target.reset();
  };

  let button = (
    <button type="submit" className="generateButton">
      <img src={buttonicon} />
    </button>
  );

  if (loading) {
    button = (
      <button type="submit" className="generateButton button__loading">
        <img src={loadingicon} className="button__loading" />
      </button>
    );
  } 

  
  return (
    <div className="home">
      <Header />
      <main className="main">
        <MessageList history={history} loading={loading} />
        <div className="center">
          <div className="cloudform">
            <form onSubmit={SubmitHandler}>
              <input disabled={loading}
                tabIndex={1}
                onBeforeInput={() => console.log('reset')}
                // ref={inputRef}
                autoFocus
                onChange={onChangeHandler}
                autoComplete="off"
                rows="1"
                maxLength="512"
                type="text"
                placeholder="Type your question..."
                className="textarea"
              />
              {button}
            </form>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;
