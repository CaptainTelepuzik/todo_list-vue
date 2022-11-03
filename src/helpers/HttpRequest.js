const axios = require('axios');
/**
 *  Класс стандартизированных запросов
 */
export default class HttpRequest{
    /**
     * Стандратизированнная Отправка запросов на БЛ
     * @param params Данные для запроса
     * @param filter Фильтр запроса
     * @param endpointName Имя конечной точка запроса
     * @param method Назвавание метода
     * @returns {Promise<{error_text: string, success: boolean}>} Результат с БЛ
     */
    static async sendRequest(params, filter, endpointName, method) {
        let result = {success: false, error_text: ''};
        if (!endpointName){
            throw 'Не передана конечная точка запроса'
        }

        if (!method) {
            throw 'Не передан метод для запроса'
        }

        const url = 'http://127.0.0.1:5000/service'

        const requestParams = {
            endpointName,
            method,
            data:{
                filter,
                params
            }
        }

        await axios.post(url, requestParams).then((response)=> {

            result = response.data;
        })

        .catch(({error})=>{
            result.error_text = error
        });

        return result;

    }

}