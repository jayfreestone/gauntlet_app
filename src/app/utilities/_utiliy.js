export default {
  date: function(timestamp) {
    const d = new Date(timestamp.replace(' ', 'T'));
    return `${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()}`;
  },
};
