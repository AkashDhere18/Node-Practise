const emp = [
    {
        id: 1,
        name: "Rahul Sharma",
        email: "rahul.sharma@gmail.com",
        address: "Pune, Maharashtra",
        contactNumber: "9876543210",
        dateOfBirth: "1998-05-14",
        joiningDate: "2023-06-10",
        department: "IT"
    },
    {
        id: 2,
        name: "Sneha Patil",
        email: "sneha.patil@gmail.com",
        address: "Mumbai, Maharashtra",
        contactNumber: "9123456780",
        dateOfBirth: "1999-09-21",
        joiningDate: "2022-11-15",
        department: "HR"
    },
    {
        id: 3,
        name: "Amit Verma",
        email: "amit.verma@gmail.com",
        address: "Nagpur, Maharashtra",
        contactNumber: "9988776655",
        dateOfBirth: "1997-12-03",
        joiningDate: "2024-01-20",
        department: "Finance"
    },
    {
        id: 4,
        name: "Sagar Patil",
        email: "sagar.patil@gmail.com",
        address: "Sangli, Maharashtra",
        contactNumber: "9345678123",
        dateOfBirth: "1996-03-19",
        joiningDate: "2023-05-14",
        department: "Operations"
    },
    {
        id: 5,
        name: "Kavya Nair",
        email: "kavya.nair@gmail.com",
        address: "Navi Mumbai, Maharashtra",
        contactNumber: "9876541203",
        dateOfBirth: "2000-08-27",
        joiningDate: "2022-10-30",
        department: "Design"
    },
    {
        id: 6,
        name: "Neha Joshi",
        email: "neha.joshi@gmail.com",
        address: "Kolhapur, Maharashtra",
        contactNumber: "9871203456",
        dateOfBirth: "1995-11-08",
        joiningDate: "2022-04-18",
        department: "HR"
    },
    {
        id: 7,
        name: "Rohit Deshmukh",
        email: "rohit.deshmukh@gmail.com",
        address: "Satara, Maharashtra",
        contactNumber: "9765432109",
        dateOfBirth: "1998-02-25",
        joiningDate: "2023-09-10",
        department: "IT"
    },
    {
        id: 8,
        name: "Pooja Shah",
        email: "pooja.shah@gmail.com",
        address: "Solapur, Maharashtra",
        contactNumber: "9988123456",
        dateOfBirth: "1997-06-14",
        joiningDate: "2021-12-01",
        department: "Finance"
    },
    {
        id: 9,
        name: "Vikas Yadav",
        email: "vikas.yadav@gmail.com",
        address: "Thane, Maharashtra",
        contactNumber: "9090909090",
        dateOfBirth: "1994-09-30",
        joiningDate: "2020-07-22",
        department: "Marketing"
    },
    {
        id: 10,
        name: "Anjali More",
        email: "anjali.more@gmail.com",
        address: "Pimpri-Chinchwad, Maharashtra",
        contactNumber: "9123987654",
        dateOfBirth: "1999-01-12",
        joiningDate: "2024-02-05",
        department: "Sales"
    }
];

const getAllEmp = (req, res) => {
    try {

        res.status(200).send({ employees: emp })
    } catch (error) {
        res.status(500).send({ msg: "Server error" })
    }
}


const createEmp = (req, res) => {
    try {
        const { name, email, address, contactNumber, dateOfBirth, joiningDate, department } = req.body

        const newEmp = {
            id: Date.now(),
            name: name,
            email: email,
            address: address,
            contactNumber: contactNumber,
            dateOfBirth: dateOfBirth,
            joiningDate: joiningDate,
            department: department
        }

        emp.push(newEmp)

        res.status(200).send({ msg: "Emp added successfully" })
    } catch (error) {
        res.status(500).send({ msg: "Server error" })
    }
}

const deleteEmp = (req, res) => {
    const { ID } = req.params;

    try {
        const index = emp.findIndex((e) => e.id == ID)
        if (index == -1) {
            res.status(400).send({ msg: "Employee not found" })
        }
        emp.splice(index, 1)
        res.status(200).send({ msg: "Employee deleted succesfully" })
    } catch (error) {
        res.status(500).send({ msg: 'Server error' })
    }
}

const updateEmp = (req, res) => {
    const { ID } = req.params;

    try {
        const { address } = req.body

        const index = emp.findIndex((e) => e.id == ID)
        if (index == -1) {
            res.status(400).send({ msg: "Employee not found" })
        }
        emp[index].address = address;

        res.status(200).send({ msg: "Employee updated succesfully" })
    } catch (error) {
        res.status(500).send({ msg: "Server error" })
    }
}

const empInfo = (req, res) => {
    const { ID } = req.params;

    try {
        const index = emp.findIndex((e) => e.id == ID)
        if (index == -1) {
            res.status(400).send({ msg: "Employee not found" })
        }
        res.status(200).send({ employee: emp[index] })
    } catch (error) {
        res.status(500).send({ msg: "Server error" })
    }
}

const deptWiseEmployee = (req, res) => {
    const dept = req.query.department

    try {
        const deptEpm = emp.filter((e) =>
            e.department.toLowerCase() === dept.toLowerCase()
        )

        res.status(200).send({ employee: deptEpm })

    } catch (error) {
        res.status(500).send({ msg: "Server error" })
    }
}

const monthWiseEmployee = (req, res) => {
    const month = req.query.month

    try {
        const monthEmp = emp.filter((e) => {
            const empMonth = new Date(e.joiningDate).getMonth() + 1;

            return empMonth == month;
        })

        console.log(monthEmp)

        if (monthEmp.length === 0) {
            res.status(400).send({ msg: "Employee not found joining in this month" })
        }

        res.status(200).send({ monthEmp: monthEmp })


    } catch (error) {
        res.status(500).send({ msg: "Server error" })
    }
}

const birthdayMonthEmp = ((req, res) => {
    const currentMonth = new Date().getMonth() + 1

    try {

        const result = emp.filter((e) => {
            const birthdayMonth = new Date(e.dateOfBirth).getMonth() + 1

            return birthdayMonth === currentMonth
        })

        if (result.length === 0) {
            res.status(400).send({ msg: "Not employee has birthday in this month" })
        }

        res.status(200).send({ result: result })

    } catch (error) {
        res.status(500).send({ msg: "Server error" })
    }
})

const byName = (req, res) => {
    const name = req.query.name

    try {
        const epmName = emp.filter((e) =>
            e.name.toLowerCase() === name.toLowerCase()
        )

        res.status(200).send({ employee: epmName })

    } catch (error) {
        res.status(500).send({ msg: "Server error" })
    }
}

const byCity = (req, res) => {
    const city = req.query.city

    try {
        const epmCity= emp.filter((e) =>
            e.address.toLowerCase() === city.toLowerCase()
        )

        res.status(200).send({ employee: epmCity })

    } catch (error) {
        res.status(500).send({ msg: "Server error" })
    }
}

const sortByJoiningDate = ((req,res) => {
    try {
        const sortedEmp = emp.sort((a,b)=> new Date(a.joiningDate) - new Date(b.joiningDate))

        res.status(200).send({employee:sortedEmp})

    } catch (error) {
        res.status(500).send({msg:"Server error"})
    }
})

const sortByName = ((req,res) => {
    try {
        const sortedEmp = emp.sort((a,b) =>  a.name.localeCompare(b.name))

        res.status(200).send({emplooyes:sortedEmp})

    } catch (error) {
        res.status(500).send({msg:"Server error"})
    }
})

const empcount = ((req,res) => {
    try {
        const empCount = emp.length
        res.status(200).send({employeeCount : empCount})
    } catch (error) {
        res.status(500).send({msg:"Server error"})
    }
})

const oldestEmp = ((req,res) => {
    try {
        const oldestEmp = emp.reduce((oldest,current)=>{
            return new Date(current.joiningDate) < new Date(oldest.joiningDate) ? current : oldest;
        })

        res.status(200).send({oldestEmp : oldestEmp})
        
    } catch (error) {
        res.status(500).send({msg:"Server error"})
    }
})

const newestEmp = ((req,res) => {
    try {
        const newestEmp = emp.reduce((newest,current)=>{
            return new Date(current.joiningDate) > new Date(newest.joiningDate) ? current : newest;
        })

        res.status(200).send({newestEmp : newestEmp})
        
    } catch (error) {
        res.status(500).send({msg:"Server error"})
    }
})

const betnTwoJoiningDate = ((req,res)=>{

    try {

        const deptEmps = emp.reduce((acc,currEmp)=>{
            if(acc[currEmp.department]){
                acc[currEmp.department] ++;
            }
            else{
                acc[currEmp.department] = 1;
            }

            return acc
        },{})
        
        res.status(200).send({deptEmpCount:deptEmps} )

    } catch (error) {
        res.status(500).send("Server error")
    }
})

const filterBetnJoiningDates = ((req,res)=>{
    const start = req.query.start
    const end = req.query.end

    try {
        const emps = emp.filter((e)=>{
            return e.joiningDate >= start && e.joiningDate <= end;
        });
        
        res.status(200).send({emps:emps})

    } catch (error) {
        res.status(500).send("Server error")
    }
}) 

const updateEmpDetails = ((req,res)=>{
    const {ID} = req.params
    try {
        const {address,email,contactNumber,department} = req.body

        const index = emp.findIndex((e)=> e.id == ID )
        if(index == -1){
            return res.status(400).send("Employee not found")
        }


        if(address != undefined) emp[index].address = address;
        if(email) emp[index].email = email;
        if(contactNumber) emp[index].contactNumber = contactNumber;
        if(department) emp[index].department = department;

        res.status(200).send({msg:"Employee details updated succesfully",
            employee : emp[index]
        })
         
    } catch (error) {
        res.status(500).send("Server error")
    }
})

module.exports = {
    getAllEmp,
    createEmp,
    deleteEmp,
    updateEmp,
    empInfo,
    deptWiseEmployee,
    monthWiseEmployee,
    birthdayMonthEmp,
    byName,
    byCity,
    sortByJoiningDate,
    sortByName,
    empcount,
    oldestEmp,
    newestEmp,
    betnTwoJoiningDate,
    filterBetnJoiningDates,
    updateEmpDetails
}