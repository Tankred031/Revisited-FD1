// Tvoja App komponenta
function App() {
  return <div>Hello, React!</div>;
}

// Renderovanje u HTML div sa id="root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
