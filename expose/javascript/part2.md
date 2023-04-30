## 1. What will happen at line 12 and why? If the code causes an error, explain why.

Line 12 printed: 3. Since it printed our the lenght of prices(discounted).

## 2. What will happen at line 13 and why? If the code causes an error, explain why.

Line 13 printed: 150. Since it printed out the last item's discounted price. 

## 3. What will happen at line 14 and why? If the code causes an error, explain why.

Line 14 printed: 150. After for loop, it went to the last item and printed our the 

price of the last item. 

## 4. What will this function return? Give a brief explanation why. If the code causes an error, explain why

The function would return the list of discounted price. There was no error. 

## 5. What will happen at line 12 and why?  If the code causes an error, explain why.

It would return an error since i was only defined in the for loop block. 

## 6. What will happen at line 13 and why? If the code causes an error, explain why

It would return an error since discountedPrice was only defined in the for loop. No discountedPrice was

defined in the whole function. 

## 7.  What will happen at line 14 and why? If the code causes an error, explain why.

Line 14 printed: 150. Since finalPrice was declared at the beginning of the function, it has function scope. 

## 8.  What will this function return? Give a brief explanation. If the code causes an error, explain why.

The function would return the list of discounted price. There was no error.

## 9. What will happen at line 11 and why? If the code causes an error, explain why.

It would return error since finalPrice was a const and could not be modified. 

## 10. What will happen at line 12 and why? If the code causes an error, explain why. 

It would return error since finalPrice was a const and could not be modified.

## 11. What will this function return? Give a brief explanation. If the code causes an error, explain why.

The function could not work since finalPrice and discounted list caould not be modified. 

## 12. Given the above Object, write the notation for: 

### A. Accessing the value of the name property in the student object

`student.name`

### B. Accessing the value of the Grad Year property in the student object

`student['Grad year']`

### C. Calling the function for the greeting property in the student object

`student.greeting()`

### D. Accessing the name property of the object in the Favorite Teacher property in student 

`student['Favorite Teacher'].name`

### E. Access index zero in the array of the courseLoad property of the student object
 
`student.courseLoad[0]`

## 13. Arithmetic

### A. '3' + 2          -> 32
### B. '3' - 2          -> 1
### C. '3' + null       -> 3null
### D. 3 + null         -> 3
### E. true + 3         -> 4
### F. false + null     -> 0
### G. '3' + undefined  -> 3undefined
### H. '3' - undefined  -> Nan

## 14. Comparison

### A. '2' > 1              -> true
### B. '2' < '12'           -> false
### C. 2 == '2'             -> true
### D. 2 === '2'            -> false
### E. true == 2            -> false
### F. true === Boolean(2)  -> true

## 15. Explain the difference between the == and === operators

The double equal sign compare only the value. For example, '5' == 5 is true and '6' == 5 is not true. 

The triple equal sign compare the value and the data type. For example, '5' === 5 is false. Though they have

same value, but they have different data types. 

## 16. Write a for loop to iterate through the objects

Please refer to the file `part2-question16.js` .

## 17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. 

The result would be [2, 4, 6]. In the for loop, by calling the function doSomething, it would double the element in array and push the element in the newArr. Therefore, the result of newArr is [2, 4, 6]

## 18. Modify this code such that the program prints out the time every second.

Please refer to the file `part2-question18.js` .

## 19. Output of the #18 code:

<img width="101" alt="Screen Shot 2023-04-30 at 1 46 07 PM" src="https://user-images.githubusercontent.com/97696773/235375480-bdc1de66-6951-4ba4-b85f-e7cee52009b0.png">

