const { createBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog } = require('../services/blogService');
const BlogModel = require ('../models/Blog');
const { json } = require('express');
 
const CGetAllBlogs = async (req, res) => {

    try {
        let datos = [];
        const blogs = await getAllBlogs();

        const pipeline = [
            { $match: { title: "blog6" } },
            { $group: { _id: "$stars", count: { $sum: 1 } } }
        ];
        const aggCursor = BlogModel.aggregate(pipeline);
        for await (const doc of aggCursor) {
            console.log(doc);
            datos.push(doc);
        }
        
        // res.json({ data: blogs, status: "success" });
        res.json({ data: blogs, datos, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
};
 
const CCreateBlog = async (req, res) => {

    try {

        const blog = await createBlog(req.body);

        res.json({ data: blog, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
};
 
const CGetBlogById = async (req, res) => {

    try {

        const blog = await getBlogById(req.params.id);

        res.json({ data: blog, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
};
 
const CUpdateBlog = async (req, res) => {

    try {

        const blog = await updateBlog(req.params.id, req.body);

        console.log('*****', req.params);

        res.json({ data: blog, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });

    }
};
 
const CDeleteBlog = async (req, res) => {

    try {

        const blog = await deleteBlog(req.params.id);

        res.json({ data: blog, status: "success" });

    } catch (err) {

        res.status(500).json({ error: err.message });
        
    }
};

module.exports = {
    CGetAllBlogs,
    CCreateBlog,
    CGetBlogById,
    CUpdateBlog,
    CDeleteBlog,
}
