
const getFullName=(fname,lanme,age)=>{
    return `${fname} ${lanme} ${age}`;
}

const actualFullName= getFullName('Mohd', 'Ibrahim',22)

const expectedFUllName=getFullName('Mohd','Affan')

if(actualFullName!=expectedFUllName){
    throw Error(`${actualFullName} is not Equal to the ${expectedFUllName}`)
}
if(actualFullName==expectedFUllName){
    throw Error(`${actualFullName} is Equal to ${expectedFUllName}`)
}