<script lang="ts">
    import Stat from "./_Stats/Stat.svelte";
    import SpeedLines from "./_Stats/SpeedLines.svelte";
    import PulsingGlows from "./_Stats/PulsingGlows.svelte";
</script>

<div
    class="my-20 grid w-full grid-cols-1 grid-rows-3 gap-10 px-[15%] text-center md:grid-cols-3 md:grid-rows-1 lg:px-[10%]"
>
    <Stat number={48} text={"faster than competitors"} color={"#66FF99"}>
        <SpeedLines />
    </Stat>

    <Stat number={100} text={"customizable to your style"} color={"#FFCC00"}></Stat>

    <Stat number={76} text={"more visually appealing"} color={"#6699FF"}>
        <PulsingGlows />
    </Stat>
</div>
