
var param = {
    from: { color: '#ed0005 '},
    to: { color: '#4aed00 '},
    step: function(state, bar, attachment) {
        bar.path.setAttribute('stroke', state.color);
    },
    strokeWidth: 12
};

var circle1 = new ProgressBar.Circle('#container1', param);
var circle2 = new ProgressBar.Circle('#container2', param);
var circle3 = new ProgressBar.Circle('#container3', param);
var circle4 = new ProgressBar.Circle('#container4', param);
var circle5 = new ProgressBar.Circle('#container5', param);


function refresh (){
	circle1.animate(Math.random()); 
	circle2.animate(Math.random());  
	circle3.animate(Math.random());  
	circle4.animate(Math.random()); 
	circle5.animate(Math.random());
};

function zero(){
	circle1.animate(0, {duration: 10}); 
	circle2.animate(0, {duration: 10});  
	circle3.animate(0, {duration: 10});  
	circle4.animate(0, {duration: 10}); 
	circle5.animate(0, {duration: 10});
};

refresh();
 
var counter = 1;
var interface = document.querySelector('.mob-interface');

document.addEventListener('click', function(){
	zero();	
	setTimeout(refresh, 15);
    counter++;
    if (counter === 4) counter = 1;
    var string = "url('img/interface-" + counter + ".jpg";
    interface.style.backgroundImage = string;


}, false);