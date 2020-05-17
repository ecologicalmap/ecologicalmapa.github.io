ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map("map", {
            center: [54.83, 37.11],
            zoom: 5
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark([55.65,37.5], {
            balloonContentHeader: "Заголовок",
            balloonContentBody: "Содержимое",
            balloonContentFooter: "Подвал",
            hintContent: "Подсказка"
        }, {
            preset: 'islands#redDotIcon'
        });
        myPlacemark2 = new ymaps.Placemark([55.65,37.7], {
            balloonContentHeader: "Заголовок",
            balloonContentBody: "Содержимое",
            balloonContentFooter: "Подвал",
            hintContent: "Подсказка"
        }, {
            preset: 'islands#greenDotIcon'
        });
    
    myMap.geoObjects.add(myPlacemark);
    myMap.geoObjects.add(myPlacemark2);
}