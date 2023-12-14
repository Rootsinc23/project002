const updateBtns = document.getElementsByClassName('update-cart');

Array.from(updateBtns).forEach(function (updateBtn) {
    updateBtn.addEventListener('click', function (e) {
        const productId = e.target.dataset.product;
        const action = e.target.dataset.action;
       

        console.log('productId:', productId, 'action:', action);
        console.log('USER:', user);

        if (user === 'AnonymousUser') {
            console.log('user not logged in');
        } else {
            updateUserOrder(productId, action);
        }
    });
});

function updateUserOrder(productId, action, csrftoken) {
   const url = '/update_item/';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({ 'productId': productId, 'action': action })
    })
    .then(response => response.json()) 
    .then(data => {
        console.log('data:', data);
        // Handle the response data here
    });
}
