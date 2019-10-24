// Add a new document in collection 

export const writePost = (publish) => {

    let db = firebase.firestore();

    db.collection("Post").add({
            user: "ejemplo",
            post: document.querySelector("#publish").value

        })
        .then(function(docRef) {
            console.log("Document successfully written!", docRef.id);

            // document.getElementById("inputPost").value = ""
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });
}