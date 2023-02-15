import React from 'react';
import ReactDOM from 'react-dom/client';
import A from './components/A';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <A name="Shekhar" surname="Shinde"> "this is Outside Data"</A>
  </React.StrictMode>
);

