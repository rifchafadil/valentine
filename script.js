const loader = document.querySelector('.loader');

function loaderActive() {
	loader.classList.add('loader-active');
}

function loaderActiveTime() {
	setInterval(loaderActive, 4000);
}

window.onload = loaderActiveTime();

onload = () =>{
    document.body.classList.remove("container");
};