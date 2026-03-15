<script>

async function generateClip(){

const url = document.querySelector(".url-input").value;

const res = await fetch("YOUR_API_LINK/clip",{

method:"POST",
headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({
url:url
})

});

const data = await res.json();

console.log(data);

alert("Video received. Processing clips.");

}

</script># RikClipBackend
AI backend for Rikclip video clipping
