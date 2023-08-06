## Uruchamianie projektu

W jednym repozytorium umieściłem zarówno frontend (Laravel), jaki i backend.

### backend

Najpieer uruchamiamy backend. W sytuacji, kiedy mamy zainstalowany composer lokalnie, możemy to zrobić dosyć prosto

```
$ cd ../backend
$ composer install
$ ./vendor/bin/sail up
```

Jeśli, tak jak ja nie mamy lokalnie composera, a korzystamy, np. wyłącznie z dockera, to możemy po prostu przekopiować katalog ./vendor z czystego projektu Laravela, i odplalamy go tak samo.

> Pamiętaj, że musisz mieć zainstalowany lokalnie Docker. Jeśli spróbujesz uruchomić projekt przez php artisan serv w domyślnej konfiguracji, to projekt nie będzie działał poprawnie, ponieważ framework zostanie uruchomiony na porcie 8000. W takiej sytuacji trzeba w pliku index.js zmieniać axios.default.baseURL.

![Running project](./images/running-project.jpg)
