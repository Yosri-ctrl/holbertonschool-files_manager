import sha1 from 'sha1';
import DBClient from '../utils/db';
const Bull = require('bull');


class UsersController {
  static async postNew(request, response) {
    const user = new Bull('userQueue');

    const email = request.body.email;
    if (!email) return response.status(400).send({ error: 'Missing email' });

    const password = request.body.password;
    if (!password) return response.status(400).send({ error: 'Missing password' });

    const pass_old = await DBClient.db.collection('users').findOne({ email: email });
    if (pass_old) return response.status(400).send({ error: 'Already exist' });

    const pass_hash = sha1(password);
    const result = await DBClient.db.collection('users').insertOne({ email: email, password: pass_hash });

    user.add({ userId: result.insertedId, });
    return response.status(201).send({ id: result.insertedId, email: email });
  }
}

module.exports = UsersController;
