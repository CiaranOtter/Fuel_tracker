<script>
    export let fuel
</script>

<div class="container">
    <table>
        <tr><td class="title" >{(new Date(fuel.date)).toLocaleDateString('en-UK', {weekday: 'short', year: 'numeric', month: 'long', day: 'numeric'})}</td></tr>
        <tr><td class="title" >Liters purchased:</td><td class="value">{fuel.liters} L</td></tr>
        <tr><td class="title" >Amount spent:</td><td class="value">R{fuel.cost}</td><tr>
        <tr><td class="title" >Price of fuel: </td><td class="value">R{fuel.price}</td></tr>
    </table>  
    <div class="flex-container"><div class="edit">Edit</div><div class="delete">Delete</div></div> 
</div>

<style>
    .container {
        padding: 10px;
        border: 1px solid var(--lightgray);
        border-radius: 10px;
        margin: 10px auto;
    }

    .title {
        font-weight: 300;
        color: var(--white);
        font-size: 18px;
    }

    .value {
        font-weight: 700;
        font-size: 20px;

    }

    .edit {
        text-align: center;
        background: var(--orange);
        border-radius: 10px;
        margin: 5px ;
        color: black;
        padding: 10px;
        flex: 1;
    }

    .delete {
        text-align: center;
        background: var(--red);
        border-radius: 10px;
        margin: 5px ;
        color: black;
        padding: 10px;
        flex: 1;
    }

    .flex-container {
        display: flex;
        width: 100%;
        
    }
</style>