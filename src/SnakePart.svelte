<script lang="typescript">
  export let coordinates: { row: number; col: number };
  export let head: boolean = false;
  //   export let direction: validDirections = "right";

  //   $: {
  //     setInterval(() => {
  //       coordinates = {
  //         row: coordinates.row,
  //         col: coordinates.col + 0, //(direction === "right" ? 1 : 0),
  //       };
  //     }, 1000);
  //   }
</script>

<div
  class="cell snake {head ? 'head' : ''}"
  style="grid-column:{coordinates.col};grid-row:{coordinates.row}"
/>

<style>
  .snake {
    background-color: #1bb11b;
    z-index: 10;
  }
  .snake.head {
    background-color: #ffa500;
  }
</style>
