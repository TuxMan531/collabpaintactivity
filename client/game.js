const size = Math.min(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)) * 0.75;
const canvas = document.createElement("canvas")
canvas.width = size;
canvas.height = size;
document.body.append(canvas);
const ctx = canvas.getContext("2d");

ctx.fillStyle="green"
ctx.fillRect(0, 0, 100, 100)