// var buffAr = [
//     'I am ',
//     '',
//     '. I live in ',
//     '',
//     '. ',
//     '',
//     ' years old.'
// ];
//
// function getcompletedStr(name, area, age){
//     buffAr[1] = name;
//     buffAr[3] = area;
//     buffAr[5] = age;
//
//     return buffAr.join('');
// }

// var str = getcompletedStr('michelle', 'seoul', 26);
// console.log(str);

var getCompletedStr = (function(){
    var buffAr = [
        'I am ',
        '',
        '. I live in ',
        '',
        '. ',
        '',
        ' years old.'
    ];

    return (function(name, area, age){
        buffAr[1] = name;
        buffAr[3] = area;
        buffAr[5] = age;

        return buffAr.join('');
    });
})();

var str = getCompletedStr('michelle','seoul',26);
console.log(str);