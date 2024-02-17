# Specs of using backend

### Чтобы начать разработку в проекте сервера необходимо:

Поднять базу данных с помощью след. команды:

```
docker-compose -f docker-compose.yml up -d
```

------

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

На запрос с /auth/.../ в качестве ответа прилетает Bearer Token, который нужно сохранить себе в ПО которым пользуетесь, и далее его можно будет проверить при помоще GET запроса на следующий URI:

```
    http://localhost:8000/api/test/...
```

А данный URI является публичным.
```
    http://localhost:8000/api/test/all
```
