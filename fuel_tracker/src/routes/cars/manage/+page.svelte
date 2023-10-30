<script>
    export let data;
    console.log(data)
</script>

{#each data.cars as  car}
    <div class="container">
        <div class="name">{car.name}</div>
        <div class="button-container">
            <div class="button edit">Edit</div>
            <div class="button delete">Delete</div>
        </div>
    </div>    
{/each}

<style>
    .container {
        border: 1px solid var(--lightgray);
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
    }

    .button-container {
        display: flex;
    }

    .button {
        flex: 1;
        text-align: center;
        color: var(--black);
        margin: 5px 10px;
        padding: 10px;
        border-radius: 10px;
    }

    .edit {
        background: var(--orange);
    }

    .delete {
        background: var(--red);
    }
</style>