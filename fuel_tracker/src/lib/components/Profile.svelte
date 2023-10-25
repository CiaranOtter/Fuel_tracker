<script>
    export let account; 
    console.log(account.cars)
</script>

<div class="container">
    <table>
        <tr><td>Name:</td><td>{account.name}</td></tr>
        <tr><td>Number of cars:</td><td>{account.cars.length}</td></tr>
    </table>
</div>

<style>
    .container {
        width: fit-content;
        border: 1px solid var(--lightgray);
        padding: 10px;
        border-radius: 10px;
        margin: auto;
    }
</style>