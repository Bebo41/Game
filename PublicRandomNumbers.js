
let PublicRandomNum = Math.random() * 3 + 1;
let PublicRandomNum2 = Math.random() * 3 + 1;
let PublicRandomNum3 = Math.random() * 3 + 1;
let PublicRandomNum4 = Math.random() * 3 + 1;
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
    console.log(PublicRandomNum + " " + PublicRandomNum2 + " " + PublicRandomNum3 + " " + PublicRandomNum4);
}
//exports
export
{
    random,
    PublicRandomNum,
    PublicRandomNum2,
    PublicRandomNum3,
    PublicRandomNum4
}