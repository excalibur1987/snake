<script lang="typescript">
  import Snake from "./Snake.svelte";
  import type { ISnakePart } from "./types";

  type validGameStates = "won" | "failed" | "inprogress";

  let gameState: validGameStates = "inprogress";

  let snakeHead: ISnakePart;

  export let boardDimensions: {
    width: number;
    height: number;
  };
  const { width, height } = boardDimensions;

  $: {
    if (
      snakeHead &&
      (snakeHead.row > boardDimensions.height ||
        snakeHead.row < 1 ||
        snakeHead.col < 1 ||
        snakeHead.col > boardDimensions.width)
    ) {
      gameState = "failed";
    }
  }
</script>

<section
  class="game-board"
  style="grid-template-columns: repeat({height}, 1fr);
    grid-template-rows: repeat({width}, 1fr)"
>
  {#each Array(height)
    .fill(0)
    .map((_r, idx) => idx + 1) as row}
    {#each Array(width)
      .fill(0)
      .map((_r, idx) => idx + 1) as col}
      <div class="cell" style="grid-column:{col};grid-row:{row}" />
    {/each}
  {/each}

  <Snake bind:snakeHead maxCol={width} maxRow={height} />
</section>

<style>
  .game-board {
    margin: 15px auto 0 auto;
    background-color: white;
    display: grid;
    padding: 2px;
    gap: 1px;
    position: relative;
  }
  .game-board .cell {
    display: block;
    background-color: white;
    height: 20px;
    width: 20px;
    border: 2px #ccadad solid;
    z-index: 1;
  }
</style>
