## Opis projektu

Jest to pokazowy projekt, który łączy dosyć proste funkcjonalności, jak - rejestracja nowego usera, edycja, usuwanie, wysyłanie maila powitalnego z wygenerowanym hasłem, itp. Wykorzystuję Selenium (Jwt) do komunikacji pomiędzy frontendtem i backendem. Korzystam także z MobX. Jest to drugi projekt w którym korzystam z MobX. Wcześniej korzystałem z Redux'a, ale wydaje mi się, że MobX jest znacznie przyjemniejszzy w używaniu.
Jest to projekt testowy, więc wiele rzeczy tutaj można zmienić - nawet kilka zaznaczyłem w komentarzach. Tak samo nie pokrywałem całej aplikacji testami, a napisałem jedynie kilka, żeby pokazać, że potrafię to robić.

### Stack technologiczny

- Laravel
- React

## Uruchamianie projektu

W jednym repozytorium umieściłem zarówno frontend, jak i frontend.

### Backend

Najpierw uruchamiamy backend. W sytuacji, kiedy mamy zainstalowany composer lokalnie, możemy to zrobić dosyć prosto

```
$ cd ../backend
$ composer install
$ ./vendor/bin/sail up
```

Jeśli, tak jak ja nie mamy lokalnie composera, a korzystamy, np. wyłącznie z dockera, to możemy po prostu przekopiować katalog ./vendor z czystego projektu Laravela, i odplalamy go tak samo.

> Pamiętaj, że musisz mieć zainstalowany lokalnie Docker. Jeśli spróbujesz uruchomić projekt przez php artisan serv w domyślnej konfiguracji, to projekt nie będzie działał poprawnie, ponieważ framework zostanie uruchomiony na porcie 8000. W takiej sytuacji trzeba w pliku index.js zmieniać axios.default.baseURL.

### Frontend

Teraz możemy uruchomić frontend

```
$ cd ../frontend
$ npm install
$ npm start
```

Powinna uruchomić się nam przeglądarka z projektem, ewentualnie możemy uruchomić ją sami - **localhost:3000**.

Pamiętaj, że musisz mieć jednocześnie włączony backend i frontend. Ja uruchamiam to w jednym terminalu.

![Running project](./images/running-project.jpg)

## Testowanie

Testy **nie pokrywają całej aplikacji, zostały stworzone pokazowo**, żeby pokazać, że umiem to robić. Niestety czas nie pozwolił na więcej. Testy można odpalać w następujący sposób.

### Backend

```
$ cd ../backend
$ ./vendor/bin/sail artisan test
```

Przy założeniu, że mamy zainstalowanego Dockera

### Frontend

```
$ cd ../frontend
$ npm test
```
