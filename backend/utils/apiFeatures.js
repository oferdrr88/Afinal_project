class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }
    search() {
        const Keyword = this.queryStr.Keyword
            ? {
                  name: {
                      $regex: this.queryStr.Keyword,
                      $options: 'i',
                  },
              }
            : {};
        console.log(Keyword);
        this.query = this.query.find({ ...Keyword });
        return this;
    }
    filter() {
        const queryCopy = { ...this.queryStr };
        console.log(queryCopy);
        //     // Renove fields the query
        const removeFields = ['keyword', 'limit', 'page'];
    }
}

module.exports = APIFeatures;
