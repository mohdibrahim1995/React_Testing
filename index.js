const getFullName=(fname,lanme)=>{
    return `${fname} ${lanme}`
}

const actualFullName= getFullName('Mohd', 'Ibrahim')

const expectedFUllName=getFullName('Mohd','Affan')

if(actualFullName!=expectedFUllName){
    throw Error(`${actualFullName} is not Equal to ${expectedFUllName}`)
}
if(actualFullName==expectedFUllName){
    throw Error(`${actualFullName} is Equal to ${expectedFUllName}`)
}