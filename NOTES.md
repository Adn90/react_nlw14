# Exports Nomeados

```tsx
export function App() { // export nomeado
  return <h1>Here we go again!</h1>
}
```

exportação noemada ajuda a manter a consistência dos nomes de componentes.
Com exportação padrão, o nome do componente pode ser modificado, no nomeadom é preciso
passar entre { componente }

```tsx
function App() {
  return <h1>Here we go again!</h1>
}
export default App 

// export default \\

import QualquerCoisa from './app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QualquerCoisa />
  </React.StrictMode>,
)
```

```tsx
export function App() {
  return <h1>Here we go again!</h1>
}

// export nomeado \\

import { App } from './app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

## scripts

```json
{
  "name": "nlw-expert-notes",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite", // desenv
    "build": "tsc && vite build", // prod
    "preview": "vite preview" // visualização de como seria prod
  }
}

```

## Render

```html
<div id="root"></div>
<script type="module" src="/src/main.tsx"></script>
```

```tsx
// get element id root e render componente <App />
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

> html dentro do js é um jsx. É apenas uma representação de html e convertido depois para jsx

```tsx
export function App() {
  return <h1>Here we go again!</h1>
}

// react gera o html por baixo
```

## Tailwind config

quais arquivos do vão conter classes do tailwind

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // todos aquivos dentro de source com extensões { ... }
  ],
  theme: {
    extend: { // extende funcionalidade a o tailwind
        colors: {
            rocketseat: '#8257e6'
        },
        fontFamily: {
            sans: ['Inter var', ...defaultTheme.fontFamily.sans], // Inter, senão carregar font sans-serif padrão do sistema
        }
    },
  },
  plugins: [],
}
```

```html
<body class="bg-rocketseat text-slate-50 antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
</body>
```

## images

variáveis javascript no html, vão entre chaves no React *

```tsx
/* ./folder/.... para referenciar ondo o arquivo em questão está */
import logo from './assets/logo-nlw-expert.svg';

export function App() {
  return (
    <img src={logo} alt="logo" /> // *
  );
}
```

## Retornando componentes

Não é permitido retorna um ou mais componentes sem um elemento encapsulando esses componentes

```tsx
export function App() {
  return (
    <div>
      <img src={logo} alt="logo" />
      <input type="text" placeholder='Busque em suas notas... '/>
    </div>
  );
}
```

```tsx
/* className no das classes no react (class é palavra reservada em js/ts) */
/* my-12 = 48px; em tailwind, todo valor é x4 - pratica em UX em utilizar multiplos de 4 */
export function App() {
  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6'> {/* mx(margin no eixo x) e my no y */}
      <img src={logo} alt="logo" />
      
      <form className='w-full outline'> {/* outline para ver o elemento */}
        <input 
            type="text" 
            placeholder='Busque em suas notas... '
            className='w-full bg-transparent text-3xl font-semibold tracking-tight placeholder: text-slate-500'
        />
      </form>
    </div>
  );
}

<input   
    /* placeholder: text-slate-500 - só o atributo recebera a propriedade */
    className='w-full bg-transparent text-3xl font-semibold tracking-tight placeholder: text-slate-500'
/>

/* space-y-6 pega todos os elementos que não são o 1ª e aplica margin-top de 6 (pq é espaço no eixo y)  */
<div className='mx-auto max-w-6xl my-12 space-y-6'> {/* mx(margin no eixo x) e my no y */}

<div className='h-px bg-slate-700'></div> {/* h-px de 1px */} // 42 minutos
```