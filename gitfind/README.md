<!-- ################################################################################################################################################################################################# -->
<!-- ## >_ Titulo -->
<!-- ################################################################################################################################################################################################# -->

<div style="background-image: url('https://github.com/Hueini/images/blob/main/23485382_42.jpg?raw=true'); background-repeat: no-repeat; background-attachment: fixed; padding:  40px; overflow: hidden;">

<h1 align="center" style="color: #1e52cc; align-items: center;">
  <img src="https://github.com/Hueini/images/blob/main/HD.PNG?raw=true" alt="Imagem Circular" style="width: 50px; height: 50px; border-radius: 50%; margin-right: 10px;">
  Hueini David
</h1>
<!-- ################################################################################################################################################################################################# -->
<!-- ## >_ Hueini David /? -->
<!-- ################################################################################################################################################################################################# -->

## >_ Hueini David /?

Olá meu nome é Hueini David,

Formado em Ciência da Computação, estudante de Pós-Graduação em Inteligência Artificial e Aprendizagem de Máquina. Em busca de novas oportunidades, conhecimento e inovação.

Acredito que a tecnologia tem o poder de transformar vidas, diante disto, compartilho um pouco de mim e do meu conhecimento. Espero que goste e fique à vontade para entrar em contato comigo...

<!-- ################################################################################################################################################################################################# -->
<!-- ## >_ Conecte-se comigo -->
<!-- ################################################################################################################################################################################################# -->

## >_ Conecte-se comigo

<div style="display: inline-flex; gap: 10px; align-items: center;">
🌐 
<a href="https://hueini.com.br" target="_blank" style="text-decoration: none;">
<span style="display: inline-flex; align-items: center; background-color: #000; color: white; padding: 6px 12px; border-radius: 12px; font-size: 12px; font-weight: bold;">www.hueini.com.br</span>
</a>
  
<br>

<img src="https://raw.githubusercontent.com/Hueini/images/261e2442dcb9c43f7add7817c505e52e60703b28/dio.svg" alt="DIO" style="height: 12px; margin-right: 8px; ">
<a href="https://www.dio.me/users/hueini_david" target="_blank" style="text-decoration: none;">
<span style="display: inline-flex; align-items: center; background-color: #000; color: white; padding: 6px 12px; border-radius: 12px; font-size: 12px; font-weight: bold;">DIO Hueini Profile</span>
</a>
 
</div>

<br>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-000?style=for-the-badge&logo=linkedin&logoColor=0E76A8)](https://www.linkedin.com/in/hueini-david-917b7230b)
[![YouTube](https://img.shields.io/badge/YouTube-000?style=for-the-badge&logo=youtube&logoColor=FF0000)](https://www.youtube.com/@DEV-HUEINI)
[![GitHub](https://img.shields.io/badge/GitHbt-000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/DEV-HUEINI)
[![E-mail](https://img.shields.io/badge/-hueini.david@gmail.com-000?style=for-the-badge&logo=gmail&logoColor=EA4335)](mailto:hueini.david@gmail.com)



## >_ Calculadora em React

Projeto desenvolvido para o curso **DIO - Formação React Developer**, permite consultar Usuários e retornar Repositórios do GitHub através de APIs integradas ao React. 

## >_APIs do GitHub Utilizadas
- Usuário: https://api.github.com/users/DEV-HUEIN
- Repositórios: https://api.github.com/users/DEV-HUEINI/repos  

## >_Imagem do Projeto
[![GitFind](https://raw.githubusercontent.com/DEV-HUEINI/dio-formacao-react-developer/refs/heads/main/gitfind/public/assets/gitfind.png)](https://gitfind.hueini.com.br/#inicio)


## Índice

<details open>
  <table>
    <tr><td>1.</td><td> <a href="#sobre-o-projeto">1. Sobre o Projeto</a> </td></tr>
    <tr><td>2.</td><td> <a href="#tecnologias-utilizadas">2. Tecnologias Utilizadas</a> </td></tr>
    <tr><td>3.</td><td> <a href="#como-executar-o-projeto">3. Como Executar o Projeto</a> </td></tr>
    <tr><td>4.</td><td> <a href="#funcionalidades">4. Funcionalidades</a> </td></tr>
    <tr><td>5.</td><td> <a href="#estrutura-do-projeto">5. Estrutura do Projeto</a> </td></tr>
  </table>
</details>

## 1. Sobre o Projeto

O **GitFind** é um projeto desenvolvido para o curso **DIO - Formação React Developer**, com o objetivo de praticar os conceitos fundamentais de React, como componentes, estado, e consumo de APIs. O projeto permite buscar perfis de usuários no GitHub e exibir informações detalhadas sobre eles.

## 2. Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para a criação de interfaces de usuário.
- **JavaScript (ES6+)**: Linguagem de programação para implementar a lógica da aplicação.
- **CSS**: Para estilização dos componentes.
- **HTML5**: Estrutura básica da página.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **GitHub API**: API utilizada para buscar informações dos perfis de usuários.

## 3. Como Executar o Projeto

Para rodar o projeto localmente, siga os seguintes passos:

### Pré-requisitos:
- Node.js instalado
- Gerenciador de pacotes npm (ou yarn)

### Passo a passo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/DEV-HUEINI/DIO_FORMACAO_REACT_DEVELOPER.git
    ```

2. Navegue até o diretório do GitFind:
    ```bash
    cd DIO_FORMACAO_REACT_DEVELOPER/gitfind
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Inicie o projeto:
    ```bash
    npm start
    ```

5. Acesse o projeto no navegador:
    ```
    http://localhost:3000
    ```

## 4. Funcionalidades

- Buscar perfis de usuários no GitHub.
- Exibir informações detalhadas sobre os usuários, como repositórios, seguidores e seguindo.
- Interface intuitiva com campo de busca e exibição de resultados.

## 5. Estrutura do Projeto

A estrutura do projeto segue a organização de componentes do React:

```
GitFind/
│
├── node_modules/
├── public/
│   ├── index.html
│   └── assets/
│       └── gitfind.png
├── src/
│   └── components/
|          ├── assets/
|          |      |
|          |      └── imgbackground.png
|          |      
|          ├── components/
|          |        |
|          |        ├── Header/
|          |        |     ├── index.js
|          |        |     └── styles.css
|          |        |
|          |        └── ItemList
|          |              ├── index.js
|          |              └── styles.css
|          └── pages/
|                 └── Home
|                       ├── index.js
|                       └── styles.css
|
|
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```
