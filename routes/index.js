import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';

const express = require('express');

const router = (app) => {
  const path = express.Router();
  app.use(express.json());
  app.use('/', path);

  path.get('/status', ((req, res) => AppController.getStatus(req, res)));
  path.get('/stats', ((req, res) => AppController.getStats(req, res)));
  path.post('/users', ((req, res) => UsersController.postNew(req, res)));
  paths.get('/connect', ((req, res) => AuthController.getConnect(req, res)));
  paths.get('/disconnect', ((req, res) => AuthController.getDisconnect(req, res)));
  paths.get('/users/me', ((req, res) => UsersController.getMe(req, res)));
};

export default router;
