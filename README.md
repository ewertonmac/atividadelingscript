<div align="center"><img src="https://cdn.svgporn.com/logos/javascript.svg" alt="Javascript Logo" width="20%" ></div>

<h1 align= "center"> <a href="https://ewertonmac.github.io/atividadelingscript/">Atividade 3, disciplina linguagens de script</a></h1>

#### A atividade teve como objetivo a manipulação de objetos na árvore DOM e Eventos Javascript.


* **Questão 1:**<br>
Através do uma função JS, é gerado um botão. Quando clicado, uma ```<div></div>``` de 100x100 pixels, com cor de fundo vermelha  é criada e a adiciona na árvore DOM.


* **Questão 2:**<br>
Adicionado um ```eventlistener()``` que irá alterar a cor de fundo das ```<div></div>``` sempre que o mouse se mover para dentro das mesmas. A cor é gerada aleatoriamente através da função abaixo.<br>
  ```javascript
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
  return color;
  }
  var newColor = getRandomColor(); // #E943F0
  ```


* **Questão 3:**<br>
A partir do vetor ```var nomes = ["Diego", "Gabriel", "Lucas"];``` foi gerada uma lista não ordenada.

* **Questão 4:**<br>
A partir do html abaixo um novo item é adicionado na lista não ordenada gerada anteriormente.
  ```html
  <input type="text" name="nome" id="txt" placeholder="Nome">
  <button id="addBtn">Adicionar</button>
  ```


* **Questão 5:**<br>
A partir de um site disponibilizado pelo professor, foram criadas as funções necessárias para a manipulação de um modal com um ```<iframe>``` interno.
