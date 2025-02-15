# Node.js Server Unresponsiveness

This repository demonstrates a common issue in Node.js where a long-running synchronous operation in the request handler can cause the server to become unresponsive.  The `server.js` file contains the buggy code, while `server-fixed.js` provides the solution.

## Problem

The original `server.js` uses a `while` loop to simulate a long-running task. This blocks the event loop, preventing Node.js from processing other requests.  As a result, the server appears to hang or become unresponsive.

## Solution

The `server-fixed.js` file demonstrates how to solve this problem by using asynchronous operations or offloading the long-running task to a worker thread or a separate process. This allows the event loop to remain responsive and handle other requests concurrently.