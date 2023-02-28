import { pool } from "../database/db.js";

export const createPost = async (req, res) => {
  await pool.query("INSERT INTO posts (body,author_id) VALUES ($1,$2)", [
    req.body.post,
    req.user.id,
  ]);
  return res.status(200).send();
};

export const getAllPosts = async (req, res) => {
  const { cursor } = req.query;
  const posts = await pool.query(
    "SELECT u.username, u.img, p.body  FROM users u INNER JOIN posts p ON u.id = p.author_id ORDER BY p.id DESC LIMIT 5 OFFSET $1",
    [cursor]
  );

  res.send({cursor:cursor * 1 + 5, posts:posts.rows})
};


export const getUserPosts = async (req, res) => {
  const { cursor } = req.query;
  const posts = await pool.query(
    "SELECT u.username, u.img, p.body  FROM users u INNER JOIN posts p ON u.id = p.author_id WHERE p.author_id = $1 ORDER BY p.id DESC LIMIT 5 OFFSET $2",
    [req.user.id,cursor]
  );

  res.send({cursor:cursor * 1 + 5, posts:posts.rows})
};