let count = 0;

function increment() {
  count++;
  console.log("Incremented:", count);
}

function decrement() {
  count--;
  console.log("Decremented:", count);
}

function counterWithNested() {
  let count = 100;

  function nestedIncrement() {
    count++;
    console.log("Nested local count:", count);
  }

  nestedIncrement();
  nestedIncrement();
  console.log("Local count after nested calls:", count);
}

increment();
increment();
increment();
decrement();
decrement();

counterWithNested();

console.log("Global count unchanged by local scope:", count);
