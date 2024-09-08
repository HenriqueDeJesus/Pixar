let dados = [
    {
        titulo: "Toy Story",
        descricao: "O primeiro longa-metragem de animação totalmente digital, Toy Story segue as aventuras de Woody, Buzz Lightyear e seus amigos brinquedos.",
        link: "https://pt.wikipedia.org/wiki/Toy_Story",
        tags: "animação brinquedos Pixar Woody Buzz Lightyear Sr. Cabeça de Batata Rex Slinky",
        imagem: "/img_filmes/toyStory.jpg"
    },
    {
        titulo: "Monstros S.A.",
        descricao: "Dois monstros que trabalham gerando energia através de gritos de crianças descobrem uma menina que muda suas vidas para sempre.",
        link: "https://pt.wikipedia.org/wiki/Monsters,_Inc.",
        tags: "monstros animação comédia Sulley Mike Wazowski Boo Randall Boggs Roz",
        imagem: "/img_filmes/monstrosSa.jpg"
    },
    {
        titulo: "Procurando Nemo",
        descricao: "A jornada épica de um peixe-palhaço chamado Marlin em busca de seu filho perdido, Nemo, nas profundezas do oceano.",
        link: "https://pt.wikipedia.org/wiki/Finding_Nemo",
        tags: "mar oceano peixe animação Marlin Dory Nemo Bruce Gill",
        imagem: "/img_filmes/procurandoNemo.jpg",
    },
    {
        titulo: "Os Incríveis",
        descricao: "Uma família de super-heróis aposentados precisa retornar à ação para salvar o mundo de um novo vilão.",
        link: "https://pt.wikipedia.org/wiki/The_Incredibles Mulher-Elástica Violeta Flecha Gelado",
        tags: "super-heróis família ação Sr. Incrível Incrível Os Incriveis Flecha Violeta Mulher-Elástica Mulher Elastica Gelado",
        imagem: "/img_filmes/osIncrveis.jpg"
    },
    {
        titulo: "Ratatouille",
        descricao: "Remy, um rato que sonha em se tornar um grande chef, desafia todas as probabilidades para alcançar seu objetivo.",
        link: "https://pt.wikipedia.org/wiki/Ratatouille_(filme)",
        tags: "culinária rato chef animação Remy Linguini Colette Anton Ego Chef Skinner",
        imagem: "/img_filmes/rattatoue.jpg"
    },
    {
        titulo: "Wall-E",
        descricao: "Um robô solitário que vive em um planeta Terra devastado embarca em uma aventura que pode mudar o destino da humanidade.",
        link: "https://pt.wikipedia.org/wiki/WALL-E",
        tags: "robô futuro planeta Wall-E EVE M-O Auto Capitão B. McCrea",
        imagem: "/img_filmes/wall-E.jpg"
    },
    {
        titulo: "Up - Altas Aventuras",
        descricao: "Carl Fredricksen, um idoso viúvo, embarca em uma aventura emocionante, ao lado de um menino escoteiro e de uma casa voadora.",
        link: "https://pt.wikipedia.org/wiki/Up_(filme)",
        tags: "balão aventura idosos animação Carl Fredricksen Russell Dug Kevin Charles Muntz",
        imagem: "/img_filmes/up.jpg"
    },
    {
        titulo: "Valente",
        descricao: "Merida, uma jovem princesa arqueira, desafia as tradições de seu reino enquanto busca controlar seu próprio destino.",
        link: "https://pt.wikipedia.org/wiki/Brave_(filme)",
        tags: "princesa arqueira aventura Merida Rei Fergus Rainha Elinor Bruxa Irmãos Trigêmeos Trigemeos Trigêmeo Trigemeo",
        imagem: "/img_filmes/valente.jpg"
    },
    {
        titulo: "Divertida Mente",
        descricao: "As emoções de uma jovem ganham vida em sua mente, guiando suas ações enquanto ela lida com mudanças em sua vida.",
        link: "https://pt.wikipedia.org/wiki/Inside_Out_(filme_de_2015)",
        tags: "emoções mente animação Alegria Tristeza Medo Raiva Nojinho",
        imagem: "/img_filmes/divertidamente.jpg"
    },
    {
        titulo: "Viva - A Vida é uma Festa",
        descricao: "Miguel, um jovem mexicano, embarca em uma jornada mágica no mundo dos mortos para descobrir seu legado familiar.",
        link: "https://pt.wikipedia.org/wiki/Coco_(filme)",
        tags: "música tradição morte família Miguel Héctor Hector Éctor Ector Ernesto de la Cruz Mama Imelda Dante",
        imagem: "/img_filmes/vivaVidaFesta.jpg"
    }
];

let personagens = [
    // Toy Story
    {
        nome: "Woody",
        descricao: "O xerife leal e líder dos brinquedos de Toy Story.",
        filme: "Toy Story",
        imagem: "/img_personagens/woody.jpg" 
    },
    {
        nome: "Buzz Lightyear",
        descricao: "O patrulheiro espacial que inicialmente acredita ser um verdadeiro herói intergaláctico.",
        filme: "Toy Story",
        imagem: "/img_personagens/buzz.jpg" 
    },
    {
        nome: "Sr. Cabeça de Batata",
        descricao: "O brinquedo sarcástico com partes do corpo removíveis.",
        filme: "Toy Story",
        imagem: "/img_personagens/cabecaBatata.jpg" 
    },
    {
        nome: "Rex",
        descricao: "O dinossauro verde com grandes medos e pouca confiança.",
        filme: "Toy Story",
        imagem: "/img_personagens/rex.jpg" 
    },
    {
        nome: "Slinky",
        descricao: "O cachorro mola que é amigo de Woody e dos outros brinquedos.",
        filme: "Toy Story",
        imagem: "/img_personagens/slinky.jpg" 
    },

    // Monstros S.A.
    {
        nome: "Sulley",
        descricao: "O monstro azul e peludo, campeão de sustos na Monstros S.A.",
        filme: "Monstros S.A.",
        imagem: "/img_personagens/sulley.jpeg" 
    },
    {
        nome: "Mike Wazowski",
        descricao: "O monstro verde de um olho só, parceiro de Sulley.",
        filme: "Monstros S.A.",
        imagem: "/img_personagens/mike.jpeg" 
    },
    {
        nome: "Boo",
        descricao: "A garotinha que se perde no mundo dos monstros e conquista Sulley.",
        filme: "Monstros S.A.",
        imagem: "/img_personagens/boo.jpeg" 
    },
    {
        nome: "Randall Boggs",
        descricao: "O monstro camaleão que é rival de Sulley.",
        filme: "Monstros S.A.",
        imagem: "/img_personagens/randall.jpeg" 
    },
    {
        nome: "Roz",
        descricao: "A funcionária resmungona que cuida do arquivo na Monstros S.A.",
        filme: "Monstros S.A.",
        imagem: "/img_personagens/roz.jpeg" 
    },

    // Procurando Nemo
    {
        nome: "Marlin",
        descricao: "O pai superprotetor que atravessa o oceano em busca de seu filho.",
        filme: "Procurando Nemo",
        imagem: "/img_personagens/marlin.jpeg" 
    },
    {
        nome: "Dory",
        descricao: "A esquecida e otimista peixe que ajuda Marlin a encontrar Nemo.",
        filme: "Procurando Nemo",
        imagem: "/img_personagens/dory.jpeg" 
    },
    {
        nome: "Nemo",
        descricao: "O peixe-palhaço curioso e filho de Marlin que se perde no oceano.",
        filme: "Procurando Nemo",
        imagem: "/img_personagens/nemo.jpeg" 
    },
    {
        nome: "Bruce",
        descricao: "O tubarão que tenta evitar comer peixes e ser um amigo.",
        filme: "Procurando Nemo",
        imagem: "/img_personagens/bruce.jpeg" 
    },
    {
        nome: "Gill",
        descricao: "O líder do aquário onde Nemo fica preso.",
        filme: "Procurando Nemo",
        imagem: "/img_personagens/gill.webp" 
    },

    // Os Incríveis
    {
        nome: "Sr. Incrível",
        descricao: "O super-herói forte e determinado que lidera a família Incrível.",
        filme: "Os Incríveis",
        imagem: "/img_personagens/srIncrivel.jpeg" 
    },
    {
        nome: "Mulher-Elástica",
        descricao: "A esposa de Sr. Incrível, com a capacidade de esticar seu corpo.",
        filme: "Os Incríveis",
        imagem: "/img_personagens/mulherElastico.jpg" 
    },
    {
        nome: "Violeta",
        descricao: "A filha adolescente que pode ficar invisível e criar campos de força.",
        filme: "Os Incríveis",
        imagem: "/img_personagens/violeta.jpg" 
    },
    {
        nome: "Flecha",
        descricao: "O filho que possui supervelocidade.",
        filme: "Os Incríveis",
        imagem: "/img_personagens/flecha.jpeg" 
    },
    {
        nome: "Gelado",
        descricao: "O amigo da família com poderes de gelo.",
        filme: "Os Incríveis",
        imagem: "/img_personagens/gelado.jpeg" 
    },

    // Ratatouille
    {
        nome: "Remy",
        descricao: "O rato talentoso e apaixonado por culinária que sonha em ser chef.",
        filme: "Ratatouille",
        imagem: "/img_personagens/remy.jpeg" 
    },
    {
        nome: "Linguini",
        descricao: "O atrapalhado cozinheiro que faz parceria com Remy.",
        filme: "Ratatouille",
        imagem: "/img_personagens/linguini.jpeg" 
    },
    {
        nome: "Colette",
        descricao: "A chef durona que ajuda Linguini na cozinha.",
        filme: "Ratatouille",
        imagem: "/img_personagens/colette.jpeg" 
    },
    {
        nome: "Anton Ego",
        descricao: "O crítico gastronômico temido que adora impressionar.",
        filme: "Ratatouille",
        imagem: "/img_personagens/antonEgo.jpeg" 
    },
    {
        nome: "Chef Skinner",
        descricao: "O chef principal que tenta impedir Linguini e Remy.",
        filme: "Ratatouille",
        imagem: "/img_personagens/chefSkinner.jpeg" 
    },
    // Wall-E
    {
        nome: "Wall-E",
        descricao: "O adorável robô de coleta de lixo que embarca em uma missão para salvar a humanidade.",
        filme: "Wall-E",
        imagem: "/img_personagens/wallE.jpeg" 
    },
    {
        nome: "EVE",
        descricao: "A robô futurista e eficiente enviada para verificar a habitabilidade da Terra.",
        filme: "Wall-E",
        imagem: "/img_personagens/eve.jpeg" 
    },
    {
        nome: "Capitão B. McCrea",
        descricao: "O capitão da nave Axiom que começa a questionar o estilo de vida dos humanos no espaço.",
        filme: "Wall-E",
        imagem: "/img_personagens/capitaoB.jpeg" 
    },
    {
        nome: "M-O",
        descricao: "Um robô obsessivo por limpeza que se torna aliado de Wall-E.",
        filme: "Wall-E",
        imagem: "/img_personagens/m-o.jpg" 
    },
    {
        nome: "Auto",
        descricao: "O piloto automático da Axiom, que tenta manter a humanidade longe da Terra.",
        filme: "Wall-E",
        imagem: "/img_personagens/auto.jpeg" 
    },

    // Up - Altas Aventuras
    {
        nome: "Carl Fredricksen",
        descricao: "O idoso viúvo que realiza seu sonho de uma aventura ao voar sua casa com balões.",
        filme: "Up - Altas Aventuras",
        imagem: "/img_personagens/carl.jpeg" 
    },
    {
        nome: "Russell",
        descricao: "O escoteiro otimista que inadvertidamente se junta à aventura de Carl.",
        filme: "Up - Altas Aventuras",
        imagem: "/img_personagens/russell.jpeg" 
    },
    {
        nome: "Dug",
        descricao: "O cachorro que consegue falar graças a um colar especial.",
        filme: "Up - Altas Aventuras",
        imagem: "/img_personagens/dug.jpeg" 
    },
    {
        nome: "Kevin",
        descricao: "A ave rara e colorida que Carl e Russell encontram em sua jornada.",
        filme: "Up - Altas Aventuras",
        imagem: "/img_personagens/kevin.jpg" 
    },
    {
        nome: "Charles Muntz",
        descricao: "O vilão que busca capturar Kevin para recuperar sua reputação.",
        filme: "Up - Altas Aventuras",
        imagem: "/img_personagens/charlesMuntz.jpg" 
    },

    // Valente
    {
        nome: "Merida",
        descricao: "A princesa arqueira que deseja viver sua própria vida, longe das tradições.",
        filme: "Valente",
        imagem: "/img_personagens/merida.jpg" 
    },
    {
        nome: "Rei Fergus",
        descricao: "O pai protetor de Merida, conhecido por sua bravura e força.",
        filme: "Valente",
        imagem: "/img_personagens/reiFergus.jpeg" 
    },
    {
        nome: "Rainha Elinor",
        descricao: "A mãe de Merida que tenta guiá-la pelos caminhos da realeza.",
        filme: "Valente",
        imagem: "/img_personagens/rainhaElinor.jpeg" 
    },
    {
        nome: "Bruxa",
        descricao: "A misteriosa bruxa que concede a Merida um feitiço para mudar seu destino.",
        filme: "Valente",
        imagem: "/img_personagens/bruxa.jpeg" 
    },
    {
        nome: "Irmãos Trigêmeos",
        descricao: "Os travessos irmãos mais novos de Merida que estão sempre causando confusão.",
        filme: "Valente",
        imagem: "/img_personagens/trigemios.jpeg" 
    },

    // Divertida Mente
    {
        nome: "Alegria",
        descricao: "A emoção principal que tenta manter Riley feliz e positiva.",
        filme: "Divertida Mente",
        imagem: "/img_personagens/alegria.jpg" 
    },
    {
        nome: "Tristeza",
        descricao: "A emoção que, apesar de muitas vezes incompreendida, desempenha um papel crucial na vida de Riley.",
        filme: "Divertida Mente",
        imagem: "/img_personagens/tristeza.jpg" 
    },
    {
        nome: "Medo",
        descricao: "A emoção que tenta manter Riley fora de perigo, sempre ansioso.",
        filme: "Divertida Mente",
        imagem: "/img_personagens/medo.jpeg" 
    },
    {
        nome: "Raiva",
        descricao: "A emoção explosiva que reage com intensidade diante das frustrações de Riley.",
        filme: "Divertida Mente",
        imagem: "/img_personagens/raiva.jpg" 
    },
    {
        nome: "Nojinho",
        descricao: "A emoção que protege Riley de coisas indesejáveis e más influências.",
        filme: "Divertida Mente",
        imagem: "/img_personagens/nojinho.jpeg" 
    },

    // Viva - A Vida é uma Festa
    {
        nome: "Miguel",
        descricao: "O garoto apaixonado por música que viaja ao mundo dos mortos para descobrir seu legado familiar.",
        filme: "Viva - A Vida é uma Festa",
        imagem: "/img_personagens/miguel.jpeg" 
    },
    {
        nome: "Héctor",
        descricao: "O esqueleto trapaceiro que ajuda Miguel em sua jornada no mundo dos mortos.",
        filme: "Viva - A Vida é uma Festa",
        imagem: "/img_personagens/hector.jpeg" 
    },
    {
        nome: "Ernesto de la Cruz",
        descricao: "O famoso músico que é o ídolo de Miguel, mas esconde um grande segredo.",
        filme: "Viva - A Vida é uma Festa",
        imagem: "/img_personagens/ernesto.jpeg" 
    },
    {
        nome: "Mama Imelda",
        descricao: "A tataravó de Miguel que tenta manter a família unida e longe da música.",
        filme: "Viva - A Vida é uma Festa",
        imagem: "/img_personagens/imelda.jpeg" 
    },
    {
        nome: "Dante",
        descricao: "O cão de rua fiel que acompanha Miguel em sua aventura.",
        filme: "Viva - A Vida é uma Festa",
        imagem: "/img_personagens/dante.jpeg" 
    }
];
