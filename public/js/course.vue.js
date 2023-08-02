const Course = {
    template: '' +
        '<section>\n' +
        '\n' +
        '<div class="container-fluid d-none d-xl-block d-xxl-block">\n' +
            '\n' +
            '    <div class="row" style="max-height: 100vh">\n' +
            '\n' +
            '        <div class="col-4 m-0 p-0 elem overflow-auto" style="background-color: #efefef; max-height: 100vh;">\n' +
            '\n' +
            '            <div class="row p-0 m-0 ms-5 mt-3">\n' +
            '\n' +
            '               <div class="col-10 m-0 p-0">\n' +
            '\n' +
            '                <h2 class="lh-1 p-0 m-0 fw-bolder">\n' +
            '                    Повний курс\n' +
            '                </h2>\n' +
            '\n' +
            '                <h1 class="lh-1 p-0 m-0 fw-bold" style="font-size: 135px; color: #00f3f3">\n' +
            '                    REVIT\n' +
            '                </h1>\n' +
            '\n' +
            '                <h2 class="lh-1 p-0 m-0 mb-2 fw-bolder">\n' +
            '                   Основи BIM моделювання\n' +
            '                </h2>\n' +
            '\n' +


            '            <div class="row p-0 m-0 mt-3">\n' +

        ///////////////////////////////////////////////////////////////////

            '                <div class="col-6 p-0 m-0">\n' +
            '\n' +
            '                    <h4 class="m-0 p-0 fw-bolder">\n' +
            '                        Підготовка\n' +
            '                    </h4>\n' +
            '\n' +
            '                    <hr class="w-50 p-0 m-0 mb-1 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
            '\n' +
            '                    <p class="fs-5 lh-sm m-0 p-0">\n' +
            '                        рівень підготовки <br><b>не</b> важливий\n' +
            '                    </p>\n' +
            '\n' +
            '                </div>\n' +

        /////////////////////////////////////////////////////////////////////

            '\n' +
            '                <div class="col-6 p-0 m-0 ps-3">\n' +
            '\n' +
            '                    <h4 class="m-0 p-0 fw-bolder">\n' +
            '                        Вартість\n' +
            '                    </h4>\n' +
            '\n' +
            '                    <hr class="w-50 p-0 m-0 mb-1 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
            '\n' +
            '                    <p class="fs-5 lh-sm m-0 p-0">\n' +
            '                        <b>5500</b> грн\n' +
            '                    </p>\n' +
            '\n' +
            '                </div>\n' +
            '\n' +
            '            </div>\n' +
            '\n' +





        '            <div class="row p-0 m-0 mt-3">\n' +
        '\n' +
        '                <div class="col-6 p-0 m-0">\n' +
        '\n' +
        '                    <h4 class="m-0 p-0 fw-bolder">\n' +
        '                        Підтримка\n' +
        '                    </h4>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0 mb-1 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-5 lh-sm m-0 p-0">\n' +
        '                        24/7 в телеграм <br>чаті\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +

        ////////////////////////////////////////////////////////////////

        '\n' +
        '                <div class="col-6 p-0 m-0 ps-3">\n' +
        '\n' +
        '                    <h4 class="m-0 p-0 fw-bolder">\n' +
        '                        Формат\n' +
        '                    </h4>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0 mb-1 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-5 lh-sm m-0 p-0">\n' +
        '                        <b>он</b>лайн\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +

        ///////////////////////////////////////////////////////////

        '\n' +
        '            <div class="row p-0 m-0 mt-3">\n' +
        '\n' +
        '                <div class="col-6 p-0 m-0">\n' +
        '\n' +
        '                    <h4 class="m-0 p-0 fw-bolder">\n' +
        '                        Сертифікат\n' +
        '                    </h4>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0 mb-1 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-5 lh-sm m-0 p-0">\n' +
        '                        Autodesk та <br><b>Let\'s BIMprove</b>\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +

        //////////////////////////////////////////////////////

        '\n' +
        '                <div class="col-6 p-0 m-0 ps-3">\n' +
        '\n' +
        '                    <h4 class="m-0 p-0 fw-bolder">\n' +
        '                        Тривалість\n' +
        '                    </h4>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0 mb-1 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-5 lh-sm m-0 p-0">\n' +
        '                        2 місяці\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +

        /////////////////////////////////////////////////////////////////

        '\n' +
        '               </div>\n' +
        '\n' +
        '        <div class="col-2 m-0 p-0">\n' +
        '\n' +
        '                    <router-link to="/" class="float-end m-2 p-0" style="position: sticky; top: 25px;">\n' +
        '                        <div class="button5 d-inline-flex p-0 m-0">\n' +
        '                        </div>\n' +
        '                    </router-link>\n' +
        '\n' +
        '        </div>\n' +



        '\n' +
        '            <div class="row p-0 m-0">\n' +
        '\n' +
        '                <div class="col-6 p-0 m-0 mt-3">\n' +
        '\n' +
        '                    <h4 class="m-0 p-0 fw-bolder">\n' +
        '                        Співбесіда\n' +
        '                    </h4>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0 mb-1 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-5 lh-sm m-0 p-0">\n' +
        '                        в одну з <b>BIM</b> компаній\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-6 p-0 m-0">\n' +
        '\n' +
        '                    <a href="/main" class="float-end m-0 p-0">\n' +
        '                        <div class="button3 p-0 m-0">\n' +
        '                        </div>\n' +
        '                    </a>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +



        '\n' +
        '            </div>\n' +
        '\n' +


        /////////////////////////////////////////////////////////////////////////////////////////////////////

        '            <div class="row p-0 m-0 ms-5 mt-0 mb-5">\n' +
        '\n' +
        '               <div class="col-10 m-0 p-0">\n' +
        '\n' +
        '                <h2 class="lh-1 p-0 m-0 fw-bolder">\n' +
        '                    Курс прожарка\n' +
        '                </h2>\n' +
        '\n' +
        '                <h1 class="lh-1 p-0 m-0 fw-bold" style="font-size: 135px; color: #00f3f3">\n' +
        '                    REVIT\n' +
        '                </h1>\n' +
        '\n' +
        '                <h2 class="lh-1 p-0 m-0 mb-2 fw-bolder">\n' +
        '                   Основи BIM моделювання\n' +
        '                </h2>\n' +
        '\n' +


        '            <div class="row p-0 m-0 mt-3">\n' +

        ///////////////////////////////////////////////////////////////////

        '                <div class="col-6 p-0 m-0">\n' +
        '\n' +
        '                    <h4 class="m-0 p-0 fw-bolder">\n' +
        '                        Підготовка\n' +
        '                    </h4>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0 mb-1 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-5 lh-sm m-0 p-0">\n' +
        '                        рівень підготовки <br><b>не</b> важливий\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +

        /////////////////////////////////////////////////////////////////////

        '\n' +
        '                <div class="col-6 p-0 m-0 ps-3">\n' +
        '\n' +
        '                    <h4 class="m-0 p-0 fw-bolder">\n' +
        '                        Вартість\n' +
        '                    </h4>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0 mb-1 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-5 lh-sm m-0 p-0">\n' +
        '                        <b>2500</b> грн\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +





        '            <div class="row p-0 m-0 mt-3">\n' +
        '\n' +
        '                <div class="col-6 p-0 m-0">\n' +
        '\n' +
        '                    <h4 class="m-0 p-0 fw-bolder">\n' +
        '                        Підтримка\n' +
        '                    </h4>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0 mb-1 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-5 lh-sm m-0 p-0">\n' +
        '                        24/7 в телеграм <br>чаті\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +

        ////////////////////////////////////////////////////////////////

        '\n' +
        '                <div class="col-6 p-0 m-0 ps-3">\n' +
        '\n' +
        '                    <h4 class="m-0 p-0 fw-bolder">\n' +
        '                        Формат\n' +
        '                    </h4>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0 mb-1 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-5 lh-sm m-0 p-0">\n' +
        '                        <b>он</b>лайн\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +

        ///////////////////////////////////////////////////////////

        '\n' +
        '            <div class="row p-0 m-0 mt-3">\n' +
        '\n' +
        '                <div class="col-6 p-0 m-0">\n' +
        '\n' +
        '                    <h4 class="m-0 p-0 fw-bolder">\n' +
        '                        Сертифікат\n' +
        '                    </h4>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0 mb-1 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-5 lh-sm m-0 p-0">\n' +
        '                        Autodesk та <br><b>Let\'s BIMprove</b>\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +

        //////////////////////////////////////////////////////

        '\n' +
        '                <div class="col-6 p-0 m-0 ps-3">\n' +
        '\n' +
        '                    <h4 class="m-0 p-0 fw-bolder">\n' +
        '                        Тривалість\n' +
        '                    </h4>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0 mb-1 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-5 lh-sm m-0 p-0">\n' +
        '                        2 тижні\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +

        /////////////////////////////////////////////////////////////////

        '\n' +
        '               </div>\n' +
        '\n' +
        '        <div class="col-2 m-0 p-0">\n' +
        // '\n' +
        // '                    <router-link to="/" class="m-0 p-0">\n' +
        // '                        <div class="button5 d-inline-flex p-0 m-0">\n' +
        // '                        </div>\n' +
        // '                    </router-link>\n' +
        // '\n' +
        '        </div>\n' +



        '\n' +
        '            <div class="row p-0 m-0 mt-3">\n' +
        '\n' +
        '                <div class="col-6 p-0 m-0">\n' +
        '\n' +
        '                    <h4 class="m-0 p-0 fw-bolder">\n' +
        '                        Співбесіда\n' +
        '                    </h4>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0 mb-1 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-5 lh-sm m-0 p-0">\n' +
        '                        в одну з <b>BIM</b> компаній\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-6 p-0 m-0">\n' +
        // '\n' +
        // '                    <a href="/main" class="float-end m-0 p-0">\n' +
        // '                        <div class="button3 p-0 m-0">\n' +
        // '                        </div>\n' +
        // '                    </a>\n' +
        // '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +



        '\n' +
        '            </div>\n' +
        '\n' +

        /////////////////////////////////////////////////////////////////////////////////////////////////////


        '        </div>\n' +


        '\n' +
        '        <div class="col-7 p-0 m-0 elem overflow-auto" style="background-color: #1e1e1e; max-height: 100vh;">\n' +
        '\n' +
        '            <div class="row p-0 m-0" style="min-height: 100vh;">\n' +
        '\n' +
        '                <img src="/images/video.png" alt="video" class="img-fluid">\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row p-0 px-5 m-0 text-white">\n' +
        '\n' +
        '                <h1 id="what1" class="p-0 m-0 my-4 fw-bolder" style="color: #00f3f3;">Чому Ви навчитеся:</h1>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Роботі з інтерфейсом Revit</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Ви навчитеся працювати з диспетчером проекту, швидко орієнтуватися в просторі Revit, працювати з вікнами простору моделі та ознайомитеся з контекстними вкладками.\n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Імпортувати</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Один з найважливіших процесів моделювання - коректне завантаження підкладки. В рамках курсу Ви ознайомитеся з усіма інструментами імпорту.\n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Працювати із системними сімействами</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Навчитеся працювати із усіма системними сімействами та їх параметрами.\n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Створювати свої унікальні сімейства</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Завантажуємі сімейства - основа адаптації Revit. Ви познайомитеся з шаблонами сімейств, дізнаєтесь як створювати сімейства в просторі редактора сімейств і в контексті проекту.\n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Моделювати</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Освоїте процес створення інформаційної моделі на прикладі реального проєкту.\n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Формувати специфікації і відомості</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Ви зможете швидко і точно формувати експлікації, специфікації та відомості матеріалів.\n' +
        '                    Вивчите гнучке сортування і групування параметрів.\n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Друкувати і експортувати проєкти</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Дізнаєтеся про тонкощі виведення листів на друк і формування пакетів електронної документації.\n' +
        '                </p>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <h1 id="works1" class="mx-4 mt-3 px-3 fw-bolder text-white">\n' +
        '                Роботи<br>\n' +
        '                наших студентів\n' +
        '            </h1>\n' +
        '\n' +
        '            <div class="row px-2 py-0 m-0 text-white">\n' +
        '\n' +
        '            <Tinybox v-model="index" :images="images"></Tinybox>\n' +
        '               <div ' +
        '                   v-for="(img, idx) in images"\n' +
        '                   class="col-4 p-2 m-0"' +
        '               >\n' +
        '                   <img\n' +
        '                       :src="img.thumbnail"\n' +
        '                       :alt="img.alt"\n' +
        '                       class="img-fluid w-100"\n' +
        '                       @click="index = idx"\n' +
        '                   >' +
        '               </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row px-2 py-0 m-0 mb-2 text-white">\n' +
        '\n' +
        '            <Tinybox v-model="index" :images="images"></Tinybox>\n' +
        '               <div ' +
        '                   v-for="(img, idx) in images"\n' +
        '                   class="col-4 p-2 m-0"' +
        '               >\n' +
        '                   <img\n' +
        '                       :src="img.thumbnail"\n' +
        '                       :alt="img.alt"\n' +
        '                       class="img-fluid w-100"\n' +
        '                       @click="index = idx"\n' +
        '                   >' +
        '               </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div id="teacher1" class="row px-4 py-5 m-0 mt-5 mb-3 text-white">\n' +
        '\n' +
        '                <div class="col-5 pt-4">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Куратор курсу\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <h1 class="fw-bolder" style="color: #00f3f3;">\n' +
        '                        Кирило Обертович\n' +
        '                    </h1>\n' +
        '\n' +
        '                    <hr class="rounded-pill p-0 m-0 mb-2" style="width: 60%; height: 4px; opacity: 1;">\n' +
        '\n' +
        '                    <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                        - співзасновник програми навчання <b style="color: #00f3f3;">Let\'s BIMprove</b>;\n' +
        '                    </p>\n' +
        '\n' +
        '                    <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                        - <b style="color: #00f3f3;">дійсний BIM-менеджер</b> компанії BIMprove з 5-річним досвідом;\n' +
        '                    </p>\n' +
        '\n' +
        '                    <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                        - сертифікований викладач <b style="color: #00f3f3;">Autodesk</b>;\n' +
        '                    </p>\n' +
        '\n' +
        '                    <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                        - працював з ведучими компаніями <b style="color: #00f3f3;">Франції, Австралії, Англії та Латвії</b>;\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-1 p-0 m-0 d-flex align-items-end">\n' +
        '                    <a href="#" class="m-0 p-0">\n' +
        '                        <img class="img-fluid w-100" src="/images/sert.png" alt="sert">\n' +
        '                    </a>\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-6">\n' +
        '\n' +
        '                    <img class="img-fluid w-100" src="/images/teacher.png" alt="teacher">\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row px-4 m-0 text-white text-center">\n' +
        '                <h1 class="fw-bolder w-75 mx-auto">\n' +
        '                    <b style="color: #00f3f3;">Запишись на курс</b> та стань одним з кращих спеціалістів з BIM!\n' +
        '                </h1>\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row p-0 m-0">\n' +
        '\n' +
        '                <div class="col text-center text-white p-0 m-0">\n' +
        '\n' +
        '                    <p class="text-white p-0 m-0">Let\'s BIMprove &copy; 2022</p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '        </div>\n' +
        '\n' +
        '        <div class="col m-0" style="background-color: #00f3f3; max-height: 100vh;">\n' +
        '            \n' +
        '        </div>\n' +
        '\n' +
        '    </div>\n' +
        '\n' +
        '</div>\n' +
        '\n' +


        '<div class="container-fluid d-none d-sm-none d-md-block d-lg-block d-xl-none">\n' +
        '\n' +
        '    <div class="row" style="min-height: 100vh">\n' +
        '\n' +
        '        <div class="col-12 m-0 p-0" style="background-color: #efefef;">\n' +
        '\n' +
        '            <div class="row p-0 ps-2 m-0">\n' +
        '\n' +
        '                <div class="col-10">\n' +
        '\n' +
        '                   <h1 class="m-0 mt-4 lh-1 fw-bolder">\n' +
        '                       Повний курс\n' +
        '                   </h1>\n' +
        '\n' +
        '                   <h2 class="p-0 mt-3 lh-1 fw-bolder" style="font-size: 120px; color: #00f3f3">\n' +
        '                       REVIT\n' +
        '                   </h2>\n' +
        '\n' +
        '                    <h1 class="fw-bolder">\n' +
        '                        Основи BIM моделювання\n' +
        '                    </h1>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-2 p-3">\n' +
        '                    <router-link to="/" class="float-end m-0 p-0" style="position: sticky; top: 5px;">\n' +
        '                        <div class="button5 d-inline-flex p-0 m-0">\n' +
        '                        </div>\n' +
        '                    </router-link>\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row p-0 ps-2 m-0 mt-2">\n' +
        '                <div class="col-3">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Підготовка\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        рівень підготовки<br><b>не</b> важливий\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-3">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Сертифікат\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        Autodesk та <br><b>Let\'s BIMprove</b>\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-3">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Підтримка\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        24/7 в телеграм чаті\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-3">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Співбесіда\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        в одну з <b>BIM</b> компаній\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row p-0 ps-2 m-0">\n' +
        '\n' +
        '                <div class="col-3">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Вартість\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        <b>5500</b> грн\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-3">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Тривалість\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        2 місяці\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-3">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Формат\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        <b>он</b>лайн\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-3 p-0 m-0">\n' +
        '\n' +
        '                    <a href="/main" class="m-0 p-0 float-end">\n' +
        '                        <div class="button3-l d-inline-flex p-0 m-0">\n' +
        '                        </div>\n' +
        '                    </a>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '        </div>\n' +

        '\n' +
        '        <div class="col-12 m-0 p-0" style="background-color: #efefef;">\n' +
        '\n' +
        '            <div class="row p-0 ps-2 m-0">\n' +
        '\n' +
        '                <div class="col-10">\n' +
        '\n' +
        '                   <h1 class="m-0 mt-4 lh-1 fw-bolder">\n' +
        '                       Курс прожарка \n' +
        '                   </h1>\n' +
        '\n' +
        '                   <h2 class="p-0 mt-3 lh-1 fw-bolder" style="font-size: 120px; color: #00f3f3">\n' +
        '                       REVIT\n' +
        '                   </h2>\n' +
        '\n' +
        '                    <h1 class="fw-bolder">\n' +
        '                        Основи BIM моделювання\n' +
        '                    </h1>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-2 p-3">\n' +
        // '                    <router-link to="/" class="float-end m-0 p-0" style="position: sticky; top: 5px;">\n' +
        // '                        <div class="button5 d-inline-flex p-0 m-0">\n' +
        // '                        </div>\n' +
        // '                    </router-link>\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row p-0 ps-2 m-0 mt-2">\n' +
        '                <div class="col-3">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Підготовка\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        рівень підготовки<br><b>не</b> важливий\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-3">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Сертифікат\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        Autodesk та <br><b>Let\'s BIMprove</b>\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-3">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Підтримка\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        24/7 в телеграм чаті\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-3">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Співбесіда\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        в одну з <b>BIM</b> компаній\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row p-0 ps-2 m-0">\n' +
        '\n' +
        '                <div class="col-3">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Вартість\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        <b>2500</b> грн\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-3">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Тривалість\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        2 тижні\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-3">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Формат\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        <b>он</b>лайн\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-3 p-0 m-0">\n' +
        '\n' +
        // '                    <a href="#" class="m-0 p-0 float-end">\n' +
        // '                        <div class="button3-l d-inline-flex p-0 m-0">\n' +
        // '                        </div>\n' +
        // '                    </a>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '        </div>\n' +

        '\n' +
        '        <div class="col-12 p-0 m-0" style="background-color: #1e1e1e;">\n' +
        '\n' +
        '            <div class="row p-0 m-0">\n' +
        '\n' +
        '                <img src="/images/video.png" alt="video" class="img-fluid">\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row p-0 px-5 m-0 text-white">\n' +
        '\n' +
        '                <h1 id="what2" class="p-0 m-0 my-4 fw-bolder" style="color: #00f3f3;">Чому Ви навчитеся:</h1>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Роботі з інтерфейсом Revit</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Ви навчитеся працювати з диспетчером проекту, швидко орієнтуватися в просторі Revit, працювати з вікнами простору моделі та ознайомитеся з контекстними вкладками.\n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Імпортувати</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Один з найважливіших процесів моделювання - коректне завантаження підкладки. В рамках курсу Ви ознайомитеся з усіма інструментами імпорту.\n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Працювати із системними сімействами</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Навчитеся працювати із усіма системними сімействами та їх параметрами.\n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Створювати свої унікальні сімейства</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Завантажуємі сімейства - основа адаптації Revit. Ви познайомитеся з шаблонами сімейств, дізнаєтесь як створювати сімейства в просторі редактора сімейств і в контексті проекту.\n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Моделювати</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Освоїте процес створення інформаційної моделі на прикладі реального проєкту. \n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Формувати специфікації і відомості</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Ви зможете швидко і точно формувати експлікації, специфікації та відомості матеріалів.\n' +
        '                    Вивчите гнучке сортування і групування параметрів.\n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Друкувати і експортувати проєкти</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Дізнаєтеся про тонкощі виведення листів на друк і формування пакетів електронної документації.\n' +
        '                </p>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <h1 id="works2" class="mx-4 mt-3 px-3 fw-bolder text-white">\n' +
        '                Роботи<br>\n' +
        '                наших студентів\n' +
        '            </h1>\n' +
        '\n' +
        '            <div class="row px-2 py-0 m-0 text-white">\n' +
        '\n' +
        '            <Tinybox v-model="index" :images="images"></Tinybox>\n' +
        '               <div ' +
        '                   v-for="(img, idx) in images"\n' +
        '                   class="col-4 p-2 m-0"' +
        '               >\n' +
        '                   <img\n' +
        '                       :src="img.thumbnail"\n' +
        '                       :alt="img.alt"\n' +
        '                       class="img-fluid w-100"\n' +
        '                       @click="index = idx"\n' +
        '                   >' +
        '               </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row px-2 py-0 m-0 mb-2 text-white">\n' +
        '\n' +
        '            <Tinybox v-model="index" :images="images"></Tinybox>\n' +
        '               <div ' +
        '                   v-for="(img, idx) in images"\n' +
        '                   class="col-4 p-2 m-0"' +
        '               >\n' +
        '                   <img\n' +
        '                       :src="img.thumbnail"\n' +
        '                       :alt="img.alt"\n' +
        '                       class="img-fluid w-100"\n' +
        '                       @click="index = idx"\n' +
        '                   >' +
        '               </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div id="teacher2" class="row px-4 py-5 m-0 mt-5 mb-3 text-white">\n' +
        '\n' +
        '                <div class="col-5 pt-0">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Куратор курсу\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <h1 class="fw-bolder" style="color: #00f3f3;">\n' +
        '                        Кирило Обертович\n' +
        '                    </h1>\n' +
        '\n' +
        '                    <hr class="rounded-pill p-0 m-0 mb-2" style="width: 60%; height: 4px; opacity: 1;">\n' +
        '\n' +
        '                    <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                        - співзасновник програми навчання <b style="color: #00f3f3;">Let\'s BIMprove</b>;\n' +
        '                    </p>\n' +
        '\n' +
        '                    <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                        - <b style="color: #00f3f3;">дійсний BIM-менеджер</b> компанії BIMprove з 5-річним досвідом;\n' +
        '                    </p>\n' +
        '\n' +
        '                    <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                        - сертифікований викладач <b style="color: #00f3f3;">Autodesk</b>;\n' +
        '                    </p>\n' +
        '\n' +
        '                    <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                        - працював з ведучими компаніями <b style="color: #00f3f3;">Франції, Австралії, Англії та Латвії</b>;\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-1 p-0 m-0 d-flex align-items-end">\n' +
        '                    <a href="#" class="m-0 p-0">\n' +
        '                        <img class="img-fluid w-100" src="/images/sert.png" alt="sert">\n' +
        '                    </a>\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-6">\n' +
        '\n' +
        '                    <img class="img-fluid w-100" src="/images/teacher.png" alt="teacher">\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row px-4 m-0 text-white text-center">\n' +
        '                <h1 class="fw-bolder w-75 mx-auto">\n' +
        '                    <b style="color: #00f3f3;">Запишись на курс</b> та стань одним з кращих спеціалістів з BIM!\n' +
        '                </h1>\n' +
        '            </div>\n' +
        '\n' +
        '\n' +
        '\n' +
        '            <div class="row p-0 m-0">\n' +
        '\n' +
        '                <div class="col text-center text-white p-0 m-0">\n' +
        '\n' +
        '                    <p class="text-white p-0 m-0">Let\'s BIMprove &copy; 2021</p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '        </div>\n' +
        '\n' +
        '    </div>\n' +
        '\n' +
        '</div>\n' +
        '\n' +




        '<div class="container-fluid d-block d-sm-block d-md-none">\n' +
        '\n' +
        '    <div class="row" style="min-height: 100vh">\n' +
        '\n' +
        '        <div class="col-12 m-0 p-0" style="background-color: #efefef;">\n' +
        '\n' +
        '            <div class="row p-0 ps-2 m-0">\n' +
        '\n' +
        '                <div class="col-10">\n' +
        '\n' +
        '                   <h1 class="m-0 mt-4 lh-1 fw-bolder">\n' +
        '                       Повний курс\n' +
        '                   </h1>\n' +
        '\n' +
        '                   <h2 class="p-0 mt-3 lh-1 fw-bolder" style="font-size: 110px; color: #00f3f3">\n' +
        '                       REVIT\n' +
        '                   </h2>\n' +
        '\n' +
        '                    <h1 class="fw-bolder">\n' +
        '                        Основи BIM моделювання\n' +
        '                    </h1>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-2 p-3">\n' +
        '                    <router-link to="/" class="float-end m-0 p-0" style="position: sticky; top: 5px;">\n' +
        '                        <div class="button5 d-inline-flex p-0 m-0">\n' +
        '                        </div>\n' +
        '                    </router-link>\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row p-0 ps-2 m-0 mt-2">\n' +
        '                <div class="col-6">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Підготовка\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        рівень підготовки<br><b>не</b> важливий\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-6">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Сертифікат\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        Autodesk та <br><b>Let\'s BIMprove</b>\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-6">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Підтримка\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        24/7 в телеграм чаті\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-6">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Співбесіда\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        в одну з <b>BIM</b> компаній\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row p-0 ps-2 m-0">\n' +
        '\n' +
        '                <div class="col-6">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Вартість\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        <b>5500</b> грн\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-6">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Тривалість\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        2 місяці\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-6">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Формат\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        <b>он</b>лайн\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-6 p-0 m-0">\n' +
        '\n' +
        '                    <a href="/main" class="m-0 p-0 float-end">\n' +
        '                        <div class="button3-l d-inline-flex p-0 m-0">\n' +
        '                        </div>\n' +
        '                    </a>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '        </div>\n' +

        '\n' +
        '        <div class="col-12 m-0 p-0" style="background-color: #efefef;">\n' +
        '\n' +
        '            <div class="row p-0 ps-2 m-0">\n' +
        '\n' +
        '                <div class="col-10">\n' +
        '\n' +
        '                   <h1 class="m-0 mt-4 lh-1 fw-bolder">\n' +
        '                       Курс прожарка \n' +
        '                   </h1>\n' +
        '\n' +
        '                   <h2 class="p-0 mt-3 lh-1 fw-bolder" style="font-size: 110px; color: #00f3f3">\n' +
        '                       REVIT\n' +
        '                   </h2>\n' +
        '\n' +
        '                    <h1 class="fw-bolder">\n' +
        '                        Основи BIM моделювання\n' +
        '                    </h1>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-2 p-3">\n' +
        // '                    <router-link to="/" class="float-end m-0 p-0" style="position: sticky; top: 5px;">\n' +
        // '                        <div class="button5 d-inline-flex p-0 m-0">\n' +
        // '                        </div>\n' +
        // '                    </router-link>\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row p-0 ps-2 m-0 mt-2">\n' +
        '                <div class="col-6">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Підготовка\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0 rounded-pill" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        рівень підготовки<br><b>не</b> важливий\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-6">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Сертифікат\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        Autodesk та <br><b>Let\'s BIMprove</b>\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-6">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Підтримка\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        24/7 в телеграм чаті\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-6">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Співбесіда\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        в одну з <b>BIM</b> компаній\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row p-0 ps-2 m-0">\n' +
        '\n' +
        '                <div class="col-6">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Вартість\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        <b>2500</b> грн\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-6">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Тривалість\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        2 тижні\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-6">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Формат\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <hr class="w-50 p-0 m-0" style="color: #00f3f3; height: 4px;">\n' +
        '\n' +
        '                    <p class="fs-3">\n' +
        '                        <b>он</b>лайн\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-6 p-0 m-0">\n' +
        '\n' +
        // '                    <a href="#" class="m-0 p-0 float-end">\n' +
        // '                        <div class="button3-l d-inline-flex p-0 m-0">\n' +
        // '                        </div>\n' +
        // '                    </a>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '        </div>\n' +

        '\n' +
        '        <div class="col-12 p-0 m-0" style="background-color: #1e1e1e;">\n' +
        '\n' +
        '            <div class="row p-0 m-0">\n' +
        '\n' +
        '                <img src="/images/video.png" alt="video" class="img-fluid">\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row p-0 px-5 m-0 text-white">\n' +
        '\n' +
        '                <h1 id="what2" class="p-0 m-0 my-4 fw-bolder" style="color: #00f3f3;">Чому Ви навчитеся:</h1>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Роботі з інтерфейсом Revit</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Ви навчитеся працювати з диспетчером проекту, швидко орієнтуватися в просторі Revit, працювати з вікнами простору моделі та ознайомитеся з контекстними вкладками.\n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Імпортувати</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Один з найважливіших процесів моделювання - коректне завантаження підкладки. В рамках курсу Ви ознайомитеся з усіма інструментами імпорту.\n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Працювати із системними сімействами</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Навчитеся працювати із усіма системними сімействами та їх параметрами.\n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Створювати свої унікальні сімейства</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Завантажуємі сімейства - основа адаптації Revit. Ви познайомитеся з шаблонами сімейств, дізнаєтесь як створювати сімейства в просторі редактора сімейств і в контексті проекту.\n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Моделювати</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Освоїте процес створення інформаційної моделі на прикладі реального проєкту. \n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Формувати специфікації і відомості</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Ви зможете швидко і точно формувати експлікації, специфікації та відомості матеріалів.\n' +
        '                    Вивчите гнучке сортування і групування параметрів.\n' +
        '                </p>\n' +
        '\n' +
        '                <h2 class="p-0 m-0 mb-2 fw-bolder">Друкувати і експортувати проєкти</h2>\n' +
        '                <hr class="rounded-pill p-0 m-0 mb-2" style="width: 30%; height: 4px; opacity: 1;">\n' +
        '                <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                    Дізнаєтеся про тонкощі виведення листів на друк і формування пакетів електронної документації.\n' +
        '                </p>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <h1 id="works2" class="mx-4 mt-3 px-3 fw-bolder text-white">\n' +
        '                Роботи<br>\n' +
        '                наших студентів\n' +
        '            </h1>\n' +
        '\n' +
        '            <div class="row px-2 py-0 m-0 text-white">\n' +
        '\n' +
        '            <Tinybox v-model="index" :images="images"></Tinybox>\n' +
        '               <div ' +
        '                   v-for="(img, idx) in images"\n' +
        '                   class="col-6 p-2 m-0"' +
        '               >\n' +
        '                   <img\n' +
        '                       :src="img.thumbnail"\n' +
        '                       :alt="img.alt"\n' +
        '                       class="img-fluid w-100"\n' +
        '                       @click="index = idx"\n' +
        '                   >' +
        '               </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row px-2 py-0 m-0 mb-2 text-white">\n' +
        '\n' +
        '            <Tinybox v-model="index" :images="images"></Tinybox>\n' +
        '               <div ' +
        '                   v-for="(img, idx) in images"\n' +
        '                   class="col-6 p-2 m-0"' +
        '               >\n' +
        '                   <img\n' +
        '                       :src="img.thumbnail"\n' +
        '                       :alt="img.alt"\n' +
        '                       class="img-fluid w-100"\n' +
        '                       @click="index = idx"\n' +
        '                   >' +
        '               </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '            <div id="teacher2" class="row px-4 py-5 m-0 mt-1 mb-1 text-white">\n' +
        '\n' +
        '                <div class="col-12 pt-0">\n' +
        '\n' +
        '                    <h2 class="fw-bolder">\n' +
        '                        Куратор курсу\n' +
        '                    </h2>\n' +
        '\n' +
        '                    <h1 class="fw-bolder" style="color: #00f3f3;">\n' +
        '                        Кирило Обертович\n' +
        '                    </h1>\n' +
        '\n' +
        '                    <hr class="rounded-pill p-0 m-0 mb-2" style="width: 60%; height: 4px; opacity: 1;">\n' +
        '\n' +
        '                    <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                        - співзасновник програми навчання <b style="color: #00f3f3;">Let\'s BIMprove</b>;\n' +
        '                    </p>\n' +
        '\n' +
        '                    <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                        - <b style="color: #00f3f3;">дійсний BIM-менеджер</b> компанії BIMprove з 5-річним досвідом;\n' +
        '                    </p>\n' +
        '\n' +
        '                    <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                        - сертифікований викладач <b style="color: #00f3f3;">Autodesk</b>;\n' +
        '                    </p>\n' +
        '\n' +
        '                    <p class="p-0 m-0 mb-3 fs-5">\n' +
        '                        - працював з ведучими компаніями <b style="color: #00f3f3;">Франції, Австралії, Англії та Латвії</b>;\n' +
        '                    </p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '                <div class="col-12">\n' +
        '\n' +
        '                    <img class="img-fluid w-100" src="/images/teacher.png" alt="teacher">\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '\n' +
        '                <div class="col-12 p-0 m-0 mt-5 text-center">\n' +
        '                    <a href="#" class="m-0 p-0">\n' +
        '                        <img class="img-fluid" src="/images/sert.png" alt="sert">\n' +
        '                    </a>\n' +
        '                </div>\n' +
        '            </div>\n' +
        '\n' +
        '            <div class="row px-2 py-0 m-0   text-white text-center">\n' +
        '                <h1 class="fw-bolder w-100 mx-auto">\n' +
        '                    <b style="color: #00f3f3;">Запишись на курс</b> та стань одним з кращих спеціалістів з BIM!\n' +
        '                </h1>\n' +
        '            </div>\n' +
        '\n' +
        '\n' +
        '\n' +
        '            <div class="row p-0 m-0">\n' +
        '\n' +
        '                <div class="col text-center text-white p-0 m-0">\n' +
        '\n' +
        '                    <p class="text-white p-0 m-0">Let\'s BIMprove &copy; 2021</p>\n' +
        '\n' +
        '                </div>\n' +
        '\n' +
        '            </div>\n' +
        '\n' +
        '        </div>\n' +
        '\n' +
        '    </div>\n' +
        '\n' +
        '</div>\n' +
        '\n' +


        '</section>',

    data() {
        return {
            images: [
                {
                    src: "/images/work.png",
                    alt: "Empty beach",
                    caption: "Beach",
                    thumbnail: "/images/work.png"
                },
                {
                    src: "/images/work.png",
                    alt: "Desk in a café",
                    caption: "Café",
                    thumbnail: "/images/work.png"
                },
                {
                    src: "/images/work.png",
                    alt: "Mountains range",
                    caption: "Mountains",
                    thumbnail: "/images/work.png"
                },
            ],
            index: null
        }
    },
}
