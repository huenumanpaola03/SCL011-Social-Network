import React, { Component } from 'react';
import firebase from 'firebase';
import UploadImages from './components/uploadImages.js';
import './App.css';



class App extends Component {
constructor() {
  super();
  this.state = {
    user: null,
    //array donde se guardaran todas las img
    pictures: []
  };

  this.handleAuth = this.handleAuth.bind(this);
  this.handleLogout = this.handleLogout.bind(this);
  this.renderLoginButton = this.renderLoginButton.bind(this);
  this.handleUpload = this.handleUpload.bind(this);
}

componentWillMount () {
  firebase.auth().onAuthStateChanged( user => {
  this.setState({ user });
  });

  firebase.database().ref('fotos').on('child_added', snapshot => {
    this.setState({
      pictures: this.state.pictures.concat(snapshot.val())
      
    })
    console.log(this.state.pictures);
  })
}




  handleAuth () {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch (error => console.log(`Error ${error.code}: ${error.message}`))
  }

  handleLogout() {
    firebase.auth().signOut()
    .then(result => console.log(`${result.user.email} ha salido`))
    .catch (error => console.log(`Error ${error.code}: ${error.message}`))
  }
  
  handleUpload (event) {
    const file = event.target.files[0];
    const storageRef = firebase.storage().ref(`fotos/${file.name}`);
    const task = storageRef.put(file);


    task.on('state_changed', snapshot => {
        let percentege = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        this.setState({
            uploadValue: percentege
        })
    },
     error => {
        console.log(error.message);
     }); 
      task.snapshot.ref.getDownloadURL()
        .then((downloadURL) => {
          const record = {
          photoURL: this.state.user.photoURL,
          displayName: this.state.user.displayName,
          image: downloadURL
        
          
        };
       
    
          const dbRef = firebase.database().ref('fotos');
          const newPicture = dbRef.push();
          newPicture.set(record);
        
    })
    }

    
renderLoginButton () {
if (this.state.user) {
  return (
    <div>
      <img src = {this.state.user.photoURL} alt = {this.state.user.displayName} />
      <p> Hola {this.state.user.displayName}</p>
   
      <button onClick={this.handleLogout}>Salir</button>

      <UploadImages onUpload={ this.handleUpload }/>

      { this.state.pictures.map((picture, i) => (
        <div key={i}>
          <img src={picture.image}/>
          <br/>
          <img src={picture.photoURL} alt={picture.displayName} />
          <br/>
          <span>{picture.displayName}</span>
        </div>
      ))
      }
    </div>
  );
} else {
  return (
  <button onClick= {this.handleAuth} >Login con google</button>
  );
}
}



  render() {
    return(
      <div className="App">
      <div className="App-header">
      <h2>hola</h2>
      </div>
      <div className="App-intro">
{ this.renderLoginButton() }
      </div>
      </div>
    );
  }
}


export default App;   