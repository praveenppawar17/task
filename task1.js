const getUsers = () => {
    return new Promise((resolve,reject) => {
        return setTimeout(() => {
            resolve([{ name: 'jon' }, { name: 'andrey' }, { name: 'tania' }])
        }, 600)
    })
}

const getNameFromUser = (user) => {
    return new Promise((resolve, reject) => {
        return setTimeout(()=>{
            resolve(user.name)
        },500)
    })
}

const capitalizeNames = (name) => {
    return new Promise((resolve, reject) => {
        return setTimeout(()=>{
            resolve(name.toUpperCase())
        },200)
    })
}

const runAsyncFunctions = async() => {
    const users = await getUsers()
    console.log("user... ", users)
    Promise.all(
        users.map(async (user) => {
            const userId = await getNameFromUser(user)

            console.log(userId)

      const capitalizedId = await capitalizeNames(userId)
      console.log(capitalizedId)
        })
    )


}


runAsyncFunctions()
