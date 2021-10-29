# Queries
São usadas para localizar elementos na página. Podem ser do tipo `get`, `find`e `query`. As querie podem retornar um erro ou uma promessa dependendo de qual será utilizada.

## Introdução 
O princípio básico para se criar testes de componentes é entender que deve-se focar em criar testes que coloquem a prova a funcionalidade do componente, se ele está se comportando da forma correta para o usuário e evitar ao máximo fazer testes da implementação.

Quanto mais seus testes se assemelham à forma como o software é usado, mais confiança eles podem lhe dar.

----------
### Tipos de consultas [🔗](https://testing-library.com/docs/queries/about#types-of-queries)

As consultas podem se dividir em dois tipos, sendo:

#### Busca de elementos únicos
- `getBy...`
- `queryBy...`
- `findBy...`

#### Busca de múltiplos elementos
- `getAllBy...`
- `queryAllBy...`
- `findAllBy...`
  -  Por se tratar de uma promessa, aceita `waitFor` como parâmetro.

-----
### Usando consultas
As consultas realizadas pela *DOM Testing Library* necessitam que seja passado um `container` no primeiro argumento e se você estiver tentando referenciar algo que esteja dentro do `documento.body`é aconselhável que se utilize o `render` e o `screen` da própria biblioteca, veja o exemplo:

```js
import {render, screen} from '@testing-library/react'

// renderiza o componente
render(
  <div>
    <label htmlFor="example">Example</label>
    <input id="example" />
  </div>,
)

// utiliza o screen para capturar o componente renderizado e faz a busca
const exampleInput = screen.getByLabelText('Example')
```

a) Exemplo utilizando `screen`
```js
const inputNode1 = screen.getByLabelText('Username')
```

b) Exemplo sem utilizar `screen`
```js
const container = document.querySelector('#app')
const inputNode2 = getByLabelText(container, 'Username')
```

-----

### TextMatch
Alguma consultas aceitam `TextMatch` como argumento, portanto aceitam *string*, *regex* ou uma função que retorna `true` quando uma correpondência é encontrada ou `false` no caso de uma imcompatibilidade.

#### Utilizando o TextMatch

Para o seguinte HTML
```html
<div>Hello World</div>
```

**Localizando com String**
```js
screen.getByText('Hello World') // full string match
screen.getByText('llo Worl', {exact: false}) // substring match
screen.getByText('hello world', {exact: false}) // ignore case
```

**Localizando por REGEX**
```js
screen.getByText(/World/) // substring match
screen.getByText(/world/i) // substring match, ignore case
screen.getByText(/^hello world$/i) // full string match, ignore case
screen.getByText(/Hello W?oRlD/i) // substring match, ignore case, searches for "hello world" or "hello orld"
```

