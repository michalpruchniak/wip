<style>
.center {
    text-align: center;
}
.fullWidth{
    width: 100%;
}
.skillsTable th{
    background-color: #d4d4d4;
}
.skillsTable th, .skillsTable tr {
    text-align: center;
    padding: 6px 3px;
}
</style>
<table>
    <tr>
        <td style="font-size: 25px;">
            <b>Witaj, {{ $data['name'] }} {{ $data['lastname'] }}</b>
        </td>
    </tr>
    <tr>
        <td style="padding-top: 25px; font-size: 20px;">
            Nowo utworzone hasło: <b>{{ $data['password'] }}</b>
        </td>
    </tr>
    @if(isset($data['description']) && $data['description'] !== "")
    <tr>
        <td style="padding-top: 20px;" >
            <b>Opis:</b>
        </td>
    </tr>
    <tr>
        <td>
            {{ $data['description'] }}
        </td>
    </tr>
    @endif
    <tr>
        <td style="padding-top: 20px;">
            Stanowisko:
                @switch($data['job'])
                    @case(1)
                        <b>Tester</b>
                        @break
                    @case(2)
                        <b>Developer</b>
                        @break
                    @case(3)
                        <b>Project Manager</b>
                    @break
                    @default
                    <b>Tester</b>
                @endswitch
        </td>
    </tr>
</table>
<table class="fullWidth skillsTable">

    @if($data['job'] == 1)
    <thead>
        <th>Systemy testujące</th>
        <th>Systemy raportujące</th>
        <th>Zna Selenium?</th>
    </thead>
    <tbody>
        <td>{{$data['testing_systems']}}</td>
        <td>{{$data['raporting_systems']}}</td>
        <td>@if($data['selenium'] == true) Tak @else Nie @endif</td>
    </tbody>

    @elseif($data['job'] == 2)
    <thead>
        <th>Środowiska ide</th>
        <th>Języki programowania</th>
        <th>Zna MySQL?</th>
    </thead>
    <tbody>
        <td>{{$data['ide']}}</td>
        <td>{{$data['programming_languages']}}</td>
        <td>@if($data['mysql'] == true) Tak @else Nie @endif</td>
    </tbody>

    @elseif($data['job'] == 3)
    <thead>
        <th>Metodologie prowadzenia projektów</th>
        <th>Systemy raportowania</th>
        <th>Zna scrum?</th>
    </thead>
    <tbody>
        <td>{{$data['methodology']}}</td>
        <td>{{$data['raporting_systems']}}</td>
        <td>@if($data['scrum'] == true) Tak @else Nie @endif</td>
    </tbody>
    @endif
</table>
