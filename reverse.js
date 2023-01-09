const reverse = (string) =>  {
    if (string.length === 0) {
        return '';
    }
    return reverse(string.slice(1)) + string[0];
}