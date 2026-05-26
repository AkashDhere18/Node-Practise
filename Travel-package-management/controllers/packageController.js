const packages = [
    {
        id: 1,
        packageName: "Goa Vacation",
        location: "Goa",
        days: 5,
        price: 15000
    },
    {
        id: 2,
        packageName: "Manali Adventure",
        location: "Manali",
        days: 7,
        price: 22000
    },
    {
        id: 3,
        packageName: "Kerala Backwaters",
        location: "Kerala",
        days: 6,
        price: 18000
    },
    {
        id: 4,
        packageName: "Jaipur Royal Tour",
        location: "Jaipur",
        days: 4,
        price: 12000
    },
    {
        id: 5,
        packageName: "Kashmir Paradise",
        location: "Kashmir",
        days: 8,
        price: 30000
    }
]

const createPkg = (req,res)=>{

    try {
        const {packageName,location,days,price} = req.body

        const newPkg = {
            id:Date.now(),
            packageName:packageName,
            location:location,
            days:days,
            price:price
        }

        packages.push(newPkg)

        res.status(200).send({msg:"package added succesfully"})
    } catch (error) {
        res.status(500).send("Server Error")
    }
}

const getAllPackages = (req,res)=>{
    try {
        res.status(200).send({packages:packages})
    } catch (error) {
        res.status(500).send("Server Error")
    }
}

const getById = (req,res)=>{
    const {ID} = req.params

    try {
        const index = packages.findIndex((e)=> e.id == ID)

        if(index == -1){
           return res.status(400).send({msg : "Package not found"})
        }

        res.status(200).send({package:packages[index]})
        
    } catch (error) {
        res.status(500).send("Server Error")        
    }
}

const updatePkg = (req,res) => {
    const {ID} = req.params

    try {
        const {price} = req.body

        const index = packages.findIndex((e)=> e.id == ID)

        if(index == -1){
            return res.status(400).send({msg : "Package not found"})
        }

        packages[index].price = price;

        res.status(200).send({msg:"Package updated succesfully"})

        
    } catch (error) {
        res.status(500).send("Server Error")
    }
}

const deletePkg = (req,res) => {
    const {ID} = req.params
    try {
        const index = packages.findIndex((e)=> e.id == ID)

        if(index == -1){
            return res.status(400).send({msg:"Package not found"})
        }
        packages.splice(index, 1)
        res.status(200).send({msg:"Package deleted succesfully"})
    } catch (error) {
        res.status(500).send("Server Error")
    }
}

const searchByLocation = (req,res) => {
    try {
        const location = body.query.location

        const byLocation = package.filter((e)=>{
            e.location.toLowerCase() === location.toLowerCase()
        })

        res.status(200).send({pakage:byLocation})


    } catch (error) {
        res.status(500).send("Server Error")
    }
}



module.exports = {createPkg,getAllPackages,getById,updatePkg,deletePkg,searchByLocation}