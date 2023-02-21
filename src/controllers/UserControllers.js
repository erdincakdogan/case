const UserService = require("../services/UserService");
const uuid = require("uuid");
const hs = require("http-status");
class UserController {
  async getProfile(req, res) {
    setTimeout(async () => {
      UserService.list()
        .then((response) => {
          res.status(hs.OK).send(response);
          console.log(response);
        })
        .catch((e) => {
          if (req.timedout === true) {
            console.log(e);
          }
        });
    }, 1000);
  }

  async create(req, res, next) {
    await UserService.insert(req.body)
      .then((create) => {
        res.status(hs.OK).send(create);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  async login(req, res, next) {
    const { username } = req.body;
    await UserService.findOne({ username })
      .then((user) => {
        res.status(hs.OK).send(user);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

module.exports = new UserController();
