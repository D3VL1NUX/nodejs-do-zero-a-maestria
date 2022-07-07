# O que é NoSQL?

- São bancos de dados focados em **documentos (documents)**;
- A modelagem de dados com relacionamentos é **opcional**;
- **Não utilizamos queries** e sim métodos de classes para trabalhar com os dados;
- As tabelas não existem, temos as **collections**;
- **Não precisamos definir a estrutura** da collection previamente;
- **MongoDB** é um banco NoSQL;

# O que é MongoBD?

- Um banco de dados **orientado a documento**;
- Os dados ficam salvos em **estruturas parecidas com JSON**;
- Frequentemente utilizado com **Node.js**;
- Diferente do SQL temos **índices primários e secundários**;
- Utilizamos um **driver** para conectar a nossa aplicação com MongoDB, semelhante ao MySQL e Sequelize;

# Principais entidades

- **Database**: é onde ficam as nossas collections e dados;
- **Collections**: são como as tabelas nos bancos relacionais, nelas vamos inserir os dados;
- **Documents**: são os dados, no MongoDB tem esta nomenclatura;
- **Collections podem se criadas livremente** a qualquer momento e **não possuem colunas fixas** para os dados;

# MongoDB e JSON

- O tipo de dado inserido na tabela é o **BSON**, uma variação de JSON;
- O BSON é semelhante ao JSON, porém com **recursos a mais**;
- A ** forma de criar um BSON é igual ao JSON**, veja:

```
{
  name: "Anakin",
  age: 42
}
```
