var review = [1, 2, 3, 4.5, 6];
var total = 0;
for (var i = 0; i < review.length; i++) {
    console.log(review[i]);
    total += review[i];
}
console.log("Total =" + total);
var average = total / review.length;
console.log("Average of Reviewe=" + average);
