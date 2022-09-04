const firstName = "Tim";
const rank = "Corporal";
const age = 99;

if (age < 18) {
  console.log("You are too young for the military!");
} else if (firstName === "Rugen" && rank === "Count") {
  console.log("My name is Inigo Montoya, you killed my father, prepare to die");
} else if (rank === "Captain") {
  console.log(`Aye Aye Captain ${firstName}`);
} else if (rank === "Private" && age > 40) {
  console.log(`What have you been doing with your life ${firstName}`);
} else {
  console.log(
    `Hello ${rank} ${firstName}, I cannot wait to celebrate your ${
      age + 1
    }th birthday next year!`
  );
}
