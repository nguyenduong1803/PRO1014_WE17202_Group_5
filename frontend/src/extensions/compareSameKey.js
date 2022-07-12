export const compareSameKey = (input) => {
  const cates = [... new Set(input.map(val => val.cate))]
  const test = cates.map(val => {
    return {
      category: val,
      job: input.filter(b => b.cate === val).map(c => c.job),
      industry: [... new Set(input.filter(a => a.cate === val).map(c => c.industry))]
    }
  })
  return test;
};
