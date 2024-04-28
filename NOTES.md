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

## Tailwind

```tsx
/* className no das classes no react (class é palavra reservada em js/ts) */
/* my-12 = 48px; em tailwind, todo valor é x4 - pratica em UX em utilizar múltiplos de 4 */
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

<div className='h-px bg-slate-700'></div> {/* h-px de 1px */} 
```

### Valores customizados

```tsx
{/*Basta passar a propriedade e no valor, colocar entre []*/}
<div className='h-[20px] bg-slate-700'></div>
<div className='grid grid-cols-3 auto-rows-[250px]'></div>

{/*em tailwind, uma cor/valor(múltiplo de 5) determina opacidade*/}
<div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-white/0'></div>
```

### Dicas

```tsx
{/* posição relativa */}
<div className='rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative pointer-events-none'>
  <span className='text-sm font-medium text-slate-300'>
    há 2 dias
  </span>
  <p className='text-sm leading-6 text-slate-400'>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos non ut quam necessitatibus repellendus, dolores dolorem error beatae libero excepturi exercitationem maxime laborum in fuga eos culpa? Debitis, consectetur corporis.
  </p>

  {/* posição absoluta - seta as direções  = 0, mas em relação ao topo, quer metedade do graditente de baixo para cima, das cores from -> to */}
  {/* pointer-events-none - o elemento não passa mas a ter clique, no caso iria problemas ao tentar copiar texto na área do gradiente*/}
  <div className='absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-white/0 pointer-events-none'></div>
</div>
```

```tsx
// let btnClass = 'text-left rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative hover:ring-2 hover:ring-slate-600 outline-none focus-visible:ring-2 focus-visible:ring-lime-400';
  let btnBlockStyle = 'text-left rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative';
  let btnHoverStyle = 'hover:ring-2 hover:ring-slate-600';
  // remover focus padrão do SO no browser, ao navegar com tab (outline-none) 
  // diferente do focus, focus-visible só vai ter o focus ao naver por tab
  let btnFocusStyle = 'outline-none focus-visible:ring-2 focus-visible:ring-lime-400';
  return(
      <button className={`${btnBlockStyle} ${btnHoverStyle} ${btnFocusStyle}`}></button>
  );
```