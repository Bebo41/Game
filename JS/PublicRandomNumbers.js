
let PublicRandomNum = Math.random() * 3 + 1;
let PublicRandomNum2 = Math.random() * 3 + 1;
let PublicRandomNum3 = Math.random() * 3 + 1;
let PublicRandomNum4 = Math.random() * 3 + 1;
let PublicRandomNum5 = Math.random() * 2 + 1;
let PublicRandomNum6 = Math.random() * 2 + 1;
function random()
{
    PublicRandomNum = Math.random() * 3 + 1;
    PublicRandomNum = Math.floor(PublicRandomNum);
    PublicRandomNum2 = Math.random() * 3 + 1;
    PublicRandomNum2 = Math.floor(PublicRandomNum2);
    PublicRandomNum3 = Math.random() * 3 + 1;
    PublicRandomNum3 = Math.floor(PublicRandomNum3);
    PublicRandomNum4 = Math.random() * 3 + 1;
    PublicRandomNum4 = Math.floor(PublicRandomNum4);
}
function random2()
{
    PublicRandomNum5 = Math.random() * 2 + 1;
    PublicRandomNum5 = Math.floor(PublicRandomNum5);
    PublicRandomNum6 = Math.random() * 2 + 1;
    PublicRandomNum6 = Math.floor(PublicRandomNum6);
}
//exports
export
{
    random,
    random2,
    PublicRandomNum,
    PublicRandomNum2,
    PublicRandomNum3,
    PublicRandomNum4,
    PublicRandomNum5,
    PublicRandomNum6
}