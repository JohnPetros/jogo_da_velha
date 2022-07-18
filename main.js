var game = [];
var board = [];
var whoPlay = 0; // 0 = singlePlayer   1 = i.a  2 = multiPlayer
var verification;
var playing = true;
var level = 1;
var turnIA = 1;
var whoStart = 1;
var rounds = 0;
let singlePlayer = true


function chooseLevel(Numberlevel){
    if (Numberlevel == 1) {
        level = Numberlevel 
        document.getElementById('ChooseLevel1').classList.add('buttonActivate')
        document.getElementById('ChooseLevel2').classList.remove('buttonActivate')    
        start()
    } else {
        level = Numberlevel
        document.getElementById('ChooseLevel2').classList.add('buttonActivate')   
        document.getElementById('ChooseLevel1').classList.remove('buttonActivate')  
        start()  
    }
}

function chooseMode(mode){
    if (mode == 1) {
        singlePlayer = true
        document.getElementById('singlePlayer').classList.add('buttonActivate')
        document.getElementById('multiPlayer').classList.remove('buttonActivate')
        document.getElementById('levels').style.display = 'block'
        document.getElementById('turns').style.display = 'none'
        start()
    } else {
        singlePlayer = false
        document.getElementById('multiPlayer').classList.add('buttonActivate')   
        document.getElementById('singlePlayer').classList.remove('buttonActivate') 
        document.getElementById('levels').style.display = 'none'
        document.getElementById('turns').style.display = 'block'
        document.getElementById('whoPlay').style.display = 'block'
        start()  
    }
}

function IAPlay() {
  if (playing) {
    var l, C;
    if (level == 1) {
      //NÍVEL 1
      do {
        l = Math.round(Math.random() * 2);
        c = Math.round(Math.random() * 2);
      } while (game[l][c] != "");
      game[l][c] = "O";
    } else if (level == 2) {
      //NÍVEL 2

      // ATAQUE
      // jogadas linha 1
      if (game[0][0] == "O" && game[0][1] == "O" && game[0][2] == "") {
        game[0][2] = "O";
      } else if (game[0][0] == "O" && game[0][2] == "O" && game[0][1] == "") {
        game[0][1] = "O";
      } else if (game[0][1] == "O" && game[0][2] == "O" && game[0][0] == "") {
        game[0][0] = "O";
      }
      // jogadas linha 2
      else if (game[1][0] == "O" && game[1][1] == "O" && game[1][2] == "") {
        game[1][2] = "O";
      } else if (game[1][0] == "O" && game[1][2] == "O" && game[1][1] == "") {
        game[1][1] = "O";
      } else if (game[1][1] == "O" && game[1][2] == "O" && game[1][0] == "") {
        game[1][0] = "O";
      }
      // jogadas linha 3
      else if (game[2][0] == "O" && game[2][1] == "O" && game[2][2] == "") {
        game[2][2] = "O";
      } else if (game[2][0] == "O" && game[2][2] == "O" && game[2][1] == "") {
        game[2][1] = "O";
      } else if (game[2][1] == "O" && game[2][2] == "O" && game[2][0] == "") {
        game[2][0] = "O";
      }
      // jogadas coluna 1
      else if (game[0][0] == "O" && game[1][0] == "O" && game[2][0] == "") {
        game[2][0] = "O";
      } else if (game[0][0] == "O" && game[2][0] == "O" && game[1][0] == "") {
        game[1][0] = "O";
      } else if (game[1][1] == "O" && game[2][0] == "O" && game[0][0] == "") {
        game[0][0] = "O";
      }
      // jogadas coluna 2
      else if (game[0][1] == "O" && game[1][1] == "O" && game[2][1] == "") {
        game[2][1] = "O";
      } else if (game[0][1] == "O" && game[2][1] == "O" && game[1][1] == "") {
        game[1][1] = "O";
      } else if (game[1][1] == "O" && game[2][1] == "O" && game[0][1] == "") {
        game[0][1] = "O";
      }
      // jogadas coluna 3
      else if (game[0][2] == "O" && game[1][2] == "O" && game[2][2] == "") {
        game[2][2] = "O";
      } else if (game[1][2] == "O" && game[2][2] == "O" && game[1][2] == "") {
        game[1][2] = "O";
      } else if (game[1][2] == "O" && game[2][2] == "O" && game[0][2] == "") {
        game[0][2] = "O";
      }
      // jogadas diagonal 1
      else if (game[0][0] == "O" && game[1][1] == "O" && game[2][2] == "") {
        game[2][2] = "O";
      } else if (game[0][0] == "O" && game[2][2] == "O" && game[1][1] == "") {
        game[1][1] = "O";
      } else if (game[1][1] == "O" && game[2][2] == "O" && game[0][0] == "") {
        game[0][0] = "O";
      }
      // jogadas diagonal 2
      else if (game[2][0] == "O" && game[1][1] == "O" && game[0][2] == "") {
        game[0][2] = "O";
      } else if (game[0][2] == "O" && game[2][0] == "O" && game[1][1] == "") {
        game[1][1] = "O";
      } else if (game[0][2] == "O" && game[1][1] == "O" && game[2][0] == "") {
        game[2][0] = "O";
      }
      // DEFESA
      // jogadas linha 1
      else if (game[0][0] == "X" && game[0][1] == "X" && game[0][2] == "") {
        game[0][2] = "O";
      } else if (game[0][0] == "X" && game[0][2] == "X" && game[0][1] == "") {
        game[0][1] = "O";
      } else if (game[0][1] == "X" && game[0][2] == "X" && game[0][0] == "") {
        game[0][0] = "O";
      }
      // jogadas linha 2
      else if (game[1][0] == "X" && game[1][1] == "X" && game[1][2] == "") {
        game[1][2] = "O";
      } else if (game[1][0] == "X" && game[1][2] == "X" && game[1][1] == "") {
        game[1][1] = "O";
      } else if (game[1][1] == "X" && game[1][2] == "X" && game[1][0] == "") {
        game[1][0] = "O";
      }
      // jogadas linha 3
      else if (game[2][0] == "X" && game[2][1] == "X" && game[2][2] == "") {
        game[2][2] = "O";
      } else if (game[2][0] == "X" && game[2][2] == "X" && game[2][1] == "") {
        game[2][1] = "O";
      } else if (game[2][1] == "X" && game[2][2] == "X" && game[2][0] == "") {
        game[2][0] = "O";
      }
      // jogadas coluna 1
      else if (game[0][0] == "X" && game[1][0] == "X" && game[2][0] == "") {
        game[2][0] = "O";
      } else if (game[0][0] == "X" && game[2][0] == "X" && game[1][0] == "") {
        game[1][0] = "O";
      } else if (game[1][1] == "X" && game[2][0] == "X" && game[0][0] == "") {
        game[0][0] = "O";
      }
      // jogadas coluna 2
      else if (game[0][1] == "X" && game[1][1] == "X" && game[2][1] == "") {
        game[2][1] = "O";
      } else if (game[0][1] == "X" && game[2][1] == "X" && game[1][1] == "") {
        game[1][1] = "O";
      } else if (game[1][1] == "O" && game[2][1] == "X" && game[0][1] == "") {
        game[0][1] = "O";
      }
      // jogadas coluna 3
      else if (game[0][2] == "X" && game[1][2] == "X" && game[2][2] == "") {
        game[2][2] = "O";
      } else if (game[1][2] == "X" && game[2][2] == "X" && game[1][2] == "") {
        game[1][2] = "O";
      } else if (game[1][2] == "X" && game[2][2] == "X" && game[0][2] == "") {
        game[0][2] = "O";
      }
      // jogadas diagonal 1
      else if (game[0][0] == "X" && game[1][1] == "X" && game[2][2] == "") {
        game[2][2] = "O";
      } else if (game[0][0] == "X" && game[2][2] == "X" && game[1][1] == "") {
        game[1][1] = "O";
      } else if (game[1][1] == "X" && game[2][2] == "X" && game[0][0] == "") {
        game[0][0] = "O";
      }
      // jogadas diagonal 2
      else if (game[2][0] == "X" && game[1][1] == "X" && game[0][2] == "") {
        game[0][2] = "O";
      } else if (game[0][2] == "X" && game[2][0] == "X" && game[1][1] == "") {
        game[1][1] = "O";
      } else if (game[0][2] == "X" && game[1][1] == "X" && game[2][0] == "") {
        game[2][0] = "O";
      } else {
        if (rounds < 8) {
          do {
            l = Math.round(Math.random() * 2);
            c = Math.round(Math.random() * 2);
          } while (game[l][c] != "");
          game[l][c] = "O";
        } else {
          for (var l = 0; l < 3; l++) {
            for (var c = 0; c < 3; c++) {
              if (game[l][c] == "") {
                game[l][c] = "O";
              }
            }
          }
        }
      }
    }
  }
  verification = verifyWin();
  if (verification != "") {
    alert(`JOGADOR ${verification} VENCEU`);
    playing = false;
  }
  updateBoard();
  rounds++;
  whoPlay = 0;
}

function verifyWin() {
  var l, c;
  //LINHAS
  for (l = 0; l < 3; l++) {
    if (game[l][0] == game[l][1] && game[l][1] == game[l][2]) {
      return game[l][0];
    }
  }

  //COLUNAS
  for (c = 0; c < 3; c++) {
    if (game[0][c] == game[1][c] && game[1][c] == game[2][c]) {
      return game[0][c];
    }
  }

  //DIAGONAIS
  if (game[0][0] == game[1][1] && game[1][1] == game[2][2]) {
    return game[0][0];
  }
  if (game[0][2] == game[1][1] && game[1][1] == game[2][0]) {
    return game[0][2];
  }
  return "";
}

function score(){
    document.getElementById("playerX").innerHTML = `${scoreX}`
    document.getElementById("playerO").innerHTML = `${scoreO}`
}

function play(p) {
  if (playing && whoPlay == 0) {
    document.getElementById('whoPlay').innerHTML = 'JOGADOR X'
    switch (p) {
      case 1:
        if (game[0][0] == "") {
          game[0][0] = "X";
          singlePlayer ? whoPlay = 1 : whoPlay = 2
        }
        break;
      case 2:
        if (game[0][1] == "") {
          game[0][1] = "X";
          singlePlayer ? whoPlay = 1 : whoPlay = 2
        }
        break;
      case 3:
        if (game[0][2] == "") {
          game[0][2] = "X";
          singlePlayer ? whoPlay = 1 : whoPlay = 2
        }
        break;
      case 4:
        if (game[1][0] == "") {
          game[1][0] = "X";
            singlePlayer ? whoPlay = 1 : whoPlay = 2
        }
        break;
      case 5:
        if (game[1][1] == "") {
          game[1][1] = "X";
            singlePlayer ? whoPlay = 1 : whoPlay = 2
        }
        break;
      case 6:
        if (game[1][2] == "") {
          game[1][2] = "X";
         singlePlayer ? whoPlay = 1 : whoPlay = 2
        }
        break;
      case 7:
        if (game[2][0] == "") {
          game[2][0] = "X";
          singlePlayer ? whoPlay = 1 : whoPlay = 2
        }
        break;
      case 8:
        if (game[2][1] == "") {
          game[2][1] = "X";
          singlePlayer ? whoPlay = 1 : whoPlay = 2
        }
        break;
      default: //case 9
        if (game[2][2] == "") {
          game[2][2] = "X";
          singlePlayer ? whoPlay = 1 : whoPlay = 2
        }
        break;
    }
    
    if (whoPlay == 1 && singlePlayer) {
      updateBoard();
      
      rounds++;
      IAPlay();
    }
    updateBoard()
    document.getElementById('whoPlay').innerHTML = 'JOGADOR O'
} else  if (whoPlay == 2 && !singlePlayer) {
    updateBoard()
    switch (p) {
      case 1:
        if (game[0][0] == "") {
          game[0][0] = "O";
          whoPlay = 0;
        }
        break;
      case 2:
        if (game[0][1] == "") {
          game[0][1] = "O";
          whoPlay = 0;
        }
        break;
      case 3:
        if (game[0][2] == "") {
          game[0][2] = "O";
          whoPlay = 0;
        }
        break;
      case 4:
        if (game[1][0] == "") {
          game[1][0] = "O";
          whoPlay = 0;
        }
        break;
      case 5:
        if (game[1][1] == "") {
          game[1][1] = "O";
          whoPlay = 0;
        }
        break;
      case 6:
        if (game[1][2] == "") {
          game[1][2] = "O";
          whoPlay = 0;
        }
        break;
      case 7:
        if (game[2][0] == "") {
          game[2][0] = "O";
          whoPlay = 0;
        }
        break;
      case 8:
        if (game[2][1] == "") {
          game[2][1] = "O";
          whoPlay = 0;
        }
        break;
      default: //case 9
        if (game[2][2] == "") {
          game[2][2] = "O";
          whoPlay = 0;
        }
        break;
    }
    
    document.getElementById('whoPlay').innerHTML = 'JOGADOR X'

}
updateBoard();
verification = verifyWin();
if (verification != "") {
    alert(`JOGADOR ${verification}  VENCEU`)
    playing = false;
    start()
}
   
}

function updateBoard() {
  for (var l = 0; l < 3; l++) {
    for (var c = 0; c < 3; c++) {
      if (game[l][c] == "X") {
        board[l][c].innerHTML = "X";
        board[l][c].style.cursor = "default";
      } else if (game[l][c] == "O") {
        board[l][c].innerHTML = "O";
        board[l][c].style.cursor = "default";
      } else {
        board[l][c].innerHTML = "";
        board[l][c].style.cursor = "pointer";
      }
    }
  }
}

function start() {
  playing = true;
  turnIA = 1;
  rounds = 0;
  game = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  board = [
    [
      document.getElementById("p1"),
      document.getElementById("p2"),
      document.getElementById("p3"),
    ],
    [
      document.getElementById("p4"),
      document.getElementById("p5"),
      document.getElementById("p6"),
    ],
    [
      document.getElementById("p7"),
      document.getElementById("p8"),
      document.getElementById("p9"),
    ],
  ];
  updateBoard();
  if(singlePlayer){
    if (whoStart == 1) {
        whoStart = 0;
        whoPlay = whoStart;
        //document.getElementById("whoPlay").innerHTML = "Quem Joga: Jogador";
      } else {
        whoStart = 1;
        whoPlay = whoStart;
        //document.getElementById("whoPlay").innerHTML = "Quem Joga: I.A";
        IAPlay();
      }
  }

}

window.addEventListener("load", start)