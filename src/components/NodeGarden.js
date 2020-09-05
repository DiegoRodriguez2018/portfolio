import React, { useRef, useEffect } from "react";

const nodeGarden = (canvas) => {
  // Node Garden:
  let ctx,
    circ,
    nodes,
    SENSITIVITY,
    SIBLINGS_LIMIT,
    DENSITY,
    NODES_QTY,
    ANCHOR_LENGTH;

  // how close next node must be to activate connection (in px)
  // shorter distance == better connection (line width)
  SENSITIVITY = 80;
  // note that siblings limit is not 'accurate' as the node can actually have more connections than this value that's because the node accepts sibling nodes with no regard to their current connections this is acceptable because potential fix would not result in significant visual difference
  // more siblings == bigger node
  SIBLINGS_LIMIT = 10;
  // default node margin
  DENSITY = 50;
  // total number of nodes used (incremented after creation)
  NODES_QTY = 0;
  // avoid nodes spreading
  ANCHOR_LENGTH = 20;

  circ = 2 * Math.PI;
  nodes = [];

  resizeWindow();

  ctx = canvas.getContext("2d");
  if (!ctx) {
    alert("Sorry your browser does not support html5 canvas.");
  }

  function Node(x, y) {
    this.anchorX = x;
    this.anchorY = y;
    this.x = Math.random() * (x - (x - ANCHOR_LENGTH)) + (x - ANCHOR_LENGTH);
    this.y = Math.random() * (y - (y - ANCHOR_LENGTH)) + (y - ANCHOR_LENGTH);
    this.vx = Math.random() * 2 - 1;
    this.vy = Math.random() * 2 - 1;
    this.energy = Math.random() * 100;
    this.radius = Math.random();
    this.siblings = [];
    this.brightness = 0.5;
  }

  Node.prototype.drawNode = function () {
    var color = "rgba(198, 216, 232, " + this.brightness + ")";
    ctx.beginPath();
    ctx.arc(
      this.x,
      this.y,
      2 * this.radius + (2 * this.siblings.length) / SIBLINGS_LIMIT,
      0,
      circ
    );
    ctx.fillStyle = color;
    ctx.fill();
  };

  Node.prototype.drawConnections = function () {
    for (var i = 0; i < this.siblings.length; i++) {
      var color = "rgba(184, 214, 229, " + this.brightness + ")";
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(this.siblings[i].x, this.siblings[i].y);
      ctx.lineWidth = 1 - calcDistance(this, this.siblings[i]) / SENSITIVITY;
      ctx.strokeStyle = color;
      ctx.stroke();
    }
  };

  Node.prototype.moveNode = function () {
    this.energy -= 1;
    if (this.energy < 1) {
      this.energy = Math.random() * 100;
      if (this.x - this.anchorX < -ANCHOR_LENGTH) {
        this.vx = Math.random() * 1;
      } else if (this.x - this.anchorX > ANCHOR_LENGTH) {
        this.vx = Math.random() * -1;
      } else {
        this.vx = Math.random() * 2 - 1;
      }
      if (this.y - this.anchorY < -ANCHOR_LENGTH) {
        this.vy = Math.random() * 1;
      } else if (this.y - this.anchorY > ANCHOR_LENGTH) {
        this.vy = Math.random() * -1;
      } else {
        this.vy = Math.random() * 2 - 1;
      }
    }
    this.x += (this.vx * this.energy) / 100;
    this.y += (this.vy * this.energy) / 100;
  };

  const calcDistance = (node1, node2) =>
    Math.sqrt(Math.pow(node1.x - node2.x, 2) + Math.pow(node1.y - node2.y, 2));

  function findSiblings() {
    var node1, node2, distance;
    for (var i = 0; i < NODES_QTY; i++) {
      node1 = nodes[i];
      node1.siblings = [];
      for (var j = 0; j < NODES_QTY; j++) {
        node2 = nodes[j];
        if (node1 !== node2) {
          distance = calcDistance(node1, node2);
          if (distance < SENSITIVITY) {
            if (node1.siblings.length < SIBLINGS_LIMIT) {
              node1.siblings.push(node2);
            } else {
              var node_sibling_distance = 0;
              var max_distance = 0;
              var s;
              for (var k = 0; k < SIBLINGS_LIMIT; k++) {
                node_sibling_distance = calcDistance(node1, node1.siblings[k]);
                if (node_sibling_distance > max_distance) {
                  max_distance = node_sibling_distance;
                  s = k;
                }
              }
              if (distance < max_distance) {
                node1.siblings.splice(s, 1);
                node1.siblings.push(node2);
              }
            }
          }
        }
      }
    }
  }

  function redrawScene() {
    resizeWindow();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    findSiblings();
    nodes.forEach((node) => {
      if (node.brightness) {
        node.drawNode();
        node.drawConnections();
      }
      node.moveNode();
    });
    requestAnimationFrame(redrawScene);
  }

  function resizeWindow() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function init() {
    document.addEventListener("resize", resizeWindow, false);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    nodes = [];
    for (var i = DENSITY; i < canvas.width; i += DENSITY) {
      for (var j = DENSITY; j < canvas.height; j += DENSITY) {
        nodes.push(new Node(i, j));
        NODES_QTY++;
      }
    }
  }

  init();
  redrawScene();
};

export default () => {
  useEffect(() => {
    nodeGarden(canvasRef.current);
  }, []);

  const canvasRef = useRef("canvas");

  return <canvas ref={canvasRef} />;
};
