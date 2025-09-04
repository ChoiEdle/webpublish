/**
 * 
 */

{
    const a = 1;    //전역 변수
    const b = 100;
    console.log(a);
    
    {
        const a = 2;    //지역 변수
        console.log(a);
        const b = 10;
        
        {
            const a = 3;
            const c = 1000;
            console.log(a);
            console.log(b);
        }
        console.log(a);
        // console.log(c);  //scope chain은 뒤로 가지 못함
        
    }
    console.log(a);
    

}

