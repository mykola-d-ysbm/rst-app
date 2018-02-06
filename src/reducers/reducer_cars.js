import { FETCH_CARS } from '../actions';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_CARS:
            return action.payload.data;
        default:
            return state;
    }
}

// import { GET_PRODUCTS } from '../actions/action_products';
//
// export default function (state = {}, action) {
//     switch (action.type) {
//         case GET_PRODUCTS:
//             return action.payload.data;
//         default:
//             return state;
//     }
// }

// export default function () {
//     return [
//         {
//             "id": 0,
//             "image": "http://img1.rstcars.com/oldcars/audi/a6/7368094-113.jpg",
//             "title": "Продам AUDI A6 , обмен",
//             "description": "Хозяин по тех. паспорту. Продам свой идеальный автомобиль,один хозяин. AUDI A6 c6 3.0 TFSi Quattro. Очень редкая индивидуальная комплектация!Полный привод! Модель 2010 года!!! Последний рестайл, не путайте с обычной. Мощный двигатель 3.0 Турло 292 л.с., результат до 100 около 5,5 секунд. Расход в городе 12-13 литров на 100.Коробка с спорт режимом, подрулевые лепестки! Пневмо подвеска (в отличном состоянии), Двухзонный климат контроль. Передний и задний парктроник, Электро шторки задних окон Подогрев передних и задних сидений, электропривод передних сидений, память руля и сидений, навигация, сд, двд, карты памяти, качественная акустика с саббуфером, и много другого. , Вся целая и в родном окрасе, без подкрасов и подмазов! Реальный пробег,полностью обслужена и только оригинальные запчасти. Не требует обсалютно ни каких вложений!!! Денег на авто не жалел и в гаражах не обслуживал! Готов к проверке на любом сто. Разумный торг. Автопредпринимателям просьба не беспокоить! Интересует обмен на Крассовер/ Внедорожник немецкого,японского производства,от 2006 года, только в хорошем состоянии и без ДТП, любой вид доплаты( моя или ваша) Хлам не предлагать. На обмен цена 19000$",
//             "year": 2009,
//             "price": 17500
//         },
//         {
//             "id": 1,
//             "image": "http://img1.rstcars.com/oldcars/audi/q5/7548522-24.jpg",
//             "title": "Продам AUDI Q5 S-line",
//             "description": "Автомобиль не бит, не крашен, в Украине год. Комплектация S-line, два комплекта дисков R20 и R18, спутниковая сигнализация и противоугонная система Sniper - €1200 (еще на гарантии). Оригинальный пробег, в отличном визуальном и техническом состоянии, Панорамная крыша, Акустика Audi Symphony: 6-ти канальный усилитель, 10 динамиков в т. ч. центральный на приборной панели и сабвуфер в нише запасного колеса. мощность 180 Вт. Готовы ехать на любое СТО. Возможен аргументированный торг.",
//             "year": 2011,
//             "price": 27800
//         },
//         {
//             "id": 2,
//             "image": "http://img1.rstcars.com/oldcars/audi/q7/7929363-1.jpg",
//             "title": "Продам AUDI Q7 s line",
//             "description": "Машина семейная. Ухожена. Я второй владелец. Обслужина. Хранилась отопляемом гараже. Каждую весну промывались баллоны пневмо и проводилась полная диагностика пневмы. Состояние салона вы оцените при осмотре. В салоне не курили. Комплектация. 2 комплекта резины 20 радиус (зима + лето). Подкрасы. По кузову подкрасов нету. Звонить с 9. 00 - 21. 00. Торг будет но только реальному покупателю.",
//             "year": 2007,
//             "price": 20500
//         },
//         {
//             "id": 3,
//             "image": "http://img.rstcars.com/oldcars/audi/q7/7887269-11.jpg",
//             "title": "Продам AUDI Q7",
//             "description": "Машина семейная. Ухожена. Я второй владелец. Обслуживание. За последний год заменены все расходники по ходовой. Каждую весну промывались баллоны пневмо и проводилась полная диагностика пневмы. Диски заменены на перфорированные, тормозные колодки с керамической крошкой. По акции на официалах поменяны все форсунки (проблем небыло с ними, просто была акция за 15% стоимости полная замена). Каждую неделю 2 мойки независимо от погоды. Состояние салона вы оцените при осмотре. В салоне не курили. Комплектация. Машина с панорамной крышей. 2 комплекта резины 20 радиус (зима + лето), 3 комплекта дисков оригинальных 20 радиус. Подкрасы. Крашенные только передний и задний бампера. Причиной покраски стало полная замена парктроников (несколько окислилис) поэтому сразу и решил сделать косметический ремонт бамперов, все таки машина 10 лет. По кузову подкрасов нету. Звонить с 9. 00 - 21. 00. Торг будет но только реальному покупателю.",
//             "year": 2007,
//             "price": 20500
//         },
//         {
//             "id": 4,
//             "image": "http://img.rstcars.com/oldcars/audi/q7/7888517-1.jpg",
//             "title": "Продам AUDI Q7",
//             "description": "Машина в отличном состоянии",
//             "year": 2007,
//             "price": 18000
//         },
//         {
//             "id": 5,
//             "image": "http://img.rstcars.com/oldcars/audi/a6/7889846-1.jpg",
//             "title": "Продам AUDI A6",
//             "description": "Продам надежный немецкий автомобиль AUDI A6 в кузове C4. Безпроблемный двигатель 2. 0 ABK, ходовая в порядке. Не прокуренный салон, владею 5 лет, полностью обслужена, масло не ест. Би ксенон, магнитола MP3/USB/ SD, тонировка 15%, GSM сигнализация Magnum elite, чехлы на сидениях, оцинкованный кузов, 2 фронтальные подушки безопасности. . Установлен электронный датчик расхода воздуха. Под двигателем защита Kolchuga. Новые передние тормозные суппорта TRW, новые колодки, масло в двигателе немецкое, заправлен и работает кондиционер. Заматовела краска на капоте, косметические нюансы на фото. Качественная зимняя резина и хорошие диски. Сниму с учета.",
//             "year": 1994,
//             "price": 3950
//         }
//     ];
// }