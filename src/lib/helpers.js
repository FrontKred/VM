import fetch from 'isomorphic-fetch';


export const filterByAmount = (array, amount) => {
    if (amount === 0) return array;
    return array.filter(item => item.price <= amount);
};
export const currencyTransfer = (data,unit) => {
    if((data || {}).Valute && (data || {}).Valute.hasOwnProperty(unit)){
        return (data || {}).Valute[unit].Value;
    }else{
        console.log(`Ошибка: курс для ${unit} не задан`)
    }
};


const parseResponse = response => response.json();
const logError = error => console.error(error);
const proxyurl = "https://cors-anywhere.herokuapp.com/";
export const fetchThenResponse = (url, method, body) =>
    fetch(proxyurl + url, {
        method, body, headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
        }
    })
        .then(parseResponse)
        .catch(logError)