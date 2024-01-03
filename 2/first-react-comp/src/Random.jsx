function Random(){
    let value =  Math.random()*100;

return <h1 style={{'background-color':'gray','color':'white'}}>
    My running value  is : {value};
</h1>
}

export default Random;