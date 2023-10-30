<script>
    export let data;
    console.log(data);
    export let form;
</script>

<form method="POST">
    <label for="name_input">Save as:</label><br/>
    <input type="text" name="name" id="name_input" /><br/>
    <input type="submit" value="Save" />
</form>