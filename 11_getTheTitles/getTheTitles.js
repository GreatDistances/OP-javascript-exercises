const getTheTitles = function(arrOfObj) {
    let arr = [...arrOfObj];
    const titles = arr.map((item) => {
        return item.title;
    })
    return titles;
};

const books1 = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]

console.log(getTheTitles(books1));

// Do not edit below this line
module.exports = getTheTitles;
