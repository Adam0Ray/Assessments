const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortune = ["A beautiful, smart, and loving person will be coming into your life.",
					 "A dubious friend may be an enemy in camouflage.",
					 "A faithful friend is a strong defense.",
           "A feather in the hand is better than a bird in the air.",
           "A fresh start will put you on your way."
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex];

  res.status(200).send(randomFortune);
  
});

app.get("/api/fruit", (req, res) => {
  const fruit = ["apple", 
  "banana", 
  "orange"
  ];

  // choose random fortune
  let randomIndex = Math.floor(Math.random() * fruit.length);
  let randomFruit = fruit[randomIndex];

  res.status(200).send(randomFruit);
  
});

let goals = ["test", "learn to code", "land a job"]

app.get('/api/getgoals', (req,res) =>{
  res.status(200).send(goals);
});
app.post('/api/postgoals', (req,res) =>{
  // console.log(req.body)
  let newGoal = req.body.newGoal
  goals.push(newGoal)
  res.status(200).send(newGoal)
});

app.put('/api/putgoals', (req,res) =>{
  // console.log(req.body) //logs { newGoal: 'test2', oldGoal: 'test' }
  // console.log(req.params) 

  let data = req.body
  goals1 = data.newGoal   //test2
  goals2 = data.oldGoal   //test
  // console.log(goals2)
  for (let i = 0; i < goals.length; i++) {
    if (goals[i] === goals2) {
      goals[i] = goals1
      res.status(200).send(goals)
    }
  };
});

app.delete('/api/deletegoals', (req,res) =>{
  let data = req.body
  delete1 = data.goals
  // console.log(delete1) //logs test
  for (let i = 0; i < goals.length; i++) {
    if (goals[i] === delete1) {
      let deleteThisGoal = goals[i]
      goals.splice(goals.indexOf(deleteThisGoal),1)
      res.status(200).send(goals)
    }
  };

});


app.listen(4000, () => console.log("Server running on 4000"));