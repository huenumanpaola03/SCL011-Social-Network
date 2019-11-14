export const initialFirebase = () => {

    const firebaseConfig = {
        apiKey: "AIzaSyCoEh1ZQVu4OqArDCNtTQBRP54goBRf6yg",
        authDomain: "basededatos-redsocial.firebaseapp.com",
        databaseURL: "https://basededatos-redsocial.firebaseio.com",
        projectId: "basededatos-redsocial",
        storageBucket: "basededatos-redsocial.appspot.com",
        messagingSenderId: "292479744480",
        appId: "1:292479744480:web:3e5b96fce63d7b607a1385"

    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

}