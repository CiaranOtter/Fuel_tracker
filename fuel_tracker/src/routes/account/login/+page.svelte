<script>
    import { base } from '$app/paths';
    export let form;
</script>

<div class="edit-container">
<form method="POST">
    <div class="header">
        Login
    </div>
    <label for="name_input">Name:</label><br/>
    <input class="data_input" type="text" name="name" id="name_input" /><br/>
    <label for="password">Password:</label><br/>
    <input class="data_input" type="text" name="password" id="password" /><br/>
    <input class="submit_button" type="submit" value="Login">
</form>

<div class="register"><a href="./register">create an account</a></div>
</div>

<style>
    .edit-container {
        border: 1px solid var(--lightgray);
        width: fit-content;
        padding: 10px;
        border-radius: 10px;
        margin: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    label {
        margin-left: 5px;
    }

    .register {
        text-align: center;
        padding: 10px;
    }

    a:link {
        color: var(--white);
    }
</style>