const data = [
    "{\"answerText\": \"The brain, spinal cord, and a complex network of nerves\", \"questionText\": \" What does the nervous system include?\", \"distractors\": [\"The brain spinal cord and the body\", \"The brain spinal cord and a complex network of signals\"]}",
    "{\"answerText\": \"The system\", \"questionText\": \" What sends messages back and forth between the brain and the body?\", \"distractors\": [\"The brain\", \"The spinal cord\", \"The nerves\"]}",
    "{\"answerText\": \"The brain\", \"questionText\": \" What controls all the body's functions?\", \"distractors\": [\"The spinal cord\", \"The nerves\"]}",
    "{\"answerText\": \"Through the back\", \"questionText\": \" Where does the spinal cord run?\", \"distractors\": [\"Through the brain\"]}"
];

// Parse each JSON string into an object
const parsedData = data.map(jsonString => JSON.parse(jsonString));

// Now, parsedData is an array of JavaScript objects
console.log(parsedData);
