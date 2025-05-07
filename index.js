const getFullName=(fname,lanme)=>{
    return `${fname} ${lanme}`
}

const actualFullName= getFullName('Mohd', 'Ibrahim')

const expectedFUllName=getFullName('Mohd','Affans')

if(actualFullName!=expectedFUllName){
    throw Error(`${actualFullName} is not Equal to the ${expectedFUllName}`)
}
if(actualFullName==expectedFUllName){
    throw Error(`${actualFullName} is Equal to ${expectedFUllName}`)
}