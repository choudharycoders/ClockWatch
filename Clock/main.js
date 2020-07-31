setInterval(setClock,1000);
const hour=document.querySelector('[data-hour]')
const minute=document.querySelector('[data-minute]')
const secound=document.querySelector('[data-secound]')
function setClock(){
	const nowDate=new Date;
	const sR=nowDate.getSeconds()/60;
	const mR=(sR+nowDate.getMinutes())/60;
	const hR=(mR+nowDate.getHours())/12;
	setRotation(hour,hR);
	setRotation(minute,mR);
	setRotation(secound,sR);
}
function setRotation(element,rR){
	element.style.setProperty('--r',(rR*360));
}
setClock();