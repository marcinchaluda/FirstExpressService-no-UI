const express = require('express');
const News = require('../models/news')
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
    const search = req.query.search || '';

    const findNews = News
        .find({title: new RegExp(search.trim(), 'i')})
        .sort({created: -1});

    findNews.exec((err, data) => {
        console.log(data)
        res.render('news', { title: 'News', data, search });
    });
});

module.exports = router;
