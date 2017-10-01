const imageDataFilter = (lotsOfData) => {
  console.log(lotsOfData);
  const imageArr = [];
  for (let i = 0; i < lotsOfData.length; i++) {
    if (lotsOfData[i].gifv) {
      if (!lotsOfData[i].gifv.includes('.gifv')) {
        imageArr.push({
          id: lotsOfData[i].id,
          image: lotsOfData[i].gifv,
          title: lotsOfData[i].title,
          score: lotsOfData[i].score,
          tags: lotsOfData[i].tags.map(data => data.display_name),
          datetime: Date(lotsOfData[i].datetime).slice(0, 15),
        });
      }
    } else if (lotsOfData[i].images) {
      for (let j = 0; j < lotsOfData[i].images.length; j++) {
        if (!lotsOfData[i].images[j].link.includes('.mp4')) {
          imageArr.push({
            id: lotsOfData[i].images[j].id,
            image: lotsOfData[i].images[j].link,
            title: lotsOfData[i].title,
            score: lotsOfData[i].score,
            tags: lotsOfData[i].tags.map(data => data.display_name),
            datetime: Date(lotsOfData[i].images[j].datetime).slice(0, 15),
          });
        }
      }
    }
  }
  return imageArr;
};

export default imageDataFilter;
