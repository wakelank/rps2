describe("Rock, Paper, Scisssors", function (){
  it("works", function() {
    expect(true).toBe(true)
  });

  it("rock beats scissors", function() {
    actual   = doesBeat('rock', 'scissors');
    expected = true;
    expect(actual).toBe(expected)
  });

  it("paper beats rock", function() {
    actual   = doesBeat('paper', 'rock');
    expected = true;
    expect(actual).toBe(expected)
  });

  it("scissors beats paper", function() {
    actual   = doesBeat('scissors', 'paper');
    expected = true;
    expect(actual).toBe(expected)
  });

  it("rock beats paper", function() {
    actual   = doesBeat('rock', 'paper');
    expected = false;
    expect(actual).toBe(expected)
  });

  it("paper beats scissors", function() {
    actual   = doesBeat('rock', 'paper');
    expected = false;
    expect(actual).toBe(expected)
  });

  it("scissors beats rocks", function() {
    actual   = doesBeat('rock', 'paper');
    expected = false;
    expect(actual).toBe(expected)
  });

  it("rock ties rock", function(){
    actual   = doesTie('rock', 'rock');
    expected = true;
    expect(actual).toBe(expected)
  });

  it("a player gains a victory", function(){
    var playerA = new Player(playerA);
    playerA.winBattle();
    actual   = playerA.victoryCount;
    expected = 1;
    expect(actual).toBe(expected);
  });

  it("a player must have 3 wins for victory", function(){
    var playerA = new Player(playerA);
    playerA.winBattle();
    playerA.winBattle();
    playerA.winBattle();

    actual = playerA.winWar();
    expected = true;
    expect(actual).toBe(expected);
  });


});


