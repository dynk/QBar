Parse.initialize("myAppId");
Parse.serverURL = 'https://parse-server-dynk.herokuapp.com/parse';

// link to jsbin to populate dashboard
// http://jsbin.com/qimonomada/edit?js,console

var TEAMS_JSON_URL = "https://gist.githubusercontent.com/jawache/0be7f073eb27762d97cac34972ea3468/raw/e8b4f92e7ca677da38700e43e506971d9d592a2a/premier_teams.json";

var PLAYERS_JSON_URL = "https://gist.githubusercontent.com/jawache/e281399ba5d63dc10bd170dd2b0f707f/raw/9821e89146b13dc42abcf8fb7e69939c55ee5886/premier_football_players.json";

var COFFEE_JSON_URL = "https://gist.githubusercontent.com/jawache/2a11d6fb31e79dcf827e2d42d1326e4b/raw/403a967604107e9b9f24df23ce6ba5cb6c7fc5d0/coffee_shops_east_london.json";

var ESTABELECIMENTOS = [
    {
      "estabelecimento_id": "QBMGBH0000001",
      "name": "Jack Rock Bar",
      "is_closed": false,
      "is_claimed": true,
      "avatar": "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000001%2Favatar.jpg?alt=media&token=73e22a1d-5ff4-45d7-9a04-bb3fb3624576",
      "location": {
        "country_code": "BR",
        "geo_accuracy": "MOST_BE_NUMBER",
        "coordinate": {
          "latitude": -19.9397304,
          "longitude": -43.9318216
        },
        "city": "Belo Horizonte",
        "postal_code": "",
        "bairro": "Funcionarios",
        "address": [
          "Avenida do Contorno, 5623 - Funcionarios - Belo Horizonte."
        ],
        "display_address": [
          "Avenida do Contorno, 5623 - Funcionários - Belo Horizonte."
        ],
        "state_code": "MG",
        "neighborhoods": [
          ""
        ]
      },
      "descricao": "Referência no cenário rock de Belo Horizonte desde 2003, o Jack Rock Bar encarna o rock n’ roll em toda a sua estrutura e trajetória.",
      "descricao_curta": "Um bar de rock",
      "dias": {
        "domingo": {
          "qbar_vantagem": "50% OFF na proxima entrada se sua conta for maior que R$ 100,00",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "21"
          },
          "moods": [
            "rock"
          ],
          "tipo": [
            "bar"
          ]
        },
        "quarta": {
          "qbar_vantagem": "50% OFF na proxima entrada se sua conta for maior que R$ 100,00",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "21"
          },
          "moods": [
            "rock"
          ],
          "tipo": [
            "bar"
          ]
        },
        "quinta": {
          "qbar_vantagem": "50% OFF na proxima entrada se sua conta for maior que R$ 100,00",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "21"
          },
          "moods": [
            "rock"
          ],
          "tipo": [
            "bar"
          ]
        },
        "sabado": {
          "qbar_vantagem": "50% OFF na proxima entrada se sua conta for maior que R$ 100,00",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "21"
          },
          "moods": [
            "rock"
          ],
          "tipo": [
            "bar"
          ]
        },
        "segunda": {
          "qbar_vantagem": "50% OFF na proxima entrada se sua conta for maior que R$ 100,00",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "21"
          },
          "moods": [
            "rock"
          ],
          "tipo": [
            "bar"
          ]
        },
        "sexta": {
          "qbar_vantagem": "50% OFF na proxima entrada se sua conta for maior que R$ 100,00",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "21"
          },
          "moods": [
            "rock"
          ],
          "tipo": [
            "bar"
          ]
        },
        "terca": {
          "qbar_vantagem": "50% OFF na proxima entrada se sua conta for maior que R$ 100,00",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "21"
          },
          "moods": [
            "rock"
          ],
          "tipo": [
            "bar"
          ]
        }
      },
      "estacionamento": false,
      "img": [
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000001%2Ffotos%2F1.1.jpg?alt=media&token=380dd46e-d031-49b3-93c9-ae1232a1392f"
      ],
      "preco": "",
      "rating": ""
    },
    {
      "estabelecimento_id": "QBMGBH0000002",
      "name": "Bar do Dedinho",
      "is_closed": false,
      "is_claimed": true,
      "avatar": "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000002%2Favatar.jpg?alt=media&token=6cc6c48d-06dd-4278-9430-24b5ae201afa",
      "location": {
        "country_code": "BR",
        "geo_accuracy": "MOST_BE_NUMBER",
        "coordinate": {
          "latitude": -19.8411728,
          "longitude": -43.9764792
        },
        "city": "Belo Horizonte",
        "postal_code": "",
        "bairro": "Santa Amelia",
        "address": [
          "Avenida Deputado Anuar Manhen, 231 - Santa Amelia"
        ],
        "display_address": [
          "Avenida Deputado Anuar Manhen, 231 - Santa Amélia"
        ],
        "state_code": "MG",
        "neighborhoods": [
          ""
        ]
      },
      "descricao": "Localizado na região da Pampulha, o Bar do Dedinho é uma das referências de culinária de boteco em Belo Horizonte. O prato a chapa do dedo chega à mesa com linguiça cuiabana coberta com queijo minas ralado, filé acebolado e torresmo.",
      "descricao_curta": "Bar do dedinho",
      "dias": {
        "domingo": {
          "qbar_vantagem": "Na pedida do dedinho de minas ganhe uma cerveja",
          "cerveja": [
            "normal",
            "artesanal"
          ],
          "horario_funcionamento": {
            "fim": "02",
            "inicio": "17"
          },
          "moods": [
            "pagode",
            "fome"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "petiscos",
            "mineira"
          ]
        },
        "quarta": {
          "qbar_vantagem": "Na pedida do dedinho de minas ganhe uma cerveja",
          "cerveja": [
            "normal",
            "artesanal"
          ],
          "horario_funcionamento": {
            "fim": "02",
            "inicio": "17"
          },
          "moods": [
            "pagode",
            "fome"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "petiscos",
            "mineira"
          ]
        },
        "quinta": {
          "qbar_vantagem": "Na pedida do dedinho de minas ganhe uma cerveja",
          "cerveja": [
            "normal",
            "artesanal"
          ],
          "horario_funcionamento": {
            "fim": "02",
            "inicio": "17"
          },
          "moods": [
            "pagode",
            "fome"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "petiscos",
            "mineira"
          ]
        },
        "sabado": {
          "qbar_vantagem": "Na pedida do dedinho de minas ganhe uma cerveja",
          "cerveja": [
            "normal",
            "artesanal"
          ],
          "horario_funcionamento": {
            "fim": "02",
            "inicio": "17"
          },
          "moods": [
            "pagode",
            "fome"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "petiscos",
            "mineira"
          ]
        },
        "segunda": {
          "qbar_vantagem": "Na pedida do dedinho de minas ganhe uma cerveja",
          "cerveja": [
            "normal",
            "artesanal"
          ],
          "horario_funcionamento": {
            "fim": "02",
            "inicio": "17"
          },
          "moods": [
            "pagode",
            "fome"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "petiscos",
            "mineira"
          ]
        },
        "sexta": {
          "qbar_vantagem": "Na pedida do dedinho de minas ganhe uma cerveja",
          "cerveja": [
            "normal",
            "artesanal"
          ],
          "horario_funcionamento": {
            "fim": "02",
            "inicio": "17"
          },
          "moods": [
            "pagode",
            "fome"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "petiscos",
            "mineira"
          ]
        },
        "terca": {
          "qbar_vantagem": "Na pedida do dedinho de minas ganhe uma cerveja",
          "cerveja": [
            "normal",
            "artesanal"
          ],
          "horario_funcionamento": {
            "fim": "02",
            "inicio": "17"
          },
          "moods": [
            "pagode",
            "fome"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "petiscos",
            "mineira"
          ]
        }
      },
      "estacionamento": false,
      "img": [
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000002%2Ffotos%2F2.1.jpg?alt=media&token=c2972a8e-adee-4ef8-8b1a-1cf8443520ef"
      ],
      "preco": "",
      "rating": ""
    },
    {
      "estabelecimento_id": "QBMGBH0000003",
      "img": [
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000003%2Ffotos%2F3.1.jpg?alt=media&token=281161f3-b287-4b7f-ad59-8d83b689c470",
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000003%2Ffotos%2F3.2.jpg?alt=media&token=7338a326-266d-4817-9ab1-836e7726a2e9"
      ],
      "name": "Circus Rock Bar",
      "is_closed": false,
      "is_claimed": true,
      "avatar": "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000003%2Favatar.jpg?alt=media&token=f7f228a4-372c-4dcd-ab05-3737874c1012",
      "location": {
        "country_code": "BR",
        "geo_accuracy": "MOST_BE_NUMBER",
        "coordinate": {
          "latitude": -19.9295279,
          "longitude": -43.9457658
        },
        "city": "Belo Horizonte",
        "postal_code": "",
        "bairro": "Funcionarios",
        "address": [
          "Av. Contorno, 5623 - Funcionarios - Belo Horizonte - MG"
        ],
        "display_address": [
          "Av. Contorno, 5623 - Funcionários - Belo Horizonte - MG"
        ],
        "state_code": "MG",
        "neighborhoods": [
          ""
        ]
      },
      "descricao": "O Circus Rock Bar foi inspirado no “Rock and Roll Circus”, filme sobre o nada convencional festival realizado pelos Rolling Stones em 1968. Ambientado em um picadeiro de circo, o evento teve apresentações lendárias de grandes ícones do Rock n’ Roll, como John Lennon, Eric Clapton, Mitch Mitchel, The Who, Jethro Tull e os próprios Stones, entre outros.",
      "descricao_curta": "Um bar do circuito do rock",
      "dias": {
        "domingo": {
          "qbar_vantagem": "50% OFF na proxima entrada do Jack Rock Bar",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "03",
            "inicio": "21"
          },
          "moods": [
            "rock"
          ],
          "tipo": [
            "casa noturna"
          ]
        },
        "quarta": {
          "qbar_vantagem": "50% OFF na proxima entrada do Jack Rock Bar",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "03",
            "inicio": "21"
          },
          "moods": [
            "rock"
          ],
          "tipo": [
            "casa noturna"
          ]
        },
        "quinta": {
          "qbar_vantagem": "50% OFF na proxima entrada do Jack Rock Bar",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "03",
            "inicio": "21"
          },
          "moods": [
            "rock"
          ],
          "tipo": [
            "casa noturna"
          ]
        },
        "sabado": {
          "qbar_vantagem": "50% OFF na proxima entrada do Jack Rock Bar",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "03",
            "inicio": "21"
          },
          "moods": [
            "rock"
          ],
          "tipo": [
            "casa noturna"
          ]
        },
        "segunda": {
          "qbar_vantagem": "50% OFF na proxima entrada do Jack Rock Bar",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "03",
            "inicio": "21"
          },
          "moods": [
            "rock"
          ],
          "tipo": [
            "casa noturna"
          ]
        },
        "sexta": {
          "qbar_vantagem": "50% OFF na proxima entrada do Jack Rock Bar",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "03",
            "inicio": "21"
          },
          "moods": [
            "rock"
          ],
          "tipo": [
            "casa noturna"
          ]
        },
        "terca": {
          "qbar_vantagem": "50% OFF na proxima entrada do Jack Rock Bar",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "03",
            "inicio": "21"
          },
          "moods": [
            "rock"
          ],
          "tipo": [
            "casa noturna"
          ]
        }
      },
      "estacionamento": false,
      "preco": "",
      "rating": ""
    },
    {
      "estabelecimento_id": "QBMGBH0000004",
      "name": "Cervejaria e Cachaçaria Clube Mineiro",
      "is_closed": false,
      "is_claimed": true,
      "avatar": "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000004%2Favatar.png?alt=media&token=53616a6c-1f15-4c7f-9876-675d23d464db",
      "location": {
        "country_code": "BR",
        "geo_accuracy": "MOST_BE_NUMBER",
        "coordinate": {
          "latitude": -19.91601,
          "longitude": -43.91884
        },
        "city": "Belo Horizonte",
        "postal_code": "",
        "bairro": "Santa Tereza",
        "address": [
          "Rua marmore, 373 - Santa Tereza"
        ],
        "display_address": [
          "Rua mármore, 373 - Santa Tereza"
        ],
        "state_code": "MG",
        "neighborhoods": [
          ""
        ]
      },
      "descricao": "Seja bem vindo á Cervejaria e Cachaçaria Clube Mineiro, servimos; tira \ngostos deliciosos, cerveja bem gelada e atendimento de primeira \nqualidade. Faça seu aniversário no Clube Mineiro temos um excelente \nespaço para você receber os seus convidados em grande estilo.",
      "descricao_curta": "Cervejaria e cachacaria",
      "dias": {
        "domingo": {
          "qbar_vantagem": "Pague 3 cervejas ganhe 4",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "21"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "bar",
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos",
            "mineira"
          ]
        },
        "quarta": {
          "qbar_vantagem": "Pague 3 cervejas ganhe 4",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "21"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "bar",
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos",
            "mineira"
          ]
        },
        "quinta": {
          "qbar_vantagem": "Pague 3 cervejas ganhe 4",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "21"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "bar",
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos",
            "mineira"
          ]
        },
        "sabado": {
          "qbar_vantagem": "Pague 3 cervejas ganhe 4",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "21"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "bar",
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos",
            "mineira"
          ]
        },
        "segunda": {
          "qbar_vantagem": "Pague 3 cervejas ganhe 4",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "21"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "bar",
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos",
            "mineira"
          ]
        },
        "sexta": {
          "qbar_vantagem": "Pague 3 cervejas ganhe 4",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "21"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "bar",
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos",
            "mineira"
          ]
        },
        "terca": {
          "qbar_vantagem": "Pague 3 cervejas ganhe 4",
          "cerveja": [
            "normal"
          ],
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "21"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "bar",
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos",
            "mineira"
          ]
        }
      },
      "estacionamento": false,
      "img": [
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000004%2Ffotos%2F4.1.png?alt=media&token=578e34d9-ec72-4cc9-8197-ac441f194d5f"
      ],
      "preco": "",
      "rating": ""
    },
    {
      "estabelecimento_id": "QBMGBH0000005",
      "name": "PurArmonia Bar",
      "is_closed": false,
      "is_claimed": true,
      "avatar": "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000005%2Favatar.jpg?alt=media&token=4e8fbb08-19ff-41e4-8c42-7e9812a365e4",
      "location": {
        "country_code": "BR",
        "geo_accuracy": "MOST_BE_NUMBER",
        "coordinate": {
          "latitude": -19.87597,
          "longitude": -44.00223
        },
        "city": "Belo Horizonte",
        "postal_code": "",
        "bairro": "Alipio de Melo",
        "address": [
          "Av. Heraclito Mourao de Miranda 2230"
        ],
        "display_address": [
          "Av. Heraclito Mourão de Miranda 2230 - Alípio de Melo"
        ],
        "state_code": "MG",
        "neighborhoods": [
          ""
        ]
      },
      "descricao": "Grupo PURARMONIA - O melhor do samba para você",
      "descricao_curta": "Grupo PURARMONIA - O melhor do samba para você",
      "img": [
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000005%2Ffotos%2F5.1.jpg?alt=media&token=d210482e-7c19-458b-ab44-6ad51f59c1bd",
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000005%2Ffotos%2F5.2.jpg?alt=media&token=2b9aeb6a-9dbe-4054-9b92-54f62cbc7f91"
      ],
      "dias": {
        "domingo": {
          "qbar_vantagem": "Balde de Budweiser pela metade do preço",
          "horario_funcionamento": {
            "fim": "2",
            "inicio": "20"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "quarta": {
          "qbar_vantagem": "Balde de Budweiser pela metade do preço",
          "horario_funcionamento": {
            "fim": "2",
            "inicio": "20"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "quinta": {
          "qbar_vantagem": "Balde de Budweiser pela metade do preço",
          "horario_funcionamento": {
            "fim": "2",
            "inicio": "20"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "sabado": {
          "qbar_vantagem": "Balde de Budweiser pela metade do preço",
          "horario_funcionamento": {
            "fim": "2",
            "inicio": "20"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "segunda": {
          "qbar_vantagem": "Balde de Budweiser pela metade do preço",
          "horario_funcionamento": {
            "fim": "2",
            "inicio": "20"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "sexta": {
          "qbar_vantagem": "Balde de Budweiser pela metade do preço",
          "horario_funcionamento": {
            "fim": "2",
            "inicio": "20"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "terca": {
          "qbar_vantagem": "Balde de Budweiser pela metade do preço",
          "horario_funcionamento": {
            "fim": "2",
            "inicio": "20"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        }
      },
      "estacionamento": false,
      "preco": "",
      "rating": ""
    },
    {
      "estabelecimento_id": "QBMGBH0000006",
      "name": "Armazem Santa Tereza",
      "is_closed": false,
      "is_claimed": true,
      "avatar": "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000006%2Favatar.jpg?alt=media&token=e485329c-fb09-4659-a007-9e93c6cecc22",
      "location": {
        "country_code": "BR",
        "geo_accuracy": "MOST_BE_NUMBER",
        "coordinate": {
          "latitude": -19.91653,
          "longitude": -43.91681
        },
        "city": "Belo Horizonte",
        "postal_code": "",
        "bairro": "Santa teresa",
        "address": [
          "Rua Marmore,593 - Santa teresa"
        ],
        "display_address": [
          "Rua Marmore,593 - Santa teresa"
        ],
        "state_code": "MG",
        "neighborhoods": [
          ""
        ]
      },
      "descricao": "Espeteria e cervejaria localizada no coração da zona boêmia de Bh com música ao vivo todos os dias.",
      "descricao_curta": "Espeteria e cervejaria localizada no coração da zona boêmia de Bh com música ao vivo todos os dias.",
      "dias": {
        "domingo": {
          "qbar_vantagem": "10% de desconto na Skol",
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "20"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "mineira"
          ]
        },
        "quarta": {
          "qbar_vantagem": "10% de desconto na Skol",
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "20"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "mineira"
          ]
        },
        "quinta": {
          "qbar_vantagem": "10% de desconto na Skol",
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "20"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "mineira"
          ]
        },
        "sabado": {
          "qbar_vantagem": "10% de desconto na Skol",
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "20"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "mineira"
          ]
        },
        "segunda": {
          "qbar_vantagem": "10% de desconto na Skol",
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "20"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "mineira"
          ]
        },
        "sexta": {
          "qbar_vantagem": "10% de desconto na Skol",
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "20"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "mineira"
          ]
        },
        "terca": {
          "qbar_vantagem": "10% de desconto na Skol",
          "horario_funcionamento": {
            "fim": "3",
            "inicio": "20"
          },
          "moods": [
            "samba"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "mineira"
          ]
        }
      },
      "img": [
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000006%2Ffotos%2F6.1.png?alt=media&token=a1aeca48-b5ab-4b0d-ad0e-652f95789d7c"
      ],
      "estacionamento": false,
      "preco": "",
      "rating": ""
    },
    {
      "estabelecimento_id": "QBMGBH0000007",
      "name": "Wood's BH",
      "is_closed": false,
      "is_claimed": true,
      "avatar": "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000007%2Favatar.jpg?alt=media&token=603f7a25-f2cb-41d2-b633-2635760a554c",
      "location": {
        "country_code": "BR",
        "geo_accuracy": "MOST_BE_NUMBER",
        "coordinate": {
          "latitude": -19.98337,
          "longitude": -43.94583
        },
        "city": "Nova Lima",
        "postal_code": "",
        "bairro": "",
        "address": [
          "Alameda da Serra, 154 - Nova Lima"
        ],
        "display_address": [
          "Alameda da Serra, 154 - Nova Lima"
        ],
        "state_code": "MG",
        "neighborhoods": [
          ""
        ]
      },
      "descricao": "Modernidade e beleza são as palavras que resumem o Wood’s Belo \nHorizonte. Um ambiente para o mineiro exigente, que busca por \nentretenimento e qualidade. O sertanejo para o público seleto, com \nexcelência em serviços e uma arquitetura diferente de tudo o que você já\n viu. Venha se surpreender!\n \n Atendimento: Segunda a sexta das 9h às 18h. Sábado das 10h às 18h.\n Contato: (31) 3567-9589 ou contatobh@woodsbar.com.br",
      "descricao_curta": "Modernidade e beleza são as palavras que resumem o Wood’s Belo \nHorizonte. Um ambiente para o mineiro exigente, que busca por \nentretenimento e qualidade. O sertanejo para o público seleto, com \nexcelência em serviços e uma arquitetura diferente de tudo o que você já\n viu. Venha se surpreender!\n \n Atendimento: Segunda a sexta das 9h às 18h. Sábado das 10h às 18h.\n Contato: (31) 3567-9589 ou contatobh@woodsbar.com.br",
      "dias": {
        "domingo": {
          "qbar_vantagem": "10% de desconto no shot de tequila",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "21"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "japonesa"
          ]
        },
        "quarta": {
          "qbar_vantagem": "10% de desconto no shot de tequila",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "21"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "japonesa"
          ]
        },
        "quinta": {
          "qbar_vantagem": "10% de desconto no shot de tequila",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "21"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "japonesa"
          ]
        },
        "sabado": {
          "qbar_vantagem": "10% de desconto no shot de tequila",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "21"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "japonesa"
          ]
        },
        "segunda": {
          "qbar_vantagem": "10% de desconto no shot de tequila",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "21"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "japonesa"
          ]
        },
        "sexta": {
          "qbar_vantagem": "10% de desconto no shot de tequila",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "21"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "japonesa"
          ]
        },
        "terca": {
          "qbar_vantagem": "10% de desconto no shot de tequila",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "21"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "japonesa"
          ]
        }
      },
      "img": [
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000007%2Ffotos%2F7.1.jpg?alt=media&token=b6d79a57-bf90-43f6-b2a9-fd5784e49ce8",
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000007%2Ffotos%2F7.2.jpg?alt=media&token=12f4d2db-8e1d-4ef8-a496-86ffb46f6332"
      ],
      "estacionamento": false,
      "preco": "",
      "rating": ""
    },
    {
      "estabelecimento_id": "QBMGBH0000008",
      "name": "Cachaçaria Alambique",
      "is_closed": false,
      "is_claimed": true,
      "avatar": "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000008%2Favatar.jpg?alt=media&token=6a3affb1-6867-4d35-ad49-b4b28df813aa",
      "location": {
        "country_code": "BR",
        "geo_accuracy": "MOST_BE_NUMBER",
        "coordinate": {
          "latitude": -19.9624267,
          "longitude": -43.9571276
        },
        "city": "Belo Horizonte",
        "postal_code": "",
        "bairro": "Estoril",
        "address": [
          "Avenida Raja Gabaglia, 3200 "
        ],
        "display_address": [
          "Avenida Raja Gabaglia, 3200 "
        ],
        "state_code": "MG",
        "neighborhoods": [
          ""
        ]
      },
      "descricao": "O Alambique\n Casa Noturna\n \n O Alambique, única casa da capital\n mineira que realiza shows de música sertaneja de terça-feira a sábado e\n é responsável por revelar artistas de Minas e outros estados.\n Nos \núltimos anos, o estilo sertanejo, que antes era considerado brega entre \nos jovens das capitais brasileiras, virou tendência até mesmo entre os \nuniversitários. É por isso que há 25 anos o Alambique é um trem \ndiferente.",
      "descricao_curta": "O Alambique\n Casa Noturna\n \n O Alambique, única casa da capital\n mineira que realiza shows de música sertaneja de terça-feira a sábado e\n é responsável por revelar artistas de Minas e outros estados.\n Nos \núltimos anos, o estilo sertanejo, que antes era considerado brega entre \nos jovens das capitais brasileiras, virou tendência até mesmo entre os \nuniversitários. É por isso que há 25 anos o Alambique é um trem \ndiferente.",
      "dias": {
        "domingo": {
          "qbar_vantagem": "20% OFF na entrada",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "mineira",
            "petiscos"
          ]
        },
        "quarta": {
          "qbar_vantagem": "20% OFF na entrada",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "mineira",
            "petiscos"
          ]
        },
        "quinta": {
          "qbar_vantagem": "20% OFF na entrada",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "mineira",
            "petiscos"
          ]
        },
        "sabado": {
          "qbar_vantagem": "20% OFF na entrada",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "mineira",
            "petiscos"
          ]
        },
        "segunda": {
          "qbar_vantagem": "20% OFF na entrada",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "mineira",
            "petiscos"
          ]
        },
        "sexta": {
          "qbar_vantagem": "20% OFF na entrada",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "mineira",
            "petiscos"
          ]
        },
        "terca": {
          "qbar_vantagem": "20% OFF na entrada",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "bar"
          ],
          "tipos_comida": [
            "mineira",
            "petiscos"
          ]
        }
      },
      "img": [
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000008%2Ffotos%2F8.1.png?alt=media&token=9655d81d-b1ba-43c4-928d-8292da73f566",
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000008%2Ffotos%2F8.2.png?alt=media&token=4a3808f1-7f22-486a-9c98-2510c5920f6b",
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000008%2Ffotos%2F8.3.jpg?alt=media&token=e788b23e-ad65-425a-9b9e-0f7168d0deb2"
      ],
      "estacionamento": false,
      "preco": "",
      "rating": ""
    },
    {
      "estabelecimento_id": "QBMGBH0000009",
      "name": "Clube Chalezinho",
      "is_closed": false,
      "is_claimed": true,
      "avatar": "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000009%2Favatar.jpeg?alt=media&token=441a9ca5-cf1e-4ae4-a155-adc696f24491",
      "location": {
        "country_code": "BR",
        "geo_accuracy": "MOST_BE_NUMBER",
        "coordinate": {
          "latitude": -19.9682438,
          "longitude": -43.9597687
        },
        "city": "Belo Horizonte",
        "postal_code": "",
        "bairro": "Buritis",
        "address": [
          "Av. Mario Werneck, 530 - Buritis "
        ],
        "display_address": [
          "Av. Mário Werneck, 530 - Buritis"
        ],
        "state_code": "MG",
        "neighborhoods": [
          ""
        ]
      },
      "descricao": "O Clube Chalezinho, como o próprio nome sugere é uma reunião de amigos que se juntam com um único objetivo: se divertir. Com festas, músicas e muita diversão desde 2002 no Vale do Sereno, agora o Clube continua a sua história com muitas novidades em um novo espaço, ainda mais moderno e confortável. ",
      "descricao_curta": "O Clube Chalezinho, como o próprio nome sugere é uma reunião de amigos que se juntam com um único objetivo: se divertir. Com festas, músicas e muita diversão desde 2002 no Vale do Sereno, agora o Clube continua a sua história com muitas novidades em um novo espaço, ainda mais moderno e confortável. ",
      "dias": {
        "domingo": {
          "qbar_vantagem": "Na compra de 2 cervejas receba a terceira de graca",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "quarta": {
          "qbar_vantagem": "Na compra de 2 cervejas receba a terceira de graca",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "quinta": {
          "qbar_vantagem": "Na compra de 2 cervejas receba a terceira de graca",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "sabado": {
          "qbar_vantagem": "Na compra de 2 cervejas receba a terceira de graca",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "segunda": {
          "qbar_vantagem": "Na compra de 2 cervejas receba a terceira de graca",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "sexta": {
          "qbar_vantagem": "Na compra de 2 cervejas receba a terceira de graca",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo"
          ],
          "tipo": [
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "terca": ""
      },
      "img": [
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000009%2Ffotos%2F9.1.jpg?alt=media&token=f7d53ab3-6ecb-4e58-abbc-0d82c556de33",
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000009%2Ffotos%2F9.2.jpg?alt=media&token=d3844bc6-8e40-4954-9326-4a8bb77e1695"
      ],
      "estacionamento": false,
      "preco": "",
      "rating": ""
    },
    {
      "estabelecimento_id": "QBMGBH0000010",
      "name": "Bhar Savassi",
      "is_closed": false,
      "is_claimed": true,
      "avatar": "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000010%2Favatar.jpg?alt=media&token=bb6a21db-e99f-4b49-90cf-7399da657799",
      "location": {
        "country_code": "BR",
        "geo_accuracy": "MUST_BE_NUMBER",
        "coordinate": {
          "latitude": -19.9371325,
          "longitude": -43.9379397
        },
        "city": "Belo Horizonte",
        "postal_code": "",
        "bairro": "Savassi",
        "address": [
          "Rua Sergipe, 1211 - Savassi"
        ],
        "display_address": [
          "Rua Sergipe, 1211 - Savassi"
        ],
        "state_code": "MG",
        "neighborhoods": [
          ""
        ]
      },
      "descricao": "O Bhar Savassi está localizado na rua Sergipe, no quarteirão mais badalado da Savassi, e fica aberto das 18h até o último cliente! O Bhar Savassi tem a melhor estrutura para comemoração de aniversários e happy hour com promoções exclusivas para você!",
      "descricao_curta": "O Bhar Savassi está localizado na rua Sergipe, no quarteirão mais badalado da Savassi, e fica aberto das 18h até o último cliente! O Bhar Savassi tem a melhor estrutura para comemoração de aniversários e happy hour com promoções exclusivas para você!",
      "dias": {
        "domingo": {
          "qbar_vantagem": "Entrada Gratuita",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo",
            "fome"
          ],
          "tipo": [
            "bar",
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "quarta": {
          "qbar_vantagem": "Entrada Gratuita",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo",
            "fome"
          ],
          "tipo": [
            "bar",
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "quinta": {
          "qbar_vantagem": "Entrada Gratuita",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo",
            "fome"
          ],
          "tipo": [
            "bar",
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "sabado": {
          "qbar_vantagem": "Entrada Gratuita",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo",
            "fome"
          ],
          "tipo": [
            "bar",
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "segunda": {
          "qbar_vantagem": "Entrada Gratuita",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo",
            "fome"
          ],
          "tipo": [
            "bar",
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "sexta": {
          "qbar_vantagem": "Entrada Gratuita",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo",
            "fome"
          ],
          "tipo": [
            "bar",
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        },
        "terca": {
          "qbar_vantagem": "Entrada Gratuita",
          "horario_funcionamento": {
            "fim": "4",
            "inicio": "22"
          },
          "moods": [
            "sertanejo",
            "fome"
          ],
          "tipo": [
            "bar",
            "casa noturna"
          ],
          "tipos_comida": [
            "petiscos"
          ]
        }
      },
      "img": [
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000010%2Ffotos%2F10.1.jpg?alt=media&token=a5d74666-e766-42a6-a107-4ea052b5c239",
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000010%2Ffotos%2F10.2.jpg?alt=media&token=9ec49ead-51e2-43c6-a8c5-fa9b47af2ff2",
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000010%2Ffotos%2F10.3.jpg?alt=media&token=68af0605-059f-40c5-9d6d-9cea8aed4c93",
        "https://firebasestorage.googleapis.com/v0/b/qbar-4a177.appspot.com/o/fotos_estabelecimentos%2FQBMGBH0000010%2Ffotos%2F10.4.jpg?alt=media&token=16f26616-4de3-4ed9-bdbf-f8fa0da61700"
      ],
      "estacionamento": false,
      "preco": "",
      "rating": ""
    },
    {
      "estabelecimento_id": "QBMGBH0000002",
      "name": "",
      "is_closed": false,
      "is_claimed": true,
      "avatar": "",
      "location": {
        "country_code": "BR",
        "geo_accuracy": "MUST_BE_NUMBER",
        "coordinate": {
          "latitude": "MUST_BE_NUMBER",
          "longitude": "MUST_BE_NUMBER"
        },
        "city": "Belo Horizonte",
        "postal_code": "",
        "bairro": "",
        "address": [
          ""
        ],
        "display_address": [
          ""
        ],
        "state_code": "MG",
        "neighborhoods": [
          ""
        ]
      },
      "descricao": "",
      "descricao_curta": "",
      "dias": {
        "domingo": "",
        "quarta": "",
        "quinta": "",
        "sabado": "",
        "segunda": {
          "qbar_vantagem": "",
          "horario_funcionamento": {
            "fim": "",
            "inicio": ""
          },
          "moods": [
            ""
          ],
          "tipo": [
            ""
          ],
          "tipos_comida": [
            ""
          ]
        },
        "sexta": "",
        "terca": ""
      },
      "img": [
        ""
      ],
      "estacionamento": false,
      "preco": "",
      "rating": ""
    }
  ];

var Team = Parse.Object.extend("Team");
var Player = Parse.Object.extend("Player");
var Estabelecimento = Parse.Object.extend("Estabelecimento");

var TEAMS_MAP = {};

function deletePlaces() {
  var promise = new Parse.Promise();	
	var q = new Parse.Query("Estabelecimento");
	q.limit(1000);	
  q.find().then(function(places) {
    Parse.Object.destroyAll(places).then(function() {
			console.log("Places deleted... ");
			promise.resolve();			
		});
	});
	return promise;		
}

function deleteTeams() {
  var promise = new Parse.Promise();	
	var q = new Parse.Query("Team");
	q.limit(1000);	
  q.find().then(function(teams) {
    Parse.Object.destroyAll(teams).then(function() {
			console.log("Teams deleted... ");
			promise.resolve();			
		});
	});
	return promise;	
}


function deletePlayers() {
  var promise = new Parse.Promise();	
	var q = new Parse.Query("Player");
	q.limit(1000);	
  q.find().then(function(players) {
    Parse.Object.destroyAll(players).then(function() {
			console.log("Players deleted... ");
			promise.resolve();
		});
	});
	return promise;
}

function createTeams() {	
  var promise = new Parse.Promise();		
	console.log("Creating teams...");		
	var promises = [];
	$.getJSON( TEAMS_JSON_URL, function( data ) {
    for (var i = 0; i < data.length; i++) {
			var item = data[i];
			console.log("Saving team " + item.name);
			if (item.squadMarketValue) {
  			item.squadMarketValue = parseFloat(item.squadMarketValue.slice(0, -1).replace(',',''));				
			}
			var team = new Team();
			promises.push(team.save(item));
			TEAMS_MAP[item.code] = team;
		};
		
		
		Parse.Promise.when(promises).then(function() {
			console.log("All teams created");
			promise.resolve();		
		}, function error(err) {
			console.error(err);
		});			
	});


	return promise;	
}


function createPlayers() {	
  var promise = new Parse.Promise();		
	console.log("Creating players...");	
	var promises = [];
	$.getJSON( PLAYERS_JSON_URL, function( data ) {
		console.log("Got data ", data);	
		//noprotect
		for (var i = 0; i < data.length; i++) {
			var item = data[i];
			console.log("Saving player " + item.name);
			if (item.marketValue) {
  			item.marketValue = parseFloat(item.marketValue.slice(0, -1).replace(',',''));			
			}
			if (item.dateOfBirth) {
				item.dateOfBirth = new Date(item.dateOfBirth);				
			}
			if (item.contractUntil) {
				item.contractUnitl = new Date(item.contractUntil);				
			}
			if (item.teamCode) {
				item.team = TEAMS_MAP[item.teamCode];
			}
			var player = new Player();
			promises.push(player.save(item));			
		}
		
		Parse.Promise.when(promises).then(function() {
			console.log("All players created");
			promise.resolve();					
		}, function error(err) {
			console.error(err);
		});			

	});
	return promise;			
}


function createPlaces() {	
	var data = ESTABELECIMENTOS;
  var promise = new Parse.Promise();		
	console.log("Creating places...");		
	var promises = [];
	for (var i = 0; i < data.length; i++) {		
    	var item = data[i];
		console.log("Saving place " + item.name);							
		if (item.location) {

        	var lat = item.location.coordinate.latitude;
        	var lon = item.location.coordinate.longitude;		
			var point = new Parse.GeoPoint({latitude: lat, longitude: lon});
			item.geo = point;
		}
			var estabelecimento = new Estabelecimento();
			promises.push(estabelecimento.save(item));
		}
		
		Parse.Promise.when(promises).then(function() {
			console.log("All places created");
			promise.resolve();		
		}, function error(err) {
			console.error(err);
		});
		
	return promise;	
}


// deleteTeams()
// 	.then(createTeams)
// 	.then(deletePlayers)
// 	.then(createPlayers)
//   .then(deletePlaces)
// 	.then(createPlaces);
deletePlaces()
	.then(createPlaces);
