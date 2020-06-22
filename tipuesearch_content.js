var tipuesearch = {"pages":[{"title":"Включаем SWAP в файл","text":"Чтобы включить swap в файл делаем следующее: sudo dd if = /dev/zero of = /var/swapfile bs = 1M count = 2048 # создаем пустой файл нужного обьема, в данном случае 2ГБ sudo chmod 600 /var/swapfile # меняем права sudo mkswap /var/swapfile # включаем своп echo /var/swapfile none swap defaults 0 0 | sudo tee -a /etc/fstab # добавляем в автомонтирование при старте системы sudo swapon -a # проверяем, все ли ок","tags":"devops","url":"articles/devops/swap_to_file/","loc":"articles/devops/swap_to_file/"},{"title":"Рецепты для 1С Bitrix","text":"Инструменты Среда разработки Инструменты для разработки под 1С-Битрикс . Здесь автор расказывает как правильно настроить среду разработки и подключиться к проекту. Duplicati - резервное копирование Как показала практика, бэкапы битрикса лучше делать с помощью Duplicati . Все прелести этого ПО я не буду описывать выделю лишь только то, что подходит для битрикса: Хранение бэкапов в облаке Шифрование бэкапов, а это значит можете хранить в любом облаке, даже не шипко защищенном Автоматические действия до и после резервного копирования, на пример снять дамп БД перед резервным копирование Уведомление о успешном/неуспешном резервном копировании Очистка кэша Просто удаляете эту папку и битрикс потом сам пересоздаст кэш по мере потребления Можно еще правильно настроить битрикс rm -rf ./bitrix/upload/resize_cache Бэкап Детальное описание резервного копирования от другого автора, полезно к прочтению! Каталоги, которые можно исключить из бэкапа # exlude directory for bitrix < v12 /bitrix/backup # бэкапы самого битрикса /bitrix/cache # неуправляемый кэш /bitrix/managed_cache # управляемый кэш /bitrix/stack_cache # файлы кэша с \"вытеснением\" /upload/resize_cache # кэш ресайза изображений /bitrix/wizards # мастера и демо-решения","tags":"bitrix","url":"articles/bitrix/bitrix_recepts/","loc":"articles/bitrix/bitrix_recepts/"},{"title":"Настраиваем свой микротик на блокировку рекламы","text":"AdGuard DNS – это альтернативный способ заблокировать рекламу, защитить личные данные и оградить детей от взрослых материалов. Он прост в настройке и использовании и обеспечивает необходимый минимум защиты от рекламы, трекинга и фишинга, независимо от платформы. Настройка достаточно простая: # Прописываем эти DNS сервера на квладке IP > DNS > Servers 176.103.130.130 176.103.130.131 Пользуюсь уже неделю, uBlock Origin можно не ставить, защищает все устройства в сети!","tags":"internet","url":"articles/internet/adguard_dns_mikrotik/","loc":"articles/internet/adguard_dns_mikrotik/"},{"title":"Настраиваем задачи из bitrix24 в jetbrains idea","text":"оригинал здесь , мои правки ниже Переменные bitrix_url: url вашего портала [sysadmin.bitrix24.ru] group_id: имя группы [1] user_id: id вашего пользователя [1] (админ обычно №1) web_hook_key: ключ входящего вебхука JSON URL # Все открытые задачи Task List URL: https://{bitrix_url}/rest/{user_id}/{web_hook_key}/task.item.list.json?ORDER[] = &FILTER[RESPONSIBLE_ID]={user_id}}&FILTER[%3CREAL_STATUS]=4&PARAMS[]=&SELECT[]=* # Все открытые задачи только из определенной группы Single Task URL: https://{bitrix_url}/rest/{user_id}/{web_hook_key}/task.item.list.json?ORDER[] = &FILTER[RESPONSIBLE_ID]={user_id}}&FILTER[%3CREAL_STATUS]=4&PARAMS[]=&SELECT[]=*&FILTER[GROUP_ID]={group_id} Сопоставление полей tasks | result[*] id | ID summary | TITLE description | DESCRIPTION updated | CHANGED_DATE created | CREATED_DATE singleTask-id | result.ID singleTask-summary | result.TITLE singleTask-description | result.DESCRIPTION singleTask-updated | result.CHANGED_DATE singleTask-created | result.CREATED_DATE","tags":"develop","url":"articles/develop/nastraivaem-zadachi-iz-bitrix24-v-jetbrains-idea/","loc":"articles/develop/nastraivaem-zadachi-iz-bitrix24-v-jetbrains-idea/"},{"title":"Not Found","text":"The requested item could not be located. Perhaps you might want to check the Archives ?","tags":"misc","url":"articles/misc/not-found/","loc":"articles/misc/not-found/"},{"title":"Софт для написания документации","text":"Принцип написания документации Все изменения конфигов должны попадать в git Документация серверов должна вестить от корня / # Пример: ├── server.ru │ ├── etc │ │ ├── cron.d │ │ │ ├── 0hourly │ │ │ └── sysstat │ │ ├── cron.daily │ │ │ ├── etckeeper │ │ │ └── logrotate │ │ ├── cron.hourly │ │ │ └── 0anacron │ │ ├── crontab │ │ ├── fail2ban │ │ │ ├── filter.d │ │ │ │ └── apache-badbots.conf │ │ │ └── jail.conf │ │ ├── goaccess.conf │ │ ├── hosts │ │ ├── nginx │ │ │ ├── bx │ │ │ │ ├── conf │ │ │ │ │ ├── bitrix.conf │ │ │ │ │ ├── ssl.conf │ │ │ ├── nginx.conf │ │ │ └── ssl │ │ ├── passwd │ │ ├── php.ini │ │ ├── rc.local │ │ ├── sudoers │ │ ├── sysctl.conf │ │ ├── vsftpd У каждого сервера в корне репозитория должен быть файл readme.md с документацией по данному серверу Программное обеспечение Основной инструмент для написания документации это VSCODE Visual Studio Code Plugins Auto MarkdownTOC - для генерации содержания Markdown All in One - для подсветки синтаксиса и других полезных сценариев","tags":"soft","url":"articles/soft/soft-dlia-napisaniia-dokumentatsii/","loc":"articles/soft/soft-dlia-napisaniia-dokumentatsii/"},{"title":"Команды для linux сисадмина","text":"Ссылки по теме Полезные команды на одном листе Работа с текстом Показать всех кто коннектился по ssh grep 'Connection closed' /var/log/secure | cut -d ' ' -f 9 | sort | uniq -c | sort -n iptables # Блокировка IP через iptables iptables -A INPUT -s 212 .116.121.83 -j DROP # Разблокировка IP через iptables iptables -D INPUT -s 212 .116.121.83 -j DROP journalctl # Показать ошибки journalctl -p err # Показать логи в реальном времени journalctl -f # Логи за определенную дату journalctl --since = 2016 -12-20 journalctl --since = 2016 -12-20 --until = 2016 -12-21 # Лог конкретного сервиса journalctl -b -u zabbix-agent.service","tags":"devops","url":"articles/devops/sysadmin_linux_commands/","loc":"articles/devops/sysadmin_linux_commands/"},{"title":"Проверка отправки почты из bitrix","text":"<?php if ( mail ( \"my_mail@mail.ru\" , \"заголовок\" , \"текст\" )) { echo 'Отправлено' ; } else { echo 'Не отправлено' ; } ?>","tags":"bitrix","url":"articles/bitrix/bitrix_sendmail/","loc":"articles/bitrix/bitrix_sendmail/"},{"title":"Добавляем Live Templates в Jetbrains idea","text":"Я добавил такой шаблон, т.к. часто пишу документацию в markdown и мне необходимо вставлять строки подобного рода: 2020-06-15 10:25 - vzdump backup status (pve) : backup failed Дак вот такое сокращение помогает делать это гораздо быстрее, просто ставим две ,, и автодополнение открывается","tags":"develop","url":"articles/develop/jetbrains_live_tamplates/","loc":"articles/develop/jetbrains_live_tamplates/"}]};