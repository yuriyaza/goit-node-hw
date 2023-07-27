# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"

Результат виконання: https://prnt.sc/jPIoFVcY0l3C


# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6

Результат виконання: https://prnt.sc/zILLWPTX4Kel


# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22

Результат виконання: https://prnt.sc/eHzbszmEkJ-I


# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

Результат виконання: https://prnt.sc/W4mR7O5PC-oH


# Додатково:
# Змінюємо контакт та виводимо в консоль об'єкт зміненого контакту або null, якщо контакту з таким id не існує
node index.js --action="change" --id AeHIrLTr6JkxGE6SN-0Rw --name Gutsul --email gutsul@gmail.com --phone 123-00-00

Результат виконання: https://prnt.sc/mBkyu9hiRTca
