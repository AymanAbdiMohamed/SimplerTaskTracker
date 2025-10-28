let tasks = [
  { id: 1, title: "Learn React", description: "Study React fundamentals", completed: false },
  { id: 2, title: "Build Task Tracker", description: "Create a task tracking application", completed: true },
  { id: 3, title: "Deploy to Railway", description: "Deploy the json-server backend to Railway", completed: false }
];

export default async function handler(req, res) {
  const { method, query, body } = req;

  try {
    switch (method) {
      case 'GET':
        res.status(200).json(tasks);
        break;

      case 'POST':
        if (!body.title || !body.description) {
          return res.status(400).json({ error: 'Title and description are required' });
        }

        const newTask = {
          id: Math.max(...tasks.map(t => t.id), 0) + 1,
          title: body.title,
          description: body.description,
          completed: false
        };

        tasks.push(newTask);
        res.status(201).json(newTask);
        break;

      case 'PUT':
        const taskId = parseInt(query.id);
        const taskIndex = tasks.findIndex(t => t.id === taskId);

        if (taskIndex === -1) {
          return res.status(404).json({ error: 'Task not found' });
        }

        tasks[taskIndex] = { ...tasks[taskIndex], ...body };
        res.status(200).json(tasks[taskIndex]);
        break;

      case 'DELETE':
        const deleteId = parseInt(query.id);
        const deleteIndex = tasks.findIndex(t => t.id === deleteId);

        if (deleteIndex === -1) {
          return res.status(404).json({ error: 'Task not found' });
        }

        tasks.splice(deleteIndex, 1);
        res.status(200).json({ message: 'Task deleted successfully' });
        break;

      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
