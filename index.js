//Javascript is a non static type language
//Complex: Array. Prim:numbers  'strings'  boolean,   complex: objects
           let fooArray = [      1,  2,    'foo', 'bar', true, false, {foo: 1, bar: 2}];
           fooArray = ['foo', 'bar', 'goo'];
           
           console.log(fooArray);

           //For loop
           for ( let i=0; i<10; i++) {
                //Condition
                //=== is strickly the same type exactly 
                //== check for the same type regargless act as a conditional value 
                if(i === 5) {
                    console.log('i is 5!!!');
                }

               console.log(i);
           }

           if ( undefined) {console.log('hi');} else { console.log('bye');}