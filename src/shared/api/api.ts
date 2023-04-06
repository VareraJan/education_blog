import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

// вариант утсановки базового адреса
// const baseURL = __IS_DEV__ ? 'http://localhost:8000' : 'https://production.ru'

// создаем инстанс аксиоса
export const $api = axios.create({
    baseURL: __API__,
    headers: {
        authorization: localStorage.getItem(USER_LOCALSTORAGE_KEY) || '',
    },
});
