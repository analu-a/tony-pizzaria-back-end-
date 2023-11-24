//produto,categoria,usuario

var usuario = {

    informacoes:
    [
        {
   email:'fran@gmail.com',
   nome:'Franceilda da Cunha ' ,
   senha:'123',
   endereco:'rua xxx,',
   telefone:'',
   foto:'',
   id: ''
        },
        {
    email:'',
    nome:'' ,
    senha:'',
    endereco:'',
    telefone:'',
    foto:'',
    id: ''
        },
        {
    email:'',
    nome:'' ,
    senha:'',
    endereco:'',
    telefone:'',
    foto:'',
    id: ''
        }
    ]
}

var produtos = {

    pizza:
    [
        {
            sabor:'',
            preco:'',
            descricao:'',
            imagem:'',
            categoria:''
        },
        {
            sabor:'',
            preco:'',
            descricao:'',
            imagem:'',
            categoria:''
        },
        {
            sabor:'',
            preco:'',
            descricao:'',
            imagem:'',
            categoria:''
        },
        {
            sabor:'',
            preco:'',
            descricao:'',
            imagem:'',
            categoria:''
        }
    ],

    bebidas:
    [
        {
            nome:'Cerveja Heinekein',
            descricao:'Garrafa de vidro',
            preco:'R$17,99',
            imagem:'./img/bebidas/garrafa-cerveja.pnj'
        },
        {
            nome:'Coca Cola',
            descricao:'Refrigerante 2 litros',
            preco:'R$14,90',
            imagem:'./img/bebidas/garrafa-coca.png'
        }, {
            nome:'Suco de morango',
            descricao:'Suco natural de morango',
            preco:'',
            imagem:''
        }

    ],
    doces:
    [
       {
        nome:'Pudim',
        sabor:'Leite condensado',
        preco:'R$20,00',
        descricao:'Pudim de leite caseiro',
        imagem:''
       },
       {
        nome:'Torta de morango',
        sabor:'Morango',
        preco:'R$18,00',
        descricao:'Deliciosa torta de morango',
        imagem:''
       },
       {
        nome:'sorvete',
        sabor:'chocolate',
        preco:'R$10,00',
        descricao:'Sorvete de chocolate',
        imagem:''
       }
    ],
    comentarios:
    [
        {
            usuario:usuario[2],
            estrelas:'4',
            avaliacao:'Muito boa esta pizza',
            data:'12/12/2023'
        },
        {
            usuario:usuario[1],
            estrelas:'5',
            avaliacao:'Gostei muito, minha favorita',
            data:'24/08/2023'
        }
       
    ]
}

var categorias = {
    categorias:
    [
    {
        nome:'Pizzas',
        descricao:'Veja todas as nossas deliciosas pizzas',
        imagem:'./img/categorias/pizza-logo.png'
    },
    {
        nome:'Bebidas',
        descricao:'Bebidas disponiveis',
        imagem:'./img/categorias/bebidas-logo.png'
    },
    {
        nome:'Sobremesas',
        descricao:'Confira nossas sobremesas!',
        imagem:'./img/categorias/cupcake-logo.png'
    },
    {
        nome:'Favoritas',
        descricao:'Estas são suas pizzas favoritas',
        imagem:'./img/categorias/mini-logo.png'
    }
]
}