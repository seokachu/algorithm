function solution(n){
    var sum = 0;

    do {
        sum += n%10;
        n = Math.floor(n/10);
    } while(n > 0);

    return sum;
}
