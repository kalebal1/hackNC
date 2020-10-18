class Account {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.user = null;
    }

    get username(){
        return this.username;
    }
    get password(){
        return this.password;
    }
     
    addUser(user){
        this.user = user;
    }
    
}

class User extends Account{
    constructor(username, password, img){
        super(username, password)
        this.img = img;
        this.totalDistance = 0;
        this.totalTime = 0;
    }

    get img(){
        return this.img;
    }

    get totalDistance(){
        return this.totalDistance;
    }

    addDistance(distance){
        this.totalDistance += distance;
    }
    addTime(time){
        this.totalTime += time;
    }
}

class Room{
    constructor(type, key){
        this.type = type;
        this.key = key;
        this.users = [];
    }

    addUser(account){
        this.users.push(account);
    }

    getLeader(){
        var maxD = 0;
        var leader = '';
        for(user in users){
            if(user.getDistance > maxD){
                leader = user;
            }
        }

        return leader;
    }
}

class Dir{
    constructor(){
        this.users = [];
        this.rooms = [];
    }

    addUser(account){
        this.users.push(account);
    }
}