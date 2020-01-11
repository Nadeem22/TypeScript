let review: number[] = [1, 2, 3, 4.5, 6];
let total: number = 0;
for (let i = 0; i < review.length; i++) {
  console.log(review[i]);
  total += review[i];
}
console.log("Total =" + total);
let average: number = total / review.length;
console.log("Average of Reviewe=" + average);
