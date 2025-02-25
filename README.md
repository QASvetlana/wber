# Wildberries Autotests

## Описание

Этот проект содержит автотесты для интернет-магазина Wildberries, написанные на языке TypeScript с использованием WebdriverIO (WDIO). Автотесты охватывают такие функции, как поиск товара и добавление товара в корзину.

## Структура проекта

- **src**: Исходный код автотестов
  - **tests**: Тестовые сценарии
    - **search.spec.ts**: Тест на поиск товара
    - **cart.spec.ts**: Тест на добавление товара в корзину
  - **pages**: Page Object Model (POM) страницы
  - **utils**: Утилиты и вспомогательные функции

## Установка

Для установки и запуска проекта выполните следующие шаги:

1. Клонируйте репозиторий:

    ```bash
    git clone https://github.com/QASvetlana/wber.git
    cd wber
    ```

2. Установите зависимости:

    ```bash
    npm install
    ```

3. Настройте WebdriverIO:

    Создайте файл `wdio.conf.ts` в корневой директории проекта и добавьте настройки WebdriverIO.

## Запуск тестов

Для запуска автотестов используйте следующую команду:

```bash
npx wdio run wdio.conf.ts



