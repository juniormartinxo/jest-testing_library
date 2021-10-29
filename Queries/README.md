# Queries
São usadas para localizar elementos na página. Podem ser do tipo `get`, `find`e `query`. As querie podem retornar um erro ou uma promessa dependendo de qual será utilizada.

## Introdução 
O princípio básico para se criar testes de componentes é entender que deve-se focar em criar testes que coloquem a prova a funcionalidade do componente, se ele está se comportando da forma correta para o usuário e evitar ao máximo fazer testes da implementação.

Quanto mais seus testes se assemelham à forma como o software é usado, mais confiança eles podem lhe dar.

----------
### 1) Tipos de consultas [🔗](https://testing-library.com/docs/queries/about#types-of-queries)

As consultas podem se dividir em dois tipos, sendo:

#### 1.a) Busca de elementos únicos
- `getBy...`
- `queryBy...`
- `findBy...`

#### 1.b) Busca de múltiplos elementos
- `getAllBy...`
- `queryAllBy...`
- `findAllBy...`
  -  Por se tratar de uma promessa, aceita `waitFor` como parâmetro.

-----
### 2) Usando consultas
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

### 3) TextMatch
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

**Não é possível localizar**
```js
// full string does not match
screen.getByText('Goodbye World')

// case-sensitive regex with different case
screen.getByText(/hello world/)

// function looking for a span when it's actually a div:
screen.getByText((content, element) => {
  return element.tagName.toLowerCase() === 'span' && content.startsWith('Hello')
})
```
#### 3.a) Precisão
Nas consultas onde é utilizado `TextMatch` é possível passar um objeto como argumento que pode conter opções que afetam a precisão da correspondência de string:

##### 3.a.1) Exact
- Para o argumento do `exact`o padrão é `true` corresponde a strings completas, com distinção entre maiúsculas e minúsculas. Quando `false`, corresponde a substrings e não diferencia maiúsculas de minúsculas;
- Não funciona com `regex`ou `function`;

##### 3.a.2) Nomalizer
- Por padrão, o `normalizer` retira os espaços em branco do início e no final do texto além de alterar espaços em branco adjacentes em um único espaço.
- Você pode fornecer a função `getDefaultNormalizer` para obter um normalizador embutido, seja para ajustar essa normalização ou para chamá-lo de seu próprio normalizador.

#### **Exemplo**
  - correspondência com o texto sem cortar:
```js
screen.getByText('text', {
  normalizer: getDefaultNormalizer({trim: false}),
})
```
  - remover alguns caracteres Unicode, mantendo alguns (mas não todos) do comportamento de normalização integrado:
```js
screen.getByText('text', {
  normalizer: str =>
    getDefaultNormalizer({trim: false})(str).replace(/[\u200E-\u200F]*/g, ''),
})
```
-----

### 4) Debugging
Por conveniência, o `screen` possui um método para debug, que na verdade um atalho para `console.log(prettyDOM())`. Ele oferece suporte à depuração do documento, de um único elemento ou de uma matriz de elementos.

```js
import {screen} from '@testing-library/dom'

document.body.innerHTML = `
  <button>test</button>
  <span>multi-test</span>
  <div>multi-test</div>
`

// debug document
screen.debug()
// debug single element
screen.debug(screen.getByText('test'))
// debug multiple elements
screen.debug(screen.getAllByText('multi-test'))
```

4.a) Testing Playground
Para debugar utilizando o [testing-playground](https://testing-playground.com/) utilize o método `logTestingPlaygroundURL()`

```js
import {screen} from '@testing-library/dom'

document.body.innerHTML = `
  <button>test</button>
  <span>multi-test</span>
  <div>multi-test</div>
`

// log entire document to testing-playground
screen.logTestingPlaygroundURL()
// log a single element
screen.logTestingPlaygroundURL(screen.getByText('test'))
```
