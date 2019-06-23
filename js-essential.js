function wait3Seconds(callback) {
	setTimeout(callback, 3 * 1000);
}

wait3Seconds(() => {
	console.log('first wait');
	wait3Seconds(() => {
        console.log('second wait');
        wait3Seconds(() => {
            console.log('third wait');
        });
	});
});










// ---------------
function wait5Seconds() {
    return new Promise(resolve => setTimeout(resolve, 5 * 1000 ));
}

wait5Seconds()
    .then(() => console.log('promise first wait') )
    .then(wait5Seconds)
    .then(() => console.log('promise second wait') )
    .then(wait5Seconds)
    .then(() => console.log('promise third wait') );

