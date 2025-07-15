Great! Let's start with creating a **basic Express server**.

---

### ✅ Step 1: Initialize a Node.js project

In your terminal:

```bash
mkdir my-express-app
cd my-express-app
npm init -y
```

This creates a `package.json` file.

---

### ✅ Step 2: Install Express

```bash
npm install express
```

---

### ✅ Step 3: Create a simple server

Create a file called `index.js` and add this code:

```js
// index.js
const express = require('express');
const app = express();

// A basic GET route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

### ✅ Step 4: Run the server

In the terminal:

```bash
node index.js
```

Now go to [http://localhost:3000](http://localhost:3000) in your browser — you should see:

```
Hello from Express!
```

---