<?php

namespace App\Libraries\UserBuilder\Repository;

use Illuminate\Foundation\Auth\User;

class UserRepository
{
    public function save(User $user): bool
    {
        return $user->save();
    }

    public function update(User $user, array $data): bool
    {
        /* W tym miejscu zwracam wyłącznie true, ponieważ nie chcę aktualizować tego modelu
          Wynika to z mojego zamysłu. Wszystkie informacje o użytkowniku są przechowywane w modelu Profile,
          natomiast tutaj dane do logowania oraz informacja, czy user ma uprawnienia admina.
          W moim przypadku to nie są rzeczy, które chcę aktualizować.
          Ewentualnie w późniejszym czasie można byłoby dorobić opcję zmiany hasła i uprawnień.

          Inną sprawą jest adres email, który występuje zarówno w modelu User, jak i Profile.
          Wymyśliłem to sobie w ten sposób, że adres email, który znajduje się w User pełni rolę loginu, natomiast
          ten w Profile jest służy do wyświetlania, np. a panelu admina. Mógłby później być wykorzystywany do wysyłania maili, itp.

          Zostawiam jednak tę metodę, ponieważ przy póxniejszej rozbudowie strony mogłaby być przydatna, np. można byłoby do komponentu Edit.jsx dodać dodatkowego checkbox'a
          który służyłby do nadawania, bądź odbierania uprawnień admina.
        */

        return true;
    }
}
