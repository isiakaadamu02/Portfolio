import NotFound from './component/NotFound/page';
import Portfolio from './component/portfolio/page';

function App() {
  // Simple client-side routing
  const path = window.location.pathname;
  
  // Route to 404 for any path other than home
  if (path !== '/' && path !== '/index.html') {
    return <NotFound />;
  }

  return <Portfolio />;
}

export default App;