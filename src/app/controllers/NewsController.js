class NewsController{
    // GET /new
    index(req, res){
        res.render('new');
    }
    // GET /new:slug
    detail(req, res){
        res.send('detail');
    }
} 

module.exports = new NewsController;