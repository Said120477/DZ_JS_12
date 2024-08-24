let check = false;
on.style.display = 'none';


button.addEventListener('click', () => {
	if (check == false) {
		check = true;

		off.style.display = 'none';
		on.style.display = 'block';

		red.style.backgroundColor = 'red';
	}

	else if (check == true) {
		check = false;

		off.style.display = 'block';
		on.style.display = 'none';

	    red.style.backgroundColor = 'white';
		yellow.style.backgroundColor = 'white';
		green.style.backgroundColor = 'white';

	}
});

red.addEventListener('click', () => {
	if (check == true) {
		red.style.backgroundColor = 'red';
		yellow.style.backgroundColor = 'white';
		green.style.backgroundColor = 'white';

	}
});

yellow.addEventListener('click', () => {
	if (check == true) {
		red.style.backgroundColor = 'white';
		yellow.style.backgroundColor = 'yellow';
		green.style.backgroundColor = 'white';
	}
});


green.addEventListener('click', () => {
	if (check == true) {
		red.style.backgroundColor = 'white';
		yellow.style.backgroundColor = 'white';
		green.style.backgroundColor = 'green';
	}
});