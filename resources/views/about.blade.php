@extends('layouts/main')

@section('content')

<div className="header">

       <a href="/shop"><h1>DarkDream</h1></a> 
            <h4> Your Space shop</h4>
        </div>   
        <div class="about">

<div class="menu">
           
           <ul>
           <li><a href="/items">Show all</a></li>
           <li><a href="/universes">Choose univers</a></li>
           <li><a href="/galaxies">Searching by galaxies</a></li>
           <li><a href="/owners">Show owners</a></li>
           <li><a href="/filter">Filter</a></li>
           <li><a href="/about">About us</a></li>
           <li><a href="/login">Login</a><a href="/register"> / Register</a></li>
           </ul>
   
           
               
           </div>

<h1>Our Dark team:</h1>

    <div id="about">

<div class="team"> 
    <h2>Aneta: </h2>
    <img src="https://media-exp1.licdn.com/dms/image/C5635AQGbIiwloRfSUw/profile-framedphoto-shrink_800_800/0/1611940431148?e=1615723200&v=beta&t=rjxUjLSkLsuFhza-Z0yTZKoaazmbePe4sdIb52MPbf4" alt="Aneta">

</div>
<div class="team"> 
<h2>Lukas: </h2>
    <img src="https://media-exp1.licdn.com/dms/image/C4D35AQH5_m2iV_hcXQ/profile-framedphoto-shrink_800_800/0/1606156164590?e=1615723200&v=beta&t=ogXUUzX-zim0l1KGM6tCTdAb9RS6AvvU0smB4FxhlyE" alt="Lukas">
    </div>
    <div class="team"> 
    <h2>Dagmar: </h2>
    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEshGyCjBOI6g/profile-displayphoto-shrink_800_800/0/1611164074254?e=1620864000&v=beta&t=Mguw9b8uuAPURg8sKEENL-AG0_fpdDKq-QPF-rLBBxg" alt="Dagmar">
</div>
</div>
</div>
@endsection
