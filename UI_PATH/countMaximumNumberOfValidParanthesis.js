
function countValidParanthesis(string) {

	let stack = [];
	let count = 0 , maxCount = 0, top = -1 ;
	const leftParanthesis = "(", rightParanthesis = ")";

	for(let i =0; i< string.length ; i++ ) {

		if(string[i] !== leftParanthesis && string[i] !== rightParanthesis ) {
			console.log("Expression is invalid !", string[i]);
			break ;
		}

		if(string[i] === leftParanthesis )
			stack[++top] = string[i];		// stack.push(string[i]);
		else
			if(top >= 0) {
				let element = stack[top--];		// let element = stack.pop();
				if( element === leftParanthesis )
					count ++ ;

				if(i === string.length -1 ) { 	// last element in string
					maxCount = maxCount > count ? maxCount : count ;
				}
			} else {
				maxCount = maxCount > count ? maxCount : count;
				count  = 0 ;
			}
	}
	return maxCount ;
}

const string = "())()())(())()(())" ;

let max_count = countValidParanthesis(string);
console.log("maximum number of valid paranthesis is = ", max_count);   


