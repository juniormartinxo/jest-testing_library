# TDD com CRA | ReactJS | Typescript | Jest + Testing Library
Repositório para estudos de TDD

<div align="center">
  
![cra_32](https://user-images.githubusercontent.com/4163340/139855760-4fb72d33-c88e-4406-9200-7322913feabf.png)
![react_32](https://user-images.githubusercontent.com/4163340/139123716-da45c265-1b94-412c-8a1c-3bc86f393869.png)
![ts_32](https://user-images.githubusercontent.com/4163340/139123802-6ad0a212-1114-43f3-88aa-9975bb1b2660.png)
![jest_32](https://user-images.githubusercontent.com/4163340/139122285-877bf573-9f57-472d-9f79-92e92ced233f.png)
![testing_library_32](https://user-images.githubusercontent.com/4163340/139123134-e6a4c480-87a6-4a46-83eb-e74b02dd98cc.png)
</div>

### 1) Criando seu App React
Instale sua aplicação com Create React App `yarn create react-app my-app --template typescript`

Utilizando o CRA para criar seu app React o Jest já é instalado e configurado automaticamente.

-----

### 2) Instalação do Testing Library

I) Instale a lib para testar o React DOM `yarn add @testing-library/react`

**Documentação:**
  - [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
  - [Reacting Testing Library](https://testing-library.com/docs/react-testing-library/intro/)


II) Instale a lib para testar o React Hooks `yarn add react-hooks-testing-library`

**Documentação:**
  - https://react-hooks-testing-library.com/

-----

### 3) Arquivo `jest.config.js`
Crie o arquivo no diretório principal da sua aplicação para que o jeste reconheça todos os arquivos de teste.
```js
module.exports = {
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
}
```

 Coloque os arquivos de testes ao lado do arquivo que será testado
-----

### 4) Alteração no `package.json` (So se você quiser)
Altere a opção `scripts` -> `test` para:
```js
"test": "react-scripts test --onlyChanged --color --verbose",
```

| Comando | Função |
| ------- | ------ |
| `onlyChanged` | Tenta identificar quais testes devem ser executados baseado nos arquivos modificados no repositório atual. Só funciona se você estiver rodando testes em um repositório git/hg no momento e requer um gráfico de dependências estático (ou seja, sem "requires" dinâmicos). |
| `color` | Força os resultados dos testes a serem destacados mesmo se o stdout não for "TTY". |
| `verbose` | Exibe resultados de testes individuais com a hierarquia da suite de testes. |

*Para mais opções [acesse a página de "Opções CLI do Jest"](https://jestjs.io/pt-BR/docs/cli)*
