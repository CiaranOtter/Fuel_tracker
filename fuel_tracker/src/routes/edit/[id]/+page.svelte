<script>
    import { attr_dev } from 'svelte/internal';

    export let data;
    console.log(data)
    let date = new Date(data.fuel.date);

    const format_date = (date) => {
        let temp = date.getFullYear() + '-';

        if ((date.getMonth()+1) < 10) {
            temp += '0';
        }

        temp += (date.getMonth()+1) + '-';

        if (date.getDate() < 10) {
            temp += '0'
        }

        temp += date.getDate();

        return temp;
    }
    let date_string = date.getFullYear() + "-" + date + "-" + date.getDate();

    console.log(date_string);
</script>

<form method="POST">
    <input type="date" name="date" id="inp_date" value="{format_date(date)}"/><br/>
    <input id="inp_price" name="price" value={data.fuel.price} step={0.01} /><br/>
    <input id="inp_cost" name="cost" value={data.fuel.cost} step={0.01} /><br/>
    <input id="inp_liters" name="liters" value={data.fuel.liters} step={0.01} /><br/>
    <input id="inp_kmtraveled" name="kmTraveled" value={data.fuel.kmTraveled} step={0.01} /><br/>
    <input type="submit" value="update" />
</form>