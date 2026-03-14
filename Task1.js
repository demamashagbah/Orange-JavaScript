
         let result = "";

                for (let i = 1; i <= 10; i++) {
                    result += i; 
                    
                    if (i < 10) { 
                        result += "-"; 
                    }
                }

                console.log(result);
                /////////////

                // task 2 

                let sum = 0 ;
                for (let i =0 ; i<= 30 ; i++){

                        sum += i;
                }
                console.log("Sum = "+ sum);
                
                //task 3 

                for(let i = 1 ; i <= 50 ; i++){
                    if (i % 2 == 0){
                        console.log(i);
                    }
                }

                //task 4 

                for (i =10 ; i >= 0 ; i--){
                    console.log(i)
                }

                // task 5 

                let letters = ["A","B","C","D","E"];
                for (let i =0 ; i <= 4 ; i++)
                {
                    let row = "";
                    for (let j = 0 ; j <= 4 ; j++){
                        if(i + j >= 5)
                        {
                            row += letters[i]+" ";
                        }
                        else { row += "A "}
                    }
                    console.log(row);
                }

            // Task 6 

            for (let i =1 ; i <= 5 ; i++)
            {
                let row = ""
                for (let j = 1 ; j <= 5 ; j++){
                    if(i + j >= 6)
                    {
                        row += i+" ";
                    }
                    else { row += "1 "}
                }
                console.log(row);
            }

            // Task 7 
            for (let i =1 ; i <= 5 ; i++)
            {
                let row = "";
                for (let j = 1 ; j <= 5 ; j++){
                    if(i == j)
                    {
                        row += i +" ";
                    }
                    else { row += "0 "}
                }
                console.log(row);
            }

            // Task 8
            let num = 5;
            let fact = 1;

            for (let i = 1 ; i <= num ; i++){
                fact *= i; 
            }
            console.log("The Factorial of " + num +" = "+fact )
            
            
            //Task 10 
            let num1 =0
            let num2 =1;
            let sum1;
            for (let i = 1 ; i <= 10 ; i++)
            {
                
                console.log(num1);
                
                sum = num1 + num2 ;
                num1= num2;
                num2=sum1;
                
            }

            // Task 10

            let text ="Orange coding school"
            let count = 0;
            for (let i = 0 ; i< text.length ;i++){
                if(text[i].toLowerCase() ==="c"){
                    count++;
                }
            }
            console.log(count);

            // Task 11 

            let a ;              
            for (let i = 1 ; i <= 5 ; i++)
            {
                console.log("Table of "+ i)
                for(let j = 1 ; j <=5 ; j++)
                {
                    a = i * j ;
                    console.log(i + "*" + j +" = "+ a);
                }
                
            }

            // Task 12 

            let number=1;
            for (let i = 1 ; i <= 5 ; i++)
            {
                let row ="";
                for (let j = 1 ; j <= i ; j++){
                row += number+" ";
                number ++;
                
                }
                console.log(row)
            }

            //Task 13 

            for (let i = 1 ; i <= 100 ; i++)
            {
                if (i % 7 == 0)
                {
                    console.log(i)
                }
            }

            // Task 14

            let sum_odd = 0;              
            for (let i = 1 ; i <= 100 ; i++){
                if (i % 2 != 0){
                sum_odd += i;
                }
            }
            console.log(sum_odd)

            //Task 15

            let seq ;
            for ( let i = 1 ; i <= 10 ; i++ ){
                seq = i*i;
                console.log(seq)
            }

            //Task 16 

            for (let i = 1 ; i <= 30 ; i++)
            {
                if ( i % 3 == 0 && i % 5 == 0 ){
                    console.log("FizzBuzz")
                }
                else if(i % 3 == 0 ){
                    console.log("Fizz")
                }
                else if ( i % 5 == 0){
                    console.log("Buzz")
                }
            
                else{console.log(i)}
            }     


            // Task 17 

            for (let i = 1 ; i <= 5 ; i++)
            {
                let star=""
                for (let j = 1 ; j <= i ; j++)
                {
                    star += "*"
                } 
                console.log(star)
            } 
            
            //Task 18

            for (let i = 5 ; i >= 1 ; i--)
            {
                let star=""
                for (let j = 1 ; j <= i ; j++)
                {
                    star += "*"
                } 
                console.log(star)
            } 

            // Task 19

            for (let i = 1 ; i <= 5 ; i++)
            {
                let row=""
                for (let j = 1 ; j <= i ; j++)
                {
                    row += j+""
                } 
                console.log(row)
            } 

            // Task 20 

            for (let i = 1 ; i <= 5 ; i++)
            {
                let row=""
                for (let j = 1 ; j <= i ; j++)
                {
                    row += i+""
                } 
                console.log(row)
            } 
            //Task 21

            for (i = 1 ; i <= 200 ; i++ ){
                let num1;
                
                if ( i <= 9){
                    if(i == 5){
                        console.log(i)
                    }
                }
                else if (i <= 99){
                    let num1= Math.floor(i /10);
                    let num2= i % 10 ;
                    if(num1 + num2 == 5){
                        console.log(i)
                    }
                }
                else if (i <= 200)
                {
                    let num1=Math.floor(i / 100);
                    let num2=Math.floor(i /10)%10 ;
                    let num3 =i % 10;
                    if(num1+num2+num3 == 5){
                        console.log(i)
                    }
                    
                }
            }

            //Task 22 

            for (i = 1 ; i <= 100 ; i++ ){
            let fdigit= Math.floor(i / 10);
            let ldigit= i % 10 ;
                if (fdigit > ldigit){
                console.log(i)
                }
            }

            //Task 23
            for (i = 1 ; i <= 100 ; i++ ){
            let fdigit= Math.floor(i / 10);
            let ldigit= i % 10 ;
                if (fdigit == ldigit){
                console.log(i)
                }
            }
             
            //Task 24
            for (i = 1 ; i <= 300 ; i++ ){
   
            if (i <= 300)
            {
                let fdigit= Math.floor(i / 100);
                let ldigit= i % 10 ;
                let cdigit=Math.floor(i/10)%10;
                let product;
                
                if(i <10){
                    product = i;
                }
                else if (i < 100){
                    if (cdigit === 0 || ldigit === 0) continue;
                    product = cdigit * ldigit;
                }
                else if (i < 300 ){
                    if(fdigit === 0 || ldigit === 0 || cdigit === 0) continue;
                    product = fdigit * cdigit * ldigit;
                }
                
                if(i % product === 0){
                    console.log(i)
                }
            }
        }

        //Task 25
            for (let i = 1 ; i <= 100 ; i++)
        {
            let product ;
            let sum;
            let f_digit= Math.floor(i / 10);
            let l_digit= i % 10;
        
            
            if ( i <= 100)
            {
                product = f_digit * l_digit ;
                sum = f_digit + l_digit ;
            }
            if (product == sum){
                console.log(i+" ------ " + f_digit +" * " + l_digit + "="+product +"----"+ f_digit + "+" + l_digit + "="+sum);
                
            }
            
         }

         // Task 26 
         for (let i = 1 ; i <= 500 ; i++){
            let num =i+"";
            let reverse ="";
            for(let j =  num.length -1  ; j >= 0 ; j--){
                reverse += num[j];
            }
            let reverseNum = Number(reverse);
            if( reverseNum % 3 == 0){
                console.log(i)
            }
            
        }

        //Task 27 
        for (i = 1 ; i <= 200 ; i++){
            let f_digit = Math.floor(i /10);;
            let l_digit =i % 10;

                if(f_digit - l_digit == 2 ){
                    console.log(i);
                }

        }

        //Task 28 


        for (i = 1 ; i <= 500 ; i++){
            let f_digit;
            let c_digit = Math.floor(i /10)%10;
            let l_digit =i % 10;

            if(i >=10 && i < 100){
                f_digit = Math.floor(i /10);
                if( l_digit - f_digit ===1 ){
                    console.log(i);
                }
            }
            else if (i <= 500){
                f_digit = Math.floor(i /100);
                if( (f_digit-c_digit ===1) && (c_digit - f_digit == 1) ){
                    console.log(i)
                }
            }

        }

        //Task 29 
            for (i = 1 ; i <= 500 ; i++){
                        let f_digit;
                        let c_digit = Math.floor(i /10)%10;
                        let l_digit =i % 10;

                        if(i < 100){
                            f_digit = Math.floor(i /10);
                            if( f_digit - l_digit ===1 ){
                                console.log(i);
                            }
                        }
                        else if (i <= 500){
                            f_digit = Math.floor(i /100);
                            if( (f_digit-c_digit ===1) && (c_digit - l_digit == 1) ){
                                console.log(i)
                            }
                        }
                    }

        // Task 30 

       for (i = 1 ; i <= 300 ; i++){
            let f_digit= Math.floor(i /100);;
            let c_digit = Math.floor(i /10)%10;
            let l_digit =i % 10;
            let sum = f_digit + c_digit;

            if(i >=100 && i <= 300){
                
                if( sum === l_digit){
                    console.log(i);
                }
            }
        }   
        
        //Task 31 

        for (i = 1 ; i <= 200 ; i++){
            let f_digit;
            let c_digit = Math.floor(i /10)%10;
            let l_digit =i % 10;
            let sum ;
            if(i >=10 && i < 100){
                
                f_digit=Math.floor(i /10);
                sum = f_digit + l_digit;
            }
            
            else if (i <= 200){
             let f_digit = Math.floor(i /100);
             sum = f_digit + c_digit + l_digit ;
            }
            
                if( sum > 10 ){
                    console.log(i);
                }
            
        }

        //Task 32

        for (i = 1 ; i <= 500 ; i++){
            let f_digit;
            let c_digit = Math.floor(i /10)%10;
            let l_digit =i % 10;
            let sum ;
            let isPrime = true;
            
            if( i == 1  ){ isPrime = false ;}
            if(i >=10 && i < 100){
                
                f_digit=Math.floor(i /10);
                sum = f_digit + l_digit;
            }
            
            else if (i <= 500){
                
             let f_digit = Math.floor(i /100);
             sum = f_digit + c_digit + l_digit ;
            }
            
            for (let divider = 2; divider <= Math.sqrt(sum); divider++) {
                    if (sum % divider === 0) {
                       isPrime = false;
                       break;
                    }
               }  
            
            if(isPrime){
                console.log(i)
            }   
        }

        //task 33

        for (let i = 1; i <= 300; i++) {
        let l_digit = i % 10;
        let c_digit = Math.floor(i / 10) % 10;
        let f_digit = Math.floor(i / 100);

        if (i >= 10 && i < 100) {
        
            if (c_digit === l_digit) {
                console.log(i);
            }
        } 
        else if (i >= 100 && i <= 300) {
            
            let pair1 = (f_digit === c_digit);
            let pair2 = (c_digit === l_digit);

        
            if ((pair1 || pair2 ) && !(pair1 && pair2 )) {
                console.log(i);
            }
        }
    }

         // Task 34

         for (let i = 1 ; i <= 200 ; i++){
        let num=i+"";
        let reverse = ""
        if(i >= 10 & i <= 200){
            for (let j = num.length-1 ; j >= 0 ; j--){
            reverse += num[j];
        }
        let reverse_num = Number(reverse);
        if( reverse_num  > i){
            console.log("number : "+ i +" reverse : "+ reverse_num )
        }
        }
        
    }

         // task 35 

         for (let i = 1; i <= 300; i++) {
            let l_digit = i % 10;
            let c_digit = Math.floor(i / 10) % 10;
            let f_digit = Math.floor(i / 100);
            let product ;
            
            if (i >= 10 && i < 100) {
            f_digit = Math.floor( i / 10);
            if(f_digit === 0 || l_digit === 0 ) continue;
            product = l_digit * f_digit ;
            
            } 
            else if (i >= 100 && i <= 300) {
                if(f_digit === 0 || c_digit === 0 || f_digit === 0) continue;
            product = l_digit * c_digit * f_digit;
            
            }
            
            if (product % 5 === 0){
                console.log(i)
            }
        }

        // Task 36 

        for (let i = 1; i <= 300; i++) {
        let l_digit = i % 10;
        let c_digit = Math.floor(i / 10) % 10;
        let f_digit = Math.floor(i / 100);
        let sum ;
        let cal;
        
        if (i >= 10 && i < 100) {
        sum = l_digit + c_digit ;
        cal = 2 * 5 ;
        } 
        else if ( i <= 300) {
            sum = l_digit + c_digit + f_digit;
            cal = 3 * 5; 
        }
        
        if (sum === cal){
            console.log(i)
        }
    }

    //Task 37 

    