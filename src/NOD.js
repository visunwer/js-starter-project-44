export default (numbers) => {
    for (var x = numbers[0], i = 1; i < numbers.length; i += 1) {
        var y = numbers[i];
        while (x && y) {
            x > y ? x %= y : y %= x;
        }
        x += y;
    }
    return String(x);
};
