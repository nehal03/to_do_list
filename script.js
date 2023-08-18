// console.log(document.getElementsByClassName('heading')[0].innerHTML)
// // const change_p=document.getElementById('output').innerHTML
// // console.log( change_p)
// const myButton = document.getElementById('Button1');
// const task_list=[]
// myButton.addEventListener('click', function() {
//   // Code to be executed when the button is clicked
//   console.log(document.getElementById('name').value)
 
 
//   var change_p=document.getElementById('name').value
// console.log( change_p)
// let outputList = document.getElementById('outputList');
// outputList.innerHTML = '';

// task_list.push(change_p)
//     // Loop through the array and create list items for each element
//     task_list.forEach(element => {
//         let listItem = document.createElement('li');
//         listItem.textContent = element;
//         outputList.appendChild(listItem);
//     });

// });

$(document).ready(function() {
  const task_list = [];

  $('#Button1').click(function() {
    let change_p = $('#name').val();
    console.log(change_p)
    task_list.push(change_p);

    $('#outputList').empty(); // Clear the list before appending new items

    $.each(task_list, function(index, element) {
      let listItem = $('<li>').text(element);
      console.log(index)
      $('#outputList').append(listItem);
    });
  });
});




