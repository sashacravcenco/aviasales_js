const formSearch = document.querySelector('.form-search');
const inputCitiesFrom = document.querySelector('.input__cities-from');
const dropdownCitiesFrom = document.querySelector('.dropdown__cities-from');
const inputCitiesTo = document.querySelector('.input__cities-to');
const dropdownCitiesTo = document.querySelector('.dropdown__cities-to');
const inputDateDepart = document.querySelector('.input__date-depart');

const city = ['Москва', 'Санкт-Петербург', 'Минск', 'Караганда', 'Челябинск', 'Керч', 'Волгоград', 'Самара',
    'Днепропетровск', 'Екатеринбург', 'Одесса', 'Нижний Новгород', 'Калининград', 'Кишинев'
];

inputCitiesFrom.addEventListener('input', () => {
    dropdownCitiesFrom.textContent = '';

    const filterCity = city.filter((item) => {
        const fixItem = item.toLowerCase();
        return fixItem.includes(inputCitiesFrom.value.toLowerCase());
    })
    filterCity.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('dropdown__city');
        li.textContent = item;
        dropdownCitiesFrom.append(li);

    });
});