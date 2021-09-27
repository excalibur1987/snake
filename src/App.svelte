<script lang="typescript">
  import Board from "./Board.svelte";
</script>

<main class="snake-game">
  <Board boardDimensions={{ height: 15, width: 15 }} />
</main>

<style>
  :global(body) {
    padding: 0;
    margin: 0;
    overflow: unset;
    height: 100vh;
    width: 100vw;
  }
  main.snake-game {
    background-color: grey;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
