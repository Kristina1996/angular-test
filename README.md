# AngularTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Описание
Таблица содержит данные о пользователях. При прокрутке страницы предусмотрена динамическая подгрузка контента с бэка.
Основная сетка страницы (header, footer, content) сверстана flex-боксами.
При нажатии на кнопку “Настройки” открывается модальное окно, в котором можно выбрать порядок колонок таблицы.

При нажатии “Сохранить” настройки сохраняются в локальном хранилище браузера. При перезагрузке страницы подхватываются те настройки, которые сохранил
пользователь.
При клике на иконке "Редактировать" происходит проваливание в карточку редактирования пользователя.

Use Case для карточки редактирования:
	1. Если не заполнены обязательные поля ФИО, Должность, Возраст, кнопка “Сохранить” не активна;
	2. Если Возраст меньше 18 указан, кнопка “Сохранить” не активна;
	3. Если выбрали галку наличие ИНН, поле ИНН становится видимо и обязательно для заполнения.
	
Кнопка “Назад” возвращает к списку пользователей.
Кнопка “Сбросить” очищает все значения формы до значений по умолчанию.