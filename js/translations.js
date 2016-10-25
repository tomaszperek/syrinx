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
            })) || "ru";

}

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
        "<br/><br/>&nbsp;&nbsp;&nbsp;Изначально ансамбль состоял из учеников Средней Специальной музыкальной школы при консерватории класса Нины Авраменко. Сегодняшний ансамбль флейтистов \"Сиринкс\"" +
        ' состоит из молодых, одаренных музыкантов - выпускников Белорусской государственной ' +
        'академии музыки. Это сплав талантливой ' +
        'молодости с профессиональной зрелостью.' +
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
        videos: [
            {src: "http://www.youtube.com/embed/Ebc-pR_a00w"},
            {src: "http://www.youtube.com/embed/L9WpgfY0OI8"}
        ],
        membersList: [
            {
                img: "images/NinVas2.jpg",
                name: "Нина Авраменко",
                function: "Художественный руководитель",
                bio: "художественный руководитель, доцент Белорусской государственной академии музыки"
            },
            {
                img: "images/Larisa.jpg",
                name: "Лариса Ласоцкая",
                function: "Флейта",
                bio: "лауреат Всесоюзного и международных конкурсов"
            },
            {
                img: "images/Nadia.jpg",
                name: "Надежда Мелешко",
                function: "Флейта, альтовая флейта",
                bio: "лауреат Международных конкурсов"
            },
            {
                img: "images/helena_perek.jpg",
                name: "Елена Пэрэк",
                function: "Флейта",
                bio: "лауреат Международных конкурсов"
            },
            {
                img: "images/Agafon.jpg",
                name: "Сергей Кортес",
                function: "Флейта",
                bio: "лауреат Международных конкурсов"
            },
            {
                img: "images/Vitek.jpg",
                name: "Виктор Алексеев",
                function: "Флейта, альтовая флейта, басовая флейта",
                bio: "лауреат Республиканского и Международного конкурса"
            },
            {
                img: "images/Arsen.jpg",
                name: "Арсен Замтарадзе",
                function: "Флейта, альтовая флейта",
                bio: "лауреат Международных конкурсов"
            },
            {
                img: "images/Artem.jpg",
                name: "Артём Немирский",
                function: "Флейта, альтовая флейта, пикколо",
                bio: "лауреат Международных конкурсов"
            },
            {
                img: "images/Vadim.jpg",
                name: "Вадим Сидоров",
                function: "Фортепиано",
                bio: "лауреат Международного конкурса"
            }
        ],
        ourLinks: "",
        slides: ["images/banner_syrinx_0.jpg", "images/banner_syrinx_1.jpg", "images/banner_syrinx_2.jpg", "images/banner_syrinx_3.jpg", "images/banner_syrinx_4.jpg", "images/banner_syrinx_5.jpg", "images/banner_syrinx_6.jpg"]

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
        "<br/><br/>&nbsp;&nbsp;&nbsp;Początkowo zespół składał się z uczniów klasy Niny Awramienko w Średniej Specialnej Szkole Muzycznej przy Konserwatorium. Dzisiejszy zespół flecistów \"Syrinx\"" +
        ' składa się z młodych, utalentowanych muzyków, absolwentów Białoruskiej Państwowej Akademii Muzyki. Jest stopem błyskotliwej młodości i profesjonalnej dojrzałości. Zespół \"Syrinx\" jest laureatem międzynarodowego konkursu muzyki kameralnej. ' +
        ' Z kunsztem członków zespołu mieli okazję zapoznać się mieszkańcy wielu miast Białorusi, oklaskiwano go w Rosji, na Ukrainie i Litwie, w Polsce, Luksemburgu, Francji i Niemczech. Już 16 lat zespół współpracuje z niemiecką organizacją chartytatywną \"Domy zamiast Czarnobyla\"' +
        ", pomagając z zbiórce środków na budowę mieszkań dla przesiedleńców z białoruskich rejonów skażonych podczas katastrofy czarnobylskiej. " +
        "\"Syrinx\" uczestniczył w wielu międzynarodowych festiwalach na Krymie, w Karelii, Francji i Niemczech i wszędzie spotykał się z bardzo ciepłym przyjęciem. Zepołowi nieznane są problemy z repertuarem. Muzycy wykonują utwory, jakie tylko zechcą, ponieważ mają w swoim gronie doskonałych aranżatorów - to Larisa Lasocka, Wadim Sidorow oraz Artiom Niemirski. " +
        "<br/><br/><br/>&nbsp;&nbsp;&nbsp;Duszą i siłą napędową \"Syrinx\" jest założycielka i niezastąpiona kierowniczka Nina Awramienko, docent na Białoruskiej Państwowej Akademii Muzyki, której udało się wyuczyć i wychować takich muzyków a następnie połączyć ich w jednomyślny kolektyw, pragnący tworzyć razem i z przyjemnością. Właśnie dlatego twórczość zespołu jest zawsze świeża i szczera.",
        ourMusic: "Nasza Muzyka",
        ourMusicText: "Zapraszamy do posłuchania wybranych utworów w naszym wykonaniu",
        videos: [
            {src: "http://www.youtube.com/embed/Ebc-pR_a00w"},
            {src: "http://www.youtube.com/embed/L9WpgfY0OI8"}
        ],
        membersList: [
            {
                img: "images/NinVas2.jpg",
                name: "Nina Awramienko",
                function: "Kierownik Artystyczny",
                bio: "Kierownik Artystyczny, docent na Białoruskiej Państwowej Akademii Nauk"
            },
            {
                img: "images/Larisa.jpg",
                name: "Larisa Lasocka",
                function: "Flet i flet altowy",
                bio: "Laureatka konkursów międzynarodowych"
            },
            {
                img: "images/Nadia.jpg",
                name: "Nadzieja Mieleszko",
                function: "Flet",
                bio: "Laureatka konkursów międzynarodowych"
            },
            {
                img: "images/helena_perek.jpg",
                name: "Helena Perek",
                function: "Flet",
                bio: "Laureatka konkursów międzynarodowych"
            },
            {
                img: "images/Agafon.jpg",
                name: "Sergiusz Kortes",
                function: "Flet",
                bio: "Laureat konkursów międzynarodowych"
            },
            {
                img: "images/Vitek.jpg",
                name: "Wiktor Aleksiejew",
                function: "Flet, flet altowy oraz flet basowy",
                bio: "Laureat międzynarodowego oraz krajowego konkursu"
            },
            {
                img: "images/Arsen.jpg",
                name: "Arsen Zamtaradze",
                function: "Flet, flet altowy",
                bio: "Laureat konkursów międzynarodowych"
            },
            {
                img: "images/Artem.jpg",
                name: "Artiom Niemirski",
                function: "Flet, flet altowy oraz piccolo",
                bio: "Laureat konkursów międzynarodowych"
            },
            {
                img: "images/Vadim.jpg",
                name: "Wadim Sidorow",
                function: "Fortepian",
                bio: "Laureat konkursu międzynarodowego"
            }
        ],
        ourLinks: "",
        slides: ["images/banner_syrinx_0.jpg", "images/banner_syrinx_1.jpg", "images/banner_syrinx_2.jpg", "images/banner_syrinx_3.jpg", "images/banner_syrinx_4.jpg", "images/banner_syrinx_5.jpg", "images/banner_syrinx_6.jpg"]

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
        historyText: "&nbsp;&nbsp;&nbsp;&nbsp;Soul of nymph Syrinx lives in the ensemble and it enchanted Nina Avramenko and her disciples in Belarus" +
        "<br/><br/>&nbsp;&nbsp;&nbsp;In the beginning, the ensemble consisted of pupils of Nina Avramenko from her class in Musical High School of Minsk Conservatory. Today Syrinx is made of young and talented musicians, graduates of Belarussian State Academy of Music. It is a joint of brilliant youth and professional maturity. The enseble is a laureate of international chamber music competition. " +
        ' Artistry of the ensemble is known to citizens of many cities is Belarus, it has been applauded in Russia, Ukraine, Lithuania, Poland, Luxemburg, France and Germany. It\'s been 16 since the ensemble started cooperation with German charity fund \'Houses instead of Chernobyl\'' +
        ", helping it in raising money for building houses for refugees from Chernobyl zone. " +
        "'Syrinx' took part in many festivals in Crimea, Karelia, France, Germany and everywhere it received very warm reception. Problems with repertoire are unknown to the ensemble. They play what they want, since there are brilliant arrangers among them - Larisa Lasockaya, Vadim Sidorov oraz Artyom Nemirskiy. " +
        "<br/><br/><br/>&nbsp;&nbsp;&nbsp;The soul and the driving force of 'Syrinx' is the creator and irreplaceable manager Nina Avramenko, professor at the Belarussian State Music Academy, which managed to educate and raise such musicians and then connect them into unanimous collective which desires to work together with passion and pleasure. This is exactly why the work of the enseble is always fresh and sincere.",
        ourMusic: "Our Music",
        ourMusicText: "Listen to selected performances of our ensemble.",
        videos: [
            {src: "http://www.youtube.com/embed/Ebc-pR_a00w"},
            {src: "http://www.youtube.com/embed/L9WpgfY0OI8"}
        ],
        membersList: [
            {
                img: "images/NinVas2.jpg",
                name: "Nina Avramenko",
                function: "Art Director and Manager",
                bio: "Art Director, docent on Belarussian State Music Academy"
            },
            {
                img: "images/Larisa.jpg",
                name: "Larisa Lasockaya",
                function: "Flute",
                bio: "Laureate of international competitions"
            },
            {
                img: "images/Nadia.jpg",
                name: "Nadezhda Meleshko",
                function: "Flutea and alto flute",
                bio: "Laureate of international competitions"
            },
            {
                img: "images/helena_perek.jpg",
                name: "Helena Perek",
                function: "Flute",
                bio: "Laureate of international competitions"
            },
            {
                img: "images/Agafon.jpg",
                name: "Sergey Kortes",
                function: "Flute",
                bio: "Laureate of international competitions"
            },
            {
                img: "images/Vitek.jpg",
                name: "Victor Alekseyev",
                function: "Flute, alto flute and bass flute",
                bio: "Laureate of international competition and republican competition"
            },
            {
                img: "images/Arsen.jpg",
                name: "Arsen Zamtaradze",
                function: "Flute and alto flute",
                bio: "Laureate of international competitions"
            },
            {
                img: "images/Artem.jpg",
                name: "Artyom Nemirskiy",
                function: "Flute, alto flute and piccolo",
                bio: "Laureate of international competitions"
            },
            {
                img: "images/Vadim.jpg",
                name: "Vadim Sidorov",
                function: "Piano",
                bio: "Laureate of international competition"
            }
        ],
        ourLinks: "",
        slides: ["images/banner_syrinx_0.jpg", "images/banner_syrinx_1.jpg", "images/banner_syrinx_2.jpg", "images/banner_syrinx_3.jpg", "images/banner_syrinx_4.jpg", "images/banner_syrinx_5.jpg", "images/banner_syrinx_6.jpg"]

    }

}