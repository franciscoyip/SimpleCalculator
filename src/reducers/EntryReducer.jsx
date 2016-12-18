export default function(state = {expression: '', decimalAppended: false}, action) {

  const type = action.type;

  const validOperators = ['+', '-', 'x', '/'];

  let tempExpresssion = state.expression;
  const lastChar = tempExpresssion ? tempExpresssion[tempExpresssion.length - 1] : '';

  switch (type) {
    case 'ADD_ENTRY':
      const entry = action.payload;

      if(entry === 'delete'){

        return {
          expression: '',
          decimalAppended: false
        };

      }else if(entry === '='){

        //Clean the last character if necessary
        if(lastChar === '.' || validOperators.includes(lastChar)){
          tempExpresssion = tempExpresssion.replace(/.$/, '');
        }
        if(tempExpresssion){
          //replace x with *
          tempExpresssion = tempExpresssion.toString().replace(/x/g, '*');
          const result = eval(tempExpresssion);
          return {
            expression: result,
            decimalAppended: result.toString().indexOf('.') ? true : false
          };
        }

        return state;

      }else if(entry === '.'){

        //start handling some special case
        //not allow multiple decimal point

        if(lastChar === entry || state.decimalAppended){
          return state;
        }else{
          //good
          tempExpresssion = tempExpresssion + entry;

          //decimalAppended will be reset to false after the next operator is entered
          return {
            expression: tempExpresssion,
            decimalAppended: true
          };
        }
      }else if(validOperators.includes(entry)){

        //check if the expression is empty and the char is not an operator
        const isLastCharOperator = validOperators.includes(lastChar);
        if(state.expression && !isLastCharOperator){
          //good
          tempExpresssion = tempExpresssion + entry;
        }

        //allow change last operator if that's the last char
        if(state.expression && isLastCharOperator){
          tempExpresssion = tempExpresssion.replace(/.$/, entry);
        }

        return {
          decimalAppended: false,
          expression: tempExpresssion
        };

      }

      return {
        ...state,
        expression: state.expression += action.payload
      };
      //break;
    default:
      return state;
      //break;
  }

};
