import { Button, Alert, Breadcrumb } from 'react-bootstrap';
import Preloader from '../Preloader/Preloader';

function App() {
  return (
    <div className="App">
      <div className='page'>
        <Alert variant='success'>Hour</Alert>  
      <Button>Test</Button>
      <Breadcrumb>
        <Breadcrumb.Item active>Test</Breadcrumb.Item>
        <Breadcrumb.Item>Test 1</Breadcrumb.Item>
        <Breadcrumb.Item>Test 2</Breadcrumb.Item>
      </Breadcrumb>
      </div>
      <Preloader />
    </div>
  );
}

export default App;
