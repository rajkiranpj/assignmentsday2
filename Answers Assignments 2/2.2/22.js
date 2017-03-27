var sport = (function () {
    function sport(sportName, sportLength) {
        this.sportName = "Cricket";
        this.sportLength = 6;
    }
    return sport;
}());
var getSport = new sport("Cricket", 6);
alert("Cricket 6");
