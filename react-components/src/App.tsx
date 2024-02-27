import Message from './Message';
import Alert from './components/Alert';
import ListGroup from './components/ListGroup';
import Button from './components/Button';
import Overview from './components/Overview';

function App() {
  return <div>
    <Message />
    <ListGroup />
    <Overview />
    <Alert text="Success" />
    <Button color="success" onClick={() => console.log('clicked')}>Button</Button>
  </div>;
}

export default App;