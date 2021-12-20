# easy-queue
## Using npm or yarn
```shell
npm install @urat/easy-queue
```

```shell
yarn add @urat/easy-queue
```
## Example

```javascript
import EasyQueue from '@urat/easy-queue'

const queue = EasyQueue()

queue.push(() => {
  console.log(1)
})
queue.push(() => {
  return new Promise((resolve) => {
    console.log(2)
    resolve()
  }).then(() => {
    console.log(3)
  })
})
console.log(4)
queue.push(() => {
  return new Promise((resolve) => {
    console.log(5)
    resolve()
  })
})

// output: 4 1 2 3 5
```