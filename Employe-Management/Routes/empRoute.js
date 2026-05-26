const express = require('express')

const empController = require('../controllers/empController')

const router = express.Router()


router.get('/getAllEmp', empController.getAllEmp)

router.post('/createEmp', empController.createEmp )

router.delete('/deleteEmp/:ID',empController.deleteEmp)

router.patch('/updateEmp/:ID',empController.updateEmp)

router.get('/empInfo/:ID',empController.empInfo)

router.get('/department/search', empController.deptWiseEmployee)

router.get('/joining/month', empController.monthWiseEmployee)

router.get('/birthday/current-month', empController.birthdayMonthEmp)

router.get('/byName/search', empController.byName)

router.get('/byCity/search', empController.byCity)

router.get('/sort/joining-date', empController.sortByJoiningDate)

router.get('/sort/name' , empController.sortByName)

router.get('/emp-count', empController.empcount)

router.get('/oldest-emp', empController.oldestEmp)

router.get('/newest-emp', empController.newestEmp)


// http://localhost/emp/createEmp
// http://localhost/emp/deleteEmp
// http://localhost/emp/empInfo
// http://localhost/emp/department/search






module.exports = router