$(document).ready(function(){
    let operands = new Array();
    let operators = new Array();

    let expression = new Array();
    let position = 0;

    let operand = 0;
    let answer = undefined;
    let multiplyingFactor = 1;

    function setOperandZero(){
        operand = 0;
        return operand;
    }

    function addOperand(operand,operator){
        operand *= multiplyingFactor;
        multiplyingFactor = 1;
        operands.push(operand);
        if(operator != ' '){
            operators.push(operator);
        }
        operand = setOperandZero();


    }

    function sortingItOut(index)
    {
        operators.splice(index,1); 
        operands[index] = answer;
        operands.splice(index+1,1); 
        console.log(operands);
        console.log(operators);
    }

    function bodmasSolver(){
        while(operators.length != 0){
            if(operators.includes('/')){
                let index = operators.indexOf('/');
                if(answer == undefined){
                    answer = operands[index];
                }
                answer /= operands[index+1];
                sortingItOut(index);
            }
            else if(operators.includes('*')){
                let index = operators.indexOf('*');
                if(answer == undefined){
                    answer = operands[index];
                }
                answer *= operands[index+1];
                sortingItOut(index);
            }
            else if(operators.includes('+')){
                let index = operators.indexOf('+');
                if(answer == undefined){
                    answer = operands[index];
                }
                answer += operands[index+1];
                sortingItOut(index);
            }
            else if(operators.includes('-')){
                let index = operators.indexOf('-');
                if(answer == undefined){
                    answer = operands[index];
                }
                answer -= operands[index+1];
                sortingItOut(index);            
            }

    
    
            if(operands.length >= 2){
                answer = undefined;
            }
        }
    }

    $(".btn-light-blue").click(function(){
        let number = $(this).html();
        operand = parseInt(operand.toString() + number.toString());
        expression[position] = number;
        position += 1;
        $("#data").html(expression);

    });

    $("#sub").click(function(){
        if(operand == ''){
            multiplyingFactor = -1;
        }
        else{
            addOperand(operand,'-');
        }
        expression[position] = '-';
        position += 1;
        $("#data").html(expression);
    });

    $("#add").click(function(){
        addOperand(operand,'+');
        expression[position] = '+';
        position += 1;
        $("#data").html(expression);
    });

    $("#mul").click(function(){
        addOperand(operand,'*');
        expression[position] = '*';
        position += 1;
        $("#data").html(expression);
    });

    $("#divide").click(function(){
        addOperand(operand,'/');
        expression[position] = '/';
        position += 1;
        $("#data").html(expression);
    });

    $("#equals").click(function(){
        addOperand(operand,' ');
        console.log(operands);
        console.log(operators);
        bodmasSolver();
        $("#ans").html(answer);
    });

    $("#clear").click(function(){
        operands = [];
        operators = [];
        answer = undefined;
        $("#data").html('');
        $("#ans").html('');
        expression = [];
        position = 0;
    });

    function makeDark(){
        $('body').addClass('dark-mode');
        $('body').removeClass('light-mode');

        $('.btn-light-blue').addClass('btn-light-teal');
        $('.btn-medium-blue').addClass('btn-medium-teal');
        $('.btn-dark-blue').addClass('btn-dark-teal');
        $("#ans").addClass("ans-dark");
        $("#data").addClass("data-dark");
    }

    function makeLight(){
        $('body').addClass('light-mode');
        $('body').removeClass('dark-mode');

        $('.btn-light-blue').removeClass('btn-light-teal');
        $('.btn-medium-blue').removeClass('btn-medium-teal');
        $('.btn-dark-blue').removeClass('btn-dark-teal');
        $("#ans").removeClass('ans-dark');
        $("#data").removeClass('data-dark');
    }

    $("#switch").click(function(){
        let cls = $(this).attr('class');

        if(cls == 'btn btn-medium-blue'){
            console.log("Light Mode");
            makeDark();
        }
        else{
            console.log("Dark Mode");
            makeLight();
        }
    });


});