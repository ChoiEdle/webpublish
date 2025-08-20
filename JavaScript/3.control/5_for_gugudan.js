/**
 * 구구단 출력 : 2 ~ 9단
 */

for(let i=1 ; i<10 ; i++){
    let rows = '';
    for(let j=2 ; j<10 ; j++){
        rows += `${j}x${i}=${i*j}\t`;
    }
    console.log(rows);
}

for(let i=0 ; i<5 ; i++){
    let rows = '';
    for(let j=0 ; j<=i ; j++){
        rows += '*';
    }
    console.log(rows);
}

/**
 * 초록사과 찍기, 3행 줄만 빨간사과 출력
 */
for(let i=0 ; i<5 ; i++){
    let rows = '';
    for(let j=0 ; j<=i ; j++){
        if(i===2){
            rows += '🍎';
        } else {
            rows += '🍏';
        }
    }
    console.log(rows);
}
