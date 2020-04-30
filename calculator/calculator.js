module.exports = {
  add,
};

function add(a=0,b=0) {
  // const val = Array.from(args).reduce((sum, value) => {
  //     return sum + value;
  // }, 0)
  // return val;
  // return Array.from(arguments).reduce((sum,value)=>{
  //   return sum + value;f
  // });
  if(typeof a === 'number' && typeof b === 'number'){
      return a + b;
  }else{
    throw new Error("Both arguments need to be numbers");
  }
  
  
}
