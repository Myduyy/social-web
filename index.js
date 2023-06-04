// sidebar
const menuItems = document.querySelectorAll('.menu-item');

//message
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search')

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}



menuItems.forEach(item =>{
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = 'none';
        }
        else{
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})


//message
messageNotification.addEventListener('click', () =>{
    messages.style.boxShadow = '0 2px 10px var(--color-primary)';
    document.querySelector('.message-count').style.display = 'none'
    setTimeout(() =>{
        messages.style.boxShadow = 'none';
    }, 2000)
})

// search message
const searchMessage = () =>{
    const val = messageSearch.value.toLowerCase();
    message.forEach(user =>{
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        }
        else{
            user.style.display = 'none';
        }
    })
}


messageSearch.addEventListener('keyup', searchMessage);