var dir = new Dir();

var acct1 = new User(asd, zoinks, "orangeCircle.svg");
dir.addUser(acct1);
acct1.addDistance(50);
acct1.addTime(50);

var acct2 = new User(aaaaad, zoinks, "orangeCircle.svg");
dir.addUser(acct2);
acct1.addDistance(5);
acct1.addTime(5);

var room = new Room(running);
room.addUser(acct1);
room.addUser(acct2);

