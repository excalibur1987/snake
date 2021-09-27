<script lang="typescript">
  import SnakePart from "./SnakePart.svelte";
  import type { ISnake, ISnakePart, validDirections } from "./types";
  export let snakeHead: ISnakePart | null = null;
  export let maxCol: number;
  export let maxRow: number;

  const validDirectionKeys = {
    up: "ArrowUp",
    down: "ArrowDown",
    right: "ArrowRight",
    left: "ArrowLeft",
  };
  let direction: validDirections = "right";
  let player: ISnake = {
    body: [
      { row: 3, col: 3 },
      { row: 3, col: 2 },
      { row: 3, col: 1 },
    ],
    // currentDirection: "right",
  };

  $: {
    snakeHead = player.body[0];
  }

  interface IProps {
    current: number;
    ref: number;
    direction: validDirections;
    max: number;
  }
  interface IRowProps extends IProps {
    incriment: "down";
    decriment: "up";
  }
  interface IColProps extends IProps {
    incriment: "right";
    decriment: "left";
  }
  function calcNewPos({
    current,
    ref,
    direction,
    incriment,
    decriment,
    max,
  }: IColProps | IRowProps): number {
    switch (direction) {
      case incriment: {
        const newVal = current + (current > ref ? -1 : 1);
        return newVal > max ? 1 : newVal;
      }
      case decriment: {
        const newVal = current + (current > ref ? 1 : -1);
        return newVal < 0 ? max : newVal;
      }
      default:
        return current;
    }
  }

  function move(snake: ISnake): ISnake {
    return {
      body: snake.body.map((bod, idx, arr) => ({
        row: calcNewPos({
          current: bod.row,
          ref: bod.row,
          direction,
          incriment: "down",
          decriment: "up",
          max: maxRow,
        }),
        col: calcNewPos({
          current: bod.col,
          ref: bod.col,
          direction,
          incriment: "right",
          decriment: "left",
          max: maxCol,
        }),
      })),
    };
  }

  //   setInterval(() => {
  //     player = move(player);
  //   }, 1000);

  document.addEventListener("keydown", (e) => {
    const key = e.key;
    switch (key) {
      case validDirectionKeys.up:
        direction = "up";
        player = move(player);
        break;
      case validDirectionKeys.right:
        direction = "right";
        player = move(player);
        break;
      case validDirectionKeys.down:
        direction = "down";
        player = move(player);
        break;
      case validDirectionKeys.left:
        direction = "left";
        player = move(player);
        break;
      default:
        break;
    }
  });
</script>

<template>
  {#each player.body as snakeBody, index}
    <SnakePart coordinates={snakeBody} head={index === 0} />
  {/each}
</template>
