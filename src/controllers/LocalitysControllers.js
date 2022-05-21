import localitys from "../models/LocalitysModels.js";


class LocalitysController {
    static getLocalitys = (req, res) => {
        localitys.find((e, localitys) => {
          if (e) {
            res.status(500).send({ message: `${e.message} - Fail search` });
          } else {
            res.status(200).json(localitys);
          }
        });
      };

      static postLocalitys = (req, res) => {
        const registerLocality = new localitys(req.body)
      registerLocality.save(registerLocality, (e) => {
        if (e) {
          res.status(500).send({ message: `${e.message} - Fail to post` });
        } else {
          res.status(200).json(registerLocality);
        }
      });
       
    };

  }

    export default LocalitysController;