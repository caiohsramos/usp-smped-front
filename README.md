# Documentação do Sistema de Monitoramento da [SMPED](https://www.prefeitura.sp.gov.br/cidade/secretarias/pessoa_com_deficiencia/) de São Paulo

**Mais detalhes:**  
[Sistema de Monitoramento da SMPED](https://tecs.ime.usp.br/MAC0213/projeto-1.pdf?fbclid=IwAR1Y-Ak710FLiXDv8FHAdmFotZllZrNcI2GXricxreO1dNVCbSVcYzIXmRY)

## Pré-requisitos
Para executar este projeto você precisa ter instalado o [Nodejs](https://nodejs.org/en/) em seu computador, versão 8 ou superior.  

Na pasta do projeto, no terminal, execute o comando `npm install` para instalar as dependências (serão baixadas dentro da pasta node_modules que não fica versionada);

Após isto execute o comando `npm start`.

## Detalhes técnicos
* Este projeto foi feito com [Create React App](https://github.com/facebook/create-react-app).
* Estamos utilizando CSS puro (src/App.css)
* Utilizamos também a biblioteca de componente [Material-UI](https://material-ui.com/)
* Este projeto depende da sua [API](https://gitlab.com/LABXP2018/smped-api/)

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

A integração contínua executa os testes automatizados antes de efetuar o deploy, e caso falhem o deploy da aplicação não é efetuado. 

## Arquitetura do projeto

![UML_Front](https://gitlab.com/LABXP2018/smped-front/uploads/12ddc05f28af6a9ccec765d726bbae40/UML_Front.png)
O projeto contém **páginas** e as páginas contém **componentes**.

### Login
**`src/pages/login`**
![login](https://gitlab.com/LABXP2018/smped-front/uploads/ff02120abfa064a5e9c6a2eb7fd53dde/login.png)


### Dashboard
**`src/pages/dashboard`**  
Esta página é carregada dentro do `src/pages/main` e dentro do **Main** tem o **menu** com todos os links para as páginas.  
O dashboard é a primeira página a ser carregada após o login.
![dashboard](https://gitlab.com/LABXP2018/smped-front/uploads/a9249ee9e637f6fc5665e736cbe04282/dashboard.png)

### NewForm
**`src/pages/newForm`**  
Criador de formulários  
![NewForm](https://gitlab.com/LABXP2018/smped-front/uploads/cb890c58d20b6019388a60590b6cf7e3/NewForm.png)

#### FormItem
**`src/pages/newForm/components/FormItem`**  
Um formulário tem vários itens, ou seja, um form item é composto de label, input, e se vai ser campo obrigatório, e o tipo do campo (texto ou numérico):  
![newForm_formItem](https://gitlab.com/LABXP2018/smped-front/uploads/9305ebc239762f88d8b99c76f2e31503/newForm_formItem.png)


### Form
**`src/pages/form`**  
Página para visualizar o formulário criado pelo componente **NewForm**
![form](https://gitlab.com/LABXP2018/smped-front/uploads/dc15dc5f9c2fc110a5b8237e26490f43/form.png)


### Invite
**`src/pages/invite`**  
Página de cadastro de usuários, onde definimos, o username (login), email e seu papel no sistema. Quando se cria um "invite" (convite), o sistema envia um email para o novo usuário com o link para a pessoa terminar seu cadastro, informando uma senha.  

![invite](https://gitlab.com/LABXP2018/smped-front/uploads/5ba0aa3739269af2d79888b40be95124/invite.png)








