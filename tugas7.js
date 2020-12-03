// =============== SOAL 1 ===============

printTriangle = (num) => {
  for (let i=1; i<=num; i++) {
    let s  =''; //i=1
  for (let j=1; j<=i; j++) {
    s +='*';
  }
  console.log(s);
  }
}

printTriangle(5);



// =============== SOAL 2 ===============

let s= '';

printSquare = (num) => {
  for (let i=1; i<=num; i++) {
    //i=3
    for (let j=0; j<=3; j++) {
      //j=0
      if (i==1 || i==num || j==0 || j==3) {
        s +=('*');
      } else {
        s +=(' ');
    }
  }
  s += ('\n');
  }
  console.log(s);
}

printSquare(4);



// =============== SOAL 4 ===============
let nilai=[50,90,70];
nilai.push(50,30);

function addArray (arr) {
  console.log(nilai);
}

addArray([50,30]);



// =============== SOAL 3 ===============

function gradeCheck(nilai) {
  if (nilai<65) {
    return '\nTidak Lulus';
  } else {
    return '\nLulus!';
  }
}

gradeCheck(65);