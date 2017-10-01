const imageDataFilter = (lotsOfData) => {
  const imageArr = [];
  for (let i = 0; i < lotsOfData.length; i++) {
    if (lotsOfData[i].gifv) {
      imageArr.push({
        image: lotsOfData[i].gifv,
        title: lotsOfData[i].title,
        score: lotsOfData[i].score,
        tags: lotsOfData[i].tags.map(data => data.display_name),
        datetime: Date(lotsOfData[i].datetime).slice(0, 15),
      });
    } else {
      for (let j = 0; j < lotsOfData[i].images.length; j++) {
        imageArr.push({
          image: lotsOfData[i].images[j].link,
          title: lotsOfData[i].title,
          score: lotsOfData[i].score,
          tags: lotsOfData[i].tags.map(data => data.display_name),
          datetime: Date(lotsOfData[i].images[j].datetime).slice(0, 15),
        });
      }
    }
  }
  return imageArr;
};

export default imageDataFilter;
