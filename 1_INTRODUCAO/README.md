# O que é Node.js?

- O <font color="#32CD32">**Node.js**</font> é uma runtime de JavaScript;
- Ou seja, <font color="#32CD32">**uma biblioteca utilizada por um compilador**</font> durante a execução do programa;
- Que está construída na <font color="#32CD32">**V8 engine**</font> (escrita em C++) da Google;
- Possibilitando criar softwares em JS no lado do servidor;
- Temos então um código JS rodando em C++ para garantir <font color="#32CD32">**alta performance**</font>;

# O que é npm?

- O <font color="#32CD32">**npm**</font> é um gerenciador de pacotes do Node;
- Vamos poder utilizar <font color="#32CD32">**bibliotecas de terceiros**</font>, baixando elas pelo npm;
- E também <font color="#32CD32">**executar determinados scripts**</font> no nosso programa;
- Dificilmente um software em Node.js não utiliza o npm;
- Os módulos externos ficam numa pasta chamada <font color="#32CD32">**node_modules**</font>;
- Ela deve ser descartável, ou seja, a cada instalação do projeto baixamos todos os pacotes novamente;

# Instalação Node Windows

- O download do Node.js é feito no site oficial: <font color="#32CD32">**nodejs.org**</font>;
- Vamos baixar um arquivo <font color="#32CD32">**.msi**</font>, que é o instalador;
- É interessante saber que o <font color="#32CD32">**npm**</font> vem junto do Node;
- Após a instalação podemos testar o Node e o npm em um terminal, para validar a instalação
- Note que os binários precisam estar no <font color="#32CD32">**PATH**</font>, este passo está na instalação do Node;

# Instalação Node Linux

- O download do Node.js é feito no site oficial: <font color="#32CD32">**nodejs.org**</font>;
- Vamos baixar um executável que inicializa a instalação;
- Note que o <font color="#32CD32">**npm**</font> vem junto do Node;
- Após a instalação precisamos validar em um <font color="#32CD32">**terminal**</font>;

# Instalação VS Code

- Ao longo do curso o editor utilizado será o <font color="#32CD32">**VS Code**</font>;
- Ele tem algumas vantagens em trabalhar com Node também, como o <font color="#32CD32">**terminal integrado**</font>;
- Além de ser <font color="#32CD32">**atualizado constantemente**</font>, é mantido pela Microsoft;
- Muito utilizado no <font color="#32CD32">**ambiente corporativo**</font>;

# Executando o Node

- Na maioria das vezes <font color="#32CD32">**estaremos executando o Node via arquivos**</font> do nosso projeto;
- Porém é possível também <font color="#32CD32">**executá-lo via terminal**</font>;
- Basta digitar: node
- O Node.js possui todas as <font color="#32CD32">**funcionalidades de JavaScript**</font>;
- O nome do recurso é <font color="#32CD32">**REPL**</font> (Read Evaluate Print Loop)

# Nosso primeiro programa

- Agora vamos criar algo mais sólido, um <font color="#32CD32">**programa simples baseado em um arquivo**</font>;
- A extensão dos arquivos de Node serão <font color="#32CD32">**.js**</font>
- Vamos executar o arquivo com o comando: <font color="#32CD32">**node nomedoarquivo**</font>
