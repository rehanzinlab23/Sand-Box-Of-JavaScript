let d;

d = new Date();

d = d.toString();

d = new Date(2007, 3, 22, 3, 40, 0);

// Or

d = new Date('2007/3/22 3:40:0');

// Or

d = new Date('1-18-2008');

// MilliSeconds or Timespans In Time

d = Date.now();

// MilliSeconds or Timespans for this date 1-18-2008

d = new Date();

d = d.getTime();

d = d.valueOf();

d = new Date(1756296749289);

d = Math.floor(Date.now() / 1000);

console.log(d);