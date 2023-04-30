//By setting a time interval, we can let the code print out the time once every second.
setInterval(() => {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
  }, 1000);
  