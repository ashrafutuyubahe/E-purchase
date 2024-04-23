const express = require("express");
const app = express();
const PORT = 7600;
const dbconn = require("./mongoconnection");
const blogSchema = require("./dataschema");
const { ObjectId } = require("mongoose").Types;
const cors = require("cors");
app.use(cors({
     credentials: true,
     origin: "http://localhost:3000",
   }));

app.get('/',(req,res)=>{
     return res.send('hello world');
})

app.get("/blogs", async (req, res) => {
  try {
    const fetchBlogs = await blogSchema.BlogModel.find({})
      .select("authorname blogtitle blogdescription date")
      .exec();

    const blogsWithId = fetchBlogs.map((blog) => ({
      _id: new ObjectId(blog._id),
      data: blog,
    }));

    return res.send(blogsWithId);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send({ error: "Failed to load data" });
  }
});

app.listen(PORT, () => {
  console.log(`the server is running on port of ${PORT}...`);
});
