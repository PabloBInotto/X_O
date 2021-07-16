# Jogo da Velha
> Aplicação em nodejs, socket.io e mongoBD

A diferencial desse projeto foi enviar os dados das jogadas para o servidor e salvar na base de dados, usando o evento do socket.io.

Foi desenvolvida duas versões:
 - v1.0 sem base de dados e v2.0 com base de dados;

## Instalação

Primeiramente deve ser instalado o modoDB.
Linux:
No ambiente de desenvolvimento foi utilizado o linux (Arch-Linux). Uma distribuição do Manjaro!
Nota: Cada distribuição linux pode ter repositórios e formas diferentes para a instalação

par instalar no manjaro, siga os procedimento s abaixo: 

1 - Abra o terminal e insira a linha de código abaixo e tecle enter (sera solicitado a senha e a confirmação de instalação em alguns momentos)
```sh
git clone https://aur.archlinux.org/mongodb-bin.git
```
2 - Acesse a pasta que foi clonada:
```sh
cd mongodb-bin
```
3 - realize a instalação:
```sh
run makepkg -si
```
4 - Inicialização do mongoDB:
```sh
systemctl start mongodb
```
5 - Abrir o mongoDB:
```sh
systemctl enable mongodb
```
#### Para instalação em outras distribuições linux, por favor verificar o link abaixo:
https://docs.mongodb.com/manual/administration/install-on-linux/

#### Instalação no macOS
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/

#### Instalação no windows (Muitas vezes é necessário definir variável de ambiente):
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/

## Instalação da aplicação "Jogo da velha":

1 - Siga com os procedimentos abaixo:
1.2 Baixe os arquivos do repositório.

- Versão com base de dados:
- - arquivo zip: https://github.com/PabloBInotto/X_O/archive/refs/tags/v2.0.zip
- - arquivo tar: https://github.com/PabloBInotto/X_O/archive/refs/tags/v2.0.tar.gz

2 - Descompacte os aquivos e acesse o diretório dos arquivos com o terminal ou Prompt de commando.

3 - Necessário ter o nodeJS instalado:
Nota: (link para instalar o node: https://nodejs.org/en/download/).

4 - Para instalar execute o comando:
```sh
npm install
```

5 - Para iniciar o servidor nodeJS, execute o commando:
```sh
npm start
```

6 - Por último, abra um navegador de internet (Não foi testado no internet explorer, somente no Chrome e Firefox) e acesse o link abaixo:

http://localhost:3000/

7 - Para jogar, clique no botão jogar.

Nota: Para a versão sem base de dados é somente necessário baixar, descompactar, acessar a pasta do arquivo descompactado e clicar no arquivo "index.html":

- Versão sem base de dados: 
- - arquivo zip: https://github.com/PabloBInotto/X_O/archive/refs/tags/v1.0.zip
- - arquivo tar: https://github.com/PabloBInotto/X_O/archive/refs/tags/v1.0.tar.gz

#### Espero que gostem! ;)