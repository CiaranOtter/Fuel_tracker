<script>
    import { Menu } from 'lucide-svelte';
    import MenuPanel from '$components/Menu.svelte'
    export let account; 
    console.log(account.cars);

    let height = 20;

    let show_menu = false;
</script>

<div class="container" bind:clientHeight={height}>
    <div class="data">{account.name.toUpperCase()}</div><div class="icon-container" on:click={() => show_menu = !show_menu}><Menu size={40}/></div>
</div>

<MenuPanel bind:show={show_menu} />

<style>
    .container {
        background: var(--white);
        margin:0px;
        padding: 0px;
        color: var(--black);
        font-weight: 300;
        font-size: 25px;
        display: flex;
        justify-content: space-between;
        height: 50px;
    }

    .data {
        padding: 10px;
    }

    .icon-container {
        /* border: 1px solid red; */
        margin-top: 5px;
    }
</style>