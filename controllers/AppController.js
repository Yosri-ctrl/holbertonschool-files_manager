import RedisClient from '../utils/redis';
import DBClient from '../utils/db';

class AppController {
  static getStatus(req, res) {
    const status = {
      redis: RedisClient.isAlive(),
      db: DBClient.isAlive()
    };
    return res.status(200).send(status);
  }

  static getStats(req, res) {
    const stats = {
      users: DBClient.nbUsers(),
      files: DBClient.nbFiles()
    };
    return res.status(200).send(stats);
  }
}

module.exports = AppController;
