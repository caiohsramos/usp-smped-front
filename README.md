# Documentação do Sistema de Monitoramento da [SMPED](https://www.prefeitura.sp.gov.br/cidade/secretarias/pessoa_com_deficiencia/) de São Paulo

**Mais detalhes:**  
[Sistema de Monitoramento da SMPED](https://tecs.ime.usp.br/MAC0213/projeto-1.pdf?fbclid=IwAR1Y-Ak710FLiXDv8FHAdmFotZllZrNcI2GXricxreO1dNVCbSVcYzIXmRY)

## Pré-requisitos
Este projeto foi feito com [Create React App](https://github.com/facebook/create-react-app).  

Para executar este projeto você precisa ter instalado o [Nodejs](https://nodejs.org/en/) em seu computador, versão 8 ou superior.  

Na pasta do projeto, no terminal, execute o comando `npm install` para instalar as dependências (serão baixadas dentro da pasta node_modules que não fica versionada);

Após isto execute o comando `npm start`.

### Iniciando a aplicação com `npm start`

Este comando irá inicializar a aplicação em modo de desenvolvimento.<br>
Abra no navegador a url [http://localhost:3000](http://localhost:3000) para ver a aplicação em seu computador.

A cada modificação no código fonte, o navegador será recarregado automaticamente (live-reload).<br>
Também você poderá ver os erros no console do navegador.


### Usuário padrão do sistema
O usuário padrão é `admin` e senha `password`. Utilize ele para o ambiente de desenvolvimento.

### Testes com `npm test`

Este comando executa os testes de maneira interativa e fica observando modificações. Estamos usando Jest, que basicamente é uma comparação de alterações de tela usando snapshots.  

Para mais detalhes sobre o Jest e testes, veja [running tests](https://facebook.github.io/create-react-app/docs/running-tests)

### Integração contínua com Kuberbetes

Quando um commit é feito na master, a integração contínua faz o deploy da aplicação neste endereço para homologação:
[http://labxp2018-smped-front.35.238.186.104.nip.io/](http://labxp2018-smped-front.35.238.186.104.nip.io/)


