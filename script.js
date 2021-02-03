const formSearch = document.querySelector('.form-search');
const inputCitiesFrom = document.querySelector('.input__cities-from');
const dropdownCitiesFrom = document.querySelector('.dropdown__cities-from');
const inputCitiesTo = document.querySelector('.input__cities-to');
const dropdownCitiesTo = document.querySelector('.dropdown__cities-to');
const inputDateDepart = document.querySelector('.input__date-depart');

const citiesApi = 'http://api.travelpayouts.com/data/ru/cities.json';
const proxy = 'https://cors-anywhere.herokuapp.com/';

let city = [];


const getData = (url, callback) => {
    fetch(url)
        .then((response) => response.json())
        .then(callback);
}

const showCity = (input, list) => {
    list.textContent = '';

    if (input.value === '') return;

    const filterCity = city.filter((item) => {
        const fixItem = item.name.toLowerCase();
        return fixItem.includes(input.value.toLowerCase());
    });
    filterCity.forEach((item) => {
        const li = document.createElement('li');
        li.classList.add('dropdown__city');
        li.textContent = item.name;
        list.append(li);
    });
};

function handleCityClick(target, inputCities, dropdownCities) {
    if (target.tagName.toLowerCase() === 'li') {
        inputCities.value = target.textContent;
        dropdownCities.textContent = '';
    }
}

inputCitiesFrom.addEventListener('input', () => {
    showCity(inputCitiesFrom, dropdownCitiesFrom);
});

inputCitiesTo.addEventListener('input', () => {
    showCity(inputCitiesTo, dropdownCitiesTo)
});

dropdownCitiesFrom.addEventListener('click', (event) => {
    handleCityClick(event.target, inputCitiesFrom, dropdownCitiesFrom);
});

dropdownCitiesTo.addEventListener('click', (event) => {
    handleCityClick(event.target, inputCitiesTo, dropdownCitiesTo);
});

getData(proxy + citiesApi, (data) => {
    city = data;
});