let products = ['Crocheted Dog Toy', 'Slow Feeder Bowl', 'Pawz Grey Treat Jar', 'Blue Sweet Dreams Thermal Pajamas', 'Checker Chewy Vuiton Bowl', 'Red Heart Sweater Dress', 'Velvet Hair Bow - Sun Kissed', 'Into the Wild Leash']
let prices = ['$10.00', '$14.00', '$20.00', '$30.00', '$32.00', '$27.00', '$12.00', '$27.00']

let list = ''
let wishList = ''

for (i = 0; i < products.length; i++)
    list += `${products[i]}, ${prices[i]}\n`

showItems.onclick=function(){
  productList.value = list
}

btn1.onclick=function(){
  wishList += `${products[0]}\n`
  userList.value = wishList
}
btn2.onclick=function(){
  wishList += `${products[1]}\n`
  userList.value = wishList
}
btn3.onclick=function(){
  wishList += `${products[2]}\n`
  userList.value = wishList
}
btn4.onclick=function(){
  wishList += `${products[3]}\n`
  userList.value = wishList
}
btn5.onclick=function(){
  wishList += `${products[4]}\n`
  userList.value = wishList
}
btn6.onclick=function(){
  wishList += `${products[5]}\n`
  userList.value = wishList
}
btn7.onclick=function(){
  wishList += `${products[6]}\n`
  userList.value = wishList
}
btn8.onclick=function(){
  wishList += `${products[7]}\n`
  userList.value = wishList
}