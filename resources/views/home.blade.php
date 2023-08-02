<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- vue -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.6.14/dist/vue.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/vue-router@3.5.2/dist/vue-router.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/axios@0.21.1/dist/axios.min.js"></script>

    <!-- Font Awesome -->
    <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        rel="stylesheet"
    />

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;500;700;900&display=swap" rel="stylesheet">

    <title>Course</title>

    <style>
        html{
            width: 100%;
            /*background-color: #12c700;*/
        }
        body {
            width: 100%;
            background-color: #1e1e1e;
            font-family: 'Roboto', sans-serif;
        }
        .open-tinybox {
            display: inline-block;
            cursor: pointer;
            margin: 5px;
            width: 100px;
        }

        .button1{
            width: 225px;
            height: 98px;
            background-image: url(/images/button1.png);
        }

        .button2{
            width: 224px;
            height: 98px;
            background-image: url(/images/button2.png);
        }

        .button3{
            background-repeat: no-repeat;
            min-width: 250px;
            min-height: 150px;
            background-size: contain;
            background-image: url(/images/go.png);
        }

        .button3-l{
            background-repeat: no-repeat;
            min-width: 200px;
            min-height: 120px;
            background-size: contain;
            background-image: url(/images/go.png);
        }

        .button4{
            min-width: 81px;
            min-height: 81px;
            background-image: url(/images/sert.png);
        }

        .button5{
            background-repeat: no-repeat;
            min-width: 70px;
            min-height: 70px;
            background-size: contain;
            background-image: url(/images/back.png);
        }

        .button1:hover{
            width: 225px;
            height: 98px;
            background-image: url(/images/buttonh.png);
        }

        .button2:hover{
            width: 224px;
            height: 98px;
            background-image: url(/images/button2h.png);
        }

        .button3:hover{
            background-repeat: no-repeat;
            min-width: 250px;
            min-height: 150px;
            background-size: contain;
            background-image: url(/images/goh.png);
        }

        .button3-l:hover{
            background-repeat: no-repeat;
            min-width: 200px;
            min-height: 120px;
            background-size: contain;
            background-image: url(/images/goh.png);
        }

        .button5:hover{
            background-repeat: no-repeat;
            min-width: 70px;
            min-height: 70px;
            background-size: contain;
            background-image: url(/images/backh.png);
        }

        .menu:hover{
            background-color: #00f3f3;
        }

        .elem {
            overflow: auto;
            -ms-overflow-style: none;
            scrollbar-width: none;
        }

        .elem::-webkit-scrollbar {
            width: 0;
            height: 0;
        }
    </style>
</head>

<body>

<div id="app">
    <!-- отображаем тут компонент, для которого совпадает маршрут -->
    <router-view></router-view>
</div>

<!-- Tinybox -->
<script defer src="https://cdn.jsdelivr.net/npm/vue-tinybox@1.3/dist/tinybox.umd.js"></script>

<script src="js/course.vue.js"></script>
<script src="js/main.vue.js"></script>

<script>
    // 1. Определяем компоненты для маршрутов.
    // Они могут быть импортированы из других файлов

    Vue.use(VueRouter);

    Vue.component('Main', Main);
    Vue.component('Course', Course);

    // 2. Определяем несколько маршрутов
    // Каждый маршрут должен указывать на компонент.
    // "Компонентом" может быть как конструктор компонента, созданный
    // через `Vue.extend()`, так и просто объект с опциями компонента.
    // Мы поговорим о вложенных маршрутах позднее.
    const routes = [
        { path: '/', component: Main },
        { path: '/course', component: Course }
    ];

    // 3. Создаём экземпляр маршрутизатора и передаём маршруты в опции `routes`
    // Вы можете передавать и дополнительные опции, но пока не будем усложнять.
    const router = new VueRouter({
        routes: routes,
        mode: 'history',
        base: '/'
    });

    // 4. Создаём и монтируем корневой экземпляр приложения.
    // Убедитесь, что передали экземпляр маршрутизатора в опции
    // `router`, чтобы позволить приложению знать о его наличии.
    const app = new Vue({
        router,
    }).$mount('#app');

    // Всё, приложение работает! ;)

</script>

<!-- Bootstrap Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>

</html>
