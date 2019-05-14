const locais = [
    {
        "nome": "Museu do Café",
        "link": "museu_do_cafe.html",
        "img": "https://media-cdn.tripadvisor.com/media/photo-s/04/94/d5/97/museu-do-cafe.jpg",
        "alt": "Bolsa do Café"
    },
    {
        "nome": "Bondinho de Santos",
        "link": "#!",
        "img": "https://www.turismosantos.com.br/static/files_turismosantos/styles/lateral/public/FRANCISCO%20ARRAIS_9180.jpg?itok=TeMqz4AX",
        "alt": "Bondinho de Santos"
    },
    {
        "nome": "Teatro Coliseu",
        "link": "#!",
        "img": "https://s2.glbimg.com/qvW0fiZl-bHGOAbrpTQNgctY3XU=/620x465/s.glbimg.com/jo/g1/f/original/2013/06/29/isabela_carrari_4075.jpg",
        "alt": "Teatro Coliseu"
    },
    {
        "nome": "Teatro Guarany",
        "link": "#!",
        "img": "https://mirada.sescsp.org.br/2014/pt/wp-content/uploads/2014/08/Teatro-Guarany-25_.jpg",
        "alt": "Teatro Guarany"
    }
]

//Coloca os itens no carrossel
locais.forEach(local => {

    /* Coloca os locais no carrossel */
    //Cria o link do item
    var link = document.createElement("a");
    link.setAttribute("class", "carousel-item center-align")
    link.setAttribute("href", local.link);

    //Define a imagem
    var img = document.createElement("img");
    img.setAttribute("src", local.img);
    img.setAttribute("alt", local.alt);

    //Define o nome do local
    var title = document.createElement("h4");
    title.innerHTML = local.nome;

    //Coloca o nome e a imagem dentro do link
    link.append(img);
    link.append(title);

    //Coloca o item dentro do carrossel
    document.querySelector(".carousel").append(link);

    /* Coloca os locais na grade */
    //Cria a coluna que vai conter o conteúdo
    var col = document.createElement("a");
    col.setAttribute("class", "col s6 m6 l3 center-align");
    col.setAttribute("href", local.link);

    //Define a imagem
    var image = document.createElement("img");
    image.setAttribute("style", "height: auto; width: 100%;");
    image.setAttribute("src", local.img);
    image.setAttribute("alt", local.alt);

    //Define o nome
    var nome = document.createElement("h5");
    nome.setAttribute("style", "color: black;");
    nome.innerHTML = local.nome;

    //Coloca a imagem e o nome dentro da coluna
    col.append(image);
    col.append(nome);

    //Coloca a coluna na grade
    document.getElementById("grade").append(col);
});