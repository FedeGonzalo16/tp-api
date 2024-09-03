import NavbarApp from './components/partials/NavbarApp';
import Landing from './components/views/Landing';
import Payments from './components/views/Payments';

function App() {
  return (
    <div className="App overflow-hidden">
      <NavbarApp></NavbarApp>
      <Landing></Landing>
      <Payments></Payments>
    </div>
  );
}

export default App;
