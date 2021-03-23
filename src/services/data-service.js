const listDatabase=[
    {
        list:[
            {
                id:0,
                name:"RTS",
                childListId:1
            },
            {
                id:1,
                name:"RPG",
                childListId:-1
            },
            {
                id:2,
                name:"Action",
                childListId:-1
            },
            {
                id:3,
                name:"Survival",
                childListId:-1
            },
            {
                id:4,
                name:"Simulator",
                childListId:-1
            },
        ],
        
    },
    {
        list:[
            {
                id:0,
                name:"Warcraft",
                childListId:-1
            },
            {
                id:1,
                name:"Starcraft: Heart of the swarm",
                childListId:2
            },
            {
                id:2,
                name:"Simcity",
                childListId:-1
            },
        ],
        
    },
    {
        list:[
            {
                id:0,
                name:"Starcraft 1",
                childListId:-1
            },
            {
                id:1,
                name:"Starcraft 2",
                childListId:-1
            },
            {
                id:2,
                name:"Starcraft: Heart of the swarm",
                childListId:-1
            },
        ],
        
    }
]
const trendingItems=[
    {
        name:"Far Cry 5",
        src:"https://upload.wikimedia.org/wikipedia/en/0/03/Far_Cry_5_boxshot.jpg",
        price:60,
        discount:null

    },
    {
        name:"Far Cry 4",
        src:"https://upload.wikimedia.org/wikipedia/en/6/63/Far_Cry_4_box_art.jpg",
        price:60,
        discount:90

    },
    {
        name:"Minecraft",
        src:"https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
        price:60,
        discount:null

    },
   
]
const bestsellers=[
    "cs_go",
    "tomb_raider",
    "halo_reach",
    "halo_4"
]
const items=[
    {
        name:"Counter-Strike: Global Offensive Prime",
        src:"https://cdn-cf.gamivo.com/image_cover.jpg?f=26073&n=47263531930005853.jpg&h=8104eb1555ac18f00b0f464b3a565cae",
        price:0,
        descr:"многопользовательская компьютерная игра, разработанная компаниями Valve и Hidden Path Entertainment. Выпуск игры для персональных компьютеров на операционных системах Windows и macOS, также игровых приставках Xbox 360 и PlayStation 3 состоялся 21 августа 2012 года. Версия игры для Linux была выпущена в 2014 году[1], а в 2016 году игра, в рамках программы обратной совместимости, стала доступна на Xbox One[3]. В 2018 году была выпущена бесплатная версия с возможностью игры с реальными игроками и с ботами. Позже, в декабре того же года игра стала полностью бесплатной.",
        discount:null,
        requirements:[
            {
                name:"ОС",
                value:"Windows 7"
            },
            {
                name:"Процессор",
                value:"Intel Core i7-975 | AMD A12-9800 APU"
            },
            {
                name:"Оперативная память",
                value:"2 GB ОЗУ"
            },
            {
                name:"Видеокарта",
                value:"GeForce GTS 450 | Radeon R7 Graphics"
            },
            {
                name:"Место на диске",
                value:"55 GB"
            },
            {
                name:"Дополнительно",
                value:"30 FPS on performance settings at 1920x1080"
            }
        ],
        platform:"Valve",
        releaseDate:"21 августа 2012 ",
        developer:"Valve",
        publisher:"Microsoft Game Studios",
        similiarGames:[
           
        ],
        gallery:[
            "https://steamuserimages-a.akamaihd.net/ugc/866108446318644278/A6F8253F4B6E9379FED27CBD02013DB47A7C37BE/",
            "https://dev.by/storage/images/26/93/35/70/derived/52621370924b93461271c4073e0fd9d9.jpg",
            "https://steamuserimages-a.akamaihd.net/ugc/450733824052233653/6E26F7C1C8B4370BF35409950C2D4F30A8598C55/"
        ],
        genres:["action","shooter"],
        inStock:true,
        id:"cs_go"
    },
    {
        name:"Halo: Combat Evolved",
        src:"https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg/220px-Halo_-_Combat_Evolved_%28XBox_version_-_box_art%29.jpg",
        price:400,
        descr:"Kомпьютерная игра в жанре шутера от первого лица, разработанная компанией Bungie и изданная Microsoft Game Studios. Изначально выпущена в 2001 году для игровой приставки Xbox. Через два года вышла версия для Microsoft Windows. В том же году выпущена новелла-предыстория Halo: The Fall of Reach. ",
        discount:null,
        requirements:[
            {
                name:"ОС",
                value:"Windows 7"
            },
            {
                name:"Процессор",
                value:"Intel Core i7-975 | AMD A12-9800 APU"
            },
            {
                name:"Оперативная память",
                value:"2 GB ОЗУ"
            },
            {
                name:"Видеокарта",
                value:"GeForce GTS 450 | Radeon R7 Graphics"
            },
            {
                name:"Место на диске",
                value:"55 GB"
            },
            {
                name:"Дополнительно",
                value:"30 FPS on performance settings at 1920x1080"
            }
        ],
        platform:"PC",
        releaseDate:"3 марта 2020",
        developer:"Bungie",
        publisher:"Microsoft Game Studios",
        similiarGames:[
            "halo_1",
            "halo_2",
            "halo_3"
        ],
        gallery:[
            "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Halo_reach-lnos.png/260px-Halo_reach-lnos.png",
            "https://cdn.gamerjournalist.com/primary/2020/07/Halo-3-Multiplayer-Guide.jpg",
            "https://chiefcanuck.files.wordpress.com/2016/03/halo-5-guardians-warzone-firefight-focus-fire.jpg"
        ],
        genres:["action","shooter"],
        inStock:false,
        id:"halo_1"
    },
    {
        name:"Halo 2",
        src:"https://upload.wikimedia.org/wikipedia/en/9/92/Halo2-cover.png",
        price:400,
        descr:"компьютерная игра в жанре шутера от первого лица, разработанная компанией Bungie и изданная Microsoft Game Studios. Игра была выпущена в 2004 году для консоли Xbox, в 2007 году - для Windows, в 2014 году переиздана для Xbox One, а в 2020 году состоялся повторный релиз версии для Windows. Это вторая игра из серии Halo и сиквел Halo: Combat Evolved. Игроку предлагаются роли человека Мастера Чифа (главного героя первой игры) и Элита Арбитра в конфликте 26-го столетия между человеческим ККОН (Космическое Командование Объединённых Наций) и Ковенантом (союзом инопланетных рас). ",
        discount:null,
        requirements:[
            {
                name:"ОС",
                value:"Windows 7"
            },
            {
                name:"Процессор",
                value:"Intel Core i7-975 | AMD A12-9800 APU"
            },
            {
                name:"Оперативная память",
                value:"2 GB ОЗУ"
            },
            {
                name:"Видеокарта",
                value:"GeForce GTS 450 | Radeon R7 Graphics"
            },
            {
                name:"Место на диске",
                value:"55 GB"
            },
            {
                name:"Дополнительно",
                value:"30 FPS on performance settings at 1920x1080"
            }
        ],
        platform:"PC",
        releaseDate:"12 мая 2020",
        developer:"Bungie",
        publisher:"Microsoft Game Studios",
        similiarGames:[
            "halo_1",
            "halo_2",
            "halo_3"
        ],
        gallery:[
            "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Halo_reach-lnos.png/260px-Halo_reach-lnos.png",
            "https://cdn.gamerjournalist.com/primary/2020/07/Halo-3-Multiplayer-Guide.jpg",
            "https://chiefcanuck.files.wordpress.com/2016/03/halo-5-guardians-warzone-firefight-focus-fire.jpg"
        ],
        inStock:true,
        genres:["action","shooter"],
        id:"halo_2"
    },
    {
        name:"Halo 3",
        src:"https://upload.wikimedia.org/wikipedia/en/b/b4/Halo_3_final_boxshot.JPG",
        descr:"Kомпьютерная игра в жанре шутера от первого лица, созданная компанией Bungie Studios. Игра является продолжением истории, начатой в Halo: Combat Evolved и продолженной в Halo 2. Игра была выпущена в 2007 году для игровой консоли Xbox 360, в 2014 году была переиздана в составе Halo: Master Chief Collection для Xbox One, а в 2020 году выпущена на персональных компьютерах под управлением Windows в том же комплекте. ",
        price:500,
        discount:null,
        requirements:[
            {
                name:"ОС",
                value:"Windows 7"
            },
            {
                name:"Процессор",
                value:"Intel Core i7-975 | AMD A12-9800 APU"
            },
            {
                name:"Оперативная память",
                value:"2 GB ОЗУ"
            },
            {
                name:"Видеокарта",
                value:"GeForce GTS 450 | Radeon R7 Graphics"
            },
            {
                name:"Место на диске",
                value:"55 GB"
            },
            {
                name:"Дополнительно",
                value:"30 FPS on performance settings at 1920x1080"
            }
        ],
        platform:"PC",
        releaseDate:"14 июля 2020",
        developer:"Bungie",
        publisher:"Microsoft Game Studios",
        similiarGames:[
            "halo_1",
            "halo_2",
            "halo_3"
        ],
        gallery:[
            "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Halo_reach-lnos.png/260px-Halo_reach-lnos.png",
            "https://cdn.gamerjournalist.com/primary/2020/07/Halo-3-Multiplayer-Guide.jpg",
            "https://chiefcanuck.files.wordpress.com/2016/03/halo-5-guardians-warzone-firefight-focus-fire.jpg"
        ],
        inStock:false,
        genres:["action","shooter"],
        id:"halo_3"
    },
    {
        name:"Halo: Reach",
        src:"https://upload.wikimedia.org/wikipedia/en/5/5c/Halo-_Reach_box_art.png",
        price:500,
        descr:"Видеоигра в жанре шутера от первого лица. Игра была разработана компанией Bungie и издана Microsoft Game Studios. Изначально игра вышла на консоли Xbox 360 в 2010 году, а в 2019 году была переиздана на Xbox One и Windows в составе Halo: The Master Chief Collection. Действие игры происходит в 2552 году, где человечество ведёт войну с Ковенантами. Игрок принимает роль «Noble 6», члена элитного отряда суперсолдат «Noble Team» во время битвы за планету Reach (в переводе с англ. — «Предел»). Действие игры происходит за несколько недель до начала событий Halo: Combat Evolved. ",
        discount:null,
        requirements:[
            {
                name:"ОС",
                value:"Windows 7"
            },
            {
                name:"Процессор",
                value:"Intel Core i7-975 | AMD A12-9800 APU"
            },
            {
                name:"Оперативная память",
                value:"2 GB ОЗУ"
            },
            {
                name:"Видеокарта",
                value:"GeForce GTS 450 | Radeon R7 Graphics"
            },
            {
                name:"Место на диске",
                value:"55 GB"
            },
            {
                name:"Дополнительно",
                value:"30 FPS on performance settings at 1920x1080"
            }
        ],
        platform:"PC",
        releaseDate:"3 декабря 2019 ",
        developer:"Bungie",
        publisher:"Microsoft Studios",
        similiarGames:[
            "halo_1",
            "halo_2",
            "halo_3"
        ],
        inStock:false,
        gallery:[
            "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Halo_reach-lnos.png/260px-Halo_reach-lnos.png",
            "https://cdn.gamerjournalist.com/primary/2020/07/Halo-3-Multiplayer-Guide.jpg",
            "https://chiefcanuck.files.wordpress.com/2016/03/halo-5-guardians-warzone-firefight-focus-fire.jpg"
        ],
        genres:["action","shooter"],
        id:"halo_reach"
    },
    {
        name:"Halo 4",
        src:"https://upload.wikimedia.org/wikipedia/en/9/92/Halo_4_box_artwork.png",
        price:700,
        descr:"Компьютерная игра в жанре шутера от первого лица, разработанная компанией 343 Industries для игровой консоли Xbox 360. Это первая игра из «Reclaimer Saga» — новой истории в серии Halo. Игра выпущена во всём мире 6 ноября 2012 года, за исключением Японии, где игра была выпущена 8 ноября. Действие игры начинается через четыре года после событий Halo 3, и отмечена возвращением главного героя серии — Мастера Чифа. ",
        discount:null,
        requirements:[
            {
                name:"ОС",
                value:"Windows 7"
            },
            {
                name:"Процессор",
                value:"Intel Core i7-975 | AMD A12-9800 APU"
            },
            {
                name:"Оперативная память",
                value:"2 GB ОЗУ"
            },
            {
                name:"Видеокарта",
                value:"GeForce GTS 450 | Radeon R7 Graphics"
            },
            {
                name:"Место на диске",
                value:"55 GB"
            },
            {
                name:"Дополнительно",
                value:"30 FPS on performance settings at 1920x1080"
            }
        ],
        platform:"PC",
        releaseDate:"17 ноября 2020 ",
        developer:"343 Industries",
        publisher:"Microsoft Studios",
        similiarGames:[
            "halo_1",
            "halo_2",
            "halo_3"
        ],
        gallery:[
            "https://i.pinimg.com/originals/3d/5e/f4/3d5ef4cd158e31f5df90bcd7cdaf7c91.jpg",
            "https://i.pinimg.com/originals/83/a1/ca/83a1ca5f1989f2be77b95d745b70be11.jpg",
            "https://chiefcanuck.files.wordpress.com/2016/03/halo-5-guardians-warzone-firefight-focus-fire.jpg"
        ],
        inStock:true,
        genres:["action","shooter"],
        id:"halo_4"
    },
    {
        name:"Tomb Raider",
        src:"https://upload.wikimedia.org/wikipedia/en/f/f1/TombRaider2013.jpg",
        price:1100,
        descr:"Кроссплатформенная компьютерная игра в жанре приключенческого боевика от третьего лица с ролевыми элементами, вышедшая на PlayStation 3, Xbox 360 и PC 5 марта 2013 года[К 2], также известная под названиями Tomb Raider 9, Tomb Raider: Ascension и Cryptids. Игра была разработана американской студией Crystal Dynamics совместно с канадской компанией Eidos Montreal и издана холдингом Square Enix. Официальным дистрибьютором и локализатором в России стала компания «1С-СофтКлаб»Перейти к разделу «#Слухи, анонс и выпуск». Впоследствии была портирована на PlayStation 4 и Xbox One и выпущена с подзаголовком Definitive Edition. Feral Interactive портировал игру для macOS 23 января 2014 года, и для Linux — 27 апреля 2016 года. Слоганом Tomb Raider служит фраза «Рождение легенды» (англ. A survivor is born)[18]. ",
        discount:10,
        requirements:[
            {
                name:"ОС",
                value:"Windows 7"
            },
            {
                name:"Процессор",
                value:"Intel Core i7-975 | AMD A12-9800 APU"
            },
            {
                name:"Оперативная память",
                value:"2 GB ОЗУ"
            },
            {
                name:"Видеокарта",
                value:"GeForce GTS 450 | Radeon R7 Graphics"
            },
            {
                name:"Место на диске",
                value:"55 GB"
            },
            {
                name:"Дополнительно",
                value:"30 FPS on performance settings at 1920x1080"
            }
        ],
        platform:"PC",
        releaseDate:"5 марта 2013",
        developer:"Crystal Dynamics",
        publisher:"Square Enix",
        similiarGames:[
            "halo_1",
            "halo_2",
            "halo_3"
        ],
        gallery:[
            "https://store-images.s-microsoft.com/image/apps.29390.63308848442409927.4a4add98-a91b-4163-b848-8d9f0102fef4.7e640485-b2c1-451c-9a02-ff8a4fecf12e?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF",
            "https://cdn.homeshopping.pk/product_images/f/562/201689432__71916_zoom.jpg",
            "https://store-images.s-microsoft.com/image/apps.20053.69860823427010189.8efa1398-c5ab-472e-a118-5217cbf5602a.dafc8954-e00d-404f-b671-420baedbabd8?mode=scale&q=90&h=1080&w=1920&format=jpg"
        ],
        inStock:true,
        genres:["action","adventure"],
        id:"tomb_raider"
    },
    {
        name:"Rise of the Tomb Raider",
        src:"https://upload.wikimedia.org/wikipedia/en/2/29/Rise_of_the_Tomb_Raider.jpg",
        price:1250,
        descr:"Компьютерная игра из серии Tomb Raider в жанре action-adventure с видом от третьего лица, разработанная Crystal Dynamics и изданная Square Enix. Проект был анонсирован 9 июня 2014 года на выставке E3 2014 в Лос-Анджелесе. Была выпущена в ноябре 2015 года на Xbox 360 и Xbox One. В январе 2016 года состоялся релиз игры на ПК, а в октябре на PlayStation 4. Согласно основной сюжетной линии, Лара Крофт отправляется в Россию на поиски секрета бессмертия. ",
        discount:null,
        requirements:[
            {
                name:"ОС",
                value:"Windows 7"
            },
            {
                name:"Процессор",
                value:"Intel Core i7-975 | AMD A12-9800 APU"
            },
            {
                name:"Оперативная память",
                value:"2 GB ОЗУ"
            },
            {
                name:"Видеокарта",
                value:"GeForce GTS 450 | Radeon R7 Graphics"
            },
            {
                name:"Место на диске",
                value:"55 GB"
            },
            {
                name:"Дополнительно",
                value:"30 FPS on performance settings at 1920x1080"
            }
        ],
        platform:"PC",
        releaseDate:"28 января 2016 ",
        developer:"Crystal Dynamics",
        publisher:"Square Enix",
        similiarGames:[
           
        ],
        gallery:[
            "https://store-images.s-microsoft.com/image/apps.29390.63308848442409927.4a4add98-a91b-4163-b848-8d9f0102fef4.7e640485-b2c1-451c-9a02-ff8a4fecf12e?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF",
            "https://cdn.homeshopping.pk/product_images/f/562/201689432__71916_zoom.jpg",
            "https://store-images.s-microsoft.com/image/apps.20053.69860823427010189.8efa1398-c5ab-472e-a118-5217cbf5602a.dafc8954-e00d-404f-b671-420baedbabd8?mode=scale&q=90&h=1080&w=1920&format=jpg"
        ],
        inStock:true,
        genres:["action","adventure"],
        id:"rise_of_the_tomb_raider"
    },
    {
        name:"Shadow of the Tomb Raider",
        src:"https://upload.wikimedia.org/wikipedia/en/1/11/Shadow_of_the_Tomb_Raider_cover.png",
        price:1100,
        descr:"Компьютерная игра из серии Tomb Raider в жанре action-adventure с видом от третьего лица, разработанная канадской студией Eidos Montreal, известной по ролевым стелс-экшенам Thief, Deus Ex: Human Revolution и Deus Ex: Mankind Divided, а не создателями предыдущих частей Tomb Raider из Crystal Dynamics. Является прямым продолжением игры Rise of the Tomb Raider и завершающей трилогию второго перезапуска серии. Проект был анонсирован 15 марта 2018 года. Релиз игры состоялся 14 сентября 2018 года на платформах Windows, PlayStation 4 и Xbox One. Версии игры для macOS и Linux были выпущены компанией Feral Interactive 5 ноября 2019 года.[4] События новой части отправят Лару Крофт на мексиканский остров Косумель и в Южную Америку. Горы, тропический лес, наёмники, солнечное затмение и воскрешение древних сил, охраняющих местные пирамиды, предвещают наступление тьмы и «конец света»[5][6]. ",
        discount:null,
        requirements:[
            {
                name:"ОС",
                value:"Windows 7"
            },
            {
                name:"Процессор",
                value:"Intel Core i7-975 | AMD A12-9800 APU"
            },
            {
                name:"Оперативная память",
                value:"2 GB ОЗУ"
            },
            {
                name:"Видеокарта",
                value:"GeForce GTS 450 | Radeon R7 Graphics"
            },
            {
                name:"Место на диске",
                value:"55 GB"
            },
            {
                name:"Дополнительно",
                value:"30 FPS on performance settings at 1920x1080"
            }
        ],
        inStock:true,
        genres:["action","adventure"],
        platform:"PC",
        releaseDate:"15 марта 2018 ",
        developer:"Eidos Montreal",
        publisher:"Square Enix",
        similiarGames:[
        ],
        gallery:[
            "https://store-images.s-microsoft.com/image/apps.29390.63308848442409927.4a4add98-a91b-4163-b848-8d9f0102fef4.7e640485-b2c1-451c-9a02-ff8a4fecf12e?mode=scale&q=90&h=1080&w=1920&background=%23FFFFFF",
            "https://cdn.homeshopping.pk/product_images/f/562/201689432__71916_zoom.jpg",
            "https://store-images.s-microsoft.com/image/apps.20053.69860823427010189.8efa1398-c5ab-472e-a118-5217cbf5602a.dafc8954-e00d-404f-b671-420baedbabd8?mode=scale&q=90&h=1080&w=1920&format=jpg"
        ],
        id:"shadow_of_the_tomb_raider"
    },
    {
        name:"Amnesia: The Dark Descent",
        src:"https://upload.wikimedia.org/wikipedia/en/thumb/6/62/Amnesia-The-Dark-Descent-Cover-Art.png/220px-Amnesia-The-Dark-Descent-Cover-Art.png",
        price:200,
        descr:"Трёхмерная компьютерная игра в жанре survival horror, разработанная шведской командой Frictional Games, ранее ставшей известной разработкой серии игр Penumbra. Выпуск игры состоялся 8 сентября 2010 года на персональных компьютерах[2]",
        discount:null,
        requirements:[
            {
                name:"ОС",
                value:"Windows 7"
            },
            {
                name:"Процессор",
                value:"Intel Core i7-975 | AMD A12-9800 APU"
            },
            {
                name:"Оперативная память",
                value:"2 GB ОЗУ"
            },
            {
                name:"Видеокарта",
                value:"GeForce GTS 450 | Radeon R7 Graphics"
            },
            {
                name:"Место на диске",
                value:"55 GB"
            },
            {
                name:"Дополнительно",
                value:"30 FPS on performance settings at 1920x1080"
            }
        ],
        inStock:true,
        genres:["horror","adventure"],
        platform:"PC",
        releaseDate:"8 сентября 2010 ",
        developer:"Frictional Games",
        publisher:"Frictional Games",
        similiarGames:[
            "penumbra",
            "outlast",
            "outlast_2"
        ],
        gallery:[
            "https://cdn.vox-cdn.com/thumbor/i2bdFVOOWosKyQZmSDI_odGOrVg=/0x0:1280x720/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/51416149/amnesia-the-dark-descent-article.0.png",
            "https://images.saymedia-content.com/.image/t_share/MTc0Mzc0NzkwOTQ0NDAxMDMw/games-like-amnesia-.jpg",
            "https://i.imgur.com/KKeDE.jpg"
        ],
        id:"amnesia_the_dark_descent"
    },
    {
        name:"Penumbra: Overture",
        src:"https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Penumbra-win-cover.jpg/220px-Penumbra-win-cover.jpg",
        price:200,
        descr:"Компьютерная игра в жанре survival horror, разработанная шведской компанией «Frictional Games» и выпущенная в 2007 году издателем «Lexicon Entertainment». В России игра первоначально была выпущена компанией «Новый Диск» под названием «Пенумбра: Тёмный мир», но затем права на издание последующих частей сериала перешли к «1C», которая переиздала первую часть новым и более корректным названием — «Пенумбра 1. Истоки зла» (при этом, рекламная кампания «1C» косвенно представляла игру как приквел ко второй части)[1]) ",
        discount:null,
        requirements:[
            {
                name:"ОС",
                value:"Windows 7"
            },
            {
                name:"Процессор",
                value:"Intel Core i7-975 | AMD A12-9800 APU"
            },
            {
                name:"Оперативная память",
                value:"2 GB ОЗУ"
            },
            {
                name:"Видеокарта",
                value:"GeForce GTS 450 | Radeon R7 Graphics"
            },
            {
                name:"Место на диске",
                value:"55 GB"
            },
            {
                name:"Дополнительно",
                value:"30 FPS on performance settings at 1920x1080"
            }
        ],
        inStock:true,
        genres:["horror","adventure"],
        platform:"PC",
        releaseDate:"2007 год",
        developer:"Frictional Games",
        publisher:"Paradox Interactive",
        similiarGames:[
            "amnesia_the_dark_descent",
            "outlast",
            "outlast_2"
        ],
        gallery:[
            "https://cdn.akamai.steamstatic.com/steam/apps/22180/0000007526.1920x1080.jpg?t=1591002035",
            "https://media.moddb.com/images/games/1/1/209/3.jpg",
            "https://cdn.nivoli.com/adventuregamers/images/screenshots/16523/8562.jpg"
        ],
        id:"penumbra"
    },
    {
        name:"Outlast",
        src:"https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Outlast_cover.jpg/220px-Outlast_cover.jpg",
        price:500,
        descr:"Компьютерная игра в жанре survival horror от первого лица, разработанная и выпущенная компанией Red Barrels для Windows в 2013 году. Позднее были выпущены версии игры для macOS, Linux, PlayStation 4 и Xbox One. Действие Outlast происходит в заброшенной психиатрической больнице, где герой-журналист сталкивается с кровожадно настроенными безумцами. В отличие от многих подобных игр, игровой персонаж не имеет оружия, не умеет драться и вынужден убегать и прятаться от преследующих его врагов. В 2017 году была выпущена вторая часть игры — Outlast 2. ",
        discount:null,
        requirements:[
            {
                name:"ОС",
                value:"Windows 7"
            },
            {
                name:"Процессор",
                value:"Intel Core i7-975 | AMD A12-9800 APU"
            },
            {
                name:"Оперативная память",
                value:"2 GB ОЗУ"
            },
            {
                name:"Видеокарта",
                value:"GeForce GTS 450 | Radeon R7 Graphics"
            },
            {
                name:"Место на диске",
                value:"55 GB"
            },
            {
                name:"Дополнительно",
                value:"30 FPS on performance settings at 1920x1080"
            }
        ],
        inStock:true,
        genres:["horror"],
        platform:"PC",
        releaseDate:"4 сентября 2013 ",
        developer:"Red Barrels",
        publisher:"Red Barrels",
        similiarGames:[
            "penumbra",
            "amnesia_the_dark_descent",
            "outlast_2"
        ],
        gallery:[
            "https://assets2.rockpapershotgun.com/outlast2.jpg/BROK/resize/880%3E/format/jpg/quality/80/outlast2.jpg",
            "https://static.wikia.nocookie.net/outlast/images/2/2e/The_Twins_Prison_Block.png/revision/latest?cb=20160212142113",
            "https://static.wikia.nocookie.net/outlast/images/a/a4/Steamworkshop_webupload_previewfile_195886482_preview.jpg/revision/latest?cb=20140307170906"
        ],
        id:"outlast"
    },
    {
        name:"Outlast 2",
        src:"https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Outlast2.png/220px-Outlast2.png",
        price:800,
        descr:"Мультиплатформенная компьютерная игра в жанре survival horror от первого лица, разработанная и изданная компанией Red Barrels. Игра вышла 25 апреля 2017 года на платформах Windows, PlayStation 4 и Xbox One одновременно[2].В октябре 2014 года в интервью сайту Bloody Disgusting сооснователь студии Филипп Морин объявил, что студия Red Barrels работает над сиквелом Outlast — Outlast 2. Он отметил, что игра-продолжение также будет относиться к жанру survival horror и что в ней будут новые главные герои и сюжет, но действие будет происходить в той же вселенной. Морин описал разрабатываемую игру как «эмоциональный аттракцион» и подчеркнул, что все дизайнерские решения в ней исходят из того, как они влияют на переживания игроков и служат ли этим переживаниям[3]. Анонс игры состоялся 29 октября 2015 года, когда был выпущен мини-тизер к игре[4]. ",
        discount:null,
        requirements:[
            {
                name:"ОС",
                value:"Windows 7"
            },
            {
                name:"Процессор",
                value:"Intel Core i7-975 | AMD A12-9800 APU"
            },
            {
                name:"Оперативная память",
                value:"2 GB ОЗУ"
            },
            {
                name:"Видеокарта",
                value:"GeForce GTS 450 | Radeon R7 Graphics"
            },
            {
                name:"Место на диске",
                value:"55 GB"
            },
            {
                name:"Дополнительно",
                value:"30 FPS on performance settings at 1920x1080"
            }
        ],
        inStock:true,
        genres:["horror"],
        platform:"PC",
        releaseDate:"29 октября 2015",
        developer:"Red Barrels",
        publisher:"Red Barrels",
        similiarGames:[
            "penumbra",
            "outlast",
            "amnesia_the_dark_descent"
        ],
        gallery:[
            "https://i.redd.it/6ylsobzr9g611.png",
            "https://external-preview.redd.it/zQBuf_JPEWlTp3V-kRfgTEUbBsI7aWaxX25zyWu8mgE.png?auto=webp&s=1a0d0c6da3887e2233f91004ac72b33a91c9f431",
            "https://i.redd.it/x390wn4vcruy.png"
        ],
        id:"outlast_2"
    },
]
const bundles=[
    {
        bunldeItems:[
            trendingItems[0],
            trendingItems[1],
            bestsellers[0]
        ],
        discount:20
    }
   
]
export default class DataService{
    constructor(props) {
       
        
        this.getItem=this.getItem.bind(this);
        this.getSimiliarGames=this.getSimiliarGames.bind(this);
    }

    

    getItem(id){
        const res=items.find(ele=>ele.id===id);
        return res;
    }
    getSimiliarGames(id){
        const item = this.getItem(id);
        let res=[];
        item.similiarGames.forEach(ele=>{
            res.push(this.getItem(ele));
        })
        return res;
    }
    getList(id)
    {
        const res = listDatabase[id];
        return res;
    }

    getTrending()
    {
        const res = trendingItems;
        return res;
    }
    getBestsellers()
    {
        const res = items.filter(ele=>bestsellers.includes(ele.id)===true );
        return res;
    }

    getBundle(id){
        if(id>=0 && id<bundles.length)
        {
            const res = bundles[id];
            return res;
        }
        else
        {
            return null;
        }
        
    }

    
    getFilteredItems(filter){
        let res=[];
        const {name,minPrice,maxPrice,genres,inStock,order}=filter;
        
        items.map(item=>{
            if(item.price>maxPrice || item.price<minPrice)
            {
                return false;
            }
            
            if(genres.every(genre=>item.genres.includes(genre))===false){
                return false;
            }

            if(inStock!==false && item.inStock===false){
                return false;
            }
            res.push(item);
            return true;
        })
        
        switch(order){
            case "price_asc":
                res.sort((a,b)=>a.price>b.price)
                break;
                case "price_desc":
                    res.sort((a,b)=>a.price<b.price)
                    break;
                default:
                    break;
        }
       
        return res;

    }
    
}