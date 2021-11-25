import { writable } from 'svelte/store';

export const display = writable('');

// function createDisplay() {
//   const { subscribe, set, update } = writable(0);

//   return {
//     subscribe,
//     add: (num) => update((n) => n + num),
//     subtract: (num) => update((n) => n - num),
//     multiply: (num) => update((n) => n * num),
//     divide: (num) => update((n) => n / num),
//     reset: () => set(0),
//   };
// }

// export const display = createDisplay();
