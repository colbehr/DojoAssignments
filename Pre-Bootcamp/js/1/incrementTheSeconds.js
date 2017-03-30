function incrementTheSeconds(arr) {
    for (i = 0; i <= arr.length - 1; i++) {
        if (arr[i] % 2 != 0) {
            arr[i] += 1;
        }
    }
    for (i = 0; i <= arr.length - 1; i++) {
        console.log(arr[i]);
    }
    return arr;
}
