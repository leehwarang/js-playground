var full_str = '';

var clickNumbers = function(event){
    input_str = event.target.innerHTML;

    switch(input_str){
        case 'BS':
        full_str = full_str.slice(0, -1);
        break;
        case '+': 
        full_str += ' + ';
        break;
        case '-': 
        full_str += ' - ';
        break;
        case '*': 
        full_str += ' * ';
        break;
        case '/': 
        full_str += ' / ';
        break;
        default:
        full_str += input_str
    }
    console.log(full_str);
};