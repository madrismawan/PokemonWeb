
<script lang="ts">
    import Pokeball from '../svg/pokeball.svg'
    import PokeTitle from '../svg/poketitle.svg'
</script>

<header class="bg-red-500 p-3 w-full flex flex-col items-center mb-6">
    <img class="w-32 flex" src={PokeTitle} alt="PokeTitle">
    <img class="w-7 h-7 flex transition hover:duration-300 hover:rotate-180" src={Pokeball} alt="icon pokeball">
</header>