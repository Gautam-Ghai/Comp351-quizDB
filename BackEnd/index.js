const cors = require('cors');
const express = require('express');
const app = express();

const { getAllQuestions, postQuestion, deleteQuestion, getOptions, editQuestion, editOptions} = require("./question")

app.use(express.json());
app.use(cors());
app.get("/questions", getAllQuestions);
app.post("/question", postQuestion);
app.get("/:id/options", getOptions)
app.put("/:id", editQuestion);
app.put("/options/:id", editOptions);
app.delete("/:id", deleteQuestion);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));