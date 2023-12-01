//produto,categoria,usuario

var usuario = {

    informacoes:
        [
            {
                email: 'fran@gmail.com',
                nome: 'Franceilda da Cunha ',
                senha: '123',
                endereco:
                    [{
                        Logradouro: 'Rua xxx',
                        numero_casa: '321',
                        bairro: 'Flores',
                        cidade: 'Carapicuiba',
                        estado: 'São Paulo'
                    }],
                telefone: '11123123123',
                foto: './img/foto.png',
                id: '1'
            },
            {
                email: 'ana@gmail.com',
                nome: 'Ana Luiza Azevedo Morais',
                senha: '456',
                endereco:
                    [{
                        Logradouro: 'Rua yyy',
                        numero_casa: '654',
                        bairro: 'Maria Luiza de Campos',
                        cidade: 'Carapicuiba',
                        estado: 'São Paulo'
                    }],
                telefone: '11876543219',
                foto: './img/foto.png',
                id: '1'
            },
            {
                email: 'jose@gmail.com',
                nome: 'Jose Mauro da Silva Morais',
                senha: '789',
                endereco:
                    [{
                        Logradouro: 'Rua aaa',
                        numero_casa: '987',
                        bairro: 'Laranjeiras',
                        cidade: 'Carapicuiba',
                        estado: 'São Paulo'
                    }],
                telefone: '11824084683',
                foto: './img/foto.png',
                id: '3'
            }
        ]
}

var produtos = {

    pizza:
        [
            {
                sabor: 'Queijo e tomate',
                preco: 'R$ 12,00',
                descricao: 'Pizza brotinho com queijo e tomate',
                imagem: './img/recomendadas/brotinho.webp',
                categoria: 'Pizzas',
                comentarios:
                [
            {
                usuario: usuario[1],
                estrelas: '5',
                avaliacao: 'Gostei muito, minha favorita',
                data: '24/08/2023'
            }],

        },
            {
                sabor: 'Peperoni com queijo e tomate',
                preco: 'R$ 19,00',
                descricao: 'Pizza de peperoni com queijo e tomate',
                imagem: './img/recomendadas/peperoni tomate.webp',
                categoria: 'Pizzas',
                comentarios:''
            },
            {
                sabor: 'Peperoni com queijo',
                preco: 'R$ 19,00',
                descricao: 'Pizza de peperoni com queijo',
                imagem: './img/pizzas_fav/fav2.webp',
                categoria: 'Pizzas',
                comentarios:''
            },
            {
                sabor: 'Calabresa com queijo',
                preco: 'R$ 16,00',
                descricao: 'Pizza de calabresa com queijo',
                imagem: './img/pizzas_fav/fav1.webp',
                categoria: 'Pizzas',
                comentarios:
                [
                    {
                        usuario: usuario[2],
                        estrelas: '4',
                        avaliacao: 'Muito boa esta pizza',
                        data: '12/12/2023'
                    }
                ]
            }
        ],

    bebidas:
        [
            {
                nome: 'Cerveja Heinekein',
                descricao: 'Garrafa de vidro',
                preco: 'R$ 17,99',
                imagem: './img/bebidas/garrafa-cerveja.pnj',
                comentarios:''
            },
            {
                nome: 'Coca Cola',
                descricao: 'Refrigerante 2 litros',
                preco: 'R$ 14,90',
                imagem: './img/bebidas/garrafa-coca.png',
                comentarios:''
            }, 
            
            {
                nome: 'Suco de morango',
                descricao: 'Suco natural de morango',
                preco: 'R$ 10,50',
                imagem: './img/bebidas/garrafa-coca.png',
                comentarios:''
            }

        ],
    doces:
        [
            {
                nome: 'Pudim',
                sabor: 'Leite condensado',
                preco: 'R$20,00',
                descricao: 'Pudim de leite caseiro',
                imagem: '',
                comentarios:''
            },
            {
                nome: 'Torta de morango',
                sabor: 'Morango',
                preco: 'R$18,00',
                descricao: 'Deliciosa torta de morango',
                imagem: '',
                comentarios:''
            },
            {
                nome: 'sorvete',
                sabor: 'chocolate',
                preco: 'R$10,00',
                descricao: 'Sorvete de chocolate',
                imagem: '',
                comentarios:''
               
            }
        ],
    

        
}

var categorias = {
    categorias:
        [
            {
                nome: 'Pizzas',
                descricao: 'Veja todas as nossas deliciosas pizzas',
                imagem: './img/categorias/pizza-logo.png'
            },
            {
                nome: 'Bebidas',
                descricao: 'Bebidas disponiveis',
                imagem: './img/categorias/bebidas-logo.png'
            },
            {
                nome: 'Sobremesas',
                descricao: 'Confira nossas sobremesas!',
                imagem: './img/categorias/cupcake-logo.png'
            }
        
        ]
}

module.exports = {
    usuario,
    categorias,
    produtos
}