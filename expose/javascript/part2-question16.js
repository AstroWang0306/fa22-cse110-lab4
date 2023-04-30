let statistics = {
    redcars: 21,
    bluecars: 45,
    greencars: 12,
    racecars: 5,
    blackcars: 40,
    rarecars: 2
};

for (let key in statistics) {
  console.log(key + ': ' + statistics[key]);
}
