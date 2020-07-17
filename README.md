<h4 align="center">
<img src="./img/logo.png" width="auto" />
</h4>

### :muscle: Projeto

<b>GoBarber</b> é uma aplicação onde são disponibilizados serviços de cabelereiro.
<br>
Os prestadores de serviço se cadastram, e na aplicação web podem ver seus agendamentos e seu perfil.
<br>
Os clientes podem se cadastrar na aplicação mobile e ali ver os prestadores de serviço cadastrados na plataforma e podem agendar um horário com seu cabelereiro favorito, escolhendo um dia e horário disponível.

### :rocket: Tecnologias usadas
Este projeto foi desenvolvido com as seguintes tecnologias:
  - #### Backend:
    - [Node.js](https://nodejs.org/en/)
    - [Express](https://github.com/expressjs/express)
      - [Cors](https://github.com/expressjs/cors)
      - [Multer](https://github.com/expressjs/multer)
    - [TypeOrm](https://github.com/typeorm/typeorm):
      - Postgres
      - MongoDB
    - [IORedis](https://github.com/luin/ioredis)
      - Redis DB
    - [Celebrate](https://github.com/arb/celebrate)
    - [Class-Transformer](https://github.com/typestack/class-transformer)
    - [Handlebars](https://github.com/ericf/express-handlebars)
    - [Node Rate Limiter Flexible](https://github.com/animir/node-rate-limiter-flexible)
    - [JSON Web Token](https://github.com/auth0/node-jsonwebtoken)
    - [AWS SDK](https://github.com/aws/aws-sdk-js)
    - [Nodemailer](https://github.com/nodemailer/nodemailer)
  - #### Frontend:
    - [React](https://pt-br.reactjs.org/)
    - [React Spring](https://github.com/react-spring/react-spring)
    - [Styled-Components](https://github.com/styled-components/styled-components)
    - [Polished](https://github.com/styled-components/polished)
    - [Axios](https://github.com/axios/axios)
    - [Yup](https://github.com/jquense/yup)
    - [Unform](https://github.com/Rocketseat/unform)
    
### 👨🏻‍💻 Execução

Para rodar o projeto:
  - #### Backend:
    - Criar um arquivo <b>.env</b> seguindo o examplo do arquivo <b>.env.example</b>
    - Criar um arquivo <b>ormconfig.json</b> seguindo exemplo do arquivo <b>ormconfig.example.json</b>
    - Criar os containers docker do Postgres, MongoDB e ReadisDB:
      - `docker run --platform=linux --name <nomeescolhido> -e POSTGRES_PASSWORD=<senhaescolhida> -p 5432:5432 -d postgres` -> Criar container docker do Postgres;
      - `docker run --name <nomeescolhido> -p 27017:27017 -d -t mongo` -> Criar container Docker do MongoDB;
      - `docker run --name <nomeescolhido> -p 6379:6379 -d -t redis:alpine` -> Criar container docker do RedisDB;
      - OBS: Se criar os containers com nomes diferentes aos quais estão no arquivo ormconfig.json, alterar o nome e senha dos bancos no código (alterar no arquivo ormconfig e no .env) de acordo com os colocados na criação do container docker;
    - Abrir a pasta do backend no terminal e executar:
      - `yarn` - Para baixar todas as dependências;
      - `yarn typeorm migration:run` -> Para realizar as migrations(criação das tabelas no banco de dados);
      - `yarn dev:server` -> Para executar o servidor NodeJS;
  - #### Frontend Web:
    - Criar um arquivo <b>.env</b> seguindo o examplo do arquivo <b>.env.example</b> 
    - Abrir a pasta web no terminal e executar:
      - `yarn` -> Para instalar todas as dependências;
      - `yarn start` -> Para rodar a aplicação no browser;
  - #### Frontend Mobile:
    - Abrir a pasta mobile no terminal e executar:
      - `yarn` -> Para instalar todas as dependências;
      - Android:
        - Iniciar o avd do android ou conectar o disposito via usb;
        - `adb reverse tcp:3333 tcp:3333` -> Para redirecionar o servidor Nodejs para o avd ou dispositivo;
        - `yarn start` -> Para iniciar o metroblunder;
        - `yarn android` -> Para iniciar o aplicativo no avd ou android;
      - IOS:
        - `yarn ios` -> Para iniciar o aplicativo no emulador;

### :mortar_board: Sobre o projeto

A aplicação foi desenvolvida durante o curso da [RockeSeat <img src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4" alt="rocketseat" width="20" height="20" style="vertical-align:middle" />](https://github.com/Rocketseat) como método de aprendizado das tecnologias de backend, frontend web e mobile, com NodeJS, React e React-Native.
<br>
O curso foi ministrado por [Diego Fernandes](https://github.com/diego3g)

---
