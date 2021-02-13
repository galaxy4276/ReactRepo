const friends = [
  {name: '쯔위', age: 15},
  {name: '수지', age: 20},
  {name: '아이유', age: 25},
  {name: '손나은', age: 30},
];

const timelines = [
  {desc: '점심이 맛있었다.', likes: 0},
  {desc: '나는 멋지다.', likes: 10},
  {desc: '호텔에 놀러 갔다.', likes: 20},
  {desc: '비싼 핸드폰을 샀다.', likes: 30},
];

const makeDateGenerator = (items) => {
  let idx = 0;
  return () => {
    const item = items[idx % items.length];
    idx++;
    return { ...item, id: idx };
  };
};

export const getNextFriend = makeDateGenerator(friends);
export const getNextTimeline = makeDateGenerator(timelines);
