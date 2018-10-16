class InsertionSort{

	constructor(input){
		this.input = input;
	}

	sortArrayAccending(){

		let i,j,key;
		let input = this.input;
		for(i = 1; i < input.length; i++)
		{
			key = input[i];
			j = i - 1;
			while( j >= 0 && input[j] > key ){
				input[j+1] = input[j];
				j = j - 1;
			}

			input[j+1] = key;
		}

		return input;
	}

	sortArrayDeccending(){

		let i,j,key;
		let input = this.input;
		for(i = 1; i < input.length; i++)
		{
			key = input[i];
			j = i - 1;
			while( j >= 0 && input[j] < key ){
				input[j+1] = input[j];
				j = j - 1;
			}

			input[j+1] = key;
		}

		return input;
	}


}



var a = new InsertionSort([3, 4, 2, 12, 56, 23, 18, 9, 34]);
console.log(a.sortArrayAccending());
console.log(a.sortArrayDeccending());

