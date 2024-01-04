//getting delete button
const deleteBtn = document.querySelector('#delete-btn');

//getting all checked checkboxes, getting their id and sending them to server to delete
function deleteTasks(e){
    let checkedBoxes = document.querySelectorAll('.delete-check-box:checked');
    let checkedBoxesId = [];
    checkedBoxes.forEach((box) => {
        checkedBoxesId.push(box.value); //getting database id of checked checkboxes
    });
    
    if (checkedBoxesId.length > 0) {
        let confirmDelete = confirm('Are you sure you want to delete the selected items?');
        if (confirmDelete) {
            let url = '/delete?id='+checkedBoxesId; //sending id to server using query string
            
            let params = {
                method: 'POST',
            };

            fetch(url, params) //sending request to server
            .then((res) => location.reload()) //reloading page
            .catch((err) => {
                console.log(err);
            });
        }
    }

};

//handling click event
document.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-check-box')) {
        e.target.parentNode.parentNode.classList.toggle('line-through'); //adding line-through class to parent of checkbox when checkbox is checked
    }
    else if(e.target == deleteBtn){   //if delete button is clicked
        deleteTasks(e);
    }
});


//------------------------------------TO CHANGE COLOR OF CATEGORIES------------------------------------//
document.querySelectorAll('.category p').forEach((category) => {
    if(category.innerHTML == 'Personal'){
        category.parentElement.style.backgroundColor = 'rgb(55, 163, 187)';
    }
    else if(category.innerHTML == 'Cleaning'){
        category.parentElement.style.backgroundColor = '#ff8402';
    }
    else if(category.innerHTML == 'School'){
        category.parentElement.style.backgroundColor = '#9700ff';
    }
    else if(category.innerHTML == 'Work'){
        category.parentElement.style.backgroundColor = '#246424';
    }
    else{
        category.parentElement.style.backgroundColor = '#ff2b50';
    }

});



//------------------------------------TO CHANGE THEME------------------------------------//

const themes = document.querySelectorAll('.theme-item');
const html = document.querySelector('html');

window.addEventListener('DOMContentLoaded', () => {
    const theme = localStorage.getItem('theme');
    if (theme) {
        html.setAttribute('data-theme', theme); //setting theme from local storage
    } 

    document.querySelectorAll('.delete-check-box').forEach((box) => {
        if(box.checked){
            box.parentNode.parentNode.classList.add('line-through'); 
        }
    });
});


themes.forEach(theme => {
    theme.addEventListener('click', () => {
        const theme_name = theme.getAttribute('theme');
        console.log(theme_name);
        html.setAttribute('data-theme', theme_name);
        saveTheme(theme_name);
    });
});

//save theme to local storage
function saveTheme(theme_name) {
    localStorage.setItem('theme', theme_name);
}

//get theme from local storage
function getTheme() {
    return localStorage.getItem('theme');
}