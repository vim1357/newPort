<!-- Запуск проекта -->
1) установить nodeJS для своей операционки https://nodejs.org/en/download
2) установить зависимости проекта npm ci
3) в package.json есть скрипт для разработки (npm run start) и для сборки (npm run build)
4) проект собирается в папку docs, т.к хостится через github pages
    
*для того чтобы изменить дирректорию билда необходимо в webpack.config.js 
назначить в секции output другую папку "path: path.resolve(__dirname, {your_new_folder_name}),"

