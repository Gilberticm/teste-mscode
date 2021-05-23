<div align="center">
    <img src="img/footer-logo-2.png"/>
    <h1 style="margin-left: 20px">Projeto MSCode</h1>
</div>

## Escopo do Projeto
Foi solicitado um **site** com formulário de pesquisa para verificar a satisfação dos clientes em relação a empresa Móveis Simonetti.

## Frameworks e Tecnologias Utilizadas

|Tecnologias|Extensão|Descrição|
|-|-|-|
|[HTML5](#html)|.html|HTML abreviação para a expressão inglesa HyperText Markup Language, que significa: "Linguagem de Marcação de Hipertexto" é uma linguagem de marcação utilizada na construção de páginas na Web.|
|[CSS](#css)|.css|CSS é chamado de linguagem Cascading Style Sheet e é usado para estilizar elementos escritos em uma linguagem de marcação como HTML.|
|[SASS](#scss)|.scss|Sass é uma extensão de CSS que adiciona novas possibilidades e elegância à linguagem base.|
[JAVASCRIPT](#js)|.js|JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.|

|Frameworks|Extensão|Descrição|
|----------|--------|----------------|
|[BOOTSTRAP](#boostrap)|.css|Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.|

<h3 id="html">Html5</h3>

O html é dividido em:

 ```
<!DOCTYPE html>
<html>

  <head>
  </head>

  <body>
  </body>
</html>
 ```
 #### index.html

Dentro do ```<head>``` é onde fica todo as configurações do site, podendo fazer as importações dos arquivos externos.

Dentro do ```<body>``` é onde fica todo os elementos visiveis ao site. 
Dentro dele contem a tag ```<header>``` que fica o cabeçalho da página.


Lógo apos temos a tag ```<main>``` onde fica o conteúdo específico da página.

E por fim temos o ```<footer>``` onde fica o rodapé do site.

#### login.html

A estrutura do login.html segue a mesma do index.html, sendo reutilizado o ```<header>``` e o ```<footer>``` realizando apenas ajustes nos mesmos e o conteúdo espécifico da página sendo inserida na ```<main>```.
<br>

<h3 id="css">CSS</h3>

O **Css** *"Cascading Syle Sheets"* é o mecanismo para poder adicionar estilo ao documento web.

Os códigos **css** podem ser adicionado diretamente nas tags ```<style>``` ou através de um arquivo esterno importado atraves de um *link*.

Foram utilizadas diversas funcionalidades do css para podar dar estilo ao site.

Ex.:
```
body {
  background-image: url(/img/5024x3768-bg.jpg);
  background-repeat: no-repeat;
}
```

o exemplo de código acima retirado do *style.css* do projeto, adiciona uma imagem como **background** no ```body``` do **html** e configura para não repetir através do ```backgroud-repeat: no-repeat;```
<br>

<h3 id="scss">Sass</h3>

Para a folha de estilo **Css** foi utilizado o **Sass** *"Syntactically Awesome Style Sheets"*. Ela é uma linguaguém de scripts que usa como base o próprio **css** podendo utilizar algumas funcionalidades a mais como:

• Criação de váriaveis para armazenar valores.
EX.:
```
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;
```
```
$cor-principal: #e01d25;/* Cor Principal do site */
$background-cform: rgba(247, 247, 247, 0.137);/* Backgroud hover dos campos form */
$bordercolor-cform: rgb(100, 100, 100);/* Borda hover dos campos form */
$t-transicao: 300ms;/* Tempos de transição hover dos campos */
```

Essas váriaveis foram utilizadas nos arquivos scss para melhor modificação e melhor velocidade do site.

• Concatenação para maior agilidade na programação do código.
EX.:
```
.logo {
    background-image: url(../img/header-logo-2.png);
    background-repeat: no-repeat;
    display: block;
    width: 140px;
    height: 42px;
    text-indent: -9999px;
    margin: 0;
    margin-bottom: 10px;

    &--menor {
        background-image: url(../img/footer-logo-2.png);
        width: 61px;
        height: 76px;
        margin: 0 auto;
    }
}
```

Para a concatenação foi utilizadado o simbolo ```&``` juntamente com o ```--menor``` aninhado dentro do ```.logo``` no qual resulta o seguinte código no .css:
```
.logo--menor{
  background-image: url(../img/footer-logo-2.png);
  width: 61px;
  height: 76px;
  margin: 0 auto;
}
```

No final é feito a compilação de todos os arquivos ```.scss``` resultando em um único ```.css```.

<h3 id="js">JavaScript</h3>

#### • Botão Menu Principal

##### Descrição curta
A algoritimo criado em JavaScript tem como funcionalidade de abrir e fecha a **lista de navegação** e alterar a imagem do **botão menu**.

##### Decrição longa

```
/* Botão menu principal */
let botao = document.querySelector('.menu-principal__btn');
let menuPrincipal = document.querySelector('.menu-principal');
botao.addEventListener('click', menu);
function menu(evento) {
  menuPrincipal.classList.toggle('menu-principal--fechado')
}
```

Foram criadas duas váriaveis:

Uma chamada botao através da linha ```let botao = document.querySelector('.menu-principal__btn');``` na qual recupera o objeto com a classe ```.menu-principal__btn``` e gurada na variável.

Outra chamada menuPrincipal ```let menuPrincipal = document.querySelector('.menu-principal');``` que recupera o objeto com a classe ```.menu-principal```e guarda na variável.

Logo após é criado uma *"Escuta"* através do ```addEventeListener``` e caso ocorra o evento 'click' é acionado a função ```menu()```.

A função ```menu()``` por sua vez, tem como objetivo de modificar o elemento armazenado na variável menuPrincipal atravez do ```toggle``` que observa se existe a classe ```menu-principal--fechado```, caso exista a classe a função remove e caso não a função adiciona.

Essa clásse é responsável por modificar o elemento através do **css**. A modificação altera o ```backgroud-image``` do botão do menu trocando o icone de fechado para aberto e faz a ```<ul>``` *"aparecer"* ou *"Esconder"* da ```<nav>```.

#### • Input range animado
Observação: O escript foi retirado do site [https://codepen.io/Guilh/pen/BxWyRP](https://codepen.io/Guilh/pen/BxWyRP) e modificado conforme a necessidade do projeto! Todos os direito são para o autor **[@Guilh](https://codepen.io/Guilh)**.

##### Descrição curta
A algoritimo criado em JavaScript tem como funcionalidade de animar um ```input``` do tipo ```range```, inserindo emojis nas ```<div>``` selecionadas através de um *#id* conforme o valor do input.

##### Decrição longa

Foram criadas inicialmente quatro váriaveis:

**range** ```const divEmoji = document.querySelector('.formulario__div-emoji');``` que recebe um objeto através do comando ```querySelector``` fazendo a seleção através do *#id* ```#input-range``` e guarda na variavel.

**divEmoji** ```const range = document.querySelector('#input-range');``` que recebe um objeto através do comando ```querySelector``` fazendo a seleção através da *classe* ```.formulario__div-emoji``` e guarda na variavel.

**nota** ```const nota = document.querySelector('.formulario__nota');``` que recebe um objeto através do comando ```querySelector``` fazendo a seleção através da *classe* ```.formulario__nota``` e guarda na variavel.

E por fim a **emojis** que recebe um array contendo vários emojis a serem inseridos dentro da ```<div class="formulario__div-emoji">```.

```
const range = document.querySelector('#input-range');
const divEmoji = document.querySelector('.formulario__div-emoji');
const nota = document.querySelector('.formulario__nota');
const emojis = ['👎','😤','🤢','😡','😠','😩','☹️','😑','😐','🙂','😄'];

range.addEventListener('input', modifica);

function modifica(e){
  let rangeValue = e.target.value;
  divEmoji.textContent = emojis[rangeValue];
  nota.textContent = rangeValue;
};
```

logo após a crição da variáveis é feito uma *"Escuta"* na variável range e caso ocorra o a modificação do input ela chama a função ```modifica()``` e envia todos os dados atrvés da variavel ```e```.

Já na função ```modifica()``` tem por funcionalidade de inserir todas as modificações nas ```<div>``` comentadas acima.


<h3 id="boostrap">Bootstrap</h3>

##### Descrição curta
O bootstrap é um framework que ajuda na criação de elementos qua já estão pré editados em um .css. No site foi utilizado apenas para a criação dos ```badgs``` é que um componente para contagem de rótulos.

##### Decrição longa

```
[...]
    <span class="badge rounded-pill bg-primary formulario__nota">Nota</span>
[...]
    <span class="badge rounded-pill bg-danger">Baixa</span>
[...]
    <span class="badge rounded-pill bg-success">&nbsp;Alta&nbsp;</span>
[...]
```

Foi utilizado os ```<span>```com a classe (```badgs``` que serve par especificar o componente) e a classe (```rounded-pell``` para especificar a forma do *badgs*) e por fim a classe (```bg-primary```, ```bg-primdangerary```, ```bg-success``` para representar respectivamente os backgrounds nas cores Azul, Verde e vermelho).

Diversas outras classes podem ser utilizadas combinadas com vária *tags* do *html* conforme mostra a **[Documentação](https://getbootstrap.com/docs/5.0/getting-started/introduction/)** do bootstrap.

**<h3>Responsividade</h3>**

A resposividade se trata da capacidade do site se ajustar em diversos tamanhos de telas para os aparelhos mobile, desktop, notebooks, televisões e etc.

Todo o site é responsivo utilizando **Media Queries** e **breakpoints**:

<h4>Breakpoints</h4>
```
$breakpoint-sm: 576px;
$breakpoint-md: 768px;
$breakpoint-lg: 992px;
$breakpoint-xl: 1200px;
```

Os *breakpoints* são condições de larguras de telas dos dispositivos para serem utilizadas com os *Media Queries*:

```

/* container */
.meu-container{
    width: 95%;
    margin: 0 auto;
    @media (min-width: $breakpoint-sm) {
        width: 90%;
    }
    
    @media (min-width: $breakpoint-md) {
        width: 80%;
    }
    
    @media (min-width: $breakpoint-lg) {
        width: 70%;
    }

    @media (min-width: $breakpoint-xl) {
        width: 50%;
    }
    
    @media (min-width: 1980px) {
        width: 35%;
    }
}

```

O ```@media``` é utilizado para identificar a largura da tela do dispositivo e caso essa largura seja igual o a um valor minimo ou máximo do *breakpoint* especificado através do ```min-width: ``` ou ```max-width:``` ele executa um bloco do **css**.

##### vamos usar como exemplo o seguinte trecho de código:

```
.meu-container{
    width: 95%;
    margin: 0 auto;

    @media (min-width: $breakpoint-sm) {
      width: 90%;
    }
[...]
```

O código pede que o ```@media``` verifique se o tamanho da tela é igual ou inferio que o valor da variavel ```$breakpoint-sm``` que vale 576px. Caso o tamanho da tela se enquadre nesse range de pixel o bloco em css abaixo é executado:
```
  width: 90%;
``` 

Vale lembrar que está sendo utilizado o **sass** com isso o ```width: 90%``` está sendo utilizado para a classe ```.meu-container```.

**"Todos estes procedimentos foram realizados em diversas etapas dos códigos de estilo do site para dar assim a responsividade total."**

## Árvore de arquivos
```
├── css
|   └── style.css
|   └── style.css.map
|
├── fonts
|   └── source-sans-pro
|      └── SIL Open Font License.txt
|      └── SourceSansPro-Black.otf
|      └── SourceSansPro-BlackIt.otf
|      └── SourceSansPro-Bold.otf
|      └── SourceSansPro-BoldIt.otf
|      └── SourceSansPro-ExtraLight.otf
|      └── SourceSansPro-ExtraLightIt.otf
|      └── SourceSansPro-It.otf
|      └── SourceSansPro-Light.otf
|      └── SourceSansPro-LightIt.otf
|      └── SourceSansPro-Regular.otf
|      └── SourceSansPro-Semibold.otf
|      └── SourceSansPro-SemiboldIt.otf
|
├── img
|   └── 640x480-bg.jpg
|   └── 1280x960-bg.jpg
|   └── 1920x1440-bg.jpg
|   └── 5024x3768-bg.jpg
|   └── favicon.webp
|   └── footer-logo-2.png
|   └── footer-logo.png
|   └── header-logo-2.png
|   └── header-logo.png
|   └── menuprincipal-btn-bg.png
|
├── js
|   └── botao-menu.js
|   └── script.js
|
├── sass
|   ├── abstracts
|   |   └── _breakpoints.sass
|   |   └── _cores.sass
|   |
|   ├── base
|   |   └── _fontes.sass
|   |   └── _meu-reset.sass
|   |
|   ├── components
|   |   └── _body.sass
|   |   └── _formulario-login.sass
|   |   └── _formulario.sass
|   |   └── _logo.sass
|   |   └── _menu-principal.sass
|   |   └── _pagina-cabecalho.sass
|   |
|   ├── layout
|   |   └── _cabecalho.scss
|   |   └── _container.scss
|   |   └── _rodape.scss
|   |
|   ├── pages
|   |   └── _pesquisa.scss
|   |   └── _login_.scss
|   |
|   ├── vendors
|   |
|   └── style.sass
|
├── index.html
├── login.html
└── README.md
```