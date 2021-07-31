import { rest } from "msw";
import { posts1, posts2, posts3 } from "./data";
import fakeimage from "./images/fakeimage.jpg";
import regeneratorRuntime from "regenerator-runtime";

const baseUrl = "http://localhost:8080/json_api";
const authUrl = `${baseUrl}/auth`;
const postUrl = `${baseUrl}/post`;

export const handlers = [
  rest.get(`${authUrl}`, (req, res, ctx) => {
    return res(ctx.json({ auth: false, user: "" }));
  }),

  rest.post(`${authUrl}/login`, (req, res, ctx) => {
    return res(ctx.json({ auth: true, user: "User" }));
  }),

  rest.post(`${authUrl}/password_forgot`, (req, res, ctx) => {
    return res(ctx.json({ auth: true, user: "User" }));
  }),

  rest.post(`${authUrl}/register`, (req, res, ctx) => {
    return res(ctx.json({ auth: true, user: "User" }));
  }),

  rest.get(`${postUrl}/allpost`, (req, res, ctx) => {
    if (req.url.searchParams.get("page") == 1) {
      return res(ctx.json(posts1));
    }
    if (req.url.searchParams.get("page") == 2) {
      return res(ctx.json(posts2));
    }
    if (req.url.searchParams.get("page") == 3) {
      return res(ctx.json(posts3));
    }
    return res(ctx.json([]));
  }),
  rest.get(`${postUrl}/mypost`, (req, res, ctx) => {
    if (req.url.searchParams.get("page") == 1) {
      return res(ctx.json(posts1));
    }
    if (req.url.searchParams.get("page") == 2) {
      return res(ctx.json(posts2));
    }
    if (req.url.searchParams.get("page") == 3) {
      return res(ctx.json(posts3));
    }
    return res(ctx.json([]));
  }),
  rest.post(`${postUrl}/create`, (req, res, ctx) => {
    return res(ctx.json({ postCreated: true, message: "post created" }));
  }),

  rest.get(`${authUrl}/logout`, (req, res, ctx) => {
    return res(ctx.json({ auth: false }));
  }),

  rest.post(`${postUrl}/delete`, (req, res, ctx) => {
    return res(ctx.json({ deleteStatus: true }));
  }),
  rest.put(`${postUrl}/update`, (req, res, ctx) => {
    return res(ctx.json({ updateStatus: true, message: "post updated" }));
  }),

  rest.get("http://localhost:8000/image/fakeimage.jpg", async (_, res, ctx) => {
    // Convert "base64" image to "ArrayBuffer".
    const imageBuffer = await fetch(fakeimage).then((res) => res.arrayBuffer());
    return res(
      ctx.set("Content-Length", imageBuffer.byteLength.toString()),
      ctx.set("Content-Type", "image/jpeg"),
      ctx.body(imageBuffer)
    );
  }),
];
