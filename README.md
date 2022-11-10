## Подготовка нового проекта

1. Убедись что на компьютере установлена LTS-версия Node.js.
   [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Клонируй этот репозиторий.

===================================================================================================

# Розробка фіч або багфіксів:

1. git checkout dev => git pull
2. git checkout -b "feature/назва-фічі"

Працюємо у цій гілці та вносимо необхідні зміни. Комітимо зміни за потребою.
після того, як фіча готова, відправляємо історію (комміти) локальної гілки на
GitHub і відкриваємо Pull request У GitHub, що відкрився, уважно виберіть
репозиторій вашого Tімліда і натисніть Create pull request призначаємо мінімум
одного Reviewer, щоб зробив ревью коду.

Якщо необхідні редагування, вносимо їх у тій самій гілці і відправляємо зміни на
GitHub. Поточний Pull request оновиться автоматично, відкривати новий не треба.

Після того як Pull request пройшов review коду, Тімлід приймає його (merge у
гілку dev).

Після того, як Pull request був прийнятий, розробник у GitHub Desktop:
переходить на гілку dev і робить fetch+pull щоб синхронізувати локальну гілку з
тієї що на GitHub

в терміналі: git checkout dev => git pull

після синхронізації гілки dev розробник видаляє свою локальну гілку фічі/баги

===================================================================================================s

# Cписок команд для роботи з терміналом

- git clone https://посилання*на*репозиторій клонуєте репозиторій
- git checkout ‘назва-гілки’ перехід на гілку ‘назва-гілки’
- git pull origin ‘назва-гілки’ стягує останні зміни гілки ‘назва-гілки’
- git checkout -b ‘назва-нової-гілки’ створює нову гілку
- git add . та git commit -m “назва-коміта” записує зміни до локальної гілки
- git push origin ‘назва-вашої-гілки’ публікує ваші зміни на гілці віддаленого
  репозиторію
- git merge ‘назва-гілки’ залиття коду з гілки ‘назва-гілки’ на поточну гілку
- git branch -d ‘назва-гілки’ видалення гілки ‘назва-гілки’
- git fetch стягує всі зміни з віддаленого репозиторію

===================================================================================================

# TECH - Критерії прийняття проєкту з REACT + NODE

1. Реалізована адаптивна верстка з трьома переломами (мобілка, планшет, десктоп)
   згідно макету та технічного завдання.
2. Підключений modern-normalize.
3. Консоль розробника не видає помилок чи console.log'ів.
4. У назвах файлів немає великих літер і пробілів, лише літери англійського
   алфавіту.
5. Всі змінні іменовані по camelCase'u, класи по PascalCase'u, константи по
   UPPER_SNAKE_CASE'u.
6. Проєкт розгорнуто через create-react-app (у разі якщо не був використаний
   шаблон react-homework-template)
7. Усі сторінки знаходяться у папці pages.
8. Усі компоненти знаходяться у папці components.
9. Все, що пов'язано з redux'om, знаходиться в папці redux.
10. Підключення раутів реалізовано через lazy load.
11. Вся секретна інформація (якщо така є: ключі, паролі та інше) захована через
    змінні оточення в файлі .env. Також є файл .env.template, де вказано, які
    змінні потрібно ініціалізувати для запуску проєкту після клонування.
12. Всі робочі гілки окрім: main, dev, gh-pages (якщо така є) - видалені.
13. Реалізовано документацію енд-поінтів backend'a
14. Фінальна версія Front End'a задеплоєна на Netlify, Back End'a на Heroku (за
    бажанням, студенти також можуть самостійно задеплоїти свій проєкт на якийсь
    орендований сервер).
15. Ментор провів код-ревью фінальної версії проєкту.
