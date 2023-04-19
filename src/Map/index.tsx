//usage --> used when we used to ma values to key. Data is stored in key-valurs pair.

// First way (using set method)
export const MapFn = () => {
  const testing = new Map();
  testing.set('name', 'Rishabh Jain');
  testing.set('age', '25');
  console.log(testing);

  console.log(testing.has('age'));
  console.log(testing.size);
  console.log(testing.delete('age'));
  console.log(testing);

  // Second way......
  //   @ts-ignore
  const examsQuestions = new Map([
    ['question', 'What is your favourite language'],
    [1, 'C++'],
    [2, 'Python'],
    [3, ' JS'],
    ['Correct', 3],
    [true, 'Your answer is correct'],
    [false, 'Plz try again..'],
  ]);
  console.log(examsQuestions);
  console.log(examsQuestions.has('Correct'));
  const correctAnswer = examsQuestions.get('Correct');
  correctAnswer && console.log(examsQuestions.get(correctAnswer));
};
