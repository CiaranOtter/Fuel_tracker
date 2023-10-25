<script>
    import Profile from '$components/Profile.svelte';
    import CarPanel from '$components/Car_Panel.svelte';
    export let data;
    data.account = JSON.parse(data.account)

    console.log(data.account);
</script>

<Profile account={data.account} />

<CarPanel cars={data.account.cars} />