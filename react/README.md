# Como instalar compontes ccon estilos CSS para react.

## Primero creamos un proyecto de Vite

Nos situamos en el directorio que desemos y en la terminal escribimos el siguinte comando y nos dejamos guiar por las opciones

> **Terminal:** 
```bash
npm create vite@latest.
```
---
---
# Instalando Tailwind CSS y DaisyUI


> **Terminal:**
```bash
npm install tailwindcss@latest @tailwindcss/vite@latest daisyui@latest
```

### Configurando Tailwind CSS para Vite

> **En el arrchivo vite.config.js:**
```bash
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss()
  ],
});
```

Debemos ademas poner Tailwind CSS and daisyUI en nustros archivos CSS (y remover los estilos viejo)

> **src/app.css y src/main.css**
```bash
@import "tailwindcss";
@plugin "daisyui";
```
> **Link:** https://daisyui.com/docs/install/vite/
---
---

# Instalando Bootstrap para React
> **Terminal:**
```bash
npm install react-bootstrap bootstrap
```
### Importación de componentes
En lugar de toda la biblioteca se importan componentes individuales como por ejemplo un boton con el siguinte comando en el arrchivo requerido
```bash
react-bootstrap/Button
```
Al hacerlo, solo se incorporan los componentes específicos que utiliza, esto puede reducir significativamente la cantidad de código.

```bash
import Button from 'react-bootstrap/Button';

// o simplemente
import { Button } from 'react-bootstrap';
```
### Hojas de estilo
Porque React-Bootstrap no depende de una versión muy precisa de Bootstrap, no realizamos envíos con ningún CSS incluido. Sin embargo, en algunos hoja de estilo es obligatorio para utilizar estos componentes.

**CSS**
```bash
{
  /* La siguientee linea de comanddo puede ser incluida en src/index.js o App.js */
}
import 'bootstrap/dist/css/bootstrap.min.css';
```
Cómo y qué estilos de Bootstrap incluyes depende de ti, la forma más sencilla es incluir los últimos estilos de la CDN.
> **main.jsx**
```bash
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css"
  integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7"
  crossorigin="anonymous"
/>
```
> **Link:** https://react-bootstrap.netlify.app/docs/getting-started/introduction
---
---

# Usando React Bulma Components
> **Terminal:**
```bash
npm install react-bulma-components
```
### Cómo usarlos
Dee forma individual se impotan een cada hoja de codigo los lmento a utilizar. Por ejemplo:

```bash
import React from 'react';
import 'bulma/css/bulma.min.css';
import { Button } from 'react-bulma-components';

export default () => (
  <Button color="primary">My Bulma button</Button>
)
```
Los formularios son importados como una clase formularios.
``` bash
import { Form } from 'react-bulma-components';

const { Input, Field, Control, Label } = Form;
```

> **Link:** https://react-bulma.dev/en/storybook

---
---