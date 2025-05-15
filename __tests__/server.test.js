// __tests__/server.test.js
const request = require('supertest');
const express = require('express');
const app = require('../server');  // Assuming your server.js is in the same directory

describe('GET /', () => {
  it('should return Hello, DevOps!', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello, DevOps!');
  });
});
