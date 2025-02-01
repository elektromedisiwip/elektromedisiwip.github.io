const login = ()=> {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential)=> {
        const user = userCredential.user;
        console.log('login berhasil');
        window.location.href ='dashboard.html';
    })
    .catch((error)=> {
        console.error('login gagal:', error.message);
        alert('login gagal!');
    });
};

const logout =()=> {
    firebase.auth().signOut()
    .then ( ()=> {
        console.log('logout Berhasil');
        window.location.href ='index.html';
    })
    .catch((error) => {
        console.error('logout gagal:', error.message);
        alert('logout gagal!');
    });
};

const cekLogin = (callback) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            callback(true);
        } else {
            callback(false);
        }
    });
};

const arahkanKeLogin = () => {
    cekLogin((isLoggedIn) => {
        if (!isLoggedIn) {
            window.location.href = 'index.html';
        }
    });
};

document.getElementById ('btn-login').addEventListener('click',login);
document.getElementById ('Sign_Out').addEventListener('click',logout);

document.addEventListener('DOMContentLoaded',
    function(){
        arahkanKeLogin();
    });

    document.addEventListener('DOMContentLoaded',
        function(){
            cekLogin((isLoggedIn) => {
                if (!isLoggedIn) {
                    window.location.href = 'index.html';
                }
            });
        });
