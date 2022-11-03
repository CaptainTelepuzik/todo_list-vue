import HttpRequest from "../helpers/HttpRequest";

/**
 * Класс сервис для запросов на БЛ
 */

export default class SourceService {

    _params = {
        endpoint: '',
        keyProperty: 'id',
        binding: {
            create: 'Create',
            query: 'Get',
            update: 'Update',
            delete: 'Delete',
            list: 'List'
        }
    }
    /**
     * Признак корректности настройки
     * @type {boolean}
     * @private
     */
    _isCorrect = false;

    constructor(params) {
        this._prepareParams(params) || {};
    }

    /**
     * Запрос одной записи по ключу
     * @param key
     * @returns {Promise<*>} Запись
     */
    async query(key) {
        return await this._sendRequest(key, this._params.binding.query)
    }

    /**
     * Фиктивное Создание записи
     * @param record Запись с предустновками значениями полей
     * @returns {Promise<*>} Запись с форматом
     */
    async create(record) {
        return await this._sendRequest(record, this._params.binding.create)
    }

    /**
     * Удаление записи по ключу в БД
     * @param key Ключ
     * @returns {Promise<*>} Признак успешности
     */
    async delete(key) {
        return await this._sendRequest(key, this._params.binding.delete)
    }

    /**
     * Обновление записи в БД
     * @param record Данные для обновления записи
     * @returns {Promise<*>} Запись из БД
     */

    async update(record) {
        return await this._sendRequest(record, this._params.binding.update)
    }

    /**
     * Списочный метод
     * @param filter Параметры фильтриции
     * @returns {Promise<*>} Список записей
     */
    async list(filter = {}) {
        return await this._sendRequest(this._params.binding.list,filter)
    }

    /**
     * Выполнение кастомных запросовпо ключу
     * @param key Ключ метода из биндинга
     * @param data Данные метода
     * @returns {Promise<*>}  Результат метода
     */
    async customQuery(key,data){
        if (this._params.binding[[key]]) {
            throw  'данный метод не поддерживает'
        }
        return this._sendRequest(data, this._params.binding[[key]])
    }

    /**
     * Настройка параметров источника данных
     * @param params Параметры источника
     * @private
     */
    _prepareParams(params){
        if (!params.endpoint){
            throw 'Не передана конечная точка для запроса';
        }

        this._params = {
            endpoint: params.endpoint,
            keyProperty: params.keyProperty || this._params.keyProperty,
            binding: {
                ...this._params.binding,
                ...params.binding
            }
        };
        this._isCorrect = true;
    }

    /**
     * Отправка запроса на БЛ
     * @param params Параметры запроса
     * @param method Имя метода
     * @param filter Параметры фильтрации
     * @returns {Promise<{error_text: string, success: boolean}>} Результат запроса
     * @private
     */
    async _sendRequest(params, method, filter = null){
        return await HttpRequest.sendRequest(params,filter,this._params.endpoint,method)
    }

}