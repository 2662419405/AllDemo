const timerFn = (time) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

const ajax1 = () =>
  timerFn(1000).then((res) => {
    console.log(1);
    return 1;
  });

const ajax2 = () =>
  timerFn(1000).then((res) => {
    console.log(2);
    return 2;
  });

const ajax3 = () =>
  timerFn(1000).then((res) => {
    console.log(3);
    return 3;
  });

const mergePromise = (data) => {
  let result = [];
  let promise = Promise.resolve();
  data.forEach((v) => {
    promise = promise.then(v);
    result.push(promise);
  });
  console.log(result);
  return Promise.all(result);
};

mergePromise([ajax1, ajax2, ajax3]).then((res) => {
  console.log(res);
});
