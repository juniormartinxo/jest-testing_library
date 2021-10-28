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
