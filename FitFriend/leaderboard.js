//includes functions to update leaderboard using javascript user objects



function getTotalDistance(user){
    return user.totalDistance;
}

function getTotalTime(user){
    return user.totalTime;
}

//need this to connect to 'join room' functions
var usersInRoom = [];

function findDistanceLeader(users){
    var maxD = 0;
    var leader = '';
    for(user in users){
        if (user.totalDistance >  maxD){
            leader = leader
        }
    }
}

function findTimeLeader(users){
    var maxT = 0;
    var leader = '';
    for(user in users){
        if (user.totalTime >  maxT){
            leader = leader
        }
    }
}

