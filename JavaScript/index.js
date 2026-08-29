const layout = [
    ["♜","♞","♝","♛","♚","♝","♞","♜"],
    ["♟","♟","♟","♟","♟","♟","♟","♟"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["♙","♙","♙","♙","♙","♙","♙","♙"],
    ["♖","♘","♗","♕","♔","♗","♘","♖"],
  ];

  const files = ["a","b","c","d","e","f","g","h"];
  const board = document.getElementById('board');

  for(let r=0;r<8;r++){
    for(let c=0;c<8;c++){
      const sq = document.createElement('div');
      sq.className = 'square ' + (((r+c)%2===0) ? 'light':'dark');

      const glyph = layout[r][c];
      if(glyph){
        const span = document.createElement('span');
        const isGold = r >= 6;
        span.className = 'piece ' + (isGold ? 'gold' : 'blue');
        span.textContent = glyph;
        sq.appendChild(span);
      }

      if(c === 0){
        const rankLabel = document.createElement('span');
        rankLabel.className = 'coord rank';
        rankLabel.textContent = 8 - r;
        sq.appendChild(rankLabel);
      }
      if(r === 7){
        const fileLabel = document.createElement('span');
        fileLabel.className = 'coord file';
        fileLabel.textContent = files[c];
        sq.appendChild(fileLabel);
      }

      board.appendChild(sq);
    }
  }