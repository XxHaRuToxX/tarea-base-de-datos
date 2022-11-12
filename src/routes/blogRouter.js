const express = require('express');
const {
    CCreateBlog,
    CDeleteBlog,
    CGetAllBlogs,
    CGetBlogById,
    CUpdateBlog
  } = require("../controllers/blogs");
   
  const router = express.Router();
   
  router.route("/").get(CGetAllBlogs).post(CCreateBlog);
  router.route("/:id").get(CGetBlogById).put(CUpdateBlog).delete(CDeleteBlog);
   
 module.exports = router;