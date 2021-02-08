# Aspect visuel avec prime react

## Installation:

installer:
```bash
npm install primereact --save
npm install primeicons --save
```

importer les thèmes dans index.js:
```js
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
```

Ce qui nous permet d'utiliser:

```jsx
import './App.css';
import { Fragment } from 'react'
import { Button } from 'primereact/button'

function App() {
  return (
    <Fragment>
      <p>Bonjour!</p>
      <Button label='World' />
    </Fragment>
  );
}

export default App;
```

Une fois l'application lancée, le bouton correspond bien à celui affiché sur le site de prime react; il est prêt à être utilisé.

