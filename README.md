#### Использование парсера
Загрузить необходимые данные от твиттера в twitterAccs.txt в формате:
```txt
login: 
password: 
mail: 
pass: 
auth_token: 
secret_key_link:

login: 
password: 
mail: 
pass: 
auth_token: 
secret_key_link:
```

После запуска, появится файл tokens.txt со всеми auth_token для каждого аккаунта из файла twitterAccs.txt.
#### Запуск парсера
```bash
node parse.js
```