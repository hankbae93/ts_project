const getRandomTime = () => {
	return Math.floor(Math.random() * 700 + 300);
};

const getRandomDelay = () => {
	const time = getRandomTime();
	setTimeout(() => console.log(`${time} delay`), time);
};

const getRandom = () => {
	return Math.random() <= 0.8;
};

export { getRandomDelay, getRandom };
