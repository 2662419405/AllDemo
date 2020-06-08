export default ({app}) => {
    app.router.beforeEach((to,from,next)=>{
        console.log('我要去：'+to.path);
        
        next();
    })
  };
  
  