// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'primereact/resources/themes/mdc-dark-indigo/theme.css'
// import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

let utilisateur = {nom: 'Timio', prenom:'Thomas'};
utilisateur.prenom = 'Marc'
console.log(utilisateur);
let newUtilisateur = Object.assign({}, utilisateur, {prenom: 'Jacques'});
console.log(newUtilisateur)
let newUtilisateur2 = {...utilisateur, prenom:'Julien'}
console.log(newUtilisateur2)