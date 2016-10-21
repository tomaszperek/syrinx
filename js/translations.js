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
        syrinx: "Сиринх",
        main: "Главная",
        about: "О нас",
        members: "Состав",
        membersOfTheTEnsemble: "Состав ансамбля",
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
            {src: "http://www.youtube.com/embed/Ebc-pR_a00w"},
            {src: "http://www.youtube.com/embed/Ebc-pR_a00w"},
            {src: "http://www.youtube.com/embed/Ebc-pR_a00w"},
            {src: "http://www.youtube.com/embed/Ebc-pR_a00w"},
            {src: "http://www.youtube.com/embed/Ebc-pR_a00w"}
        ],
        membersList: [
            {
                img: "images/NinVas2.jpg",
                name: "Нина Авраменко",
                function: "Художественный руководитель",
                bio: "Художественный руководитель"
            },
            {
                img: "images/Larisa.jpg",
                name: "Лариса Ласоцкая",
                function: "Флейта",
                bio: "Первая флейта"
            },
            {
                img: "images/Nadia.jpg",
                name: "Надежда Мелешко",
                function: "Флейта",
                bio: "Первая и вторая флейта"
            },
            {
                img: "images/helena_perek.jpg",
                name: "Елена Пэрэк",
                function: "Флейта",
                bio: "Первая и вторая флейта"
            },
            {
                img: "images/Agafon.jpg",
                name: "Сергей Кортес",
                function: "Флейта",
                bio: "Первая и вторая флейта"
            },
            {
                img: "images/Vitek.jpg",
                name: "Виктор Алексеев",
                function: "Флейта",
                bio: "Первая и вторая флейта"
            },
            {
                img: "images/Arsen.jpg",
                name: "Арсен Замтарадзе",
                function: "Флейта",
                bio: "Первая и вторая флейта"
            },
            {
                img: "images/Artem.jpg",
                name: "Артём Немирский",
                function: "Флейта",
                bio: "Первая и вторая флейта"
            },
            {
                img: "images/Vadim.jpg",
                name: "Вадим Сидоров",
                function: "Флейта",
                bio: "Первая и вторая флейта"
            }
        ]

    }
}