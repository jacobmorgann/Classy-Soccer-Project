const Soccer = class Soccer {
    constructor (soccerName,
                 soccerAge,
                 soccerPosition,
                 soccerClub) {
                 this.soccerName = soccerName;
                 this.soccerAge = soccerAge;
                 this.soccerPosition = soccerPosition;
                 this.soccerClub = soccerClub;
                 }


}
let soccer = new Soccer("Harry Kane",28,"Foward","Tottenham Hotspur F.C.");

let soccerAd = document.querySelector(".soccerOfTheDay");
soccerAd.textContent = "The soccer player " + soccer.soccerName + " is " + soccer.soccerAge + " and plays " + soccer.soccerPosition + " for " + soccer.soccerClub;


