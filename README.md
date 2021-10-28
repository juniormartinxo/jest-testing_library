# TDD com ReactJS | Typescript | Jest + Testing Library
Repositório para estudos de TDD

<div align="center">
  
![react_32](https://user-images.githubusercontent.com/4163340/139123716-da45c265-1b94-412c-8a1c-3bc86f393869.png)
![ts_32](https://user-images.githubusercontent.com/4163340/139123802-6ad0a212-1114-43f3-88aa-9975bb1b2660.png)
![jest_32](https://user-images.githubusercontent.com/4163340/139122285-877bf573-9f57-472d-9f79-92e92ced233f.png)
![testing_library_32](https://user-images.githubusercontent.com/4163340/139123134-e6a4c480-87a6-4a46-83eb-e74b02dd98cc.png)
</div>

### Criando seu App React
Instale sua aplicação com Create React App `yarn create react-app my-app --template typescript`

Utilizando o CRA para criar seu app React o Jest já é instalado e configurado automaticamente.

### Instalação do Testing Library

I) Instale a lib para testar o React DOM `yarn add @testing-library/react`

**Documentação:**
  - [DOM Testing Library](https://testing-library.com/docs/dom-testing-library/intro)
  - [Reacting Testing Library](https://testing-library.com/docs/react-testing-library/intro/)


II) Instale a lib para testar o React Hooks `yarn add react-hooks-testing-library`

**Documentação:**
  - https://react-hooks-testing-library.com/


### Arquivo `jest.config.js`
Crie o arquivo no diretório principal da sua aplicação
```js
module.exports = {
  modulePathIgnorePatterns: ['<rootDir>/dist/'],
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },
}
```
