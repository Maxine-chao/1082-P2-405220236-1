const EiserProduct = require('../models/eiserModel');

exports.getFeatured = (req, res) => {
  try {
    EiserProduct.fetchFeatured().then(([rows]) => {
      console.log(JSON.stringify(rows));
      // res.send(JSON.stringify(rows));
      res.render('featuredProd', {
        data: rows,
        title: 'Featured Product',
      });
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getNew = (req, res) => {
  try {
    EiserProduct.fetchNew().then(([rows]) => {
      console.log(JSON.stringify(rows));
      // res.send(JSON.stringify(rows));
      res.render('newProd', {
        data: rows,
        title: 'New Product',
      });
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getCombined = async (req, res) => {
  let featuredProd;
  let newProd;

  try {
    const get = await EiserProduct.fetchFeatured().then(([rows]) => {
      featuredProd = rows;
    });

    const getTeam = await EiserProduct.fetchNew().then(([rows]) => {
      newProd = rows;
    });

    // console.log(JSON.stringify(data));
    //res.send(JSON.stringify(data));

    res.render('combinedProd', {
      ftitle: 'Featured Products',
      fdata: featuredProd,
      ntitle: 'New Products',
      ndata: newProd,
    });
  } catch (err) {
    console.log(err);
  }
};
