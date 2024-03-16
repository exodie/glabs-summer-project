# Specs of using backend

## Инициализация и запуск проекта:

### Способ №1:

Поднять базу данных с помощью след. команды:

```
docker-compose -f docker-compose.yml up -d
```

### Способ №2:

Также вы можете использовать альтернативный способ подключения к БД:

- Установите PostgreSQL & PgAdmin (для удобства, но можете и использовать консоль)
- Далее настройте postgres под себя
- Перейдите по пути: `/backend/src/main/recources/application.properties`
- Отредактируйте как показано ниже (подставляя свои данные): 

```
spring.datasource.url=jdbc:postgresql://YOUR_HOST:YOUR_PORT/YOUR_DB_NAME
spring.datasource.username=YOUR_USERNAME
spring.datasource.password=YOUR_PASSWORD
```

После редактирования `application.properties`, перезапустите сервер если он был запущен ранее, и попробуйте перейти к следующему шагу.

------

## Тестирование проектной составляющей

### Создание пользователя

Для начала можно создать пользователя, для этого нужно с помощью POST запроса, вы можете выполнить его при помощи консоли, или же использовав стороннее ПО (Postman, Insomnia, etc...)

```
uri: http://localhost:8080/api/auth/signup

body:
{
    "firstName": "",
    "lastName": "",
    "phone": "",
    "email": "",
    "roles": [
        "user | admin | mod"
    ],
    "password": ""
}
```

------

### Авторизация пользователя

Далее можно авторизоваться в созданный аккаунт, для этого также потребуется POST запрос, но с другим URI.

```
uri: http://localhost:8080/api/auth/signin

body:
{
    "phone": "",
    "password": ""
}
```

------

### Тестирование токена и учетной записи пользователя

На запрос с /auth/.../ в качестве ответа прилетает Bearer Token, который нужно сохранить себе в ПО которым пользуетесь, и далее его можно будет проверить при помоще GET запроса на следующий URI:

```
    http://localhost:8000/api/test/...
```

А данный URI является публичным.
```
    http://localhost:8000/api/test/all
```
