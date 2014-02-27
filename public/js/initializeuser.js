$('#newUserButton').click(function(e) {
        console.log('clicked');
        var name = $('#newUserForm #name').val();
        var email = $('#newUserForm #email').val();
        var password = $('#newUserForm #password').val();
        var json = {
            'name': name,
            'email':  email,
            'password': password
        };
        $.post('/newuser/new', json, function() {
            window.location.href = '/'; // reload the page
        });
    });