const NodeCache = require( "node-cache" );
const myCache = new NodeCache();

//MOCK DATA FOR START   
    const obj = { title: "Special Title",ingredients: "I am ingredients one",steps:"Steps OOOK" };
    const obj2 = { title: "other special",ingredients: "1ingredients  23",steps:"Steps 2" };
    const obj3 = { title: "other special 2", ingredients: "ingredients",steps:"steps 3" };

const success = myCache.mset([
	{key: "1", val: obj},
	{key: "2", val: obj2},
	{key: "3", val: obj3},
])
module.exports = myCache;