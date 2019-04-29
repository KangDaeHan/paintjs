const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.0;

let painting = false;

function stopPainting(){
	painting = false;
}

function startPainting(){
	painting = true;
}

function onMouseMove(event){
	//마우스 이벤트 확인
	//console.log(event); 
	
	const x = event.offsetX;
	const y = event.offsetY;
	// console.log(x,y);

	if(!painting){
		ctx.beginPath();
		ctx.moveTo(x,y);
	} else {
		ctx.lineTo(x,y);
		ctx.stroke();
	}
}

function changeColor(event){
	// console.log(event.target.style);
	const color = event.target.style.backgroundColor;
	ctx.strokeStyle = color;
}

if(canvas) {
	canvas.addEventListener("mousemove", onMouseMove);
	canvas.addEventListener("mousedown", startPainting);
	canvas.addEventListener("mouseup", stopPainting);
	canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => 
	color.addEventListener("click", changeColor)
);