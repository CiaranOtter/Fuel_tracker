<script>
    import { Menu } from 'lucide-svelte';
    export let account; 
    console.log(account.cars);

    let height = 20;
</script>

<div class="container" bind:clientHeight={height}>
    <div class="data">{account.name.toUpperCase()}</div><div class="icon-container"><Menu size={40}/></div>
</div>

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