import Task from "../models/task.model.js";

const addTask = async (req, res) => {
  const { text } = req.body;

  console.log(text);

  const newTask = new Task({
    text: text,
  });

  try {
    await newTask.save();
    res.status(201).json({ message: 'Text Added successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getTasks = async (req,res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks)
    } catch (error) {
        res.status(500).json({error: "Internal Server Error"})
    }
};

const deleteTask = async (req,res) =>{
    const {id} = req.body;

}

export default addTask;
