<script>
    import Profile from '$components/Profile.svelte';
    import CarPanel from '$components/Car_Panel.svelte';
    export let data;
    data.account = JSON.parse(data.account)

    console.log(data.account);

    let height = 0;

    $:console.log("Client heioght:", height)
</script>

<Profile account={data.account} bind:height={height}/>

<CarPanel cars={data.account.cars} profile_height={height}/>