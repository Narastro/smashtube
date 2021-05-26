import express from "express";

const app = express();

app.get("/", (req, res) => res.send("<h1>hello! welcome!</h1>"));

app.get("/about", (req, res) => res.send("<h1>hello! welcome!</h1>"));

app.get("/contact", (req, res) => res.send("<h1>hello! welcome!</h1>"));

app.get("/login", (req, res) => res.send("<h1>hello! welcome!</h1>"));
