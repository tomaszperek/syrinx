/**
 * Created by tomasz on 19/10/2016.
 */
function locale() {
    var s = window.location.search;
    var params = s.replace("?", "").split("&");
    return _.first(_.map(
            _.filter(params, function (p) {
                return _.startsWith(p, 'lang=')
            }),
            function (kv) {
                return _.last(kv.split("="));
            })) || "en";

}

function model(locale) {
    var commonModel = {
        slides: [
            "images/banner_syrinx_21.jpg",
            "images/banner_syrinx_0.jpg",
            "images/banner_syrinx_1.jpg",
            "images/banner_syrinx_2.jpg",
            "images/banner_syrinx_3.jpg",
            "images/banner_syrinx_4.jpg",
            "images/banner_syrinx_5.jpg",
            "images/banner_syrinx_6.jpg",
            "images/banner_syrinx_7.jpg",
            "images/banner_syrinx_8.jpg",
            "images/banner_syrinx_9.jpg",
            "images/banner_syrinx_10.jpg",
            "images/banner_syrinx_11.jpg",
            "images/banner_syrinx_12.jpg",
            "images/banner_syrinx_13.jpg",
            "images/banner_syrinx_14.jpg",
            "images/banner_syrinx_15.jpg",
            "images/banner_syrinx_16.jpg",
            "images/banner_syrinx_17.jpg",
            "images/banner_syrinx_18.jpg",
            "images/banner_syrinx_19.jpg",
            "images/banner_syrinx_20.jpg",
            "images/banner_syrinx_22.jpg",
            "images/banner_syrinx_23.jpg"
        ],
        videos: [
            {src: "http://www.youtube.com/embed/IfEBov_DewU"},
            {src: "http://www.youtube.com/embed/L9WpgfY0OI8"},
            {src: "http://www.youtube.com/embed/Ebc-pR_a00w"}

        ],
        discography: [
            {discImage: "images/disc-0001.jpg"},
            {discImage: "images/disc-0002.jpg"},
            {discImage: "images/disc-0003.jpg"},
            {discImage: "images/disc-0004.jpg"},
            {discImage: "images/disc-0005.jpg"},
            {discImage: "images/disc-0007.jpg"},
            {discImage: "images/disc-0008.jpg"},
            {discImage: "images/disc-0009.jpg"},
            {discImage: "images/disc-0010.jpg"},
            {discImage: "images/disc-0011.jpg"},
            {discImage: "images/disc-0012.jpg"},
            {discImage: "images/disc-0013.jpg"},
            {discImage: "images/disc-0014.jpg"},
            {discImage: "images/disc-0015.jpg"}
        ],


    };

    var translations = {
        ru: {
            syrinx: "Сиринкс",
            main: "Главная",
            about: "О нас",
            members: "Состав",
            membersOfTheEnsemble: "Состав ансамбля",
            ourMusic: "Наша музыка",
            contact: "Контакт",
            historyTitle: "История Ансамбля",
            historyText: "&nbsp;&nbsp;&nbsp;&nbsp;Живет в ансамбле трепетная душа прекрасной нимфы Сиринкс, которая очаровала Нину Авраменко и ее воспитанников в Беларуси.\n" +
            "Изначально ансамбль состоял из учеников Средней Специальной музыкальной школы при консерватории класса Нины Авраменко. Сегодняшний ансамбль флейтистов \"Сиринкс\"" +
            ' состоит из молодых, одаренных музыкантов - выпускников Белорусской государственной ' +
            'академии музыки. Это сплав талантливой ' +
            'молодости с профессиональной зрелостью. ' +
            "Ансамбль \"Сиринкс\" - лауреат Международного конкурса исполнителей камерной музыки. С мастерством участников ансамбля знакомы слушатели многих городов Беларуси, ему аплодировали в России, " +
            "Украине, Литве, Польше, Люксембурге, Франции, Германии. Вот уже 16 лет коллекстив ансамбля сотрудничает с благотворительным немецким фондом \"Дома вместо Чернобыля\"" + "" +
            ", помогая в сборе средств на строительство " +
            "жилья для переселенцев из чернобыльской зоны Беларуси. " +
            "\"Сиринкс\" участвовал во многих международных фестивалях - это Крым, " +
            "Карелия, Франция, Германия и всюду о творчестве ансамбля слушатели отзываются с большим теплом.\nПроблемы репертуара в ансамбле не существует. Музыканты исполняют произведения, " +
            "которые им нравятся, ведь в коллективе выросли свои аранжировщики - это Лариса Ласоцкая, Вадим Сидоров, Артем Немирский." +
            "<br/><br/><br/>&nbsp;&nbsp;&nbsp;Душой и движущей силой \"Сиринкса\" является " +
            "создатель и бессменный руководитель, доцент Белорусской государственной академии музыки Нина Васильевна Авраменко, которая сумела сначала воспитать и обучить таких музыкантов, " +
            "а затем собрать их в коллектив единомышленников, желающих творить вместе и с удовольствием. Именно поэтому искусство ансамбля всегда свежо и искренне",
            ourMusic: "Наша музыка",
            ourMusicText: "Послушайте нашую музыку",
            discographyTitle: "Дискография",
            membersList: [
                {
                    img: "images/NinVas300x451.jpg",
                    name: "Нина Авраменко",
                    function: "Художественный руководитель",
                    bio: ""
                },
                {
                    img: "images/Larisa-1.jpg",
                    name: "Лариса Ласоцкая",
                    function: "Флейта",
                    bio: ""
                },
                {
                    img: "images/Agafon-1.jpg",
                    name: "Сергей Кортес",
                    function: "Флейта",
                    bio: ""
                },
                {
                    img: "images/Arsen-1.jpg",
                    name: "Арсен Замтарадзе",
                    function: "Флейта, альтовая флейта",
                    bio: ""
                },
                {
                    img: "images/Lena.jpg",
                    name: "Елена Пэрэк",
                    function: "Флейта",
                    bio: ""
                },
                {
                    img: "images/Artem-1.jpg",
                    name: "Артём Немирский",
                    function: "Флейта, альтовая флейта, пикколо",
                    bio: ""
                },
                {
                    img: "images/Nadia-1.jpg",
                    name: "Надежда Мелешко",
                    function: "Флейта, альтовая флейта",
                    bio: ""
                },
                {
                    img: "images/Vitek-1.jpg",
                    name: "Виктор Алексеев",
                    function: "Флейта, альтовая флейта, басовая флейта",
                    bio: ""
                },
                {
                    img: "images/Masha-1.jpg",
                    name: "Мария Шункевич",
                    function: "Флейта",
                    bio: ""
                },
                {
                    img: "images/Alina-1.jpg",
                    name: "Алина Станкевич",
                    function: "Флейта",
                    bio: ""
                },
                {
                    img: "images/Vadim1.jpg",
                    name: "Вадим Сидоров",
                    function: "Фортепиано",
                    bio: ""
                }
            ],
            ourLinks: "",
            eventsTitle: "Календарь событий",
            eventsShort: "События",
            events: [
                {date: "26 марта 2017", description: "сольный концерт в к/з \"Верхний город\""},
                {date: "27 декабря 2016", description: "участие в праздничном концерте в БГАМ"},
                {date: "июнь - декабрь 2016", description: "запись нового диска"},
                {date: "30 марта - 11 апреля 2016", description: "благотворительное турне по Германии"},
                {date: "14 марта 2016", description: "сольный концерт в к/з \"Верхний Город\""},
                {date: "4 декабря 2015", description: "участие в Юбилейном концерте Республиканского музыкального гимназии-колледжа при БГАМ"},
                {date: "15 ноября 2015", description: "сольный концерт в Белорусской государственной филармонии"},

            ]


        },
        pl: {
            syrinx: "Syrinx",
            main: "Początek",
            about: "O Nas",
            members: "Skład",
            membersOfTheEnsemble: "Skład Zespołu",
            ourMusic: "Nasza Muzyka",
            contact: "Kontakt",
            historyTitle: "Historia Zespołu",
            historyText: "&nbsp;&nbsp;&nbsp;&nbsp;Żyje w zepole wrażliwa dusza nimfy Syrinx, która oczarowała Ninę Awramienko i jej wychowanków w Białorusi.\n" +
            "Początkowo zespół składał się z uczniów klasy Niny Awramienko w Średniej Specialnej Szkole Muzycznej przy Konserwatorium. Dzisiejszy zespół flecistów \"Syrinx\"" +
            ' składa się z młodych, utalentowanych muzyków, absolwentów Białoruskiej Państwowej Akademii Muzyki. Jest stopem błyskotliwej młodości i profesjonalnej dojrzałości. Zespół \"Syrinx\" jest laureatem międzynarodowego konkursu muzyki kameralnej. ' +
            ' Z kunsztem członków zespołu mieli okazję zapoznać się mieszkańcy wielu miast Białorusi, oklaskiwano go w Rosji, na Ukrainie i Litwie, w Polsce, Luksemburgu, Francji i Niemczech. Już 16 lat zespół współpracuje z niemiecką organizacją chartytatywną \"Domy zamiast Czarnobyla\"' +
            ", pomagając z zbiórce środków na budowę mieszkań dla przesiedleńców z białoruskich rejonów skażonych podczas katastrofy czarnobylskiej. " +
            "\"Syrinx\" uczestniczył w wielu międzynarodowych festiwalach na Krymie, w Karelii, Francji i Niemczech i wszędzie spotykał się z bardzo ciepłym przyjęciem. Zepołowi nieznane są problemy z repertuarem. Muzycy wykonują utwory, jakie tylko zechcą, ponieważ mają w swoim gronie doskonałych aranżatorów - to Larisa Lasocka, Wadim Sidorow oraz Artiom Niemirski. " +
            "<br/><br/><br/>&nbsp;&nbsp;&nbsp;Duszą i siłą napędową \"Syrinx\" jest założycielka i niezastąpiona kierowniczka Nina Awramienko, docent na Białoruskiej Państwowej Akademii Muzyki, której udało się wyuczyć i wychować takich muzyków a następnie połączyć ich w jednomyślny kolektyw, pragnący tworzyć razem i z przyjemnością. Właśnie dlatego twórczość zespołu jest zawsze świeża i szczera.",
            ourMusic: "Nasza Muzyka",
            ourMusicText: "Zapraszamy do posłuchania wybranych utworów w naszym wykonaniu",
            discographyTitle: "Dyskografia",
            membersList: [
                {
                    img: "images/NinVas300x451.jpg",
                    name: "Nina Awramienko",
                    function: "Kierownik Artystyczny",
                    bio: ""
                },
                {
                    img: "images/Larisa-1.jpg",
                    name: "Larisa Lasocka",
                    function: "Flet i flet altowy",
                    bio: ""
                },
                {
                    img: "images/Agafon-1.jpg",
                    name: "Sergiusz Kortes",
                    function: "Flet",
                    bio: ""
                },
                {
                    img: "images/Arsen-1.jpg",
                    name: "Arsen Zamtaradze",
                    function: "Flet, flet altowy",
                    bio: ""
                },
                {
                    img: "images/Lena.jpg",
                    name: "Helena Perek",
                    function: "Flet",
                    bio: ""
                },
                {
                    img: "images/Artem-1.jpg",
                    name: "Artiom Niemirski",
                    function: "Flet, flet altowy oraz piccolo",
                    bio: ""
                },
                {
                    img: "images/Vitek-1.jpg",
                    name: "Wiktor Aleksiejew",
                    function: "Flet, flet altowy oraz flet basowy",
                    bio: ""
                },
                {
                    img: "images/Nadia-1.jpg",
                    name: "Nadzieja Mieleszko",
                    function: "Flet",
                    bio: ""
                },
                {
                    img: "images/Masha-1.jpg",
                    name: "Maria Szunkiewicz",
                    function: "Flet",
                    bio: ""
                },
                {
                    img: "images/Alina-1.jpg",
                    name: "Alina Stankiewicz",
                    function: "Flet",
                    bio: ""
                },
                {
                    img: "images/Vadim1.jpg",
                    name: "Wadim Sidorow",
                    function: "Fortepian",
                    bio: ""
                }
            ],
            ourLinks: "",
            eventsTitle: "Wydarzenia",
            eventsShort: "Wydarzenia",
            events: [
                {date: "26 marca 2017", description: "Koncert solowy w sali koncertowej \"Верхний город\""},
                {date: "27 grudnia 2016", description: "Uczestictwo w swiątecznym koncercie Białoruskiej Państwowej Akademii Muzyki"},
                {date: "lipiec - grudzień 2016", description: "Nagrywanie nowej płyty"},
                {date: "30 marca - 11 kwietnia 2016", description: "Charytatywne tournee po Niemczech"},
                {date: "14 marca 2016", description: "Koncert solowy w sali koncertowej \"Верхний Город\" w Mińsku"},
                {date: "4 grudnia 2015", description: "Występ na Koncercie Jubileuszowym Liceum Muzycznego przy Białoruskiej Państwowej Akademii Muzycznej"},
                {date: "15 listopad 2015", description: "Koncert Solowy w Białoruskiej Filharmonii Narodowej"},
            ]

        },
        en: {
            syrinx: "Syrinx",
            main: "Main",
            about: "About us",
            members: "Members",
            membersOfTheEnsemble: "Memebers of the ensemble",
            ourMusic: "Our Music",
            contact: "Contact",
            historyTitle: "History of the ensemble",
            historyText: "&nbsp;&nbsp;&nbsp;&nbsp;Soul of nymph Syrinx lives in the ensemble and it enchanted Nina Avramenko and her disciples in Belarus. " +
            "In the beginning, the ensemble consisted of pupils of Nina Avramenko from her class in Musical High School of Minsk Conservatory. Today Syrinx is made of young and talented musicians, graduates of Belarussian State Academy of Music. It is a joint of brilliant youth and professional maturity. The enseble is a laureate of international chamber music competition. " +
            ' Artistry of the ensemble is known to citizens of many cities is Belarus, it has been applauded in Russia, Ukraine, Lithuania, Poland, Luxemburg, France and Germany. It\'s been 16 years since the ensemble started cooperation with German charity fund \'Houses instead of Chernobyl\'' +
            ", helping it raise money for building houses for refugees from Chernobyl zone. " +
            "'Syrinx' took part in many festivals in Crimea, Karelia, France, Germany and everywhere it received very warm reception. Problems with repertoire are unknown to the ensemble. They play what they want, since there are brilliant arrangers among them - Larisa Lasockaya, Vadim Sidorov and Artyom Nemirskiy. " +
            "<br/><br/><br/>&nbsp;&nbsp;&nbsp;The soul and the driving force of 'Syrinx' is the creator and irreplaceable manager Nina Avramenko, professor at the Belarussian State Music Academy, which managed to educate and raise such musicians and then connect them into unanimous collective which desires to work together with passion and pleasure. This is exactly why the work of the enseble is always fresh and sincere.",
            ourMusic: "Our Music",
            discographyTitle: "Discography",
            ourMusicText: "Listen to selected performances of our ensemble.",
            membersList: [
                {
                    img: "images/NinVas300x451.jpg",
                    name: "Nina Avramenko",
                    function: "Art Director and Manager",
                    bio: ""
                },
                {
                    img: "images/Larisa-1.jpg",
                    name: "Larisa Lasockaya",
                    function: "Flute",
                    bio: ""
                },
                {
                    img: "images/Agafon-1.jpg",
                    name: "Sergey Kortes",
                    function: "Flute",
                    bio: ""
                },
                {
                    img: "images/Arsen-1.jpg",
                    name: "Arsen Zamtaradze",
                    function: "Flute and alto flute",
                    bio: ""
                },
                {
                    img: "images/Lena.jpg",
                    name: "Helena Perek",
                    function: "Flute",
                    bio: ""
                },
                {
                    img: "images/Artem-1.jpg",
                    name: "Artyom Nemirskiy",
                    function: "Flute, alto flute and piccolo",
                    bio: ""
                },
                {
                    img: "images/Nadia-1.jpg",
                    name: "Nadezhda Meleshko",
                    function: "Flute and alto flute",
                    bio: ""
                },
                {
                    img: "images/Vitek-1.jpg",
                    name: "Victor Alekseyev",
                    function: "Flute, alto flute and bass flute",
                    bio: ""
                },
                {
                    img: "images/Masha-1.jpg",
                    name: "Maria Shunkevich",
                    function: "Flute",
                    bio: ""
                },
                {
                    img: "images/Alina-1.jpg",
                    name: "Alina Stankevich",
                    function: "Flute",
                    bio: ""
                },
                {
                    img: "images/Vadim1.jpg",
                    name: "Vadim Sidorov",
                    function: "Piano",
                    bio: ""
                }
            ],
            ourLinks: "",
            eventsTitle: "Events",
            eventsShort: "Events",
            events: [
                {date: "26 March 2017", description: "Solo concert in \"Верхний город\", Minsk"},
                {date: "27 grudnia 2016", description: "Participation in christmas concert at Belarusian State Music Academy"},
                {date: "June - December", description: "Recording new disc"},
                {date: "30 March - 11 April", description: "Charity tournee over Germany"},
                {date: "14 March", description: "Solo concert in \"Верхний Город\", Minsk"},
                {date: "4 December 2015", description: "Participation in Jubilee Concert of High School of Belarusian State Music Academy"},
                {date: "15 November 2015", description: "Solo concert in Belarusian National Philharmonic"}
            ]
        }
    };
    var translation = translations.hasOwnProperty(locale) ? translations[locale] : translations["en"];
    var model = $.extend(commonModel, translation);
    return model;
}
