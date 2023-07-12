//array
var myArr1 = ["Ali", 24]
console.log(myArr1[1])

myArr1[1] = 25
console.log(myArr1[1])

//nested array
var myArr2 = [["Ali",24],["Bilge",26]]

//multi dimensional array
var multiArr = [[1,2,3],[4,5,6],[7,8,9],[[10,11,12],13,14]]
console.log(multiArr[2][0])

//push function
var arr1 = [["John", 23],["cat", 2]]
arr1.push(["dog",3])
console.log(arr1)

//pop function
var arr2 = [["John", 23],["cat", 2]]
console.log(arr2.pop())

//shift function
var arr3 = [["John", 23],["cat", 2]]
console.log(arr3.shift())

//unshift function
var arr4 = [["John", 23],["cat", 2]]
arr4.unshift(["Paul", 35])
console.log(arr4)

