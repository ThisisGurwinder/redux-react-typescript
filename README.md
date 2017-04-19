# Redux React with TypeScript Seed
I'm fullstack developer about JS. Normal i using AngularJS to build a client web. When i come to DSV company like a developer. It help me know more about React. But when research a example for redux typescript. I see project so hard. I want build a client seed very simple. It use only Redux + React + TypeScript + Webpack + Docker. It's simple and you can add more libary you want and custom this seed. 
## Why [Redux](https://github.com/reactjs/redux) + [TypeScript](https://www.typescriptlang.org/) + [Webpack](https://webpack.github.io/) + [Docker](https://www.docker.com/) :

* Typescript so good. It make you can handle code. Write interface,.... of OOP easy. TypeScript have supported for type JSX of React. We will have a good unit test with TypeScript. If you is a C#, Java developer want know about frontend framework. TypeScript is good for you.

* Redux is a predictable state container for JavaScript apps.It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

* Webpack is a bundle libary. Webpack recommend by React. Webpack help your app know Jsx, js, scss, ts, tsx. It really strong and useful.

* Docker: Docker help you build a enviroment, build CI. You can deploy app easy with only 1 command line.

* SASS: Simple for write beautiful code style for your web application. Better than CSS. 
# Using
Clone seed
```
git clone https://github.com/cptrodgers/typescript-react-seed.git
cd typescript-react-seed
npm install
```
Now we have 2 env for seed

### Dev ENV
```sh
//In terminal typing below code
npm run dev
```
Serve redux seed running port 8888.
### Production ENV
```sh 
//In terminal typing below code
npm run production
```
Serve redux seed running port 8888 and not watch
### With Dockerfile and Makefile
I implement Dockerfile and Makefile for easy to build container like a client web in a project. 
To use docker. You must know docker compose and docker engine. But you can easy see your container with this code.
```
sudo docker run -d --name local_registry -p 5000:5000 registry:2
sudo make build
```
You will see container push in a project at port 5000. But if you want use this. You must know docker compose and add some container like nginx proxy container, mongoDB container, backend container. And push 4 container to TCP.
Docker Engine:  https://docs.docker.com/engine/
Docker Compose: https://docs.docker.com/compose/reference/build/
# Contact
```
* email: cptrodgers@gmail.com
* linkedin: www.linkedin.com/in/nguyen-hien-16aa63121
* Rodgers - Ho Chi Minh City
```
# Libary use
<img src="https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67" width="200px"><img src="https://facebook.github.io/react/img/logo.svg" width="200px"><img src="https://princetarar.files.wordpress.com/2016/07/typescript-logo-585x200.png?w=640" width="200px"><img src="https://camo.githubusercontent.com/c6ddd9ff94ce584804e95bb55b3f2416dd553843/68747470733a2f2f662e636c6f75642e6769746875622e636f6d2f6173736574732f313336353838312f313931383337372f34383062326664362d376462632d313165332d386261302d3733346661663331353962382e706e67" width="200px">
<img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Docker_%28container_engine%29_logo.png" width="200px"><img src="http://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" width="200px">
